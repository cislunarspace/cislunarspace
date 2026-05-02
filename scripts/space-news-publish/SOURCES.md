# 航天新闻发布渠道全面指南

## 中国航天新闻源

| 来源 | 网址 | 图片获取方式 |
|------|------|-------------|
| **国家航天局（CNSA）** | `https://www.cnsa.gov.cn/n6758823/n6758838/` | 索引页每次仅约 4 条；文章链接 `c{article_id}/content.html`；正文在 `<div class="wz_conten">`；图片可能在 `part/` 子目录（如 `part/10739804.jpg`），需拼接完整 URL 后 `curl -L` 下载 |
| **中国载人航天工程办公室（CMSA）** | `https://www.cmse.gov.cn/` | 页面图片可直接下载 |
| **中国航天科技集团（CASC）** | `http://www.spacechina.com/` | 新闻页面有配图，可直接下载 |
| **新华社 / 央视网** | `https://www.news.cn/` / `https://news.cctv.com/` | 优先从 CNSA 获取同一事件的官方配图 |

## 中国商业航天公司新闻源

| 公司 | 主要火箭 | 新闻渠道 |
|------|---------|---------|
| **天兵科技（Space Pioneer）** | 天龙系列 | 微信公众号、微博 |
| **蓝箭航天（LandSpace）** | 朱雀系列 | 微信公众号、官网 |
| **星际荣耀（iSpace）** | 双曲线系列 | 微信公众号、微博 |
| **星河动力（Galactic Energy）** | 谷神星系列 | 微信公众号 |
| **东方空间（Orienspace）** | 引力系列 | 微信公众号 |
| **中科宇航（CAS Space）** | 力箭系列 | 微信公众号 |

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
| **Spaceflight Now** | `https://spaceflightnow.com/` | 优先从原始机构获取配图 |
| **Space News** | `https://spacenews.com/` | 优先从原始机构获取配图 |
| **JAXA** | `https://www.jaxa.jp/` | 新闻配图可下载 |
| **KASA（韩国）** | `https://www.kasa.kr/` | 新闻配图 |
| **ISRO** | `https://www.isro.gov.in/` | 新闻配图可下载 |

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

## 实测不可用 / 高延迟来源（2026年4月）

**不要优先依赖**：
- SpaceX Flickr（超时）、Blue Origin（429）、NASASpaceflight（403）、SpaceNews（429）
- SpaceX 官方站（403）、ESA `/News` 页面（404）、Rocket Lab 页面（无有效内容）
- JAXA（空白）、ISRO（403）、CMSA（部分可用）
- CNSA（连接被重置，需多次重试）
- TheSpaceDevs API（HTTP 35 / IncompleteRead 超时，**完全不可用**）

## 降级策略总结

| 需求 | 首选 | 降级 |
|------|------|------|
| 发射状态确认 | TheSpaceDevs API | Launch Schedule |
| NASA 新闻检索 | NASA RSS (`nasa.gov/feed/`) | NASA 搜索 |
| 中国航天新闻 | CNSA 索引页 | 新华社/央视 |
| 图片 | 原文 og:image | NASA Image API |
