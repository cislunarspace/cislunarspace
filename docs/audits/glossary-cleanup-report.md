# glossary 词条清洗扫描报告

- **Date:** 2026-08-20
- **数据:** content 模块 `list('glossary')` 全量扫描（zh 侧 1538 条），分档明细见 [glossary-cleanup-graded.json](glossary-cleanup-graded.json)
- **背景:** [内容策略第五节](../content-strategy.md)：删短词条与低价值词条，保留的既是 AI 语料也是词典。

## 一、词条库的构成（统计证据）

- 正文长度高度均匀：去空白字符数 P10–P90 为 520–788，中位 646，是批量生成的同质分布，不存在自然的「短词条」分界线。
- **97.7%（1502/1538）是同一四段模板**（定义｜应用价值｜相关概念｜参考文献）。
- **97.1%（1494）的定义段与 frontmatter description 逐字相同**，批量生成痕迹。
- 分类分布：dynamics 816、orbits 377、fundamentals 218、navigation 65、observation 24、programs 18、communication 10、other 10。

结论：清洗标准不是「短」，是**深度信号**（公式、真实文献量、脱离模板的结构、超出常规的篇幅）。

## 二、分档规则与数量

| 档 | 规则 | 数量 | 分类分布 |
|---|---|---|---|
| 病态 | 文件名 >80 字符（整句定义当 slug 的生成残次品） | 8 | dynamics 4、orbits 2、fundamentals 1、other 1 |
| 深度 | deep≥3（公式/非模板结构/超长/多文献的组合信号） | 49 | dynamics 28、orbits 14、fundamentals 3、navigation 2、other 2 |
| 中等 | deep==2 | 93 | dynamics 48、orbits 21、fundamentals 14、navigation 8、observation 1、programs 1 |
| 轻微 | deep==1（模板 + 常规长度） | 1333 | dynamics 714、orbits 332、fundamentals 187、navigation 52、observation 22、programs 17、communication 6、other 3 |
| 纯模板 | deep==0 | 55 | dynamics 22、fundamentals 13、orbits 8、communication 4、other 4、navigation 3、observation 1 |

深度档是词条库的价值所在：cr3bp（4540 字）、nrho、poincare-map、differential-correction 等轨道动力学核心概念，带公式与真实文献，多数有独立小节结构。

## 三、建议的清洗方案（幅度待定）

- **必删**：病态 8 条 + 纯模板 55 条，无争议。
- **必留**：深度档 49 条。
- **幅度决策在中间 1426 条**（中等 93 + 轻微 1333）：
  - **方案甲（词典化）**：只留深度 + 中等（约 142 条），轻微全删。词典页紧凑高质；AI 语料失去「一句话定义」的覆盖面。
  - **方案乙（语料优先）**：全留中间档（共约 1475 条），只删病态 + 纯模板。覆盖面最大；词典页信息密度低。
  - **方案丙（分类收缩）**：核心分类（dynamics/orbits/fundamentals）留中等以上，边缘分类（navigation/observation/programs/communication/other，共 127 条）只留深度档。

## 四、幅度决策（已确认：方案丙）

站长于 2026-08-20 确认**方案丙（分类收缩）**：核心分类（dynamics / orbits / fundamentals）保留中等及以上，边缘分类只保留深度档，病态与纯模板全删。

- **保留 132 条**：dynamics 76、orbits 35、fundamentals 17、navigation 2、other 2
- **删除 1406 条**（zh；其中 1403 条有英文对应，实删文件 2809 个）
- 执行清单见 [glossary-cleanup-decision.json](glossary-cleanup-decision.json)

## 五、执行方式

批量删除待 ADR-0003 follow-up 3 的 `content.delete`（带回收站、清 README 索引行、自动刷新 AI 索引）就绪后按决策清单执行，不用裸脚本。
