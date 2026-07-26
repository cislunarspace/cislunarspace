---
title: Dual One-Way Ranging (DOWR)
description: Detailed analysis of Dual One-Way Ranging working principles, applications in gravitational redshift measurements, and advantages of differential processing
keywords: Dual One-Way Ranging, DOWR, Ranging, Time-Frequency Transfer, Inter-Satellite Link, K-band, Differential Processing
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Dual One-Way Ranging (DOWR)
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Dual One-Way Ranging (DOWR) | Terminology Definition
  description: Detailed analysis of DOWR working principles and applications in gravitational redshift measurements
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Dual One-Way Ranging (DOWR) | Terminology Definition
  description: Detailed analysis of DOWR working principles and applications in gravitational redshift measurements
  image: /logo.png
permalink: /en/glossary/fundamentals/dual-one-way-ranging/
---

# Dual One-Way Ranging (DOWR)

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Reference: Li Y et al. 2026 Chin. Phys. Lett. 43 031101
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Dual One-Way Ranging (DOWR) is a precision measurement technique that performs simultaneous uplink and downlink one-way ranging. By exploiting the opposite-signed gravitational redshift effects on the two links and using differential processing, DOWR can extract effects like gravitational redshift while canceling common error terms.

## Working Principle

A DOWR system configuration:

```text
Spaceborne PHM → TFDP → K-band Transponder → (Uplink 23 GHz) → Ground Station
                                       ↓
Ground Station → (Downlink 26.5 GHz) → Spaceborne TFDP → PHM
```

Key processing steps:

1. **Simultaneous bidirectional transmission**: Ground station transmits at 23 GHz while satellite simultaneously transmits at 26.5 GHz
2. **Independent code pseudorange measurement**: Pseudoranges for uplink and downlink are measured separately
3. **Differential combination**: The two direction measurements are subtracted

Key advantages of differential processing:

- **Common error cancellation**: Common terms like satellite-ground clock offset and system delay are eliminated in the difference
- **Signal enhancement**: Subtraction effectively doubles the gravitational redshift signal
- **Environmental interference suppression**: Effects like atmospheric refraction and ionospheric delay are significantly reduced after differencing

## Relation to Gravitational Redshift Measurement

In the DRO-A satellite gravitational redshift experiment, DOWR enables satellite-ground time-frequency comparison:

| Measurement Parameter | Precision |
| :--- | :--- |
| Time comparison precision | >1 ns |
| Frequency comparison stability (MDEV) | $10^{-14}$ @2000 s |

DOWR is ideal for gravitational redshift measurements because:

1. Gravitational redshift has opposite signs on uplink and downlink
2. Differential extraction yields pure gravitational redshift signal
3. Compared to triple-link schemes, DOWR reduces required links by one, lowering system complexity

## K-band Selection Rationale

K-band (23/26.5 GHz) was chosen over lower frequencies because:

| Factor | K-band Advantage |
| :--- | :--- |
| Ionospheric delay | K-band is insensitive to ionosphere; TEC variations have minimal impact |
| Atmospheric attenuation | Higher atmospheric transmittance at K-band |
| Antenna size | Higher frequency allows smaller antenna aperture |

However, K-band limitations: dual-frequency systems cannot accurately determine TEC, unlike triple-frequency systems.

## Applications in Other Missions

DOWR technology has been validated in multiple space missions:

- **Gravity Recovery and Climate Experiment (GRACE)**: Satellite time transfer for gravity measurement
- **Gravity Recovery and Interior Laboratory (GRAIL)**: Lunar gravity measurement
- **BeiDou Navigation Satellite System**: Inter-satellite DOWR code measurement, time synchronization precision <1 ns

## Related Concepts

- [Gravitational Redshift](/en/glossary/fundamentals/gravitational-redshift/)
- [Passive Hydrogen Maser (PHM)](/en/glossary/fundamentals/passive-hydrogen-maser/)
- [Allan Deviation (ADEV)](/en/glossary/fundamentals/allan-deviation/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Inter-Satellite Link](/en/glossary/communication/inter-satellite-link/)

## References

- Li Y, Liu T et al. 2026 Chin. Phys. Lett. 43 031101
- Qin C G et al. 2024 Class. Quantum Grav. 41 135006
- Kim J and Tapley B D 2003 J. Spacecr. Rockets 40 419
- Turyshev S G et al. 2013 Phys. Rev. D 87 024020
