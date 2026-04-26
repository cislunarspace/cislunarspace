---
title: Inter-Satellite Link Navigation
description: An analysis of the technical principles and capabilities of using navigation satellite inter-satellite links to achieve large-scale ranging, time synchronization, and orbit determination navigation in cislunar space.
keywords: inter-satellite link navigation, Ka-band, cislunar space ranging, BeiDou, DRO, inter-satellite precision measurement, time synchronization, orbit determination accuracy
author: 天疆说
date: 2026-04-25
lastUpdated: 2026-04-26
wechatShare:
  title: Inter-Satellite Link Navigation
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Inter-Satellite Link Navigation | Cislunar Space Ranging and Orbit Determination Technology
  description: An analysis of the technical principles and capabilities of using navigation satellite inter-satellite links to achieve large-scale ranging, time synchronization, and orbit determination navigation in cislunar space.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Inter-Satellite Link Navigation | Cislunar Space Ranging and Orbit Determination Technology
  description: An analysis of the technical principles and capabilities of using navigation satellite inter-satellite links to achieve large-scale ranging, time synchronization, and orbit determination navigation in cislunar space.
  image: /logo.png
permalink: /en/glossary/navigation/inter-satellite-link-navigation/
---

# Inter-Satellite Link Navigation

> This article is edited from: Shangguan Yong, Zheng Peng, Zhang Hua, et al. Research on the Current Status and Technical Development of Cislunar Space Navigation[J]. Journal of Telemetry and Remote Sensing, 2026.
>
> This article author: 天疆说
>
> This article source: https://cislunarspace.cn

## Background and Basic Principles

Inter-Satellite Link Navigation is a technical path that utilizes the precision measurement and data transmission functions already established by global satellite navigation systems. It achieves cislunar space ranging, time synchronization, and orbit determination navigation through inter-satellite links between navigation satellites.

Global satellite navigation systems possess inter-satellite precision measurement and medium-to-low-rate real-time bidirectional data transmission service functions. They have unique advantages and global coverage as time and space references. Lunar orbital users are approximately 310,000 to 450,000 km from Earth, far from Earth and low Earth orbit, with an Earth-facing beam scan range of ±60 degrees. Simulations show that lunar orbital satellites have 5-12 visible navigation satellites, with an average of 9 visible, meeting the basic requirements for establishing links with BeiDou satellites.

## Technical Capabilities

Navigation constellation Ka-band inter-satellite links have strong extended application capabilities. While ensuring the normal operation of global navigation system functions, cislunar space satellites using Ka inter-satellite links can leverage residual resources to provide meter-level orbit determination accuracy, tens-of-nanoseconds time synchronization accuracy for cislunar space spacecraft, along with some emergency data transmission capability.

In 2024, China's DRO-A satellite in DRO orbit and low Earth orbit DRO-L satellite conducted Ka-band inter-satellite link mutual measurements. The DRO project accumulated 17 hours of inter-satellite measurement data across an 11-day span (inter-satellite distance between A/B and L satellites: 320,000-470,000 km) and 24 hours of satellite-station measurement data (A/B satellites to K Miyun station). This was the first domestically achieved large-scale high-precision ranging capability in DRO space, opening a new system for space-based orbit determination in cislunar space large-scale high-precision ranging technology.

## Performance and Limitations

| Metric | Performance |
|:---|:---|
| Positioning Accuracy | Cislunar space: meter-level |
| Coverage | Inter-satellite link visible areas |
| Primary Functions | Earth-Moon transfer orbit determination, time synchronization, emergency data transmission |
| Construction Period | Medium |
| Cost | Moderate (reuses BeiDou system) |

Inter-Satellite Link Navigation achieves meter-level positioning accuracy, primarily applicable to Earth-Moon transfer orbit determination, time synchronization, and emergency data transmission. It is difficult to solely support high-precision lunar surface navigation missions. However, this solution can reuse existing systems with moderate cost and controllable technical risk.

## Development Positioning

Inter-Satellite Link Navigation serves as an important supplementary means for Earth-Moon transfer orbit determination, time synchronization, and relay communication, enhancing system redundancy, but is not used as the primary positioning method. With Earth-Moon Hybrid Navigation as the core development direction and inter-satellite links providing support, this constitutes the optimal development path that balances technical feasibility, cost control, and mission requirements.

## Related Concepts

- [Distant Retrograde Orbit (DRO)](/en/glossary/dro/)
- [Earth GNSS Weak Signal Navigation](/en/glossary/gnss-weak-signal-navigation/)
- [Earth-Moon Hybrid Navigation](/en/glossary/earth-moon-hybrid-navigation/)
- [Lunar Navigation Constellation](/en/glossary/lunar-navigation-constellation/)
- BeiDou Satellite Navigation System

## References

- Shangguan Yong, Zheng Peng, Zhang Hua, et al. Research on the Current Status and Technical Development of Cislunar Space Navigation[J]. Journal of Telemetry and Remote Sensing, 2026.
- Cao Jianfeng, Man Haijun, Wang Wenbin, et al. Analysis of Inter-Satellite Link Orbit Determination Capability for Cislunar Space Probes[J]. Journal of Wuhan University (Information Science Edition), 2025, 50(4): 637-646.
- Shangguan Y, Zhang H, Wang W, et al. A time-frequency synchronization for Ka-band inter-satellite link of the navigation satellite system[C]//ICCC, 2024.
