#!/usr/bin/env bash
set -Eeuo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd -- "$SCRIPT_DIR/.." && pwd)"
WEB_DIR="$REPO_ROOT/web"
LOCAL_DIST="$WEB_DIR/.vuepress/dist"
CHECK_DICTIONARY="$SCRIPT_DIR/check-glossary-artifact.mjs"

SSH_TARGET="${CISLUNSPACE_SSH_TARGET:-jump}"
REMOTE_ROOT="${CISLUNSPACE_REMOTE_ROOT:-/home/ubuntu/cislunarspace}"
REMOTE_DIST="$REMOTE_ROOT/web/.vuepress/dist"
SITE_ORIGIN="${CISLUNSPACE_SITE_ORIGIN:-https://cislunarspace.cn}"
RELEASE="$(date -u +%Y%m%dT%H%M%SZ)-$$"
STAGING_DIST="${REMOTE_DIST}.deploy-${RELEASE}"
BACKUP_DIST="${REMOTE_DIST}.bak-${RELEASE}"

BUILD=1
DRY_RUN=0
SWAPPED=0

usage() {
  cat <<'EOF'
用法：scripts/deploy.sh [--dry-run] [--no-build]

默认在本机构建站点，上传 dist，切换后校验公网内容。
  --dry-run   只检查环境与现有产物，不构建、不上传、不切换
  --no-build  复用现有 dist，仍执行上传、切换与公网校验
  -h, --help  显示帮助

环境变量：
  CISLUNSPACE_SSH_TARGET    SSH 目标，默认 jump
  CISLUNSPACE_REMOTE_ROOT   服务器仓库目录，默认 /home/ubuntu/cislunarspace
  CISLUNSPACE_SITE_ORIGIN   公网站点地址，默认 https://cislunarspace.cn
EOF
}

log() {
  printf '[deploy] %s\n' "$*"
}

fail() {
  printf '[deploy] 错误：%s\n' "$*" >&2
  exit 1
}

while (($# > 0)); do
  case "$1" in
    --dry-run) DRY_RUN=1 ;;
    --no-build) BUILD=0 ;;
    -h|--help)
      usage
      exit 0
      ;;
    *) fail "未知参数：$1" ;;
  esac
  shift
done

[[ "$REMOTE_ROOT" == /* && "$REMOTE_ROOT" != "/" ]] || fail 'REMOTE_ROOT 必须是非根目录的绝对路径'
[[ "$REMOTE_ROOT" != *[[:space:]]* ]] || fail 'REMOTE_ROOT 不能包含空白字符'
[[ "$SITE_ORIGIN" == http://* || "$SITE_ORIGIN" == https://* ]] || fail 'SITE_ORIGIN 必须是 HTTP 或 HTTPS 地址'

for command_name in ssh rsync curl node npm git; do
  command -v "$command_name" >/dev/null || fail "本机缺少命令：$command_name"
done

remote_preflight() {
  ssh -o BatchMode=yes "$SSH_TARGET" bash -s -- "$REMOTE_DIST" "$STAGING_DIST" "$BACKUP_DIST" <<'REMOTE'
set -Eeuo pipefail
dist=$1
staging=$2
backup=$3
[[ "$dist" == /* && "$dist" != "/" ]]
[[ "$staging" == "$dist".deploy-* ]]
[[ "$backup" == "$dist".bak-* ]]
command -v rsync >/dev/null
[[ -d "$dist" ]]
[[ ! -e "$staging" ]]
[[ ! -e "$backup" ]]
[[ -w "$(dirname -- "$dist")" ]]
REMOTE
}

validate_local_artifacts() {
  [[ -d "$LOCAL_DIST" ]] || fail "本地 dist 不存在：$LOCAL_DIST"
  node "$CHECK_DICTIONARY" "$LOCAL_DIST/glossary-dictionary.json"
  [[ -s "$LOCAL_DIST/resources-tools/glossary-api/index.html" ]] || fail 'dist 缺少词典接入指南页'
  grep -q '/resources-tools/glossary-api/' "$LOCAL_DIST/sitemap.xml" || fail 'sitemap 未收录词典接入指南页'
}

prepare_staging() {
  ssh -o BatchMode=yes "$SSH_TARGET" bash -s -- "$STAGING_DIST" <<'REMOTE'
set -Eeuo pipefail
staging=$1
[[ "$staging" == /*/.vuepress/dist.deploy-* ]]
[[ ! -e "$staging" ]]
mkdir -- "$staging"
REMOTE
}

