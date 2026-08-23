# 站点内容清理决策记录

- **Status:** In progress（逐模块讨论中）
- **Date:** 2026-08-20
- **性质:** 本文是决策记录，不是执行计划。各模块全部定案后，再汇总为可执行的清理计划。本讨论推倒重来了 `docs/content-strategy.md` 的供评审结论，受众地基保留。

## 已定前提

- **受众**：科普读者为主，学生为辅（沿用站长已确认的定位，未重开）。
- **动作菜单**：删、缩、修。判据统一为名实相符 + 对受众有真价值。
- **glossary**：AI 会话语料逻辑是要保留的核心（详见 glossary 议程）。
- **执行**：本次会话只定案不执行。glossary 词条级删除走内容模块 `delete`；整模块删除可直接 git 删（git 即回收站）。

## 模块决策

### web/ 知识内容模块

| 模块 | 决策 | 理由 / 备注 |
|---|---|---|
| what-is-cislunarspace（2 页） | **留，不删不缩** | 受众入口。但 2 页撑不起入门指南之名，扩充记入 roadmap，属扩充不属清理。 |
| cislunar-orbits（18 页） | **留，不动** | 全站范本，无需清理。 |
| research-frontiers（32 页） | **缩** | 多数为模板填空，对读者是负资产。收成少量真有内容的页面 + 一张索引页。`docs/research/` 的 9 篇 family 文档可作填实哪几页的素材来源。 |
| resources-tools（16 页） | **缩** | 外链清单维护成本超价值，且有待补充挂空。合并为单页或少数几页。 |
| background（8 词条 + README） | **缩（撤导航，并入主教程）** | 现状一半占位页（mpc、pseudospectral、hill-three-body 约 35–45 词）一半真内容（博客搬运，有真实推导）。真内容对作为次要受众的学生有用，但撑不起顶级栏目。决策：删占位页，真内容页并入 cislunar-orbits / glossary 作延伸阅读，从导航撤下背景知识入口。 |
| satellite-simulation（1 页） | **删净** | 站长决定删除。范围：md、`OrbitSimLab` 组件、navbar/taxonomy 入口、AI 索引相关输出一并删净，不留死入口。删除理由待站长补充。 |

### web/glossary

方案丙（分类收缩）早已确认（见 glossary-cleanup-report.md），但执行对不上账（2026-08-20 核账）：

- 扫描 1538 条，方案丙应留约 132 条、删约 1406 条；实际现存 714 条。
- **应删未删 631 条、应留却缺失 63 条（含深度词条，疑似误删）、计划外 14 条。**

决策：

1. 先查 git 历史弄清这轮删除按什么规则做的、63 条深度词条去哪了（误删还是改名）。
2. 再以方案丙 + graded.json 为准对齐账目：该删的删净，误删的恢复。
3. **AI 会话逻辑不动**：清洗后剩余词条照旧进 AI 路由索引与语境料，检索/回答链路不因清理改动；覆盖面损失已在方案丙中接受。词典呈现页属可选，与 AI 无关。
4. 空目录 `glossary/figures/` 顺手删。

词条级删除走内容模块 `delete`（带回收站）。

### web/space-news：删净

站长决定**整体删除 Space News 模块**。动机：自动管线产出的流水文章占着最大的存储和维护成本，却没有读者价值。

范围（删到站点从未有过 Space News 的状态）：

- 内容：`web/space-news/`（zh，240MB）、`web/en/space-news/`（en 镜像）。
- 管线：`scripts/` 下 space-news 相关脚本（update、publish、config、fix）、`scripts/skills/` 写作 skill。
- 代码：admin 集成、SpaceNewsArticle/Sidebar/Home/Archive 组件与布局、taxonomy 的 news-category 体系、首页新闻卡片。
- AI：路由索引与语境料生成中的新闻条目（生成逻辑保留，输入收缩）。
- 文档：`docs/adr/` 5 篇管线文档归档而非删除，记录这段历史。
- SEO：不做重定向，新闻 URL 删后 404（新闻页无流量）。

### web/ 功能表面

| 表面 | 决策 | 理由 / 备注 |
|---|---|---|
| AI 问答 | **留，原样** | 会话逻辑是站长明确保留的核心；入口（首页、navbar、AiChatLayout）不动。 |
| 论坛（forum.md） | **删净** | localStorage 单机留言板，访客至看不见帖，名不符实且无读者价值；反馈功能由页脚联系方式承担。md、组件、入口全删。 |
| 史学思辨（dialectic.md） | **删净** | 站长决定删除。仅中文、实验性、不再演进。md、DialecticLayout、入口（含 navbar/dialectic 分组）全删。 |
| 首页 | **记 roadmap（修）** | 删除新闻卡、仿真卡属于本次清理连带改动；整体重构（第一屏主次、阅读路径）是清理后的第一批修缮任务，输入是清理后的模块格局：知识为主 + AI 辅助 + 词典可选。 |
| references.md / ref.bib | **留，不动** | 支撑留住的教程（cislunar-orbits 等）的引用与参考文献页。 |

