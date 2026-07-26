#!/bin/bash
# Space News 自动更新配置文件
# 集中管理所有配置，便于维护和修改

# ============================================================================
# 服务器配置
# ============================================================================
REMOTE_HOST="106.54.4.220"
REMOTE_USER="ubuntu"
REMOTE_KEY="$HOME/.ssh/thinkstation.pem"
REMOTE_DEST="/home/ubuntu/cislunarspace/"
REMOTE_SSH_OPTS="-o IdentitiesOnly=yes -o StrictHostKeyChecking=no -o ConnectTimeout=30 -o ServerAliveInterval=15 -o ServerAliveCountMax=6"

# ============================================================================
# Hermes 配置（Xiaomi MIMO）
# ============================================================================
HERMES_PROVIDER="xiaomi"  # 使用 Xiaomi MIMO
HERMES_MODEL="mimo-v2.5-pro"
HERMES_MAX_TURNS="3"             # search/select 都给 3 turns
HERMES_DRAFT_MAX_TURNS="2"       # draft 给 2 turns
HERMES_TIMEOUT_SEARCH=180        # 搜索超时（秒）
HERMES_TIMEOUT_SELECT=180        # 筛选超时（秒）
HERMES_TIMEOUT_DRAFT=240         # 写稿超时（秒）
HERMES_SEARCH_WORKERS=9          # 9 query 真并行

# ============================================================================
# 构建配置
# ============================================================================
REPO="/home/ouyangjiahong/codes/cislunarspace"
WEB="$REPO/web"
BUILD_SHARDS=4                   # 构建并行度
CUTOFF_DAYS=3                    # 新闻时效窗口（天）

# ============================================================================
# 日志配置
# ============================================================================
LOGDIR="$REPO/logs"
LOGFILE="$LOGDIR/space-news-update.log"
LOG_MAX_LINES=2000               # 日志最大行数

# ============================================================================
# 导出配置（供脚本使用）
# ============================================================================
export REMOTE_HOST REMOTE_USER REMOTE_KEY REMOTE_DEST REMOTE_SSH_OPTS
export HERMES_PROVIDER HERMES_MODEL HERMES_MAX_TURNS HERMES_DRAFT_MAX_TURNS
export HERMES_TIMEOUT_SEARCH HERMES_TIMEOUT_SELECT HERMES_TIMEOUT_DRAFT
export HERMES_SEARCH_WORKERS
export REPO WEB BUILD_SHARDS CUTOFF_DAYS
export LOGDIR LOGFILE LOG_MAX_LINES
