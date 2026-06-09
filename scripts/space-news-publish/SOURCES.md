# 航天新闻源与检索策略

检索目标：找最近 24–48 小时内**值得单独成稿**的航天新闻，并能提供可靠来源 URL。中国航天优先；国际新闻以 RSS + 原文核对为主。

## 中文搜索策略（优先执行）

CNSA/CMSA 官网连接不稳定，中文新闻发现以 web_search 为主。每轮加当前年份限定，避免旧闻。

| 轮次 | 关键词 | 目标 |
|------|--------|------|
| 1 | `长征 发射 2026`、`神舟 天宫 2026`、`嫦娥 天问 2026` | 国家任务 |
| 2 | `商业航天 发射 2026`、`朱雀 天龙 谷神星 力箭 双曲线 引力 2026` | 商业火箭 |
| 3 | `中国航天 最新消息 2026`、`北斗 导航卫星 2026` | 综合动态 |
| 4 | `千帆星座 2026`、`国网星座 2026`、`卫星互联网 中国 2026` | 星座组网 |

可引用来源优先级：新华社、央视/央广、人民日报、科技日报、澎湃新闻、官方机构/公司公告。搜狐、腾讯、今日头条等聚合链接可用于发现线索；写稿引用时尽量追到原始媒体或官方来源。

## 中国航天官方与媒体源

| 来源 | 网址 | 用法 |
|------|------|------|
| CNSA | `https://www.cnsa.gov.cn/n6758823/n6758838/` | 官方政策/任务；连接经常重置，勿过度重试 |
| CMSA/CMSE | `https://www.cmse.gov.cn/xwzx/zhxw/` | 载人航天；列表页可覆盖近期动态 |
| CASC | `https://www.spacechina.com/` | 长征、卫星、集团新闻 |
| 新华社 / 央视 | `https://www.news.cn/` / `https://news.cctv.com/` | 权威中文稿 |
| 科技日报 | `https://www.stdaily.com/` | 科学/商业航天深度报道 |
| 澎湃新闻 | `https://www.thepaper.cn/` | 科技与航天快讯 |
| 财联社 / 东方财富 | `https://www.cls.cn/` / `https://finance.eastmoney.com/` | 商业航天、投融资、产业政策 |

## 中国商业航天关键词

| 公司 | 关键词 |
|------|--------|
| 天兵科技 | 天龙、Space Pioneer |
| 蓝箭航天 | 朱雀、LandSpace |
| 星际荣耀 | 双曲线、iSpace |
| 星河动力 | 谷神星、Galactic Energy |
| 东方空间 | 引力、Orienspace |
| 中科宇航 | 力箭、CAS Space |

## 国际新闻源

| 来源 | 网址 | 备注 |
|------|------|------|
| space.com RSS | `https://www.space.com/news/rss` | 主力 RSS；注意 channel title 不是文章 |
| Spaceflight Now RSS | `https://spaceflightnow.com/feed/` | 发射结果强；可能 403，最多重试一次 |
| NASA | `https://www.nasa.gov/feed/`、`https://www.nasa.gov/news/` | 官方任务/科学新闻，图片友好 |
| NASA Image Library | `https://images-api.nasa.gov/search?q=...` | 公共领域图片 |
| ESA | `https://www.esa.int/` | 欧空局官方新闻 |
| Rocket Lab | `https://www.rocketlabusa.com/updates/` | 公司任务更新 |
| Blue Origin | `https://www.blueorigin.com/news` | 公司官方声明 |
| ULA | `https://www.ulalaunch.com/missions` | 发射任务页 |
| Arianespace | `https://www.arianespace.com/mission-updates/` | 发射任务更新 |
| JAXA / KASA / ISRO | 官方站 | 区域补充来源 |
| Air & Space Forces Magazine | `https://www.airandspaceforces.com/` | 美国太空军政策/军力动态 |

## RSS 与正文核对要点

- RSS `pubDate` 是文章发布时间，不一定是事件时间。
- space.com 需同时查 JSON-LD `datePublished` 和正文日期；`articleBody` 可能为空，必要时从 `<article>` 内 `<p>` 提取正文。
- SFN live-coverage 标题可能仍是 `to launch`，正文若出现 `has launched` / `deployment` / `touchdown` 才算完成。
- `scrubbed` 是已发生的 scrub 事件，可写；`to launch` / `targets` / `watch` 是预发，通常跳过。
- 科学新闻需判断论文/观测是否新鲜；媒体刚发但论文/观测很旧时通常跳过，除非有重大里程碑。

## 去重优先信号

1. 候选 URL 已出现在近 7 天稿件 sources 中：跳过。
2. 同一主体 + 同一事件性质 + 关键事实相同：跳过或更新原稿。
3. 同一持续事件出现新官方数据、S-1/ticker、独立专家评论、恢复时间表或新视觉证据：可另写。
4. 中文聚合站晚几天转载西方旧事件，且无新事实：跳过。

## 不推荐优先依赖

- TheSpaceDevs API：历史上超时/IncompleteRead；只作备选。
- SpaceX API v5：数据滞后，不适合当前发射新闻。
- Everyday Astronaut：曾出现 403，除非手动确认恢复。
- Space Launch Now 域名/API：历史上 DNS/API 不稳定。
- CNSA/CMSA 直连：可查但不要作为唯一发现渠道。

更多解析细节见 [TROUBLESHOOTING.md](TROUBLESHOOTING.md)，历史边缘案例见 [FIELD-NOTES.md](FIELD-NOTES.md)。
