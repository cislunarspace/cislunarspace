---
title: 思维链提示（Chain-of-Thought Prompting）
description: 思维链提示（CoT）是一种引导大语言模型在给出最终答案前输出中间推理步骤的提示技术，显著提升了LLM在复杂推理任务上的表现。
wechatShare:
  title: 思维链提示（Chain-of-Thought Prompting）
  desc: 思维链提示（CoT）是一种引导大语言模型在给出最终答案前输出中间推理步骤的提示技术，显著提升了LLM在复杂推理任务上的表现。
  image: /logo.png
keywords: 思维链提示, Chain-of-Thought, CoT, 提示工程, 大语言模型, 推理, few-shot
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: 思维链提示（CoT）| 大语言模型推理增强
  description: 引导LLM输出中间推理步骤的提示技术，显著提升复杂推理任务表现
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 思维链提示（CoT）| 大语言模型推理增强
  description: 引导LLM输出中间推理步骤的提示技术，显著提升复杂推理任务表现
  image: /logo.png
permalink: /glossary/other/chain-of-thought-prompting/
---

# 思维链提示（Chain-of-Thought Prompting）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

思维链提示（Chain-of-Thought Prompting，简称CoT）是一种由Wei等（2022年）提出的提示工程技术，其核心思想是引导大语言模型（LLM）在回答问题之前，先生成一系列中间推理步骤，而非直接给出最终答案。这种方法显著提升了LLM在需要多步逻辑推理的复杂任务上的表现。

## 核心要素

### 基本概念
思维链提示的核心在于将复杂推理任务分解为一系列中间推理步骤，使模型在生成最终答案前显式输出推理过程。其本质是将条件概率 $P(answer|question)$ 扩展为 $P(answer|reasoning\_chain, question)$，通过引入推理链提升答案准确性。

### 技术特征
思维链提示具有三个关键特征：（1）推理过程可追溯，为模型决策提供可解释性；（2）性能随模型规模增长而提升，大模型（>100B参数）效果尤为显著；（3）支持多种触发方式，包括 few-shot 示例引导和零样本指令触发。

### 实现方法
实现思维链提示的主要途径包括：手动编写包含推理步骤的 few-shot 示例、使用"Let's think step by step"零样本触发、以及通过自洽性（Self-Consistency）多次采样取多数投票结果以提高推理稳定性。

## 核心结构

一个完整的思维链提示通常包含三个要素：

1. **指令（Instruction）**：明确任务目标和期望的输出格式
2. **推理过程（Rationale）**：中间推理步骤，包括问题的解法、中间推导和相关外部知识
3. **示例（Exemplars）**：以few-shot方式提供输入-输出对的范例，每个示例包含问题、推理过程和对应答案

## 工作原理

CoT的工作方式是通过在提示中提供包含显式推理链的少量示例（few-shot examples），教会模型在处理新问题时也生成类似的逐步推理过程。

例如，在航天器意图识别任务中，一个CoT提示示例可能如下：

> **输入**：目标持续接近我方空间站，到达最近距离后逐渐远离。目标是大型合作航天器，搭载操作机械臂。光照条件为全日照，电磁条件良好。
>
> **输出**：目标持续接近我方，到达最近距离后逐渐远离，推断运动意图为飞越（flyby）；目标是大型合作卫星且搭载机械臂，推断操作意图为加注（refuel）；基于此信息，任务意图不明确。

模型在面对新输入时，会模仿这种推理格式，先分析观测数据，再逐步推导出各层意图。

## 性能特点

- **随模型规模提升而增强**：随着模型参数量增加，CoT的回答准确率逐步提高
- **超越标准提示**：在大多数领域，CoT提示的准确率高于标准提示方法
- **在特定领域超越人类**：在某些领域（如体育知识），CoT提示的回答准确率甚至超过人类
- **可解释性**：CoT输出的推理过程提供了模型决策的可追溯路径

## 局限性

- **机制未明**：目前没有公认理论解释为什么CoT能提升模型推理能力
- **小模型挑战**：在参数量小于10B的较小模型上，CoT的效果可能受限（尽管微调可以缓解这一问题）
- **推理质量不稳定**：生成的推理过程可能包含错误或不相关的步骤

## 变体与扩展

- **自洽性（Self-Consistency）**：Wang等（2022年）提出通过多次采样和多数投票来提升CoT的回答准确率
- **最少到最多提示（Least-to-Most Prompting）**：Zhou等（2022年）提出先将复杂问题分解为子问题，再依次用CoT解决每个子问题
- **零样本CoT（Zero-shot CoT）**：直接在提示末尾添加"Let's think step by step"即可触发推理链，无需提供示例

## 在航天器意图识别中的应用

在Jing等（2025年）的研究中，CoT被用于增强LLM对航天器意图的推理能力。通过在CoT提示中提供包含推理过程的示例，模型学会了先分析轨道运动模式和目标特征，再逐步推导出运动意图、操作意图和任务意图。实验表明，CoT提示微调后的ChatGLM2-6B模型在意图识别任务上达到了99.81%的准确率。

## 应用价值
思维链提示在航天器意图识别等需要多步逻辑推理的任务中展现出显著优势。通过引导模型输出中间推理过程，CoT 使决策过程可解释、可审计，这对于空间安全等高可靠应用场景至关重要。此外，CoT 技术可与微调方法（如 LoRA、P-tuning）结合，在小参数模型上实现接近大模型的推理性能，降低在轨部署的算力需求。

## 相关概念

- [提示调优（P-tuning）](/glossary/other/prompt-tuning/)
- [航天器意图识别](/glossary/other/spacecraft-intention-recognition/)
- [低秩适配（LoRA）](/glossary/other/lora-low-rank-adaptation/)

## 参考文献

- Wei J, Wang X, Schuurmans D, et al. Chain-of-thought prompting elicits reasoning in large language models. Adv Neural Inform Proc Syst. 2022;35:24824-24837.
- Wang X, Wei J, Schuurmans D, et al. Self-consistency improves chain of thought reasoning in language models. arXiv:2203.11171, 2022.
- Zhou D, Schärli N, Hou L, et al. Least-to-most prompting enables complex reasoning in large language models. arXiv:2205.10625, 2022.
- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