### 维护层（admin / deploy / scripts / docs）

| 项 | 决策 | 理由 / 备注 |
|---|---|---|
| admin | **留；删其 news 相关面板/代码** | Space News 删除后仍有 glossary、kb 两块内容要管；glossary 词条级删除正要走它的回收站机制。 |
| deploy/nginx-ai-proxy.conf | **留，不动** | AI 问答的线上代理配置，AI 留则它留。 |
| scripts/archive/ | **删** | git 即归档，双份归档无意义。 |
| scripts/wechat-signature-server.example.js | **留** | 线上微信分享在用，删了下次配环境找不到参考。 |
| scripts/research-frontiers-publish/ | **删** | research-frontiers 收缩成索引页后批量发布流程失去服务对象；将来填实页面按新形态重做。 |
| docs/adr 5 篇 space-news 文档 | **留原地** | ADR 只增不删；本次清理另新增一篇 ADR记录删除 Space News 模块的决策。 |
| docs/audits 失效报告 | **执行时逐个看，删或标 deprecated** | 多数基于已删内容（bilingual-gap、site-content-audit 等）。 |
| docs/internal | **留** | 活的规范（contributors、page-title、seo-frontmatter）。 |
| docs/research | **留，收缩时用，用完再定** | research-frontiers 收缩的素材来源。 |
| web/.vuepress 内部 | **不单独议；连带删净** | ADR-0002 已整理过职责结构；删除 news 生成管线、SpaceNews 组件、Dialectic、OrbitSimLab、taxonomy news 节点等连带项即可。 |
| web/deploy/ | **留** | 实为线上部署 conf 的 gitignore 说明（真实 conf 不入库）；与部署相关，留。 |

### glossary 核账结论（2026-08-20 git 调查）

方案丙已完整执行，无误删：

- 2026-08-09 人工合并精简：orbits 377→143 按轨道族合并重写、fundamentals/dynamics 16 族合并为 70 主词条、坐标系族 21→1 等。
- 2026-08-20 `d324ecc6` 执行方案丙，删 zh 1406 条（含 en 镜像共 D:2809）。
- 此前应留缺失 63 条是旧扫描快照（合并前）的误报：那些词条已被合并进主词条，非误删；应删未删 631 是合并后新生的主词条。

**收尾决策**：对现存 714 条做一次新扫描 + 抽查 10–20 条合并质量，确认主词条未夹带模板壳，不全部人审。

## 执行计划（顺序已定）

1. **Space News 删净**（最大、独立、无依赖）。
2. **卫星仿真、论坛、史学思辨删净**（独立死表面）。
3. **admin 去 news 面板**（依赖 1）。
4. **research-frontiers、resources-tools、background 收缩**。
5. **glossary 新扫描收尾**。
6. **docs/audits 清理 + 新增 ADR（删除 Space News 模块决策）**。
7. **首页重构（修）**：最后，输入是清理后的最终格局：知识为主 + AI 辅助 + 词典可选。

每步后跑 `npm run build` + check-links 验证。

## 文档处置（已执行）

- 本文件升格为现行内容策略，替代已删除的旧 `docs/content-strategy.md`（其供评审结论被本决策推倒重来，受众地基沿用并已在本文件记录）。
- 删除 Space News 的决策另见 [ADR-0005](../adr/0005-remove-space-news-module.md)。
- glossary 清洗收尾新扫描见 [glossary-rescan-2026-08-20.md](glossary-rescan-2026-08-20.md)：主词条合并质量达标；**另有 595 个浅档词条（deep=0，批量生成短定义）留在库中，是否再删由站长决策**。
- **Status: 决策完成，已执行（2026-08-20，issue #216，分支 cleanup/issue-216-content-cleanup）。**

## 清理后扩充 roadmap（不在本次清理范围）

1. **首页重构（修）**：清理后格局为知识为主（入门长文 + 轨道教程 + 词典）+ AI 问答辅助。首页待按此格局重构第一屏主次与阅读路径；当前首页仅完成删除新闻卡与仿真卡。
2. **what-is-cislunarspace 扩充**：2 页撑不起入门指南之名，是扩充第一优先级。
3. **research-frontiers 填实**：`docs/research/` 9 篇轨道族文档为素材，可把保留的方向页填实。
4. **glossary 词典呈现页**（可选，未定案）与浅档词条去留决策。
