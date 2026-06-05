---
title: Autonomous Navigation
description: An in-depth analysis of autonomous navigation, its differences from ground-based navigation, key technical elements, and applications in cislunar space missions
keywords: autonomous navigation, cislunar space, spacecraft navigation, navigation filtering, extended Kalman filter, deep space navigation
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Autonomous Navigation
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Autonomous Navigation Explained | Spacecraft Autonomous Navigation in Cislunar Space
  description: An in-depth analysis of autonomous navigation, its differences from ground-based navigation, key technical elements, and applications in cislunar space missions
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Autonomous Navigation Explained | Spacecraft Autonomous Navigation in Cislunar Space
  description: An in-depth analysis of autonomous navigation, its differences from ground-based navigation, key technical elements, and applications in cislunar space missions
  image: /logo.png
permalink: /en/glossary/navigation/autonomous-navigation/
---

# Autonomous Navigation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Reference: Qian Yingjing (2014), "Research on Autonomous Navigation and Orbit Keeping of Spacecraft on Quasi-Periodic Orbits in Cislunar Space"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Autonomous Navigation refers to a navigation approach in which a spacecraft independently completes orbit determination and position-velocity estimation using only its onboard navigation sensors and computing equipment, without relying on ground-based tracking and control systems. Compared with ground-based navigation, autonomous navigation can significantly reduce dependence on the Deep Space Network (DSN), mitigate the effects of communication delays, and improve the spacecraft's on-orbit survivability.

In cislunar space missions, communication delays can reach the order of seconds and ground-based navigation accuracy is limited (typically at the kilometer level), making the development of autonomous navigation technology critically important for libration-point probes, lunar probes, and similar missions.

## Differences from Ground-Based Navigation

| Feature | Ground-Based Navigation | Autonomous Navigation |
|:---|:---|:---|
| Data source | Ground station tracking measurements | Onboard sensor real-time observations |
| Communication dependence | Strong dependence, requires continuous tracking | Weak dependence, can operate independently |
| Navigation accuracy | Kilometer level (DSN) | Meter to decameter level (autonomous) |
| Real-time capability | Seconds to minutes of delay | Real-time or near-real-time |
| Coverage | Limited by ground station distribution | Global coverage |

## Key Technical Elements

### Navigation Sensors

Autonomous navigation systems are typically equipped with the following sensor combination:

1. **Star Tracker**: Measures the spacecraft's attitude relative to the stellar reference frame, providing astronomical orientation information
2. **Inertial Measurement Unit (IMU)**: Provides angular rate and acceleration measurements for orbit integration and propagation
3. **Sun Sensor**: Measures the Sun's azimuth for deep-space navigation
4. **Earth/Moon Sensors**: Measure the direction and distance of the Earth or Moon relative to the spacecraft
5. **X-ray Pulsar Detector**: Used for high-precision autonomous navigation during deep-space cruise phases

### Navigation Filtering Algorithms

Typical autonomous navigation filtering algorithms include:

- **Extended Kalman Filter (EKF)**: Linearizes the nonlinear system and is currently the most widely used navigation filter
- **Unscented Kalman Filter (UKF)**: Uses sigma-point sampling to avoid linearization errors
- **Particle Filter (PF)**: A nonlinear filtering method based on Monte Carlo sampling

### Navigation Schemes

The main autonomous navigation schemes in cislunar space include:

1. **Celestial Navigation**: Determines the spacecraft state using observational information from celestial bodies such as the Sun, stars, Earth, and Moon
2. **X-ray Pulsar Navigation (XNAV)**: Achieves deep-space autonomous navigation using precise timing signals from pulsars
3. **Inter-Satellite Link Navigation**: Achieves relative navigation using pseudorange measurements between satellites
4. **Sun-Earth-Moon Information Navigation**: Navigates using the combined angular position information of the Sun, Earth, and Moon

## Applications in Cislunar Space

### Libration-Point Probes

For probes near the Earth-Moon L1/L2 libration points, ground-based navigation struggles to meet the accuracy requirements for orbit keeping (typically meter to decameter level) due to the great distance from Earth and the weakly stable orbit. Qian Yingjing (2014) showed that Sun-Earth-Moon-based autonomous navigation methods can provide convergent estimation results for probes on quasi-periodic orbits near libration points.

### Lunar Probes

Lunar probes can adopt autonomous navigation during both the lunar-orbit phase and the Earth-Moon transfer phase. In the lunar-orbit phase, lunar surface beacons or lunar elevation maps can be used for optical navigation; in the Earth-Moon transfer phase, the Sun-Earth vector can be used for celestial navigation.

### Key Challenges

1. **Convergence arc-length constraint**: Libration-point orbits exhibit strong nonlinearity, and navigation convergence requires sufficiently long observation arcs
2. **Orbit-keeping coupling**: Navigation accuracy directly affects orbit-keeping performance; the two must be co-designed
3. **Sensor configuration**: Appropriate sensor combinations must be selected to satisfy observability requirements

## Related Concepts

- [Sun-Earth-Moon Autonomous Navigation (SEM Navigation)](/en/glossary/navigation/sem-autonomous-navigation/)
- [Extended Kalman Filter (EKF)](/en/glossary/navigation/extended-kalman-filter/)
- [Observability](/en/glossary/navigation/observability/)
- [Libration Point](/en/glossary/dynamics/libration-point/)
- [Orbit Keeping](/en/glossary/orbits/orbit-keeping/)
- [X-ray Pulsar Navigation](/en/glossary/navigation/xray-pulsar-navigation/)

## References

- Qian Yingjing. Research on Autonomous Navigation and Orbit Keeping of Spacecraft on Quasi-Periodic Orbits in Cislunar Space [D]. Harbin Institute of Technology, 2014.
- Hill K, Born G H. Linked autonomous interplanetary satellite orbit navigation (LiAISON) [C]. AAS/AIAA Astrodynamics Specialist Conference, 2005.
- Cong Dianwei, Wu Fumei, Li Chonghui, et al. Autonomous Navigation Technology and Research Progress of Spacecraft in Cislunar Space [J]. Radio Engineering, 2025, 55(2): 317-322. (in Chinese)
