# ADR 0008：正文写作约定与问题集模板

**状态**：已接受
**日期**：2026-09-28
**关联**：[ADR 0007](0007-contribution-workflow.md)（决策 1 的正文结构被本 ADR 取代，标签与面板决策不变）；CODE-core 仓 issue [#764](https://github.com/cislunarspace/CODE-core/issues/764) 与 PR [#765](https://github.com/cislunarspace/CODE-core/pull/765)（同一约定的先行落地）

## 背景

ADR 0007 把 issue 正文定为 Problem / Proposal / 上下文 三段、PR 正文定为五段式，并焊死进模板。运行下来，正文变成面向程序的摘要：概要一两个字，正文堆决策名与参数枚举，只讲落地的结论不讲来龙去脉；小标题连篇而每段只有一两句话，不了解具体改动的协作者读不出发生了什么、为什么、自己能从哪里接手。姊妹仓 CODE-core 已落地同一套正文写作约定（issue #764、PR #765），三仓共用一套推进体系，流程约定宜同构，本仓跟进。

## 决策

1. 正文写作约定在 CONTRIBUTING.md 一处成文，作为唯一规则源：正文回答一组固定问题（PR 问解决什么问题、为什么这样做、做了什么、如何验证、从哪里继续读；issue 问现状是什么、期望是什么、为什么重要、已有排查或想法），行文用平实中文陈述句、少特殊符号、细节不进折叠区；约束同样覆盖 AI 生成的评论与 commit body。CHANGELOG 条目规则不引入，本仓无 CHANGELOG。
2. 五套 Issue 模板与 PR 模板改写为问题集引导：删掉 Problem / Proposal / 上下文 与 Summary 等小标题，保留本仓特有的待拍板、相关 issue / ADR 与证据提示；PR 模板保留 Closes 置顶、回应 issue 标题、方案不一致单独交代与只报事实的验证要求。
3. AGENTS.md「issue / PR / 评论的格式」保留流程条款（提案先行、待拍板、创建入板、评论规范、AI 标识），正文结构定义替换为指向 CONTRIBUTING.md；docs/agents/issue-tracker.md 加同一条指向。
4. 评审把关：按问题集核对 PR 正文回答是否完整、行文是否可读，缺项的由作者在合并前补正；存量 open 工单与 open PR 不回改。

## 备选

- 只把行文约束写进 AGENTS.md、保留三段式与五段式：管不住读不到 AGENTS.md 的外部贡献者，小标题碎片化的问题仍在。
- 为本仓单独设计一套问题集：与 CODE-core 已落地的约定割裂，跨仓维护两套规则。

## 后果

- 变更：CONTRIBUTING.md（新增正文写作约定一节、改写提 Issue 与提 Pull Request 的写法条款）、AGENTS.md（格式条款的正文结构部分换成指向）、六套开单模板、docs/agents/issue-tracker.md（加一条指向）。
- 正文结构条款与 transfer-orbit-design 不再同构（该仓 AGENTS.md 仍保留三段式与五段式，后续自行跟进）；规则源位置与 CODE-core 一致。
- 不变：标题约定（类型标签开头、元信息不进标题）、提案先行、待拍板、入板命令、评论规范、AI 标识、标签体系与面板流程。
- 写作约定没有机器检查，由评审执行；本 ADR 对应的 issue 与 PR 正文即按新约定写作，作为首次演练。
