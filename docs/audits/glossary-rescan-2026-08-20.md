[简体中文](glossary-rescan-2026-08-20.md) | [English](glossary-rescan-2026-08-20.en.md)

# glossary 清洗收尾新扫描报告

- **Date:** 2026-08-20
- **数据:** 对现存 zh 侧词条全量重扫（714 个 md），分档明细见 [glossary-rescan-2026-08-20.json](glossary-rescan-2026-08-20.json)
- **背景:** 决策记录要求对现存词条做一次新扫描 + 抽查 10–20 条合并质量，确认主词条未夹带模板壳。

## 一、分档结果

深度信号沿用方案丙口径：公式（`$$`/`\begin`）、非模板小节结构、篇幅 >1500 字、≥3 条真实文献，各计 1 分。

| 档 | 数量 | 说明 |
|---|---|---|
| deep=2 | 77 | 有公式或超长篇幅，主词条主力 |
| deep=1 | 42 | 单一深度信号 |
| deep=0 | 595 | 无公式、模板式小节、篇幅短、无文献 |

分类分布：dynamics 358、orbits 143、fundamentals 86、navigation 65、observation 24、programs 18、communication 10、other 10。

## 二、抽查（16 条）

- **深档样例**（adams-cowell-integrator、bang-bang-control、battin-giorgi-method、bcr4bp 等）：正文数千字、有公式推导与真实应用语境，bcr4bp 已是 08-09 合并重写过的主词条形态（覆盖 BCP/BCR4BP/FER4BP 谱系），合并质量良好。
- **浅档样例**（dld、collision-belt、control-curve-ui、nsga-ii 等）：约 380–730 字，正文基本是定义句 + 通用填充，frontmatter 仍是 2026-07-31 批量生成日期，**模板壳仍在库中**。

## 三、结论

1. 08-09 合并产生的主词条（orbits 143、dynamics 部分深档）质量达标，未夹带模板壳。
2. **现存 595 个 deep=0 词条是批量生成的短定义条**，未经 08-09 合并、也不在 d324ecc6 的删除清单里（清单基于合并前旧扫描）。若严格执行方案丙（核心分类只留中等以上），这批还有一次删减空间。
3. AI 语料链路不受影响：本报告仅为核账，未删除任何词条。是否再删 595 条浅档由站长决策（删则覆盖面收缩、词典更紧凑；不删则 AI 一句话定义覆盖面更广）。
