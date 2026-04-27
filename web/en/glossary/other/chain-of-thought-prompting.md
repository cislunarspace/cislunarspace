---
title: Chain-of-Thought (CoT) Prompting
description: Chain-of-Thought prompting is a technique that encourages LLMs to produce intermediate reasoning steps before giving a final answer, significantly improving performance on complex reasoning tasks.
keywords: chain-of-thought prompting, CoT, prompt engineering, large language model, reasoning, few-shot
author: CislunarSpace
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: Chain-of-Thought (CoT) Prompting | LLM Reasoning Enhancement
  description: A prompting technique that guides LLMs to output intermediate reasoning steps, improving complex reasoning performance
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Chain-of-Thought (CoT) Prompting | LLM Reasoning Enhancement
  description: A prompting technique that guides LLMs to output intermediate reasoning steps, improving complex reasoning performance
  image: /logo.png
permalink: /en/glossary/chain-of-thought-prompting/
---

# Chain-of-Thought (CoT) Prompting

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Chain-of-Thought (CoT) Prompting is a prompt engineering technique proposed by Wei et al. (2022) that encourages Large Language Models (LLMs) to generate a series of intermediate reasoning steps before producing a final answer, rather than jumping directly to the conclusion. This approach significantly improves LLM performance on complex tasks requiring multi-step logical reasoning.

## Core Structure

A complete CoT prompt typically comprises three elements:

1. **Instruction**: Specifies the task objective and desired output format
2. **Rationale**: The intermediate reasoning process, including solutions, inference steps, and relevant external knowledge
3. **Exemplars**: Few-shot input-output pairs, each consisting of a question, the reasoning process, and the corresponding answer

## How It Works

CoT works by providing a small number of examples with explicit reasoning chains in the prompt, teaching the model to generate similar step-by-step reasoning when processing new questions.

For example, in a spacecraft intention recognition task, a CoT prompt example might be:

> **Input**: The target continuously approaches our space station, reaches the closest distance, then gradually moves away. The target is a large cooperative spacecraft equipped with an operating robotic arm. Lighting condition is full sunlight; electromagnetic condition is optimal.
>
> **Output**: The target continuously approaches us, reaches the closest distance, then gradually moves away. The inferred Movement Intention is flyby; the target is a large cooperative satellite with a robotic arm, and inferred Operation Intention is refuel; based on this information, the Task intention is unclear.

When facing new inputs, the model mimics this reasoning format, analyzing observation data first and then progressively deriving intentions at each level.

## Performance Characteristics

- **Scales with model size**: As model parameters increase, CoT answer accuracy progressively improves
- **Outperforms standard prompts**: In most domains, CoT accuracy exceeds standard prompting methods
- **Exceeds human performance in some domains**: In certain areas (e.g., sports knowledge), CoT accuracy surpasses human performance
- **Interpretability**: The reasoning process output provides a traceable path for model decisions

## Limitations

- **Unknown mechanism**: No universally accepted theory explains why CoT improves model reasoning ability
- **Small model challenges**: CoT effectiveness may be limited on smaller models with fewer than 10B parameters (though fine-tuning can mitigate this)
- **Unstable reasoning quality**: Generated reasoning may contain errors or irrelevant steps

## Variants and Extensions

- **Self-Consistency**: Wang et al. (2022) proposed using multiple sampling and majority voting to improve CoT answer accuracy
- **Least-to-Most Prompting**: Zhou et al. (2022) proposed first decomposing complex problems into subproblems, then solving each sequentially with CoT
- **Zero-shot CoT**: Simply appending "Let's think step by step" to the prompt triggers reasoning chains without providing examples

## Application in Spacecraft Intention Recognition

In the study by Jing et al. (2025), CoT was used to enhance LLM reasoning capabilities for spacecraft intention recognition. By providing examples with reasoning processes in CoT prompts, the model learned to first analyze orbital motion patterns and target characteristics, then progressively derive motion intentions, operation intentions, and task intentions. Experiments showed that the CoT-prompt-fine-tuned ChatGLM2-6B model achieved 99.81% accuracy on the intention recognition task.

## Related Concepts

- [Prompt Tuning (P-tuning)](/en/glossary/prompt-tuning/)
- [Spacecraft Intention Recognition](/en/glossary/spacecraft-intention-recognition/)
- [Low-Rank Adaptation (LoRA)](/en/glossary/lora-low-rank-adaptation/)

## References

- Wei J, Wang X, Schuurmans D, et al. Chain-of-thought prompting elicits reasoning in large language models. Adv Neural Inform Proc Syst. 2022;35:24824-24837.
- Wang X, Wei J, Schuurmans D, et al. Self-consistency improves chain of thought reasoning in language models. arXiv:2203.11171, 2022.
- Zhou D, Schärli N, Hou L, et al. Least-to-most prompting enables complex reasoning in large language models. arXiv:2205.10625, 2022.
- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
