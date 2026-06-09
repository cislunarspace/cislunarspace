# 撰稿陷阱与检索技术细节

本文件记录可复用的技术细节。具体历史案例和长篇排查 trace 已移到 [FIELD-NOTES.md](FIELD-NOTES.md)。

## YAML 与 Markdown

### frontmatter 引号

frontmatter 中不要嵌套未转义弯引号：

```yaml
# 错误
description: "论坛主题为"激发航天文化创新创造活力""

# 正确
description: "论坛主题为「激发航天文化创新创造活力」"
```

### README patch

- 插入表格行后检查 `||`。
- 修改 YAML frontmatter 后检查 stray `|`。
- 复杂 frontmatter 修改优先整体重写，避免重复字段块。

## RSS 解析

### space.com RSS

space.com 主 RSS 为 `https://www.space.com/news/rss`，会重定向到 `feeds.xml`。

- `title` 使用 CDATA。
- `link` / `pubDate` 是 plain text。
- index 0 常是频道标题 `Latest from Space.com`，不是文章。

```python
titles = re.findall(r'<title><!\[CDATA\[(.*?)\]\]></title>', html)
links = re.findall(r'<link>(.*?)</link>', html)
pubdates = re.findall(r'<pubDate>(.*?)</pubDate>', html)
```

### SFN RSS

Spaceflight Now RSS 的 `title` / `link` / `pubDate` 通常都是 plain text：

```python
titles = re.findall(r'<title>(.*?)</title>', html)
links = re.findall(r'<link>(.*?)</link>', html)
pubdates = re.findall(r'<pubDate>(.*?)</pubDate>', html)
```

SFN 可能 403；最多重试一次，之后转向 space.com、CMSE 和 web_search。

### RFC 2822 日期

RSS 日期解析必须得到 UTC-aware datetime。不要依赖服务器本地时区。

```python
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime

pub_dt = parsedate_to_datetime(pubdate)
if pub_dt.tzinfo is None:
    pub_dt = pub_dt.replace(tzinfo=timezone.utc)
pub_dt = pub_dt.astimezone(timezone.utc)
age_h = (datetime.now(timezone.utc) - pub_dt).total_seconds() / 3600
```

## HTML 正文提取

### space.com 正文

JSON-LD `articleBody` 经常为空；优先从 `<article>` 内段落提取：

```python
article = re.search(r'<article[^>]*>(.*?)</article>', html, re.DOTALL)
content = article.group(1) if article else html
paragraphs = re.findall(r'<p[^>]*>(.*?)</p>', content, re.DOTALL)
clean = [re.sub(r'<[^>]+>', '', p).strip() for p in paragraphs]
```

URL 含 `gallery` 或标题明显是照片汇编时跳过。

### CMSE 列表页

CMSE 列表页日期在 `<li>` 内；不要只扫全页模板日期。

```python
lis = re.findall(r'<li[^>]*>(.*?)</li>', html, re.DOTALL)
dated_lis = [(li, re.findall(r'\d{4}-\d{2}-\d{2}', li)) for li in lis
             if re.findall(r'\d{4}-\d{2}-\d{2}', li)]
```

优先使用 HTTPS：`https://www.cmse.gov.cn/xwzx/zhxw/`。

### Rocket Lab

Rocket Lab 正文常在 `<main>` 内，`og:image` 可能只是 logo。图片从 `/assets/Uploads/...` 提取。

```python
main = re.search(r'<main[^>]*>(.*?)</main>', html, re.DOTALL)
images = re.findall(r'/assets/Uploads/([^"\']+\.(?:jpg|png))', html)
```

## 发射完成信号

可写结果稿的强信号：

- 标题/正文含 `launched`、`launches`、`has launched`、`liftoff occurred`。
- 正文含部署、入轨、着陆、回收成功等结果事实。
- 官方或机构发布「任务圆满成功」「安全着陆」等确认。

应跳过的信号：

- `to launch`、`targets`、`scheduled for`、`will launch`。
- `watch` / `how to watch` / `head to orbit` 且正文无结果。
- `tries again` 表示 scrub 后重试中。
- 发射窗口在 cron 之后数小时且无完成确认。

## 去重判断

同一事件识别基于：主体、事件性质、关键事实。不要仅按日期或标题动词判断。

- 预发稿已有，结果已确认：更新原稿，不改 slug。
- 已有综合稿覆盖同事件：跳过反应稿/图片稿。
- 同一持续事件有新事实：可另写，但摘要需说明新事实在哪里。
- 删除重复稿后同步删除中英 figures，并运行 `npm run gen-sidebar`。

## 常见构建相关陷阱

- 内联图片路径必须写 `./figures/...`，不能省略 `./`。
- `image:` 指向不存在文件会导致 Vite/Rollup import 失败。
- EN figures 复制前先删目标目录，避免嵌套。
- `space-news-articles.json` 是 `{ zh: [], en: [] }`，检查时先取 locale 数组。

更多构建修复见 [BUILD-FIXES.md](BUILD-FIXES.md)。
