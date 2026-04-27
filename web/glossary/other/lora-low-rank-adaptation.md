---
title: 低秩适配（LoRA — Low-Rank Adaptation）
description: 低秩适配（LoRA）是一种参数高效的大模型微调方法，通过冻结预训练权重并注入可训练的低秩分解矩阵，仅训练极少量参数即可实现接近全量微调的效果。
keywords: 低秩适配, LoRA, Low-Rank Adaptation, 大语言模型, 微调, 参数高效, PEFT
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: 低秩适配（LoRA）| 大模型高效微调
  description: 通过低秩矩阵分解实现参数高效的大模型微调方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 低秩适配（LoRA）| 大模型高效微调
  description: 通过低秩矩阵分解实现参数高效的大模型微调方法
  image: /logo.png
permalink: /glossary/lora-low-rank-adaptation/
---

# 低秩适配（LoRA — Low-Rank Adaptation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

低秩适配（Low-Rank Adaptation，简称LoRA）是由Hu等（2021年）提出的一种参数高效微调（Parameter-Efficient Fine-Tuning，PEFT）方法。LoRA的核心思想是：预训练模型的参数更新可以用一个低秩矩阵来有效近似。通过冻结预训练模型的原始权重，仅在每个Transformer层中注入一对可训练的低秩分解矩阵，LoRA能够在仅训练0.1%–3%原始模型参数的情况下，达到与全量微调（Full Fine-Tuning）相近的性能。

## 数学原理

设预训练模型的某一层权重矩阵为 $\Phi_0 \in \mathbb{R}^{d \times k}$，LoRA将参数更新 $\Delta\phi$ 分解为两个低秩矩阵的乘积：

$$
\Delta\phi = AB
$$

其中 $A \in \mathbb{R}^{d \times r}$，$B \in \mathbb{R}^{r \times k}$，且秩 $r \ll \min(d, k)$。

前向传播变为：

$$
Y = X(\Phi_0 + \Delta\phi) = X\Phi_0 + XAB
$$

由于 $r$ 远小于 $d$ 和 $k$，需要训练的参数量大幅减少。例如，当 $d = k = 4096$，$r = 8$ 时，原始层有约1680万个参数，而LoRA仅需训练约6.5万个参数（约0.4%）。

## 训练流程

LoRA的训练分为以下步骤：

1. **冻结预训练权重**：预训练模型的所有原始参数 $\Phi_0$ 保持不变
2. **注入低秩矩阵**：在每个目标层（通常是注意力层的Q、K、V、O投影矩阵）添加可训练的 $A$ 和 $B$ 矩阵
3. **初始化**：$A$ 通常用高斯随机初始化，$B$ 初始化为零矩阵，确保训练开始时 $\Delta\phi = AB = 0$
4. **训练**：仅更新 $A$ 和 $B$ 的参数，使用标准的梯度下降优化
5. **推理合并**：训练完成后，将 $AB$ 合并到原始权重中：$\Phi = \Phi_0 + AB$，不引入额外的推理延迟

## 与全量微调的对比

| 特征 | 全量微调 | LoRA |
|------|----------|------|
| 可训练参数量 | 100% | 0.1%–3% |
| 显存需求 | 高 | 低 |
| 训练速度 | 慢 | 快 |
| 推理延迟 | 无额外延迟 | 无额外延迟（合并后） |
| 多任务支持 | 需要多个完整模型副本 | 可为不同任务训练不同的低秩矩阵 |
| 性能 | 最优 | 接近全量微调 |

## 与P-tuning V2的对比

LoRA和P-tuning V2都属于参数高效微调方法，但策略不同：

| 特征 | LoRA | P-tuning V2 |
|------|------|-------------|
| 参数修改方式 | 在模型外部构建低秩矩阵 | 在模型内部添加软提示和嵌入层 |
| 修改位置 | 每个目标层的权重矩阵 | 输入层前的虚拟提示 + 各层嵌入 |
| 推理方式 | 合并权重后无额外开销 | 需要处理额外的软提示token |
| 典型应用 | ChatGLM3-6B微调 | ChatGLM2-6B微调 |

## 在航天器意图识别中的应用

在Jing等（2025年）的研究中，LoRA被用于微调ChatGLM3-6B模型以执行航天器意图识别任务。实验使用LoRA秩 $r = 8$、缩放因子32，仅训练了约3,000轮迭代。结果表明：

- LoRA微调的ChatGLM3-6B在指令提示条件下达到了**99.90%**的准确率，是所有测试模型中的最高值
- 相比基础模型，准确率提升了83.94%
- 鲁棒性接近基础模型，标准偏差仅增加1.25倍

## 相关概念

- [提示调优（P-tuning）](/glossary/prompt-tuning/)
- [思维链提示（CoT）](/glossary/chain-of-thought-prompting/)
- [航天器意图识别](/glossary/spacecraft-intention-recognition/)

## 参考文献

- Hu E J, Shen Y, Wallis P, et al. LoRA: Low-rank adaptation of large language models. arXiv:2106.09685, 2021.
- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
- Ling C, Zhao X, Lu J, et al. Domain specialization as the key to make large language models disruptive: A comprehensive survey. arXiv:2305.18703, 2023.
