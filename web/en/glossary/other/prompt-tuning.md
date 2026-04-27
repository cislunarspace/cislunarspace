---
title: Prompt Tuning (P-tuning)
description: Prompt Tuning is a parameter-efficient fine-tuning technique that prepends learnable "soft prompt" tokens to the input embedding while freezing pretrained model weights, adapting to downstream tasks with minimal trainable parameters.
keywords: prompt tuning, P-tuning, large language model, fine-tuning, soft prompt, parameter-efficient
author: CislunarSpace
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: Prompt Tuning (P-tuning) | Efficient LLM Fine-Tuning
  description: Parameter-efficient LLM fine-tuning via learnable soft prompt tokens
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Prompt Tuning (P-tuning) | Efficient LLM Fine-Tuning
  description: Parameter-efficient LLM fine-tuning via learnable soft prompt tokens
  image: /logo.png
permalink: /en/glossary/prompt-tuning/
---

# Prompt Tuning (P-tuning)

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Prompt Tuning is a family of Parameter-Efficient Fine-Tuning (PEFT) techniques. The core idea is to prepend a set of learnable continuous vectors (called "soft prompts") to the model input, while freezing the original pretrained model weights. Only the soft prompt parameters are trained, allowing the model to adapt to different downstream tasks without modifying its own parameters.

P-tuning is an important variant of prompt tuning, proposed by Liu et al. P-tuning V2 (2021) is an improved version that achieves performance comparable to full fine-tuning across multiple scales and tasks.

## P-tuning V2 Principle

The P-tuning V2 workflow is as follows:

1. **Input processing**: Convert input text $X$ through tokenization and embedding into a vector sequence $\{h_1, h_2, ..., h_n\}$
2. **Add soft prompts**: Prepend 128 learnable soft prompt tokens $S_1, S_2, ..., S_{128}$ before the input vectors
3. **Layer-wise embeddings**: Construct trainable embedding parameters corresponding to soft prompt tokens at each layer of the LLM
4. **Training**: Only update soft prompt tokens and layer-wise embedding parameters; original model weights $\Phi_0$ remain unchanged

The input template is:

$$
T_{\text{input}} = \{S_1, S_2, \ldots, S_{128}, h_1, h_2, \ldots, h_n\}
$$

The final model parameters combine original and new parameters:

$$
\Phi = \Phi_0 + \Delta\phi
$$

where $\Delta\phi$ consists of the trained new parameters.

## Soft Prompts vs. Hard Prompts

The "soft prompts" in prompt tuning are fundamentally different from "hard prompts" (natural language text prompts):

| Feature | Hard Prompt | Soft Prompt |
|---------|------------|-------------|
| Form | Natural language text | Learnable parameters in continuous vector space |
| Optimization | Manual design or search | Automatic optimization via gradient descent |
| Expressiveness | Limited to discrete tokens in vocabulary | Can represent continuous semantics not in vocabulary |
| Use cases | General interaction, zero-shot inference | Efficient task-specific adaptation |

## Comparison with Full Fine-Tuning and LoRA

| Feature | Full Fine-Tuning | P-tuning V2 | LoRA |
|---------|-----------------|-------------|------|
| Trainable parameters | 100% | <1% | 0.1%–3% |
| Modification location | All layers | Input layer + layer-wise embeddings | Target layer weight matrices |
| Inference overhead | None | Additional processing for soft prompt tokens | None (after merging) |
| Typical model | Any | ChatGLM2-6B | ChatGLM3-6B |

## Application in Spacecraft Intention Recognition

In the study by Jing et al. (2025), P-tuning V2 was used to fine-tune the ChatGLM2-6B model. Training used 128 soft prompt tokens, learning rate 0.02, max input length 256 tokens, and max output length 128 tokens. Results showed:

- The P-tuning V2-fine-tuned ChatGLM2-6B achieved **99.81%** accuracy under CoT prompts
- Accuracy improved significantly compared to the base model
- The CoT-prompt-fine-tuned model showed the best robustness in perturbation tests, with standard deviation close to the base model

## Related Concepts

- [Low-Rank Adaptation (LoRA)](/en/glossary/lora-low-rank-adaptation/)
- [Chain-of-Thought (CoT) Prompting](/en/glossary/chain-of-thought-prompting/)
- [Spacecraft Intention Recognition](/en/glossary/spacecraft-intention-recognition/)

## References

- Liu X, Ji K, Fu Y, et al. P-tuning v2: Prompt tuning can be comparable to fine-tuning universally across scales and tasks. arXiv:2110.07602, 2021.
- Liu P, Yuan W, Fu J, et al. Pretrain, prompt, and predict: A systematic survey of prompting methods in natural language processing. ACM Comput Surv. 2023;55(9):1-35.
- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
