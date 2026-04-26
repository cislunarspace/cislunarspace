---
title: Earth-Moon Hybrid Navigation
description: An analysis of the composite navigation architecture that integrates Earth's GNSS wide-area coverage with the high precision of lunar augmentation systems, and the "coarse positioning + precise positioning" technical path.
keywords: Earth-Moon hybrid navigation, coarse positioning, precise positioning, bistatic navigation, Earth-Moon bistatic navigation, GNSS augmentation, lunar surface beacon station, multi-source fusion
author: 天疆说
date: 2026-04-25
lastUpdated: 2026-04-26
wechatShare:
  title: Earth-Moon Hybrid Navigation
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Earth-Moon Hybrid Navigation | Cislunar Composite Navigation Architecture
  description: An analysis of the composite navigation architecture that integrates Earth's GNSS wide-area coverage with the high precision of lunar augmentation systems, and the "coarse positioning + precise positioning" technical path.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Earth-Moon Hybrid Navigation | Cislunar Composite Navigation Architecture
  description: An analysis of the composite navigation architecture that integrates Earth's GNSS wide-area coverage with the high precision of lunar augmentation systems, and the "coarse positioning + precise positioning" technical path.
  image: /logo.png
permalink: /en/glossary/navigation/earth-moon-hybrid-navigation/
---

# Earth-Moon Hybrid Navigation

> This article is edited from: Shangguan Yong, Zheng Peng, Zhang Hua, et al. Research on the Current Status and Technical Development of Cislunar Space Navigation[J]. Journal of Telemetry and Remote Sensing, 2026.
>
> This article author: 天疆说
>
> This article source: https://cislunarspace.cn

## Background and Basic Principles

Earth-Moon Hybrid Navigation is China's proposed "Earth-Moon bistatic navigation" concept. It integrates the advantages of GNSS extension and lunar constellations to form a composite system of "Earth signal coarse positioning + lunar constellation precise positioning," balancing wide-area coverage capability in cislunar space with local high-precision positioning needs.

This system reuses BeiDou, GPS, and other Earth's GNSS sidelobe signals for coarse positioning. It relies on lunar polar beacon stations, lunar orbital satellites, and Lagrange point relay satellites to construct augmentation links. Key technologies such as high-sensitivity receivers, heterogeneous fusion algorithms, and a unified Earth-Moon spatiotemporal reference correct issues like signal attenuation and insufficient visible satellites.

## Technical Process

**Earth Signal Coarse Positioning**: The main lobe of GNSS navigation satellite signal beams covers the Earth, while sidelobe signals can radiate to the area around the Moon. Coarse positioning operations are completed on the lunar surface by capturing weak sidelobe signals. Signal strength is only one-millionth of that received at Earth's surface, and position computation often requires continuous tracking of multiple satellite signals. Accuracy is approximately ±50 m, which cannot directly meet the high-precision requirements of lunar missions.

**Lunar Signal Precise Positioning**: The lunar constellation consists of navigation satellites deployed at Earth-Moon Lagrange points, lunar orbits, or lunar surface stations. They achieve precise positioning by providing local spatiotemporal references. The algorithm integrates the wide coverage of Earth signals with the high precision of the lunar constellation, significantly improving accuracy to meter-level or even sub-meter-level, supporting lunar resource development, crewed lunar landing, and other missions.

Ultimately, GNSS systems achieve ±50 m-level basic positioning, combined with augmentation signals transmitted by fixed beacon stations at the lunar poles, achieving ±0.5 m positioning accuracy in near-lunar space and ±10 m positioning accuracy in Earth-Moon transfer orbits.

## Performance and Applications

| Metric | Performance |
|:---|:---|
| Positioning Accuracy | Near-lunar: ±0.5 m, Transfer orbit: ±10 m |
| Coverage | Full lunar surface + entire Earth-Moon transfer |
| System Reliability | Highest (multi-source redundancy, degradable) |
| Construction Period | Medium to long (phased construction possible) |
| Cost | Medium to high |

Earth-Moon Hybrid Navigation integrates the wide-area coverage capability of Earth's GNSS with the high-precision advantage of lunar augmentation systems, achieving optimal comprehensive performance. The system has multi-source redundancy and can degrade gracefully. Its accuracy can meet the needs of crewed lunar landing and high-precision lunar surface operations. It can be constructed in phases and iterated gradually, making it the most engineering-applicable solution at present.

## Development Positioning

Earth-Moon Hybrid Navigation is the optimal primary solution for crewed lunar landing and lunar scientific research stations in the next 5-10 years. It is recommended as a nationally-led technical route to accelerate breakthroughs. Combined with rapid breakthroughs in GNSS weak signal navigation and long-term construction of dedicated lunar navigation constellations, this forms the optimal development path that balances technical feasibility, cost control, and mission requirements.

## Related Concepts

- [Earth GNSS Weak Signal Navigation](/en/glossary/gnss-weak-signal-navigation/)
- [Lunar Navigation Constellation](/en/glossary/lunar-navigation-constellation/)
- [Inter-Satellite Link Navigation](/en/glossary/inter-satellite-link-navigation/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/dro/)
- [Earth-Moon L1/L2 Halo Orbit (EML1/EML2 Halo)](/en/glossary/eml-halo/)

## References

- Shangguan Yong, Zheng Peng, Zhang Hua, et al. Research on the Current Status and Technical Development of Cislunar Space Navigation[J]. Journal of Telemetry and Remote Sensing, 2026.
- Cao Kai, Wei Donghua, Li Haiyang, et al. Design of Integrated Lunar Communication and Navigation Architecture and Joint Orbit Determination Method[J]. Journal of Deep Space Exploration, 2025, 12(4): 356-366.
