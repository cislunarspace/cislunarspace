---
title: 航天器意图识别（Spacecraft Intention Recognition）
description: 航天器意图识别是通过观测目标航天器的轨道行为、搭载设备和环境条件，推断其目的或任务的技术，是空间态势感知和安全预警的重要研究方向。
keywords: 航天器意图识别, 意图识别, 非合作目标, 大语言模型, 空间态势感知, 运动意图, 操作意图, 任务意图
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: 航天器意图识别（Spacecraft Intention Recognition）| 空间安全
  description: 通过观测目标航天器的轨道行为和环境条件推断其目的或任务的技术
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 航天器意图识别（Spacecraft Intention Recognition）| 空间安全
  description: 通过观测目标航天器的轨道行为和环境条件推断其目的或任务的技术
  image: /logo.png
permalink: /glossary/spacecraft-intention-recognition/
---

# 航天器意图识别（Spacecraft Intention Recognition）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

航天器意图识别（Spacecraft Intention Recognition）是指通过观测目标航天器的轨道运动行为、搭载设备类型、环境光照和电磁条件等多源信息，推断该航天器所要达成的目的或执行的任务的技术。它是空间态势感知（SSA）和空间安全预警的重要研究方向，旨在为操作航天器提供威胁评估和决策支持。

传统的空间威胁评估主要依赖最小距离等几何指标，无法区分目标的真实意图。航天器意图识别将威胁评估从"是否接近"提升到"为什么接近"的层面。

## 意图分类框架

Jing等（2025年）在空间站运行安全场景下，提出了一个航天器意图分类框架，将意图分为3大类、23种子类型。**需要说明的是，这是目前学术界提出的一种分类方案，并非广泛共识的标准分类。**

### 运动意图（Motion Intentions）

描述目标航天器相对于操作航天器的轨道运动模式：

| 意图 | 英文 | 描述 |
|------|------|------|
| 悬停 | Hovering | 目标保持恒定相对距离，相对速度为零 |
| 飞越 | Flyby | 相对距离先减小后增大，但不为零 |
| 绕飞 | Flyaround | 相对距离不为零，在窄范围内波动 |
| 交会 | Rendezvous | 相对距离和相对速度均为零 |
| 碰撞 | Collision | 相对距离为零，相对速度非零 |
| 撤离 | Retreat | 原本碰撞的目标经轨道机动远离 |
| 随机 | Randomness | 意图不明确或随时间变化 |

### 操作意图（Operation Intentions）

描述目标航天器可能执行的具体操作行为：

| 意图 | 英文 | 描述 |
|------|------|------|
| 对接 | Docking | 通过机械臂或对接机构实现结构连接 |
| 加注 | Refueling | 为操作航天器注入燃料 |
| 维修 | Repair | 更换或添加设备部件 |
| 抓取 | Grabbing | 通过机械臂或飞爪附着于操作航天器 |
| 拍照 | Photograph | 通过相机近距离拍摄操作航天器 |
| 通信 | Communication | 发射电磁信号与操作航天器通信 |

### 任务意图（Task Intentions）

综合运动意图和操作意图，描述目标的整体任务目的：

| 意图 | 英文 | 描述 |
|------|------|------|
| 探测 | Detection | 非合作目标，悬停+绕飞，拍照+信息收集 |
| 监视 | Surveillance | 合作目标，类似探测但目标为合作性质 |
| 干扰 | Interference | 非合作目标，悬停+交会+绕飞，抓取+电磁干扰 |
| 协商 | Negotiation | 悬停+绕飞，通信 |
| 观测 | Observation | 类似探测但无操作意图 |
| 协助 | Assistance | 合作目标，交会+维修 |
| 威慑 | Deterrence | 非合作目标，反复执行多种运动意图 |
| 支援 | Support | 合作目标，悬停+绕飞，无操作意图 |
| 实验 | Experiment | 合作目标，搭载实验设备 |
| 攻击 | Attack | 非合作目标，碰撞，无操作意图 |

## 基于LLM的识别方法

Jing等（2025年）提出了一种基于大语言模型（LLM）的航天器意图识别方法，核心思路是将多源传感器信息转化为文本输入，利用LLM的逻辑推理能力进行意图判断。

### 方法框架

1. **意图词汇构建**：定义3大类23种意图词汇，形成航天器意图语料库
2. **提示元素设计**：将场景信息提炼为4类7种提示元素（操作航天器信息、目标信息、环境条件、轨道运动特征）
3. **提示模板设计**：基于提示工程原则构建标准化输入模板
4. **测试样本生成**：通过计算机仿真生成50,688个标称样本和8,448个扰动样本
5. **模型微调**：使用P-tuning V2和LoRA对ChatGLM2-6B和ChatGLM3-6B进行微调

### 提示策略

测试了3种提示条件：

- **基础提示**（Basic Prompt）：仅包含问题和已知信息
- **指令提示**（Instruction Prompt）：在基础提示上添加所有可能的答案选项，指令引导LLM从中选择
- **思维链提示**（CoT Prompt）：要求LLM输出推理过程，包含指令、推理步骤和示例

### 实验结果

| 模型 | 提示类型 | 准确率 |
|------|----------|--------|
| ChatGLM2-6B 基础模型 | 基础/指令/CoT | 较低（<50%） |
| ChatGLM2-6B + P-tuning V2 | CoT | 99.81% |
| ChatGLM3-6B 基础模型 | CoT | 优于ChatGLM2-6B |
| **ChatGLM3-6B + LoRA** | **指令** | **99.90%** |

微调后的模型在准确率上相比基础模型提升了58.66%–83.94%，但鲁棒性有所下降。

## 应用场景

- **空间站安全预警**：识别接近空间站的非合作目标的意图，为规避决策提供依据
- **空间态势感知**：在编目大量在轨物体的基础上，进一步判断其行为目的
- **在轨服务规划**：理解合作/非合作目标的状态，辅助服务任务设计
- **空间攻防对抗**：在军事场景下评估潜在威胁目标的意图

## 相关概念

- [非合作目标](/glossary/noncooperative-target/)
- [CW方程（Clohessy-Wiltshire）](/glossary/clohessy-wiltshire/)
- [思维链提示（CoT）](/glossary/chain-of-thought-prompting/)
- [低秩适配（LoRA）](/glossary/lora-low-rank-adaptation/)
- [提示调优（P-tuning）](/glossary/prompt-tuning/)
- [太空交通管控（STM）](/glossary/space-traffic-management/)

## 参考文献

- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
- Sun Q, Dang Z. Deep neural network for non-cooperative space target intention recognition. Aerosp Sci Technol. 2023;142:108681.
- Yang Z, Shi P, Zhou T, Li W-L. Intention recognition method of space non-cooperative target based on fuzzy reasoning. J Beijing Univ Aeronaut Astronaut. 2024.
- Qi P, et al. A method and system for intent analysis of non cooperative target spacecraft. Patent 202310735989.X, 2023.
