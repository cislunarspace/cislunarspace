---
title: Laser-Microwave Communication
description: Hybrid inter-satellite link technology integrating both laser and microwave communication regimes
keywords: Laser-Microwave Communication, hybrid link, laser communication, microwave communication, inter-satellite link, high-rate communication
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Laser-Microwave Communication
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Laser-Microwave Communication Details | Hybrid Inter-Satellite Link Technology
  description: Hybrid inter-satellite link technology integrating both laser and microwave communication regimes
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Laser-Microwave Communication Details | Hybrid Inter-Satellite Link Technology
  description: Hybrid inter-satellite link technology integrating both laser and microwave communication regimes
  image: /logo.png
permalink: /en/glossary/communication/laser-microwave-communication/
---

# Laser-Microwave Communication

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Laser-Microwave Communication refers to a hybrid inter-satellite link technology that integrates both laser (optical) and microwave communication regimes within a single space-based communication system, leveraging the complementary advantages of each. This approach combines the reliability of microwave links with the high data rates of laser links, representing an important development direction for future cislunar communication.

## Comparison of Two Regimes

| Characteristic | Microwave Communication | Laser Communication |
| ---------------- | ------------------------ | --------------------- |
| Frequency band | Ka (~26 GHz), V (~70 GHz) | Optical (~THz) |
| Data rate | 100 kbit/s ~ 10 Mbit/s | 100 Mbit/s ~ 10 Gbit/s |
| Antenna size | Larger (phased-array or multi-beam) | Smaller (optical antenna) |
| Power consumption | Higher | Lower |
| Acquisition & tracking | Relatively easy | Requires high pointing accuracy |
| Reliability | High, less affected by weather | Requires precise pointing control |

## Technical Architecture

In the cislunar communication architecture based on the BeiDou satellite system, the laser-microwave hybrid link architecture is:

- **Service communication** (low-rate, access control): Uses short messages and microwave links at approximately 400 bit/s ~ 10 Mbit/s
- **Traffic communication** (high-rate, data transmission): Uses laser links at approximately 100 Mbit/s ~ 10 Gbit/s
- **Onboard network information devices**: Unified scheduling of laser and microwave resources for dynamic link planning and routing planning

## Development Status

- BeiDou-3 satellites are equipped with both Ka-band microwave ISL and laser ISL payloads
- The DRO-A satellite carries a laser communication payload, while all DRO constellation satellites carry K-band microwave inter-satellite measurement and communication payloads
- The world's first verified K-band inter-satellite microwave communication link exceeding 1 million kilometers was achieved

## References

- Duan Z, Wang J, Fan Y. Research on the Development of Beidou Satellites Based on Full-Time Communication and Navigation in the Earth-Moon Space[J]. Journal of Telemetry, Tracking and Command, 2026.
- Lu S, Hou X, Li G, et al. Development Status and Trend of Space Optical Communication Technology[J]. Space-Integrated-Ground Information Networks, 2022, 3(2): 39-46.
- Luo T, Wang W, Xue J, et al. Status and development trends of deep space optical communication[J]. Journal of Telemetry, Tracking and Command, 2022, 43(4): 44-55.
