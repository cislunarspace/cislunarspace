# Design: Add Intention Recognition Paper Terms to Glossary

**Date:** 2026-04-27
**Source:** Jing et al. (2025) "Intention Recognition of Space Noncooperative Targets Using Large Language Models"

## Overview

Extract 6 key technical terms from the Jing et al. (2025) paper on LLM-based spacecraft intention recognition, and add them as bilingual glossary entries to the cislunarspace knowledge base.

## New Entries

### 1. 航天器意图识别 (Spacecraft Intention Recognition)

- **Category:** 其他技术 (`other/`)
- **Slug:** `spacecraft-intention-recognition`
- **Content:**
  - Definition: the process of inferring the purpose/goal of a target spacecraft by observing its orbital behavior, carried devices, and environmental context
  - Brief overview of the 3-category taxonomy (motion/operation/task intentions) from Jing et al. (2025), noting this is one proposed framework, not universally accepted
  - List the 23 intention subtypes with one-line descriptions
  - Mention LLM-based approach (ChatGLM + fine-tuning) achieving 99.9% accuracy
  - Applications: space station threat warning, space situational awareness
  - Cross-references: 非合作目标, CW方程, 思维链提示, 低秩适配, 提示调优

### 2. 非合作目标 (Noncooperative Target)

- **Category:** 其他技术 (`other/`)
- **Slug:** `noncooperative-target`
- **Content:**
  - Definition: a space object (abandoned satellite, debris, unidentified spacecraft) that does not cooperate with operational spacecraft or share intent/trajectory information
  - Distinction from cooperative targets
  - Threat to space safety and space station operations
  - Intentions can include surveillance, interference, attack, etc.
  - Cross-references: 航天器意图识别, 空间交通管理

### 3. 思维链提示 (Chain-of-Thought Prompting)

- **Category:** 其他技术 (`other/`)
- **Slug:** `chain-of-thought-prompting`
- **Content:**
  - Definition: a prompting technique that encourages LLMs to produce intermediate reasoning steps before giving a final answer
  - Core structure: instruction + rationale + exemplars
  - How it works: provide few-shot examples with explicit reasoning chains; the model generates analogous reasoning for new queries
  - Benefits: significantly improves accuracy on complex reasoning tasks
  - Limitations: not well understood why it works; challenges with smaller models (<10B parameters)
  - Application in spacecraft intention recognition: used to enhance LLM reasoning about target intentions from multi-source information
  - Variants: self-consistency (majority voting), least-to-most prompting (problem decomposition)
  - Cross-references: 提示调优, 航天器意图识别

### 4. 低秩适配 (LoRA — Low-Rank Adaptation)

- **Category:** 其他技术 (`other/`)
- **Slug:** `lora-low-rank-adaptation`
- **Content:**
  - Definition: a parameter-efficient fine-tuning method that freezes pretrained model weights and injects trainable low-rank decomposition matrices into each layer
  - Key formula: Δφ = AB, where A ∈ R^{d×r}, B ∈ R^{r×k}, r << min(d,k)
  - Typically trains only 0.1%–3% of original model parameters
  - Advantages: reduced memory, faster training, no additional inference latency after merging
  - Application: fine-tuning ChatGLM3-6B for spacecraft intention recognition achieved 99.9% accuracy
  - Comparison with P-tuning V2: LoRA constructs Δφ externally; P-tuning V2 constructs it internally within the model
  - Cross-references: 提示调优, 航天器意图识别

### 5. 提示调优 (Prompt Tuning / P-tuning)

- **Category:** 其他技术 (`other/`)
- **Slug:** `prompt-tuning`
- **Content:**
  - Definition: a parameter-efficient fine-tuning technique that prepends learnable "soft prompt" tokens to the input embedding, keeping the pretrained model weights frozen
  - P-tuning V2 variant: adds soft prompt tokens (128 tokens) before input and constructs corresponding trainable embedding neurons in each layer of the LLM
  - Formula: T_input = {S_1, S_2, ..., S_128, h_1, h_2, ..., h_n}
  - Only the soft prompt parameters are trained; original model parameters remain fixed
  - Comparison with full fine-tuning: much lower memory and compute requirements
  - Application: fine-tuning ChatGLM2-6B for spacecraft intention recognition achieved 99.81% accuracy with CoT prompts
  - Cross-references: 低秩适配, 思维链提示, 航天器意图识别

### 6. CW方程 (Clohessy-Wiltshire Equation)

- **Category:** 动力学与数学基础 (`dynamics/`)
- **Slug:** `clohessy-wiltshire`
- **Content:**
  - Definition: linearized equations of relative orbital motion between two spacecraft, derived from the Hill-Clohessy-Wiltshire framework
  - Mathematical formulation (6 state equations in LVLH frame)
  - Assumptions: circular reference orbit, small relative distances, two-body gravitational field
  - Applications: spacecraft rendezvous, proximity operations, formation flying, intention recognition (modeling expected trajectories)
  - Historical context: derived by Clohessy and Wiltshire (1960) based on Hill's equations (1878)
  - Cross-references: CR3BP (related but different: CW is two-body linearized; CR3BP is three-body)

## Files to Create

| # | Path (Chinese) | Path (English) |
|---|----------------|----------------|
| 1 | `web/glossary/other/spacecraft-intention-recognition.md` | `web/en/glossary/other/spacecraft-intention-recognition.md` |
| 2 | `web/glossary/other/noncooperative-target.md` | `web/en/glossary/other/noncooperative-target.md` |
| 3 | `web/glossary/other/chain-of-thought-prompting.md` | `web/en/glossary/other/chain-of-thought-prompting.md` |
| 4 | `web/glossary/other/lora-low-rank-adaptation.md` | `web/en/glossary/other/lora-low-rank-adaptation.md` |
| 5 | `web/glossary/other/prompt-tuning.md` | `web/en/glossary/other/prompt-tuning.md` |
| 6 | `web/glossary/dynamics/clohessy-wiltshire.md` | `web/en/glossary/dynamics/clohessy-wiltshire.md` |

**Total: 12 new files** (6 Chinese + 6 English)

## Files to Modify

| File | Change |
|------|--------|
| `web/.vuepress/sidebar.ts` | Add 5 entries to "其他技术" children, 1 entry to "动力学与数学基础" children |
| `web/.vuepress/sidebar-en.ts` | Add 5 entries to "Other" children, 1 entry to "Dynamics models" children |
| `web/glossary/README.md` | Add links to new entries in the index |
| `web/en/glossary/README.md` | Add links to new entries in the English index |

## Entry Template

Each entry follows the existing glossary format:

```yaml
---
title: 中文名称(English Name)
description: Brief Chinese description for SEO
keywords: keyword1, keyword2, keyword3
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: 中文名称(English Name)
  description: Brief description
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 中文名称(English Name)
  description: Brief description
  image: /logo.png
permalink: /glossary/<slug>/
---
```

Body sections:
1. `# 中文名称 (English Name)`
2. Author/site blockquote
3. `## 定义` — concise definition
4. `## <topic sections>` — detailed explanation
5. `## 相关概念` — cross-references to other glossary entries
6. `## 参考文献` — citations

## Source Reference

Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:Article 0271. https://doi.org/10.34133/space.0271
