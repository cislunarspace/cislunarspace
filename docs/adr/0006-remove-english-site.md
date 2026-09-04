# ADR 0006：删除英文版本，站点与仓库转为中文单语

- **Status:** Accepted
- **Date:** 2026-09-04
- **关联**：ADR 0001（统一分类法模块，含 LocalePath/语言门控模型，本 ADR 收缩其模型）、ADR 0005（删除 Space News 模块，同类整体拆除的先例）、ADR 0007（贡献流程，本仓后续文档一律中文单语的起点）

## Context

站点自建立起是 zh/en 双语：`web/en/` 镜像 770 个 markdown（约 6MB），配套一整套双语基础设施——VuePress locale 配置、taxonomy 的 `LocalePath`/`locales` 语言门控、双语镜像检查（check-bilingual-mirror）、英文页中文字符检查（check-en-chinese）、翻译缺口采集（TranslationGapIntake）、按 locale 分区的 AI 路由索引与上下文语料、落地页语言探测与 `cislunar-lang-chosen` 偏好、主题组件与导航的双语分支。仓库工程文档也维持中英镜像（README、AGENTS、CONTEXT、ADR、internal/agents/audits 各自成对，commit #219 刚完成工程文档双语化）。

实际维护是单人：每个词条、每个 ADR 都要写两遍，英文侧长期是翻译缺口（glossary 翻译缺口由 intake 专门追踪），检查链里两个双语检查器常年报 gap。近期知识库内容模型样板（nrho 词条引用键化）进一步显示：内容质量工作（引用核实、数据治理）在双语义务下成本翻倍。维护者决定不再维护英文版本。

## Decision

全站与仓库整体转为中文单语，删到"从未双语过"的状态：

- **站点内容**：`web/en/` 全删。线上 `/en/*` URL 不做重定向，直接 404（与 ADR 0005 对新闻 URL 的处理一致）。
- **站点基础设施**：VuePress locales、navbar-en、en 侧边栏、taxonomy 的 `Locale`/`LocalePath`/`locales` 门控（`path` 收缩为 `string | null`，`label` 收缩为 `string`）、translation-gap intake、check-bilingual-mirror、check-en-chinese、按 locale 分区的 AI 工件、落地页语言探测与跳转脚本、主题组件（chat、OrbitSimLab、footer 等）的 en 分支，全部拆除。
- **仓库文档**：英文镜像全删——`AGENTS.en.md`、英文版 CONTEXT/CONTEXT-MAP/README、`docs/` 下全部 `*.en.md` 与 en 规范的 ADR 0001/0002 英文版；`README.zh-CN.md` 升格为 `README.md`，`CONTEXT.zh-CN.md` 升格为 `CONTEXT.md`，CONTEXT-MAP 同理。新增文档一律中文单语。
- **保留**：词条正文与参考文献中的英文术语、英文文献题录（那是内容不是版本）；`ref.bib` 不动。
- **CONTEXT 词汇表**随之收缩：LocalePath、语言门控、双语对应物、翻译缺口、运行时语言检测、语言偏好、locale 分区工件、VuePress locale root 等术语随实体一并移除。

## Consequences

- 正面：内容工作量减半，检查链简化（去掉两个双语检查器），taxonomy 与 chat 管线模型显著变简单；AI 语料与站点索引体积下降；工程文档不再需要镜像纪律。
- 负面：英文读者失去可读版本（`/en/*` 404）；翻译投资沉没。
- 若未来恢复英文，应按新形态重新设计（如机器翻译生成、独立站点），而不是复活双语镜像管线。
- 姊妹仓实践（e2m2e 已明文撤销英文）证明单语路线在同类维护强度下可持续。
