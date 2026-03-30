# 整理项目文件结构

## 目标
清理零散文件，使项目根目录和 web/ 目录结构清晰规范

## 任务列表
- [x] 1. 合并两个 README：将中文 README（无后缀）内容合并到 README.md，删除原文件
- [x] 2. 删除根目录 agent 配置文件：IDENTITY.md、SOUL.md、TOOLS.md、USER.md、AGENTS.md、HEARTBEAT.md
- [x] 3. 删除 web/test-language-detection.html（测试文件）
- [x] 4. 移动 web/nginx-ai-proxy-fixed.conf 到 web/deploy/ 目录
- [x] 5. 移动 web/page-title-customization.md 和 seo-frontmatter-template.md 到 web/docs/ 目录
- [x] 6. 验证项目结构整洁，运行 npm run docs:build 确保构建正常

## 备注
- agent 配置文件（SOUL.md 等）删除后，opencode 工具将不再有个性化配置
- nginx 配置移入 deploy/ 目录，方便后续部署参考
- SEO 草稿归档到 docs/ 目录，保留作参考
