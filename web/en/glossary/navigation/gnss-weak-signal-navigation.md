---
title: Earth GNSS Weak Signal Navigation
description: An analysis of the technical principles, key technologies, performance limitations, and development paths for achieving cislunar space navigation using Earth's GNSS satellite sidelobe signals.
keywords: GNSS weak signal navigation, cislunar space navigation, high-sensitivity receiver, ultra-low temperature quantum amplifier, adaptive array antenna, LuGRE, GPS, lunar navigation
author: 天疆说
date: 2026-04-25
lastUpdated: 2026-04-26
wechatShare:
  title: Earth GNSS Weak Signal Navigation
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Earth GNSS Weak Signal Navigation | Cislunar Space Navigation Technical Path
  description: An analysis of the technical principles, key technologies, performance limitations, and development paths for achieving cislunar space navigation using Earth's GNSS satellite sidelobe signals.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Earth GNSS Weak Signal Navigation | Cislunar Space Navigation Technical Path
  description: An analysis of the technical principles, key technologies, performance limitations, and development paths for achieving cislunar space navigation using Earth's GNSS satellite sidelobe signals.
  image: /logo.png
permalink: /en/glossary/navigation/gnss-weak-signal-navigation/
---

# Earth GNSS Weak Signal Navigation

> This article is edited from: Shangguan Yong, Zheng Peng, Zhang Hua, et al. Research on the Current Status and Technical Development of Cislunar Space Navigation[J]. Journal of Telemetry and Remote Sensing, 2026.
>
> This article author: 天疆说
>
> This article source: https://cislunarspace.cn

## Background and Basic Principles

Earth GNSS Weak Signal Navigation is one of the four major technical paths for cislunar space navigation. Its core concept is to reuse existing Earth's GNSS navigation constellations (GPS, BeiDou, Galileo, etc.) and achieve cislunar space navigation through high-sensitivity receiving equipment that captures weak sidelobe signals near the Moon.

The main lobe of Earth's GNSS navigation satellite signal beams covers the Earth, while sidelobe signals radiate to the area around the Moon. The signal strength received on the lunar surface is only one-millionth of that at Earth's surface, and position computation often requires continuous tracking of multiple satellite signals. In March 2025, the LuGRE receiver jointly developed by NASA and the Italian Space Agency successfully received GPS and Galileo satellite signals on the lunar surface, extracting signals from noise at a signal-to-noise ratio of -30 dB, achieving ±15 m positioning accuracy. This was the first verification of the engineering feasibility of this path.

## Key Technologies

The implementation of weak signal navigation depends on four core technological breakthroughs:

**Ultra-low Temperature Quantum Amplifier**: Reduces the receiving system noise temperature to below 20 K (approximately -253°C), significantly improving system sensitivity and reducing the impact of thermal noise on weak signals.

**128-element Adaptive Array Phased Array Antenna**: Real-time tracking of the signal wavefront from Earth's direction, suppressing sidelobe interference, optimized for GNSS L1/L5 and other frequency bands with gain up to 15 dBic or higher. It has beamforming capability and can dynamically adjust direction to avoid strong interference sources such as solar radiation.

**High-sensitivity Baseband Processing Algorithm**: Time-domain spread spectrum correlation algorithms extend signal integration time to more than 100 times that of conventional receivers. Through energy accumulation, signal-to-noise ratio is improved, enabling successful signal acquisition under C/N₀ = 15 dBHz conditions.

**Ground Orbit Prediction Assisted Acquisition**: Ground tracking and control stations provide precise orbit predictions and satellite visibility information, reducing blind searching by the receiver, performing ephemeris corrections, and compensating for errors caused by navigation message propagation delays.

## Performance and Limitations

| Metric | Performance |
|:---|:---|
| Positioning Accuracy | Lunar surface: ±15 m, Earth-Moon transfer: ±50 m |
| Coverage | Earth-visible region, weak coverage on far side and polar regions |
| Reliability | Moderate, limited by Earth visibility |
| Construction Period | Short |
| Cost | Lowest (reuses existing GNSS systems) |

The GNSS weak signal navigation solution's positioning accuracy can meet basic navigation needs, but due to dual constraints of signal attenuation and Earth visibility, its coverage capability is weak on the lunar far side and in polar regions. The signal blockage rate on the lunar far side reaches 100%, and signal quality in polar regions also degrades significantly.

## Development Path

GNSS weak signal navigation is the lowest-cost and fastest-deploying path among the four navigation solutions. Priority development of this solution in the near term makes it suitable as a basic navigation and emergency backup means for lunar exploration missions. However, in the long term, this solution is only applicable to early low-cost missions, and future integration with other navigation means is necessary.

## Related Concepts

- [Distant Retrograde Orbit (DRO)](/en/glossary/dro/)
- [Near Rectilinear Halo Orbit (NRHO)](/en/glossary/nrho/)
- [Earth-Moon L1/L2 Halo Orbit (EML1/EML2 Halo)](/en/glossary/eml-halo/)
- [X-ray Pulsar Navigation](/en/glossary/xray-pulsar-navigation/)
- Earth-Moon Hybrid Navigation
- Lunar Navigation Constellation
- Inter-Satellite Link Navigation

## References

- Shangguan Yong, Zheng Peng, Zhang Hua, et al. Research on the Current Status and Technical Development of Cislunar Space Navigation[J]. Journal of Telemetry and Remote Sensing, 2026.
- Wu Wei, Liu Huicui, Cao Jianfeng, et al. Availability of GNSS in Cislunar Spacecraft Autonomous Navigation[J]. Journal of Geodesy and Geodynamics, 2023, 43(8): 795-800, 815.
- Miller J, Valencia, et al. GNSS on the moon: the lunar PNT era begins through blue ghost LuGRE[J]. GPS World, 2025, 36(4): 20-23.
