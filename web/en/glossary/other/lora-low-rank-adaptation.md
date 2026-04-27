---
title: Low-Rank Adaptation (LoRA)
description: Low-Rank Adaptation (LoRA) is a parameter-efficient fine-tuning method that freezes pretrained weights and injects trainable low-rank decomposition matrices, training only a fraction of parameters to achieve near full fine-tuning performance.
keywords: Low-Rank Adaptation, LoRA, large language model, fine-tuning, parameter-efficient, PEFT
author: CislunarSpace
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: Low-Rank Adaptation (LoRA) | Efficient LLM Fine-Tuning
  description: Parameter-efficient LLM fine-tuning via low-rank matrix decomposition
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Low-Rank Adaptation (LoRA) | Efficient LLM Fine-Tuning
  description: Parameter-efficient LLM fine-tuning via low-rank matrix decomposition
  image: /logo.png
permalink: /en/glossary/lora-low-rank-adaptation/
---

# Low-Rank Adaptation (LoRA)

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Low-Rank Adaptation (LoRA) is a Parameter-Efficient Fine-Tuning (PEFT) method proposed by Hu et al. (2021). The core idea of LoRA is that the weight updates in a pretrained model can be effectively approximated by a low-rank matrix. By freezing the original pretrained weights and injecting a pair of trainable low-rank decomposition matrices into each Transformer layer, LoRA achieves performance comparable to full fine-tuning while training only 0.1%–3% of the original model parameters.

## Mathematical Principle

Given a pretrained weight matrix $\Phi_0 \in \mathbb{R}^{d \times k}$ at some layer, LoRA decomposes the parameter update $\Delta\phi$ into a product of two low-rank matrices:

$$
\Delta\phi = AB
$$

where $A \in \mathbb{R}^{d \times r}$, $B \in \mathbb{R}^{r \times k}$, and rank $r \ll \min(d, k)$.

The forward pass becomes:

$$
Y = X(\Phi_0 + \Delta\phi) = X\Phi_0 + XAB
$$

Since $r$ is much smaller than $d$ and $k$, the number of trainable parameters is dramatically reduced. For example, with $d = k = 4096$ and $r = 8$, the original layer has ~16.8M parameters, while LoRA requires training only ~65K parameters (~0.4%).

## Training Process

LoRA training follows these steps:

1. **Freeze pretrained weights**: All original parameters $\Phi_0$ remain unchanged
2. **Inject low-rank matrices**: Add trainable $A$ and $B$ matrices to each target layer (typically Q, K, V, O projection matrices in attention layers)
3. **Initialization**: $A$ is typically initialized with Gaussian random values, $B$ is initialized to zero, ensuring $\Delta\phi = AB = 0$ at the start of training
4. **Training**: Only $A$ and $B$ parameters are updated using standard gradient descent
5. **Inference merging**: After training, merge $AB$ into the original weights: $\Phi = \Phi_0 + AB$, introducing no additional inference latency

## Comparison with Full Fine-Tuning

| Feature | Full Fine-Tuning | LoRA |
|---------|-----------------|------|
| Trainable parameters | 100% | 0.1%–3% |
| Memory requirements | High | Low |
| Training speed | Slow | Fast |
| Inference latency | No additional delay | No additional delay (after merging) |
| Multi-task support | Requires multiple full model copies | Different low-rank matrices per task |
| Performance | Optimal | Near full fine-tuning |

## Comparison with P-tuning V2

Both LoRA and P-tuning V2 are parameter-efficient fine-tuning methods, but they differ in strategy:

| Feature | LoRA | P-tuning V2 |
|---------|------|-------------|
| Parameter modification | Constructs low-rank matrices externally | Adds soft prompts and embedding layers internally |
| Modification location | Weight matrices at each target layer | Virtual prompts before input + embeddings at each layer |
| Inference | No overhead after weight merging | Requires processing additional soft prompt tokens |
| Typical application | ChatGLM3-6B fine-tuning | ChatGLM2-6B fine-tuning |

## Application in Spacecraft Intention Recognition

In the study by Jing et al. (2025), LoRA was used to fine-tune the ChatGLM3-6B model for spacecraft intention recognition. The experiment used LoRA rank $r = 8$ and scaling factor 32, training for only ~3,000 iterations. Results showed:

- The LoRA-fine-tuned ChatGLM3-6B achieved **99.90%** accuracy under instruction prompts, the highest among all tested models
- Accuracy improved by 83.94% compared to the base model
- Robustness was close to the base model, with standard deviation increasing by only 1.25x

## Related Concepts

- [Prompt Tuning (P-tuning)](/en/glossary/prompt-tuning/)
- [Chain-of-Thought (CoT) Prompting](/en/glossary/chain-of-thought-prompting/)
- [Spacecraft Intention Recognition](/en/glossary/spacecraft-intention-recognition/)

## References

- Hu E J, Shen Y, Wallis P, et al. LoRA: Low-rank adaptation of large language models. arXiv:2106.09685, 2021.
- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
- Ling C, Zhao X, Lu J, et al. Domain specialization as the key to make large language models disruptive: A comprehensive survey. arXiv:2305.18703, 2023.
