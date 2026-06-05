---
title: Inertial Navigation System
description: Definition of inertial navigation systems, platform and strapdown architectures, accelerometer and gyroscope principles, and their core role in spacecraft navigation
keywords: Inertial Navigation System, INS, Platform INS, Strapdown INS, Accelerometer, Gyroscope, GNC, IMU, Inertial Measurement Unit
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Inertial Navigation System
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Inertial Navigation System | Terminology Definition
  description: Definition, architecture, core sensors, and the role of inertial navigation systems in spacecraft navigation
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Inertial Navigation System | Terminology Definition
  description: Definition, architecture, core sensors, and the role of inertial navigation systems in spacecraft navigation
  image: /logo.png
permalink: /en/glossary/fundamentals/inertial-navigation-system/
---

# Inertial Navigation System

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An inertial navigation system (INS) is a self-contained navigation system that uses accelerometers and gyroscopes to measure the acceleration and angular velocity of a vehicle, then computes velocity, position, and attitude through integration. Inertial navigation does not rely on external signals, offering complete autonomy and immunity to interference. It forms the core of navigation systems for ballistic missiles and launch vehicles.

## Core Elements

### Core Sensors

| Sensor | Function | Typical Accuracy |
|:---|:---|:---|
| Accelerometer | Measures specific force (non-gravitational acceleration) along the sensitive axis | Bias $10^{-5}$--$10^{-6}$ m/s$^2$ |
| Gyroscope | Measures angular rate about the sensitive axis | Drift 0.001--0.01 deg/h |

Accelerometers and gyroscopes together form the inertial measurement unit (IMU), the core component of an INS.

### Platform INS (PINS)

In a platform INS, the accelerometers and gyroscopes are mounted on a physical stable platform. The platform maintains a fixed orientation in inertial space via gyroscopes and servo mechanisms.

- **Advantages**: Accelerometers directly measure specific force in the inertial frame, simplifying computation; relatively lower gyroscope accuracy requirements
- **Disadvantages**: Complex structure, large volume, high cost, lower reliability
- **Applications**: Early ballistic missiles and launch vehicles

### Strapdown INS (SINS)

In a strapdown INS, the accelerometers and gyroscopes are rigidly mounted on the vehicle body. The onboard computer computes the attitude matrix in real time and transforms measurements from the body frame to the navigation frame.

- **Advantages**: Simple structure, compact size, low cost, high reliability
- **Disadvantages**: High demands on gyroscope dynamic range and computing speed; requires complex attitude algorithms
- **Applications**: Modern ballistic missiles, launch vehicles, and spacecraft

### GNC System

The inertial navigation system is one of the three major components of a vehicle's GNC (Guidance, Navigation, and Control) system:

- **Navigation**: Determines the vehicle's position, velocity, and attitude -- the core function of inertial navigation
- **Guidance**: Computes the required control commands based on current position and target
- **Control**: Executes guidance commands to steer the vehicle's attitude and thrust direction

## Application Value

Inertial navigation systems are the standard navigation solution for ballistic missiles and launch vehicles. Their autonomy ensures reliability in contested environments. For cislunar space missions, inertial navigation can be integrated with celestial navigation, radio navigation, and other techniques to provide high-accuracy autonomous navigation. The accuracy of inertial sensors directly determines the vehicle's navigation precision and guidance performance.

## Related Concepts

## References

- Zheng Wei, An Xueying, Zhou Xiang, He Ruizhi. Aerospace Flight Mechanics (空天飞行力学)[M]. National University of Defense Technology, 2026.
- Jia Peiran, Chen Kejun, et al. Long-Range Rocket Ballistics (远程火箭弹道学)[M]. National University of Defense Technology Press.
