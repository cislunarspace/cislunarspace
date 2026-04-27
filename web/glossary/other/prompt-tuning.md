---
title: 提示调优（Prompt Tuning / P-tuning）
description: 提示调优是一种参数高效的微调技术，通过在输入前添加可学习的"软提示"token并冻结预训练模型权重，以极少的训练参数实现下游任务适配。
keywords: 提示调优, P-tuning, Prompt Tuning, 大语言模型, 微调, 软提示, 参数高效
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: 提示调优（P-tuning）| 大模型高效微调
  description: 通过可学习的软提示token实现参数高效的大模型微调
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 提示调优（P-tuning）| 大模型高效微调
  description: 通过可学习的软提示token实现参数高效的大模型微调
  image: /logo.png
permalink: /glossary/prompt-tuning/
---

# 提示调优（Prompt Tuning / P-tuning）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

提示调优（Prompt Tuning）是一类参数高效微调（PEFT）技术，其核心思想是在模型输入前添加一组可学习的连续向量（称为"软提示"，soft prompt），同时冻结预训练模型的原始权重，仅训练软提示的参数。通过这种方式，模型可以在不修改自身参数的情况下，适应不同的下游任务。

P-tuning是提示调优的一种重要变体，由Liu等提出。P-tuning V2（2021年）是其改进版本，在多个尺度和任务上都能达到与全量微调相当的性能。

## P-tuning V2 原理

P-tuning V2的工作流程如下：

1. **输入处理**：将输入文本 $X$ 经过分词（tokenization）和嵌入（embedding）转换为向量序列 $\{h_1, h_2, ..., h_n\}$
2. **添加软提示**：在输入向量前拼接128个可学习的软提示token $S_1, S_2, ..., S_{128}$
3. **逐层嵌入**：在LLM的每一层中构建与软提示token对应的可训练嵌入参数
4. **训练**：仅更新软提示token和逐层嵌入的参数，原始模型权重 $\Phi_0$ 保持不变

输入模板为：

$$
T_{\text{input}} = \{S_1, S_2, \ldots, S_{128}, h_1, h_2, \ldots, h_n\}
$$

最终模型参数为原始参数与新增参数的组合：

$$
\Phi = \Phi_0 + \Delta\phi
$$

其中 $\Delta\phi$ 是通过训练优化的新增参数。

## 与硬提示的区别

提示调优中的"软提示"与常见的"硬提示"（hard prompt，即自然语言文本提示）有本质区别：

| 特征 | 硬提示（Hard Prompt） | 软提示（Soft Prompt） |
|------|----------------------|----------------------|
| 形式 | 自然语言文本 | 连续向量空间中的可学习参数 |
| 优化方式 | 人工设计或搜索 | 梯度下降自动优化 |
| 表达能力 | 受限于词表中的离散token | 可表示词表中不存在的连续语义 |
| 适用场景 | 通用交互、零样本推理 | 特定任务的高效适配 |

## 与全量微调和LoRA的对比

| 特征 | 全量微调 | P-tuning V2 | LoRA |
|------|----------|-------------|------|
| 可训练参数量 | 100% | <1% | 0.1%–3% |
| 修改位置 | 所有层 | 输入层 + 逐层嵌入 | 目标层权重矩阵 |
| 推理开销 | 无 | 额外处理软提示token | 无（合并后） |
| 典型模型 | 任意 | ChatGLM2-6B | ChatGLM3-6B |

## 在航天器意图识别中的应用

在Jing等（2025年）的研究中，P-tuning V2被用于微调ChatGLM2-6B模型。训练使用128个软提示token、学习率0.02、最大输入长度256个token、最大输出长度128个token。实验结果表明：

- P-tuning V2微调的ChatGLM2-6B在CoT提示条件下达到了**99.81%**的准确率
- 相比基础模型，准确率显著提升
- CoT提示微调后的模型在鲁棒性测试中表现最优，标准偏差接近基础模型

## 相关概念

- [低秩适配（LoRA）](/glossary/lora-low-rank-adaptation/)
- [思维链提示（CoT）](/glossary/chain-of-thought-prompting/)
- [航天器意图识别](/glossary/spacecraft-intention-recognition/)

## 参考文献

- Liu X, Ji K, Fu Y, et al. P-tuning v2: Prompt tuning can be comparable to fine-tuning universally across scales and tasks. arXiv:2110.07602, 2021.
- Liu P, Yuan W, Fu J, et al. Pretrain, prompt, and predict: A systematic survey of prompting methods in natural language processing. ACM Comput Surv. 2023;55(9):1-35.
- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
