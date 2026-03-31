# 修复首页及全站侧边栏丢失问题

## 目标
移除 VuePress 1.x 遗留的无效 `sidebar` frontmatter 配置，让 VuePress 2 默认主题自动从 sidebar.ts 解析正确的侧边栏。

## 任务列表
- [x] 1. 移除所有中文页面中 `sidebar: /` 和 `sidebar: /glossary/` 的 frontmatter（保留 `sidebar: false` 的页面不动）
- [x] 2. 移除所有英文页面中 `sidebar: /`、`sidebar: /en/`、`sidebar: /glossary/` 的 frontmatter（保留 `sidebar: false` 的页面不动）
- [x] 3. 删除 seo-frontmatter-template.md 中的 sidebar 模板说明（已不适用）
- [x] 4. 本地构建验证侧边栏恢复正常

## 备注
- VuePress 2 默认主题的 sidebar frontmatter 只接受 false / 'heading' / 数组 / 对象
- sidebar.ts 中已配置了路径匹配规则（'/': mainSidebar, '/glossary/': glossarySidebar 等），无需 frontmatter 重复指定
- sidebar: false 的页面（ai-chat、forum）保持不变
