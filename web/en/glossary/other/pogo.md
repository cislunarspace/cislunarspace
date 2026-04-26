---
title: Longitudinal Coupling Vibration (POGO)
description: "Detailed analysis of Longitudinal Coupling Vibration (POGO): definition, generation mechanism, effects on liquid rockets, suppression techniques, with particular focus on full-flight-profile POGO suppression for multi-engine parallel reusable rockets"
keywords: POGO vibration, longitudinal coupling vibration, liquid rocket, multi-engine parallel, reusable rocket, propellant feed system, stability control
author: Tianjiang Talk
date: 2026-04-24
lastUpdated: 2026-04-26
wechatShare:
  title: Longitudinal Coupling Vibration (POGO)
  desc: One-stop learning for cislunar space research frontiers, terminology, and tools.
  image: /logo.png
og:
  title: Longitudinal Coupling Vibration (POGO) | Liquid Rocket Dynamics
  description: "Detailed analysis of POGO: definition, generation mechanism, effects on liquid rockets, and suppression techniques"
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Longitudinal Coupling Vibration (POGO) | Liquid Rocket Dynamics
  description: "Detailed analysis of POGO: definition, generation mechanism, effects on liquid rockets, and suppression techniques"
  image: /logo.png
permalink: /en/glossary/pogo/
---

# Longitudinal Coupling Vibration (POGO)

> Author: [Tianjiang Talk](https://blog.csdn.net/qq_33254264)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Longitudinal Coupling Vibration (POGO) is a self-excited vibration phenomenon that occurs in liquid launch vehicles during flight. It manifests as a closed-loop coupling between periodic structural vibration of the vehicle along its longitudinal axis and pressure oscillations in the propellant feed system. This phenomenon was first systematically identified during flight tests of the US Titan II rocket in the 1960s. It derives its name from its resemblance to the longitudinal reciprocating motion of a Pogo stick.

Once POGO vibration occurs, it severely affects the working environment and flight comfort of astronauts (vibration peaks exceeding 0.5 g can cause visual impairment). In severe cases, it may lead to structural damage of the vehicle or abnormal engine operating conditions, potentially causing mission failure.

## Generation Mechanism

The closed-loop coupling of POGO vibration typically consists of four interconnected links:

1. **Structural Vibration**: The longitudinal structural mode of the rocket is excited, causing periodic compression and extension of the vehicle along its longitudinal axis.
2. **Propellant Feed System Pressure Oscillation**: Vehicle longitudinal vibration is transmitted through mechanical coupling to propellant tanks and feed lines, producing periodic disturbances in propellant supply flow.
3. **Engine Thrust Response**: Periodic fluctuations in propellant flow cause chamber pressure and thrust oscillations at the same frequency.
4. **Feedback Amplification**: Oscillatory thrust is fed back through the vehicle structure to the propellant feed system. If the phase relationship is favorable, a positive feedback loop forms, causing vibration amplitude to grow continuously.

The phase relationship among these four links is the core factor determining whether POGO occurs and its severity. When thrust oscillation is in phase with structural vibration velocity, the system continuously injects energy, causing divergent vibration.

## Suppression Methods

### Accumulator

Installing an accumulator in the propellant feed line is the most widely used passive POGO suppression technique. The accumulator uses a compressible gas chamber (typically helium) to absorb propellant flow disturbances, shifting the fluid oscillation frequency of the feed system away from the vehicle's sensitive structural modes, thereby breaking the coupling channel. For multi-stage launch vehicles, accumulator parameters must be set separately for each stage's feed system characteristics.

### Active Suppression Technology

For modern reusable rockets (such as multi-engine parallel configurations and deep-thrust-adjustable operating conditions), traditional passive accumulators struggle to cover the full flight profile's varying conditions. Active POGO suppression technology uses real-time vibration monitoring and actively adjusts feed system parameters (such as valve opening and nozzle pressure drop characteristics) to achieve adaptive vibration suppression.

## Special Challenges for Reusable Rockets

Reusable rockets introduce new complexity to POGO suppression:

- **Multi-Engine Parallel Propulsion Systems**: Thrust and flow differences between engine clusters introduce new coupling modes.
- **Deeply Adjustable Thrust**: Large thrust variations during return deceleration phases cause dramatic changes in the feed system's fluid dynamics characteristics.
- **Full-Profile Coverage**: Feed system modes differ significantly between ascent and return phases (e.g., whether recirculation is used, pump outlet pressure levels, etc.), requiring unified POGO suppression strategies across the entire flight profile.

## Related Concepts

- [Nuclear Thermal Propulsion (NTP)](/en/glossary/nuclear-thermal-propulsion/)

## References

- NASA SP-8055, Prevention of Coupled Structure-Propulsion Instability (POGO), 1970.
- Rubin S. Longitudinal instability of liquid rockets due to propulsion feedback (POGO)[J]. Journal of Spacecraft and Rockets, 1966.
- 2026 Aerospace Science and Technology Problems and Challenges Released, China Space Conference (CSC2026), 2026.
