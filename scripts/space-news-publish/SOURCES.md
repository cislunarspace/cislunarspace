# 航天新闻发布渠道全面指南

## 中国航天新闻源

| 来源 | 网址 | 图片获取方式 |
|------|------|-------------|
| **国家航天局（CNSA）** | `https://www.cnsa.gov.cn/n6758823/n6758838/` | 索引页每次仅约 4 条；文章链接 `c{article_id}/content.html`；正文在 `<div class="wz_conten">`；图片可能在 `part/` 子目录（如 `part/10739804.jpg`），需拼接完整 URL 后 `curl -L` 下载。**注意 CNSA 连接被重置（实测 2026-04 起）**，需多次重试，备用方案：新华网/央视网 |
| **中国载人航天工程办公室（CMSA）** | `https://www.cmse.gov.cn/` | 索引页日期抓取有坑：`re.findall(r'(\d{4}-\d{2}-\d{2})', html)` 会返回历史日期（捕获的是页面模板级日期）；改用 `<li>` 列表项 + 去标签后取标题的方式提取实际发布日期（详见 [TROUBLESHOOTING.md](TROUBLESHOOTING.md)） |
| **中国航天科技集团（CASC）** | `http://www.spacechina.com/` | 新闻页面有配图，可直接下载 |
| **新华社 / 央视网** | `https://www.news.cn/` / `https://news.cctv.com/` | 优先从 CNSA 获取同一事件的官方配图 |
| **腾讯新闻 / QQ.com** | `https://news.qq.com/` | 备用于 SpaceX 任务等国际新闻的中文报道（Everyday Astronaut 403 后的备选渠道） |
| **36 氪** | `https://36kr.com/` | 科技/创投角度的中国商业航天报道；首页含 AI/航天频道，搜索关键词"商业航天""卫星" |
| **澎湃新闻（The Paper）** | `https://www.thepaper.cn/` | 时政/科技综合；航天政策、天文事件常以专题形式出现 |
| **网易科技** | `https://tech.163.com/` | 中文综合科技门户；含航天频道，承接商业航天公司新闻稿 |
| **IT 之家** | `https://www.ithome.com/` | 中文科技新闻聚合；发射任务、SpaceX/Starship 进度快讯 |

## 中国商业航天公司新闻源

| 公司 | 主要火箭 | 新闻渠道 |
|------|---------|---------|
| **天兵科技（Space Pioneer）** | 天龙系列 | 微信公众号、微博 |
| **蓝箭航天（LandSpace）** | 朱雀系列 | 微信公众号、官网 |
| **星际荣耀（iSpace）** | 双曲线系列 | 微信公众号、微博 |
| **星河动力（Galactic Energy）** | 谷神星系列 | 微信公众号 |
| **东方空间（Orienspace）** | 引力系列 | 微信公众号 |
| **中科宇航（CAS Space）** | 力箭系列 | 微信公众号 |
| **时空道宇（Geespace）** | 吉利卫星 | 官网新闻、`https://www.geespace.com/` |
| **航天科工（CASIC）** | 快舟系列 | 官网新闻、`http://www.casic.com.cn/` |

## 国际航天新闻源

| 来源 | 网址 | 图片获取方式 |
|------|------|-------------|
| **NASA 官网** | `https://www.nasa.gov/blogs/missions/` 或 RSS: `https://www.nasa.gov/feed/` | `og:image` meta 标签含高清图片 URL；**公共领域，可自由使用** |
| **NASA Image Library** | `https://images.nasa.gov/` | API：`https://images-api.nasa.gov/search?q=...` |
| **ESA 官网** | `https://www.esa.int/` | 图片在 `https://www.esa.int/var/esa/storage/images/` 下，可下载 |
| **SpaceX Flickr** | `https://www.flickr.com/photos/spacex/` | 图片可直接下载（多尺寸可选）；标注可商用 |
| **Rocket Lab** | `https://www.rocketlabusa.com/updates/` | 官网 Update 页面有高清配图 |
| **Blue Origin** | `https://www.blueorigin.com/news` | 新闻页面有配图 |
| **ULA** | `https://www.ulalaunch.com/missions` | 任务页面有高清配图 |
| **Arianespace** | `https://www.arianespace.com/mission-updates/` | 任务更新页面有配图 |
| **Spaceflight Now** | `https://spaceflightnow.com/` | 优先从原始机构获取配图；月度索引 `/YYYY/MM/` 经常 404，改用 RSS feed 的 `<link>` 字段；已完成任务归档在 `/category/mission-reports/` |
| **Space News** | `https://spacenews.com/` | 优先从原始机构获取配图 |
| **Space.com** | `https://www.space.com/` | 备份 RSS + 文章页；`launches-spacecraft` 分类下含 Minuteman/ICBM/nuclear-capable 等军事弹道导弹内容须跳过 |
| **Everyday Astronaut** | `https://everydayastronaut.com/` | ⚠️ **2026-05-25 起反爬收紧，返回 HTTP 403**——已不作为主要来源，SpaceX 任务改用 space.com / qq.com 备份 |
| **JAXA** | `https://www.jaxa.jp/` | 新闻配图可下载 |
| **KASA（韩国）** | `https://www.kasa.kr/` | 新闻配图 |
| **ISRO** | `https://www.isro.gov.in/` | 新闻配图可下载 |
| **Sierra Space** | `https://www.sierraspace.com/` | Dream Chaser / LIFE 充气舱；新闻页有配图 |
| **Boeing** | `https://www.boeing.com/features` | Starliner 进展、太空发射系统承包商动态 |
| **Astra** | `https://astra.com/news/` | Rocket 4 / 太空运输服务；新闻页有配图 |
| **Impulse Space** | `https://www.impulsespace.com/` | Mira / Helios 上面级、轨道转移服务；2026 年 6 月已交付 SpaceX Rideshare 任务 |
| **Ars Technica** | `https://arstechnica.com/` | 英文科技媒体，spaceflight 子板块；优质深稿、监管/政策分析 |
| **The Verge** | `https://www.theverge.com/space` | 英文科技媒体，space 板块；产品视角（Starship/Starliner/蓝色起源） |
| **Space Explored** | `https://www.spaceexplored.com/` | 英文小型独立站；SpaceX/Starship 进度追踪，9th 出航等任务快讯 |

