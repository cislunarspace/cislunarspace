# 图片获取与处理

**每篇稿件必须配图**——没有图片的稿件是不完整的。获取图片是标准工作流的一部分，不是可选项。

## 图片来源原则（核心规则）

**配图必须与新闻主题直接匹配，且优先从正文中引用的「信息来源」原文链接获取。**

例如：「SpaceX 向 SEC 提交 IPO 申请」的配图应从 Bloomberg、Reuters 等引用原文获取相关图片（如 SpaceX 总部、马斯克、SEC 相关），**而不是**随便找一张 SpaceX 火箭发射照片凑数。发射新闻则配图应是该次发射的实拍照片。

## 图片来源优先级

1. **正文中引用的原文链接中的配图**（最优先 — 确保图文一致）
2. **NASA 官网 / NASA Image Library**（公共领域，可自由使用）
3. **ESA 官网**（通常允许注明出处后使用）
4. **各国航天机构官方发布的新闻稿配图**（CNSA、JAXA、KASA 等）
5. **SpaceX 官方 Flickr / X 账号发布的图片**
6. **Rocket Lab、Blue Origin 等公司官方发布的图片**
7. **主流航天媒体（Spaceflight Now、Space News 等）文章配图**（需判断版权）

## 图片来源补充（国内 + 学术）

- **DoNews** (`donews.com`)：图片 URL 格式 `https://img6.donews.com/img/YYYY/MM/DD/img_pic_{id}.{ext}`，可直接 curl 下载。`og:image` 通常返回网站 Logo，应从文章 HTML 中提取实际配图（如 `img6.donews.com/img/2026/04/30/img_pic_1777502773.png`）
- **学术期刊（Nature/Science）**：当新闻源自中国科学家学术成果时，DOI 页面本身是图片最佳来源。Nature DOI 页面 `og:image` 通常指向 `https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2F.../MediaObjects/41586_YYYY_Fig1_HTML.png`，可直接 curl 下载

## 获取流程

1. **打开正文中引用的原文链接**，用 `fetch` 或浏览器抓取页面内容
2. **从原文页面识别主图**：提取 `<img>` 或 `<picture>` 标签，优先选择文章顶部 hero 图、宽度 ≥ 1000px 的高分辨率版本、与新闻主题最相关的图片
3. **下载图片**：用 `curl -L -o <本地路径> <图片URL>` 下载到 `figures/` 目录
4. **如果原文没有高质量图片**，再按「图片来源优先级」列表依次寻找替代来源
5. **压缩（可选）**：图片 > 500KB 时用 `cwebp` 或 `convert` 压缩
   ```bash
   cwebp -q 80 input.jpg -o output.webp                    # WebP（推荐）
   convert input.jpg -quality 85 -resize '1200>' output.jpg # JPEG
   ```
6. **英文版复用**：先下载到中文 `figures/`，再 `cp -r` 到英文 `figures/`。**必须同时创建中英文 figures 目录**，否则 VuePress 构建失败

## `figures` 目录结构

- **位置**：与稿件 `YYYY-MM-DD-slug.md` 位于**同一月份目录**下
  - 中文：`web/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/`
  - 英文：`web/en/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/`
- **命名**：英文/拼音短名 + 序号，如 `hero.webp`、`01-launch.webp`、`02-crew.jpg`；避免中文文件名与空格
- **首图（hero）**：第一张图命名 `hero.webp` 或 `hero.jpg`，作为 frontmatter `image` 字段和首页卡片缩略图

## Markdown 引用

使用**相对路径**（相对该 `.md` 文件）：

```markdown
![猎户座飞船视角的地球（NASA 图像）](./figures/2026-04-01-artemis-2-launch/hero.webp)
*Credit: NASA*
```

英文稿路径写法相同。

## 版权标注

每张图下方**必须**标注来源：
- 公共领域：`*Credit: NASA*` 或 `*图片来源：NASA（公共领域）*`
- 需注明出处：`*Credit: ESA / Stephan Bidou*`
- 版权不明：**不下载**，改用外链 `[查看配图](原文URL)`

## 图片获取失败时的降级策略

- 如果 `curl` 下载失败（403/404），尝试浏览器抓取
- 如果浏览器也无法获取，在正文中使用外链指向原图：`[查看现场图片（来源页面）](原文URL)`
- **不要留无图稿件** — 至少用外链指向配图页面

## 图片体积控制

- 单张建议不超过 **500KB**
- 优先使用 WebP 格式（同等质量体积更小）
- **NASA 高清图片可达 20-27MB**，下载后必须立即压缩再用于构建，否则拖慢构建且可能内存问题
- **下载前先检查 existing figure dir**：`figures/<slug>/hero.jpg` 已存在且大小合理（300KB-1MB），无需重新下载

## 验证图片有效性

下载后**必须验证文件大小**，防止占位符或错误文件：

```python
import os
size = os.path.getsize('figures/YYYY-MM-DD-slug/hero.png')
# 经验阈值：hero 图片应 > 10KB；< 5KB 通常是占位符/错误
print(f"File size: {size} bytes")
```

⚠️ **CNSA 图片可能返回极小的占位符文件**：某些 CNSA 图片 URL（如 `/dbsource/...jpg`）会返回 1-2KB 的小文件。遇到小文件时，尝试将扩展名从 `.jpg` 改为 `.png`。

## 各网站图片下载方法速查

| 网站 | 图片 URL 特征 | 下载方式 |
|------|-------------|---------|
| **NASA** | `<meta property="og:image">` → `https://www.nasa.gov/wp-content/uploads/...` | `curl -L -o hero.png "$URL"`；**公共领域，最自由** |
| **CNSA** | `wz_conten` 中的 `part/` 或 `dbsource/` 相对路径 | 拼接 `https://www.cnsa.gov.cn` + 相对路径后 `curl -L`；**注意：去掉 `n6758823/` 前缀** |
| **ESA** | `<picture><source>` 或 `<img>` | `curl -L`；注明 `Credit: ESA` |
| **SpaceX Flickr** | `https://live.staticflickr.com/.../{id}_o.jpg` | `curl -L -o hero.jpg "$URL"` |
| **SpaceX X** | `https://pbs.twimg.com/media/{id}?format=jpg&name=large` | `curl -L -o hero.jpg "$URL"` |
| **Rocket Lab** | `/assets/Uploads/...` 相对路径（**不是** og:image） | 拼接 `https://www.rocketlabusa.com/assets/Uploads/{filename}` |
| **微信公众号** | `mmbiz.qpic.cn/...` | 防盗链，需带 Referer 或改用外链 |
| **微博** | `https://wx*.sinaimg.cn/large/{id}.jpg` | `curl -L` 通常可直接下载 |

## 图片相关构建错误

详见 [BUILD-FIXES.md](BUILD-FIXES.md) 的：
- A. Image Extension Mismatch
- B. Missing EN Figures Directory
- C. ZH vs EN Figures Sync 批量检测脚本
