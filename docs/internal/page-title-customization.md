# 页面标题定制

浏览器标签页标题由页面名与站点名拼成，格式为「页面名 - 地月空间入门指南」。页面名与站点名相同时，例如首页，只显示站点名。实现位于 `web/.vuepress/theme/client.ts`，通过覆写 `@vuepress/client` 的 `resolvers.resolvePageHeadTitle` 完成，SSR 静态 HTML 与客户端路由切换保持一致。

## 页面名的数据源

页面名取自页面 frontmatter 的 `title`。同一个字段还供搜索索引、AI 路由索引与侧边栏使用，因此改页面名必须改 frontmatter，不能只在渲染层覆写。词条标题另有长度约束，见 `check-glossary-frontmatter` 的 66 字符上限。

## 命名原则

1. 用简洁的页面名，不带栏目前缀。栏目前缀会与站点名、侧边栏重复。
2. 标题应能独立说明页面主题，避免只有「概述」「简介」这类无法区分上下文的词。
3. 词条标题以中文名为主，可在括号内附英文术语或缩写。
4. 分享标题可以比页面名更长，但不应改变页面名本身。

## 修改步骤

1. 修改目标页面 frontmatter 的 `title`。
2. 如页面配置了 `wechatShare`，同步其中的 `title`。
3. 运行 `npm run check`，确认改名没有破坏链接或引用键。
4. 运行 `npm run build`，检查标签标题与分享卡片。

页面描述、关键词与分享字段的写法见[页面元数据与 frontmatter 模板](seo-frontmatter-template.md)。