verify_staging() {
  ssh -o BatchMode=yes "$SSH_TARGET" bash -s -- "$STAGING_DIST" <<'REMOTE'
set -Eeuo pipefail
staging=$1
[[ "$staging" == /*/.vuepress/dist.deploy-* ]]
[[ -s "$staging/glossary-dictionary.json" ]]
[[ -s "$staging/resources-tools/glossary-api/index.html" ]]
[[ -s "$staging/sitemap.xml" ]]
[[ -d "$staging/assets" ]]
REMOTE
}

swap_dist() {
  ssh -o BatchMode=yes "$SSH_TARGET" bash -s -- "$REMOTE_DIST" "$STAGING_DIST" "$BACKUP_DIST" <<'REMOTE'
set -Eeuo pipefail
dist=$1
staging=$2
backup=$3
[[ "$dist" == /*/.vuepress/dist ]]
[[ "$staging" == "$dist".deploy-* && -d "$staging" ]]
[[ "$backup" == "$dist".bak-* && ! -e "$backup" ]]
[[ -d "$dist" ]]
mv -- "$dist" "$backup"
if ! mv -- "$staging" "$dist"; then
  mv -- "$backup" "$dist"
  exit 1
fi
REMOTE
}

rollback_dist() {
  log '公网校验或切换失败，恢复上一版 dist'
  ssh -o BatchMode=yes "$SSH_TARGET" bash -s -- "$REMOTE_DIST" "$BACKUP_DIST" "$RELEASE" <<'REMOTE'
set -Eeuo pipefail
dist=$1
backup=$2
release=$3
[[ "$dist" == /*/.vuepress/dist ]]
[[ "$backup" == "$dist".bak-* ]]
if [[ ! -d "$backup" ]]; then
  printf '[deploy] 服务器上没有本次备份，无需回滚\n'
  exit 0
fi
if [[ -d "$dist" ]]; then
  failed="$dist.failed-$release"
  [[ ! -e "$failed" ]]
  mv -- "$dist" "$failed"
fi
mv -- "$backup" "$dist"
printf '[deploy] 已恢复上一版 dist\n'
REMOTE
}

on_error() {
  local exit_code=$?
  trap - ERR
  if ((SWAPPED == 1)); then
    rollback_dist || printf '[deploy] 自动回滚失败，请立即检查服务器目录\n' >&2
  fi
  exit "$exit_code"
}
trap on_error ERR
trap 'exit 130' INT
trap 'exit 143' TERM

validate_public() {
  local base="${SITE_ORIGIN%/}"
  local dictionary_url="$base/glossary-dictionary.json?deploy=$RELEASE"
  local guide_url="$base/resources-tools/glossary-api/?deploy=$RELEASE"
  local attempt
  local body
  for attempt in 1 2 3 4 5; do
    log "公网校验第 $attempt 次"
    if body=$(curl -fsS --connect-timeout 10 --max-time 45 "$dictionary_url"); then
      if printf '%s' "$body" | node "$CHECK_DICTIONARY" -; then
        if curl -fsS --connect-timeout 10 --max-time 45 -o /dev/null "$guide_url"; then
          return 0
        fi
      fi
    fi
    sleep 2
  done
  return 1
}

if ((DRY_RUN == 1)); then
  log "SSH 目标：$SSH_TARGET"
  log "服务器 dist：$REMOTE_DIST"
  log "公网地址：$SITE_ORIGIN"
  log '只读检查，不构建、不上传、不切换'
  remote_preflight
  validate_local_artifacts
  log 'dry-run 通过'
  exit 0
fi

[[ -z "$(git -C "$REPO_ROOT" status --porcelain)" ]] || fail '工作区有未提交改动，请先提交或储藏后再发布'

if ((BUILD == 1)); then
  log '本机构建站点'
  npm --prefix "$WEB_DIR" run build
else
  log '按 --no-build 复用现有 dist'
fi
validate_local_artifacts

log '检查服务器并创建暂存目录'
remote_preflight
prepare_staging

log "上传 dist 到 $STAGING_DIST"
rsync -az --protect-args -e 'ssh -o BatchMode=yes' "$LOCAL_DIST/" "$SSH_TARGET:$STAGING_DIST/"
verify_staging

log '切换到新 dist，上一版保留为备份'
SWAPPED=1
swap_dist
validate_public
SWAPPED=0

log '发布完成'
log "上一版保留在 $BACKUP_DIST"
