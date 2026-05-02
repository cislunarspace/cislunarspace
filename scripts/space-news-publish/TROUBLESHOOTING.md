# 撰稿陷阱与检索技术细节

## 撰稿质量陷阱（经验总结）

### YAML frontmatter 中禁用中文弯引号

中文弯引号 `""`（U+201C/U+201D）和英文字符混用时，会导致 `gray-matter` 解析器报错。

```yaml
# 错误（YAML 解析错误）
description: "论坛主题为"激发航天文化创新创造活力""

# 正确（内嵌引号替换为直角引号）
description: "论坛主题为「激发航天文化创新创造活力」"
```

## 检索技术细节

### CNSA 隐藏文章发现技巧

主索引页只显示最新 4 条，但 `n6758823/n6758838/index.html` 中还嵌入了更多历史文章 ID（如 c10738139 等）。提取方法：

```python
# 用正则匹配所有 article ID
import re
ids = re.findall(r'c(\d{8})', html_content)
# 然后逐个检查 c{id}/content.html
```

### Spaceflight Now 同日页面 404

⚠️ UTC 00:00 之前运行时，`https://spaceflightnow.com/2026/04/{day}/` 会返回 404。当日文章链接应通过 RSS feed 的 `<link>` 字段获取，而非直接拼 URL。

### NASA RSS CDATA 解析

RSS `<title><!\[CDATA\[...` 格式需要特殊正则匹配：

```python
items = rss_content.split('<item>')
for item in items[1:]:
    title_match = re.search(r'<title>(.*?)</title>', item, re.DOTALL)
    if title_match:
        title = re.sub(r'<!\[CDATA\[|\]\]>', '', title_match.group(1)).strip()
```

⚠️ **NASA RSS 标题与链接可能不匹配**：RSS `<title>` 与 `<link>` 可能对应不同文章。**必须单独请求实际 URL 验证**，不能仅依赖 RSS 标题。

### Rocket Lab 日期提取

Rocket Lab 文章的 `datePublished` 元数据可能不可靠（如 `2026-51-30TAD::Z`）。**始终从文章正文提取日期**：

```python
date_match = re.search(r'(April|Apr)\s+\d+,\s+2026', content)
```

### Rocket Lab 图片

`<meta property="og:image">` 返回的是**通用 Logo**，不是实际文章配图。正确方法：在页面 HTML 中用正则提取 `/assets/Uploads/([^"]+\.(?:jpg|png))`。

## 各家站点解析方法

### Rocket Lab 页面解析

Rocket Lab 页面内容在 `<main>...</main>` 而非 `<article>...</article>`：

```python
main_match = re.search(r'<main[^>]*>(.*?)</main>', content, re.DOTALL)
if main_match:
    text = re.sub(r'<[^>]+>', ' ', main_match.group(1))
    text = re.sub(r'\s+', ' ', text).strip()
```

### Rocket Lab 图片 URL 提取

```python
rl_images = re.findall(r'/assets/Uploads/([^"]+\.(?:jpg|png))', content)
unique_images = list(dict.fromkeys(rl_images))
# 拼接为 https://www.rocketlabusa.com/assets/Uploads/{filename}
# 优先下载高分辨率版本（文件更大，如 F85__FillWzk2Myw1NDNd..jpg）
```

### Rocket Lab 任务编号 vs 任务名称

"85th mission" 和 "Kakushin Rising" 是**同一事件**。撰稿前检查现有 slug 是否已覆盖该任务，避免重复。

### CNSA 文章日期提取

CNSA 文章页面的 `<meta name="publishdate">` 或 `发布日期：` 字段可能缺失。实际可用日期模式：
1. `(\d{4})年(\d{1,2})月(\d{1,2})日` 在正文 HTML 中
2. 交叉验证：同一篇文章可能同时出现在索引页（无日期）和具体内容页（有日期），**优先从内容页提取**

### CNSA XLS 附件注意

部分 CNSA 文章（如「中国航天日全国系列活动安排」）正文内容很少或为空，**实际内容在 XLS 附件中**。当 `<div class="wz_conten">` 内容很短时，检查页面是否提示「请下载附件查看」。这类文章通常非即时新闻，可跳过或改从其他渠道获取。

### Spaceflight Now Live Coverage 成功确认

判断「Live coverage」文章是否已更新为发射成功报道：
1. 检查页面 `Last-Modified` HTTP 响应头是否在预期发射时间之后
2. 检查页面内容是否包含 "deployment"（卫星部署）等成功发射的表述
3. 如果标题仍为 "Live coverage: SpaceX to launch..." 且无成功表述，说明发射尚未进行

```python
req = urllib.request.Request(url, method='HEAD', headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, timeout=10) as resp:
    last_modified = resp.headers.get('Last-Modified')
```

## 常见去重判断

**同事件识别**：撰稿前检查当月目录是否已有同一事件稿件。同一事件可能被多篇不同 slug 的文章部分覆盖（如 Blue Origin NG-3 在 4/17、4/19、4/22 均有碎片报道但非综合稿）。判断「同一事件」基于：
1. 事件主体
2. 事件性质
3. 关键事实

若已有覆盖该事件综合信息的文章，即使日期不同也不另建稿。

**预发稿件更新**：对于「即将发生」的事件（如签约仪式、发射预报），可先发预告稿；事件实际发生后，**修改现有文章而非创建新文章** — 更新 title、description、body 和来源链接；slug 不变，图片和 figures 目录可复用。
