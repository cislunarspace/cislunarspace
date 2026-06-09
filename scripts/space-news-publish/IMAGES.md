# 图片获取与处理

配图目标是**图文匹配、路径可靠、版权可说明**。优先找图，但不要为了配图留下会破坏构建的坏链接；确实无可用图片时，删除 `image:` 字段并避免正文图片引用。

## 核心规则

- 图片必须与新闻主题直接匹配，优先从正文引用的原文链接获取。
- `figures` 目录位于月目录下：`web/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/`。
- 英文侧必须复制同名目录：`web/en/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/`。
- Markdown 和 frontmatter 图片路径都必须以 `./figures/<slug>/...` 开头。
- 图片文件不存在时删除 `image:` 和正文图片段落，不留空占位。

## 图片来源优先级

1. 正文引用原文中的 hero 图或正文图。
2. NASA 官网 / NASA Image Library（公共领域）。
3. ESA、CNSA、JAXA、KASA、ISRO 等机构新闻稿配图。
4. SpaceX Flickr / 官方 X 图。
5. Rocket Lab、Blue Origin、ULA、Arianespace 等公司官方图。
6. 主流航天媒体配图；版权不明时只链接来源页，不下载复用。

## 获取流程

1. 抓取原文 HTML，提取 `og:image`、`<picture>` 或文章顶部大图。
2. 下载到中文 `figures/<slug>/`，文件名使用 `hero.jpg` / `hero.webp` 等英文名。
3. 验证文件大小；hero 图通常应大于 10KB，小于 5KB 多半是错误页或占位图。
4. 大图压缩到约 1200–1600px 宽、单张建议小于 500KB。
5. 复制到英文侧前先删除旧目标目录，避免 `figures/figures/` 嵌套。

```bash
rm -rf "web/en/space-news/YYYY/MM/figures/YYYY-MM-DD-slug"
cp -r "web/space-news/YYYY/MM/figures/YYYY-MM-DD-slug" \
      "web/en/space-news/YYYY/MM/figures/YYYY-MM-DD-slug"
```

## 压缩示例

```bash
# WebP
cwebp -q 80 input.jpg -o hero.webp

# JPEG
convert input.png -resize '1600>' -quality 85 hero.jpg
```

space.com CDN 在部分环境下需要强制 HTTP/1.1：

```bash
curl -A "Mozilla/5.0" -L --http1.1 \
  "https://cdn.mos.cms.futurecdn.net/HASH-2000-80.jpg" \
  -o web/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/hero.jpg
```

## Markdown 引用

```markdown
![图片说明](./figures/YYYY-MM-DD-slug/hero.jpg)
*Credit: NASA*
```

版权标注：

- 公共领域：`*图片来源：NASA（公共领域）*` / `*Credit: NASA*`
- 需署名：`*Credit: ESA / Photographer*`
- 版权不明：不下载；改写为 `[查看配图（来源页面）](https://...)`

## 无图降级

若官方图、原文图、公共领域图库均不可用：

1. 创建空的 `figures/<slug>/` 目录（中英两侧可为空）。
2. 删除 frontmatter `image:` 字段。
3. 正文不写图片 Markdown，也不引用不存在文件。
4. 可在来源列表保留原文链接，让读者自行查看来源页面。

常见场景：中国新闻图片 CDN 被阻断、媒体图无授权、NASA/Artemis 概念图找不到可访问 URL。

## 常见错误

| 症状 | 原因 | 修复 |
|------|------|------|
| `Could not resolve './figures/.../hero.jpg'` | 文件不存在或扩展名不匹配 | 改路径或删除 `image:` / 图片段落 |
| 英文构建失败 | 只创建中文 figures | 删除 EN 旧目录后重新复制 |
| `figures/figures/` 嵌套 | 复制前没删目标目录 | 删除嵌套目录，按上方命令重拷 |
| 图片 1–2KB | 下载到错误页/占位符 | 换 URL、换扩展名或无图降级 |
| rsync 后图片 404 | 构建后未跑 sync-figures 或未同步完整 dist | 重新 `npm run docs:build` 并整树 rsync |

更多历史案例见 [FIELD-NOTES.md](FIELD-NOTES.md)。
