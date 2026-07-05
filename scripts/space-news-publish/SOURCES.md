# 航天新闻源与检索策略

检索目标：找最近 24–48 小时内**值得单独成稿**的航天新闻，并能提供可靠来源 URL。中国航天优先。

## 检索通道

自动检索（cron）和手工补稿都走 **Hermes Agent** 的 `web_search` 工具：

```bash
hermes chat -q "Use web_search to find ..." -t web -m mimo-v2.5-pro --max-turns 3 -Q
```

不要再手工解析 RSS 或抓 HTML 正文——那些代码路径已废弃。hermes 返回的 JSON 已经包含 title / url / description / date_iso / source_name。

## 搜索关键词（与 `phase1-hermes.py` 同步）

以下 9 条 query 是 cron phase 1 实际跑的（`CN_QUERIES` + `INTL_QUERIES`）。每条都带日期硬锚（昨天/今天），避免命中旧闻。改这里时**必须同步改 `phase1-hermes.py` 里的对应字符串**，否则文档与代码漂移。

中文（4 条，目标 ≥30% 占比）：

```
中国航天 发射 完成 {昨天} {今天} 长征 神舟 天舟 天龙 朱雀
千帆星座 垣信卫星 {昨天} {今天} 发射 部署
嫦娥 天问 探月 火星 {昨天} {今天} 进展
商业航天 融资 政策 商业火箭 {本月}
```

国际（5 条）：

```
SpaceX Starlink launch {昨天} {今天} Falcon 9
NASA mission news {昨天} {今天} Artemis ISS
Rocket Lab Blue Origin ULA launch {昨天} {今天}
ISRO JAXA mission {昨天} {今天} launch
exoplanet black hole JWST discovery {昨天} {今天}
```

`{昨天}` / `{今天}` / `{本月}` 在脚本运行时由 `datetime` 填充（`YYYY-MM-DD` 或 `YYYY年M月`）。

## 中国航天官方与媒体源

hermes 已能搜到多数中文源，以下清单用于**人工核对原始出处**（写稿引用时追到原始媒体或官方公告，不用聚合链接）：

| 来源 | 网址 | 用法 |
|------|------|------|
| CNSA | `https://www.cnsa.gov.cn/n6758823/n6758838/` | 官方政策/任务；连接经常重置，勿过度重试 |
| CMSA/CMSE | `https://www.cmse.gov.cn/xwzx/zhxw/` | 载人航天；列表页可覆盖近期动态 |
| CASC | `https://www.spacechina.com/` | 长征、卫星、集团新闻 |
| 新华社 / 央视 | `https://www.news.cn/` / `https://news.cctv.com/` | 权威中文稿 |
| 科技日报 | `https://www.stdaily.com/` | 科学/商业航天深度报道 |
| 澎湃新闻 | `https://www.thepaper.cn/` | 科技与航天快讯 |
| 财联社 / 东方财富 | `https://www.cls.cn/` / `https://finance.eastmoney.com/` | 商业航天、投融资、产业政策 |

聚合链接（`so.html5.qq.com`、`caifuhao.eastmoney`、网易订阅、百度百科）可用于发现线索，但写稿引用时必须追到原始媒体或官方来源；选稿时如果只有聚合站、追不到原始出处，通常跳过。

## 中国商业航天关键词

写稿或检索时可用的公司-型号对照：

| 公司 | 关键词 |
|------|--------|
| 天兵科技 | 天龙、Space Pioneer |
| 蓝箭航天 | 朱雀、LandSpace |
| 星际荣耀 | 双曲线、iSpace |
| 星河动力 | 谷神星、Galactic Energy |
| 东方空间 | 引力、Orienspace |
| 中科宇航 | 力箭、CAS Space |

## 国际新闻源

hermes 检索覆盖以下主力源，人工核对原始出处时用：

| 来源 | 网址 | 备注 |
|------|------|------|
| Spaceflight Now | `https://spaceflightnow.com/feed/` | 发射结果强；可能 403，最多重试一次 |
| NASA | `https://www.nasa.gov/news/` | 官方任务/科学新闻，图片友好 |
| NASA Image Library | `https://images-api.nasa.gov/search?q=...` | 公共领域图片 |
| ESA | `https://www.esa.int/` | 欧空局官方新闻 |
| SpaceX | 官方 X / Flickr | 公司任务更新与图片 |
| Rocket Lab | `https://www.rocketlabusa.com/updates/` | 公司任务更新 |
| Blue Origin | `https://www.blueorigin.com/news` | 公司官方声明 |
| ULA | `https://www.ulalaunch.com/missions` | 发射任务页 |
| Arianespace | `https://www.arianespace.com/mission-updates/` | 发射任务更新 |
| JAXA / KASA / ISRO | 官方站 | 区域补充来源 |

## 完成信号判断

hermes 的 select 阶段会用 LLM 判断"是否已完成"，但人工补稿时也要会看：

- **强完成信号**（可写结果稿）：`launched` / `launches` / `liftoff occurred` / `deployment` / `touchdown` / 官方"任务圆满成功 / 安全着陆" / `announces` / `confirms` / `closes funding` / `files S-1` / `wins contract`。
- **跳过信号**：`to launch` / `targets` / `scheduled for` / `will` / `plans to` / `watch guide` / `how to watch` / `gallery` / `photos`。
- **scrubbed** 是已发生的取消事件，可按重要性写 scrub 报道；`tries again` 表示 scrub 后重试中，等结果。

## 去重优先信号

1. 候选 URL 已出现在近 7 天稿件 sources 中：跳过。
2. 同一主体 + 同一事件性质 + 关键事实相同：跳过或更新原稿。
3. 同一持续事件出现新官方数据、S-1/ticker、独立专家评论、恢复时间表或新视觉证据：可另写。
4. 中文聚合站晚几天转载西方旧事件，且无新事实：跳过。

## 不推荐依赖

- TheSpaceDevs API：历史上超时/IncompleteRead；只作备选。
- SpaceX API v5：数据滞后，不适合当前发射新闻。
- Everyday Astronaut：曾出现 403，除非手动确认恢复。
- Space Launch Now 域名/API：历史上 DNS/API 不稳定。
- CNSA/CMSA 直连：可查但不要作为唯一发现渠道。

更多检索/解析故障见 [TROUBLESHOOTING.md](TROUBLESHOOTING.md)。
