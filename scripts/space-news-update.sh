#!/bin/bash
# Space News auto-update script for cislunarspace
# Triggered by system crontab every 3 hours

export PATH="$HOME/.nvm/versions/node/v22.22.2/bin:$PATH"
WORKDIR="$HOME/codes/cislunarspace"

cd "$WORKDIR" || exit 1

openclaw agent --local --message "执行 Space News 定期更新。

请严格按照 $WORKDIR/.cursor/skills/space-news-publish/SKILL.md 的规则操作：

1. 搜索最近3小时内的航天/发射新闻（中国+国际），中英文关键词都要搜
2. 按重要程度排序：重大任务里程碑 > 发射 > 政策/商业动态 > 常规发射
3. Starlink 等高频常规发射可合并为汇总
4. 核对来源（优先机构官网、通讯社、主流航天媒体）
5. 为每条新闻撰写中英双语稿件，中文放 web/space-news/YYYY/MM/，英文放 web/en/space-news/YYYY/MM/
6. category 必须从 SKILL.md 预定义列表选择，layout 固定 SpaceNewsArticle
7. 英文稿件 slug 与中文一致，不加 -en 后缀，permalink 以 /en/ 开头
8. 下载配图到 figures/（仅限公共领域或允许使用的图片）
9. 更新月度 README 索引（中+英）
10. 如需新建月/年目录，同步更新年索引
11. 运行 node web/.vuepress/gen-sidebar.js
12. 运行构建验证：cd web && node -e \"const{spawn}=require('child_process');const p=spawn('node',['node_modules/vuepress/dist/cli.js','build','.'],{stdio:'pipe'});p.stdout.on('data',d=>process.stdout.write(d));p.stderr.on('data',d=>process.stderr.write(d));p.on('close',c=>{console.log('EXIT:',c);process.exit(c)});setTimeout(()=>{p.kill();process.exit(1)},180000)\"
13. 运行 node web/.vuepress/sync-figures.js（将 figures 图片同步到 dist/）
14. 汇报新增稿件数量

如果没有值得报道的新闻，简短说明即可。" 2>&1 | logger -t space-news-cron
