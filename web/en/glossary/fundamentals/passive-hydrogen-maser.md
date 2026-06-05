---
title: Passive Hydrogen Maser (PHM)
description: Detailed analysis of passive hydrogen maser working principles, frequency stability specifications, and applications in space-based gravitational redshift measurements
keywords: Passive Hydrogen Maser, PHM, Hydrogen Maser, Atomic Clock, Frequency Standard, Time-Frequency, Frequency Stability, Allan Deviation
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Passive Hydrogen Maser (PHM)
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Passive Hydrogen Maser (PHM) | Terminology Definition
  description: Detailed analysis of passive hydrogen maser working principles and applications in space-based gravitational redshift measurements
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Passive Hydrogen Maser (PHM) | Terminology Definition
  description: Detailed analysis of passive hydrogen maser working principles and applications in space-based gravitational redshift measurements
  image: /logo.png
permalink: /en/glossary/fundamentals/passive-hydrogen-maser/
---

# Passive Hydrogen Maser (PHM)

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Reference: Li Y et al. 2026 Chin. Phys. Lett. 43 031101
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A Passive Hydrogen Maser (PHM) is a high-precision atomic frequency standard that uses the hydrogen atom hyperfine transition (~1.42 GHz, corresponding to the 21 cm line) as a reference. Unlike active hydrogen masers (which are self-oscillating), PHMs use an external signal source to lock their oscillation frequency, offering better miniaturization potential for space applications.

## Working Principle

The core of a PHM is a quartz bulb (storage bulb) coated with PTFE inner walls for storing hydrogen gas. The basic workflow:

1. **Hydrogen preparation**: Hydrogen molecules are dissociated into high-energy hydrogen atoms via radio frequency discharge
2. **State selection**: A magnetic gradient selectively directs high-energy hydrogen atoms ($F=1, m_F=0$) into the storage bulb
3. **Stimulated emission**: Hydrogen atoms in the storage bulb interact with the microwave cavity, producing stimulated emission
4. **Frequency locking**: The atomic transition signal in the storage bulb is detected and used to lock an external oscillator via a phase-locked loop (PLL)

Key performance specifications:
- **Frequency accuracy**: Space-grade PHM can reach $5 \times 10^{-12}$
- **Frequency stability**: ADEV at 1000s averaging time can reach $10^{-14}$
- **Size/weight**: DRO-A satellite PHM weighs only 8.5 kg, with dimensions ~39 cm

## Space Environmental Sensitivity

Space environment effects on PHM include:

| Environmental Factor | Sensitivity | Impact |
|:---|:---|:---|
| Temperature | $< 2 \times 10^{-14}/^\circ C$ | Frequency drift < $2 \times 10^{-14}$ for ±1°C variation |
| Magnetic field | $2 \times 10^{-13}/G$ | Frequency drift < $1 \times 10^{-14}$ for <0.05 G variation |
| Cosmic radiation | - | Requires shielding protection |

## Application in DRO-A Satellite

The April 2025 DRO-A gravitational redshift experiment was the world's first deployment of a PHM in a lunar DRO for fundamental physics experiments. The experiment validated in-orbit performance of the compact space PHM:

- Frequency accuracy: ~ $5 \times 10^{-12}$
- ADEV at 1000s: ~ $4.5 \times 10^{-14}$
- ADEV at 10000s: ~ $1.5 \times 10^{-14}$

Results show space PHM performance is maintained within $10^{-14}$ level under space environment effects.

## Relation to Gravitational Redshift Measurement

Gravitational redshift measurement precision is limited by clock frequency accuracy rather than stability. In the DRO-A experiment:

- Clock stability ($10^{-14}$ level) outperforms accuracy ($10^{-12}$ level) by two orders of magnitude
- Therefore, accuracy—rather than stability—is the primary limiting factor
- Achieving higher precision gravitational redshift tests (e.g., $10^{-6}$ level) requires clocks with $10^{-16}$ accuracy

## Related Concepts

- [Gravitational Redshift](/en/glossary/fundamentals/gravitational-redshift/)
- [Allan Deviation (ADEV)](/en/glossary/fundamentals/allan-deviation/)
- [Dual One-Way Ranging (DOWR)](/en/glossary/fundamentals/dual-one-way-ranging/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Einstein Equivalence Principle (EEP)](/en/glossary/fundamentals/einstein-equivalence-principle/)

## References

- Li Y, Liu T et al. 2026 Chin. Phys. Lett. 43 031101
- Vessot R F C et al. 1980 Phys. Rev. Lett. 45 2081
- Cacciapuoti L et al. 2007 Nucl. Phys. B Proc. Suppl. 166 303