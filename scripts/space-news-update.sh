#!/bin/bash
# Space News auto-update script for cislunarspace
# Triggered by system crontab every 3 hours

export PATH="$HOME/.nvm/versions/node/v22.22.2/bin:$PATH"
WORKDIR="$HOME/codes/cislunarspace"

cd "$WORKDIR" || exit 1

openclaw agent --local --message "执行 Space News 定期更新。

时间窗口：最近 3 小时。
严格按照 $WORKDIR/.cursor/skills/space-news-publish/SKILL.md 操作，特别是「自动化执行流程」章节。
完成后汇报新增稿件数量。

如果没有值得报道的新闻，简短说明即可。" 2>&1 | logger -t space-news-cron
