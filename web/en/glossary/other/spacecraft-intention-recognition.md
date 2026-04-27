---
title: Spacecraft Intention Recognition
description: Spacecraft intention recognition is the process of inferring the purpose or mission of a target spacecraft by observing its orbital behavior, carried devices, and environmental context.
keywords: spacecraft intention recognition, intention recognition, noncooperative target, large language model, space situational awareness, motion intention, operation intention, task intention
author: CislunarSpace
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: Spacecraft Intention Recognition | Space Security
  description: Inferring the purpose of a target spacecraft from its orbital behavior and environmental context
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Spacecraft Intention Recognition | Space Security
  description: Inferring the purpose of a target spacecraft from its orbital behavior and environmental context
  image: /logo.png
permalink: /en/glossary/spacecraft-intention-recognition/
---

# Spacecraft Intention Recognition

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Spacecraft Intention Recognition is the process of inferring the purpose or mission of a target spacecraft by analyzing its orbital motion behavior, carried equipment types, environmental lighting and electromagnetic conditions, and other multi-source information. It is an important research direction in Space Situational Awareness (SSA) and space safety early warning, aiming to provide threat assessment and decision support for operational spacecraft.

Traditional space threat assessment primarily relies on geometric indicators such as minimum distance, which cannot distinguish the true intent of a target. Spacecraft intention recognition elevates threat assessment from "whether it is approaching" to "why it is approaching."

## Intention Classification Framework

Jing et al. (2025) proposed an intention classification framework in the context of space station operational safety, categorizing intentions into 3 major types and 23 subtypes. **Note: This is one proposed classification scheme in the academic literature, not a universally accepted standard.**

### Motion Intentions

Describe the orbital motion pattern of the target spacecraft relative to the operational spacecraft:

| Intention | Description |
|-----------|-------------|
| Hovering | Target maintains constant relative distance with zero relative velocity |
| Flyby | Relative distance decreases then increases, but never reaches zero |
| Flyaround | Relative distance is non-zero, fluctuating within a narrow range |
| Rendezvous | Both relative distance and velocity reach zero |
| Collision | Relative distance is zero with non-zero relative velocity |
| Retreat | Target that previously collided maneuvers away |
| Randomness | Intent is unclear or time-varying |

### Operation Intentions

Describe specific operational actions the target spacecraft may perform:

| Intention | Description |
|-----------|-------------|
| Docking | Structural connection via robotic arm or docking mechanism |
| Refueling | Fuel injection into the operational spacecraft |
| Repair | Replacement or addition of equipment parts |
| Grabbing | Attachment to operational spacecraft via robotic arm or flying claw |
| Photograph | Close-range photography of operational spacecraft via camera |
| Communication | Electromagnetic signal transmission to operational spacecraft |

### Task Intentions

Combine motion and operation intentions to describe the overall mission purpose:

| Intention | Description |
|-----------|-------------|
| Detection | Noncooperative target, hovering + flyaround, photograph + information gathering |
| Surveillance | Cooperative target, similar to detection but with cooperative nature |
| Interference | Noncooperative target, hovering + rendezvous + flyaround, grabbing + electromagnetic interference |
| Negotiation | Hovering + flyaround, communication |
| Observation | Similar to detection but without operation intentions |
| Assistance | Cooperative target, rendezvous + repair |
| Deterrence | Noncooperative target, repeatedly executing multiple motion intentions |
| Support | Cooperative target, hovering + flyaround, no operation intentions |
| Experiment | Cooperative target, carrying experimental equipment |
| Attack | Noncooperative target, collision, no operation intentions |

## LLM-Based Recognition Method

Jing et al. (2025) proposed a spacecraft intention recognition method based on Large Language Models (LLMs). The core idea is to convert multi-source sensor information into text input and leverage the logical reasoning capabilities of LLMs for intent assessment.

### Method Framework

1. **Intention vocabulary construction**: Define 3 categories and 23 intention terms forming a spacecraft intention corpus
2. **Prompt element design**: Extract scene information into 4 categories and 7 prompt elements (operational spacecraft info, target info, environmental conditions, orbital motion characteristics)
3. **Prompt template design**: Construct standardized input templates based on prompt engineering principles
4. **Test sample generation**: Generate 50,688 nominal samples and 8,448 perturbed samples via computer simulation
5. **Model fine-tuning**: Fine-tune ChatGLM2-6B and ChatGLM3-6B using P-tuning V2 and LoRA

### Prompt Strategies

Three prompt conditions were tested:

- **Basic prompt**: Contains only the question and known information
- **Instruction prompt**: Adds all possible answer options to the basic prompt, with instructions guiding the LLM to select from them
- **Chain-of-Thought (CoT) prompt**: Requires the LLM to output its reasoning process, including instruction, reasoning steps, and examples

### Experimental Results

| Model | Prompt Type | Accuracy |
|-------|-------------|----------|
| ChatGLM2-6B base model | Basic/Instruction/CoT | Low (<50%) |
| ChatGLM2-6B + P-tuning V2 | CoT | 99.81% |
| ChatGLM3-6B base model | CoT | Better than ChatGLM2-6B |
| **ChatGLM3-6B + LoRA** | **Instruction** | **99.90%** |

Fine-tuned models improved accuracy by 58.66%–83.94% over base models, though robustness decreased.

## Applications

- **Space station safety early warning**: Identifying the intent of noncooperative targets approaching a space station to support avoidance decisions
- **Space situational awareness**: Beyond cataloging on-orbit objects, further determining their behavioral purposes
- **On-orbit servicing planning**: Understanding the status of cooperative/noncooperative targets to assist service mission design
- **Space security**: Assessing potential threat target intentions in military scenarios

## Related Concepts

- [Noncooperative Target](/en/glossary/noncooperative-target/)
- [Clohessy-Wiltshire (CW) Equation](/en/glossary/clohessy-wiltshire/)
- [Chain-of-Thought (CoT) Prompting](/en/glossary/chain-of-thought-prompting/)
- [Low-Rank Adaptation (LoRA)](/en/glossary/lora-low-rank-adaptation/)
- [Prompt Tuning (P-tuning)](/en/glossary/prompt-tuning/)
- [Space Traffic Management (STM)](/en/glossary/space-traffic-management/)

## References

- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
- Sun Q, Dang Z. Deep neural network for non-cooperative space target intention recognition. Aerosp Sci Technol. 2023;142:108681.
- Yang Z, Shi P, Zhou T, Li W-L. Intention recognition method of space non-cooperative target based on fuzzy reasoning. J Beijing Univ Aeronaut Astronaut. 2024.
- Qi P, et al. A method and system for intent analysis of non cooperative target spacecraft. Patent 202310735989.X, 2023.