## 可靠 API 来源（2026年4月实测）

| 来源 | 可靠性 | 说明 |
|------|--------|------|
| **NASA Image API** `https://images-api.nasa.gov/search?q=...` | ✅ 高 | 返回 JSON，含图片 URL、标题、日期；公共领域；查询字符串含空格时需 `urllib.parse.quote()` 编码 |
| **TheSpaceDevs** | ❌ 不可用 | cron 环境 IncompleteRead 超时，完全不可用 |
| **SpaceX API v5** | ⚠️ 数据滞后 | 实测返回 2022 年数据，不建议用于当前发射数据 |

## Launch Schedule（发射状态确认降级来源）

当 TheSpaceDevs API 不可用时，使用 **Launch Schedule** (`launchschedule.net`)：

```python
url = 'https://launchschedule.net/launches/?search=Starlink+17-36'
# 搜索 "Go for Launch"、"Launch Successful"、"Launch Failure" 等关键词
```

状态标识：
- **"Go for Launch"** = 窗口已开放
- **"Launch Successful"** = 发射已成功
- **"Launch Failure"** = 发射失败

## 中国航天关键事件日历

| 事件 | 大致频率 | 搜索关键词 |
|------|---------|-----------|
| 长征系列发射 | 每月 3-5 次 | "长征 发射"、"CZ-* 发射" |
| 神舟/天宫任务更新 | 在轨期间每周 | "神舟"、"天宫"、"出舱" |
| 嫦娥/天问任务更新 | 按任务阶段 | "嫦娥"、"天问" |
| 商业火箭首飞/新火箭 | 不定期 | "天龙"、"朱雀"、"双曲线"、"谷神星"、"引力"、"力箭" |
| 航天政策/规划发布 | 每季度 | "航天白皮书"、"航天计划"、"商业航天政策" |
| 北斗系统更新 | 不定期 | "北斗" |
| 俄罗斯进步号货运飞船 | 每3-4个月一次 | "进步MS-"、"Progress MS-" |

## 实测不可用 / 高延迟来源（2026-05-28 更新）

**不要优先依赖**：
- SpaceX Flickr（超时）、Blue Origin（429）、NASASpaceflight（403）、SpaceNews（429）
- SpaceX 官方站（403）、ESA `/News` 页面（404）、Rocket Lab 页面（无有效内容）
- JAXA（空白）、ISRO（403）、CMSA（部分可用，详见上方 CMSA 解析技巧）
- CNSA（连接被重置，需多次重试）
- TheSpaceDevs API（HTTP 35 / IncompleteRead 超时，**完全不可用**）
- **Everyday Astronaut**（2026-05-25 起 HTTP 403，已转用 space.com / qq.com 备份）
- **Relativity Space**（403）、**Firefly Aerospace**（403）、**Stoke Space**（403）、**Payload Space**（403）—— 2026-06 复测仍 block
- **Galactic Energy / Deep Blue Aerospace** 等中国二级商业航天站：DNS 解析失败或 SSL 过期，需用搜索/聚合渠道替代
- **Northrop Grumman** `news.northropgrumman.com`（DNS 解析超时，2026-06 实测），改用其母公司 `northropgrumman.com` 首页或第三方转载

## 降级策略总结

| 需求 | 首选 | 降级 |
|------|------|------|
| 发射状态确认 | TheSpaceDevs API | Launch Schedule |
| NASA 新闻检索 | NASA RSS (`nasa.gov/feed/`) | NASA 搜索 |
| 中国航天新闻 | CNSA 索引页 | 新华社/央视 |
| 图片 | 原文 og:image | NASA Image API |
| SpaceX 任务 | Everyday Astronaut（403） | space.com RSS + 腾讯/qq.com 中文备份 |
| 国际新势力动态 | 公司官网（Sierra Space/Boeing/Astra/Impulse） | Ars Technica / The Verge / Space Explored 转译 |
| 中国商业航天早期动态 | 36Kr / 网易科技 / 澎湃 | 微信公众号（需登录）|
