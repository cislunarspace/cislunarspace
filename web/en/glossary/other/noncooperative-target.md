---
title: Noncooperative Target
description: A noncooperative target is a space object that does not share intent or trajectory information with operational spacecraft, including abandoned satellites, debris, and unidentified objects.
keywords: noncooperative target, space debris, space security, spacecraft intention recognition, space situational awareness
author: CislunarSpace
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: Noncooperative Target | Space Security
  description: Space objects that do not share intent or trajectory information, a core subject of space security research
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Noncooperative Target | Space Security
  description: Space objects that do not share intent or trajectory information, a core subject of space security research
  image: /logo.png
permalink: /en/glossary/noncooperative-target/
---

# Noncooperative Target

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A noncooperative target is a space object that does not actively communicate with or cooperate to operational spacecraft, and does not share its intent or trajectory information. Unlike cooperative targets (such as cargo vehicles and formation-flying satellites), noncooperative targets do not voluntarily assist with rendezvous, docking, collision avoidance, or other coordinated operations.

Typical categories of noncooperative targets include:

- **Defunct satellites**: Retired or uncontrollable satellites that no longer respond to ground commands
- **Space debris**: Rocket bodies, collision fragments, and other non-functional objects
- **Failed satellites**: Satellites still in orbit but having lost attitude or orbit control capability
- **Non-cooperative operational satellites**: Satellites operating normally but not sharing information with a specific operator
- **Unidentified objects**: Cataloged objects whose identity or function cannot be determined

## Comparison with Cooperative Targets

| Feature | Cooperative Target | Noncooperative Target |
|---------|-------------------|----------------------|
| Communication | Active status data sharing | None or non-responsive |
| Intent transparency | Known or negotiable | Unknown, must be inferred from observation |
| Trajectory info | Precise (GNSS data sharing) | Requires ground/space-based observation |
| Rendezvous/docking | Standardized docking mechanisms | Requires non-cooperative capture techniques |
| Examples | Tianzhou cargo spacecraft, Dragon | Space debris, defunct satellites |

## Threat to Space Safety

As the number of on-orbit objects grows rapidly, noncooperative targets have become a central challenge for space safety:

- **Collision risk**: Large debris (>10 cm) can cause catastrophic collisions with active spacecraft, potentially triggering the Kessler Syndrome
- **Intent uncertainty**: The true intent of non-cooperative operational satellites (e.g., surveillance, interference, attack) cannot be determined, complicating space situational awareness
- **Avoidance costs**: Frequent collision avoidance maneuvers consume precious propellant and shorten spacecraft lifetimes
- **Space station safety**: In space station operations, approaching noncooperative targets require threat assessment and intention recognition to ensure crew safety

## Intention Recognition Methods

Intention recognition of noncooperative targets is an active research frontier in space safety. Key approaches include:

- **Orbital dynamics-based**: Inferring motion intentions (approach, flyby, rendezvous) by analyzing relative motion trajectories against CW-equation-predicted patterns
- **Fuzzy reasoning-based**: Using fuzzy decision trees to classify characteristic data
- **Deep learning-based**: Training neural networks to identify intent patterns from orbital data
- **Large Language Model (LLM)-based**: Converting multi-source information (orbital data, images, environmental conditions) into text input and leveraging LLM reasoning for comprehensive intent assessment

Jing et al. (2025) proposed an LLM-based framework for noncooperative target intention recognition, categorizing intentions into 3 major types and 23 subtypes (motion, operation, and task intentions), achieving 99.9% recognition accuracy with the ChatGLM model.

## Related Concepts

- [Spacecraft Intention Recognition](/en/glossary/spacecraft-intention-recognition/)
- [Clohessy-Wiltshire (CW) Equation](/en/glossary/clohessy-wiltshire/)
- [Space Traffic Management (STM)](/en/glossary/space-traffic-management/)

## References

- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
- Sun Q, Dang Z. Deep neural network for non-cooperative space target intention recognition. Aerosp Sci Technol. 2023;142:108681.
- Qi P, et al. A method and system for intent analysis of non cooperative target spacecraft. Patent 202310735989.X, 2023.
