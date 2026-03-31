# Space News 页面重构 — 参考 space.com 风格

## 目标
参照 space.com 的设计风格，重构 Space News 首页、存档页和文章详情页的排版，实现卡片带封面图、分类分区展示、作者+日期显示、深色头部+浅色内容区。

## 设计参考 (space.com 关键特征)
- 深色 hero 头部区 + 白色/浅灰内容区
- 大幅头条文章 + 下方文章卡片网格
- 按主题分类分区（类似 Skywatching / Spaceflight 等区块）
- 每张卡片显示：封面图 + 标题 + 摘要 + 作者 + 日期 + 分类标签
- 封面图缺失时用分类主题色渐变占位

## 分类定义
| key      | zh 标签     | en 标签          | 主题色   |
|----------|------------|------------------|---------|
| artemis  | Artemis    | Artemis          | #6366f1 |
| spacex   | SpaceX     | SpaceX           | #0ea5e9 |
| china    | 中国航天    | China Space      | #dc2626 |
| nasa     | NASA       | NASA             | #2563eb |
| esa      | ESA        | ESA              | #0891b2 |
| iss      | 空间站      | Space Station    | #7c3aed |
| launch   | 发射        | Launches         | #ea580c |
| commercial | 商业航天  | Commercial Space | #059669 |
| science  | 科学发现    | Science          | #8b5cf6 |
| policy   | 政策战略    | Policy & Strategy| #ca8a04 |

## 任务列表

### Phase 1: 数据层
- [x] 1. 为缺少 category 的文章批量补充 category（基于标题关键词自动分配）
- [x] 2. 更新 gen-sidebar.js：提取 `category`、`image`、`author` 字段
- [x] 3. 重新生成 space-news-articles.json

### Phase 2: 首页重构
- [x] 4. 重写 SpaceNewsHome 组件：深色 hero + 大头条 + 分类分区 + 卡片网格
- [x] 5. 更新 SpaceNewsHome 布局 (layout)

### Phase 3: 存档页重构
- [x] 6. 重写 SpaceNewsArchive 组件：分类过滤 + 卡片列表
- [x] 7. 更新 SpaceNewsArchive 布局 (layout)

### Phase 4: 文章详情页
- [x] 8. 新建 SpaceNewsArticle 布局：面包屑 + 分类标签 + 作者日期 + 正文 + 相关文章
- [x] 9. 为 Space News 文章页面指定该布局

### Phase 5: 验证
- [x] 10. 构建验证 + 视觉检查

## 备注
- 封面图 frontmatter (`image`) 为可选字段，缺失时用分类主题色渐变占位
- 文章图片后续可逐步补充，不阻塞本次重构
- 保留左侧边栏导航功能
- 中英双语同步支持
