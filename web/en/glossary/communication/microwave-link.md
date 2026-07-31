---
title: Microwave Link
description: Radio link technology using microwave frequency bands for inter-satellite communication
keywords: Microwave Link, Ka-band, V-band, phased-array antenna, inter-satellite communication, link budget, EIRP
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Microwave Link
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: "Microwave Link Details | Fundamental Satellite Communication Technology"
  description: Radio link technology using microwave frequency bands for inter-satellite communication
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Microwave Link Details | Fundamental Satellite Communication Technology"
  description: Radio link technology using microwave frequency bands for inter-satellite communication
  image: /logo.png
permalink: /en/glossary/communication/microwave-link/
---

# Microwave Link

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A Microwave Link is a radio link that uses microwave frequencies (typically in the GHz range) for communication between satellites or between satellites and ground stations. Microwave links are the most mature and widely used technology in satellite communication.

## Frequency Band Evolution

Inter-satellite microwave signal frequencies show a trend from lower to higher bands:

| Band | Frequency Range | Typical Application |
| ------ | ---------------- | --------------------- |
| S-band | 2-4 GHz | Traditional TT&C |
| Ka-band | 26.5-40 GHz | BeiDou ISL, Queqiao-2 satellite-ground links |
| K-band | 18-27 GHz | DRO three-satellite constellation ISL |
| V-band | 40-75 GHz | Future high-speed ISL exploration |

## Link Design Parameters

Microwave link design primarily considers the following parameters:

- **EIRP (Effective Isotropic Radiated Power)**: Measures transmitter capability, depending on transmit power and antenna gain
- **G/T (Figure of Merit)**: Measures receiver sensitivity, depending on antenna gain and system noise temperature
- **Path Loss**: Increases with inter-satellite distance and frequency
- **Demodulation Threshold**: Depends on modulation and coding schemes; e.g., QPSK + LDPC 1/2 coding requires Eb/N0 <= 4.5 dB

## Applications in Cislunar Space

For inter-satellite distances of approximately 450,000 km in cislunar space, microwave link design faces the following challenges and solutions:

- **Ka-band**: Using multi-beam KMA phased-array antennas with equivalent 0.35 m aperture, achieving approximately 100 kbps bidirectional communication
- **V-band** (~70 GHz): Leveraging the high antenna gain advantage of higher frequencies, achieving approximately 500 kbps bidirectional communication
- Path loss increases by approximately 100 times (20 dB) compared to near-Earth space, requiring comprehensive use of constellation multi-satellite, multi-beam advantages for compensation

## References

- Duan Z, Wang J, Fan Y. Research on the Development of Beidou Satellites Based on Full-Time Communication and Navigation in the Earth-Moon Space[J]. Journal of Telemetry, Tracking and Command, 2026.
- Cao Z, Zhang G, Liu B, et al. Study on space-based TT&C and communication for manned space flight[J]. Journal of Telemetry, Tracking and Command, 2023, 44(5): 1-7.
