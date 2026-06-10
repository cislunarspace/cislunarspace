#!/bin/bash
# Cislunar Space News hourly auto-update (local)
# Run from local machine: build here, rsync dist to server.
# Replaces the server-side scripts/space-news-update.sh (which targeted
# a non-existent openclaw CLI and required docs:build on a 945Mi RAM host).
#
# Schedule: see `hermes cron list` — created via hermes cron.
# Manual run: bash scripts/space-news-update-local.sh

set -uo pipefail

# Manual dry-run: SKIP_PHASE1=1 bash scripts/space-news-update-local.sh
# Skips Phase 1 (draft) so build+rsync pipeline can be tested alone.
# Legacy alias SKIP_HERMES still works.
SKIP_PHASE1="${SKIP_PHASE1:-${SKIP_HERMES:-0}}"

REPO="/home/ouyangjiahong/codes/cislunarspace"
WEB="$REPO/web"
LOGDIR="$REPO/logs"
LOGFILE="$LOGDIR/space-news-update.log"
TS_START="$(date -Iseconds)"

mkdir -p "$LOGDIR"

{
echo "=== Space News update started at $TS_START ==="
echo "PWD=$REPO"

cd "$REPO" || { echo "FATAL: cd $REPO failed"; exit 1; }

# --- Phase 1: search & draft new articles (lightweight Python script) ---
if [ "$SKIP_PHASE1" = "1" ]; then
    echo "[$(date -Iseconds)] phase 1: SKIPPED (SKIP_PHASE1=1)"
    PHASE1_RC=0
else
    echo "[$(date -Iseconds)] phase 1: python3 scripts/space-news-update-phase1.py"
    python3 "$REPO/scripts/space-news-update-phase1.py" 2>&1
    PHASE1_RC=$?
    echo "[$(date -Iseconds)] phase 1 exit=$PHASE1_RC"
fi

# --- Phase 2: sharded parallel build on local (32 cores, 125Gi RAM) ---
# N=4 measured 4m10s vs 4m51s baseline (1.17x speedup, 4.28 cores utilized).
# N=8+ offers no further gain — the ~714 non-space-news pages dominate each shard.
# sharded-build.ts internally runs sync-figures + verify-dist, exits non-zero on FAIL.
cd "$WEB" || { echo "FATAL: cd $WEB failed"; exit 1; }
echo "[$(date -Iseconds)] phase 2: npm run docs:build:parallel (BUILD_SHARDS=${BUILD_SHARDS:-4})"
BUILD_SHARDS="${BUILD_SHARDS:-4}" npm run docs:build:parallel 2>&1
PHASE2_RC=$?
echo "[$(date -Iseconds)] phase 2 exit=$PHASE2_RC"

# If build+verify failed, refuse to push to server. dist is incomplete.
if [ "$PHASE2_RC" -ne 0 ]; then
    echo "[$(date -Iseconds)] FATAL: phase 2 failed (rc=$PHASE2_RC), aborting before rsync"
    echo "=== Space News update ABORTED at phase 2 at $(date -Iseconds) ==="
    exit 1
fi

# --- Phase 3: commit + push generated content to remote ---
cd "$REPO" || exit 1
git add web/space-news/ web/en/space-news/ \
       web/.vuepress/sidebar.auto.json \
       web/.vuepress/space-news-articles.json 2>/dev/null || true

if ! git diff --cached --quiet; then
    git commit -m "Update space news — $(date -u '+%Y-%m-%d %H:%M UTC')" >/dev/null
    # Push to origin (GitHub in this env; gitee is configured on the remote
    # build server, not here). GIT_HTTP_VERSION=1.1 avoids HTTP/2 stalls.
    GIT_HTTP_VERSION=HTTP/1.1 git push origin master 2>&1
    PHASE3_RC=$?
else
    echo "[$(date -Iseconds)] phase 3: nothing to commit"
    PHASE3_RC=0
fi
echo "[$(date -Iseconds)] phase 3 exit=$PHASE3_RC"

# --- Phase 4: rsync dist/ to remote server (must use domain, not IP) ---
# Use SSH key (thinkstation.pem). IdentitiesOnly=yes prevents ssh-agent from
# offering other keys that would also be tried and rejected.
REMOTE_KEY="${REMOTE_KEY:-/home/ouyangjiahong/.ssh/thinkstation.pem}"
REMOTE_DEST="${REMOTE_DEST:-/home/ubuntu/cislunarspace/}"
RSYNC_SSH="ssh -i $REMOTE_KEY -o IdentitiesOnly=yes -o StrictHostKeyChecking=no -o ConnectTimeout=30 -o ServerAliveInterval=15 -o ServerAliveCountMax=6"
echo "[$(date -Iseconds)] phase 4: rsync dist to server (key=$REMOTE_KEY dest=$REMOTE_DEST)"
rsync -avz --compress-level=6 \
    --delete \
    -e "$RSYNC_SSH" \
    "$WEB/.vuepress/dist/" \
    "ubuntu@cislunarspace.cn:$REMOTE_DEST" 2>&1
PHASE4_RC=$?
echo "[$(date -Iseconds)] phase 4 rsync exit=$PHASE4_RC"

# --- Phase 5: fix dist perms (nginx www-data needs read) ---
ssh -i "$REMOTE_KEY" -o IdentitiesOnly=yes -o StrictHostKeyChecking=no -o ConnectTimeout=15 \
    ubuntu@cislunarspace.cn "sudo chmod -R 755 $REMOTE_DEST && sudo chmod o+x /home/ubuntu" 2>&1
PHASE5_RC=$?
echo "[$(date -Iseconds)] phase 5 chmod exit=$PHASE5_RC"

TS_END="$(date -Iseconds)"
echo "=== Space News update finished at $TS_END — phase1=$PHASE1_RC phase2=$PHASE2_RC phase3=$PHASE3_RC phase4=$PHASE4_RC phase5=$PHASE5_RC ==="
} >> "$LOGFILE" 2>&1

# Truncate log to last 2000 lines to avoid unbounded growth
tail -n 2000 "$LOGFILE" > "$LOGFILE.tmp" && mv "$LOGFILE.tmp" "$LOGFILE"
