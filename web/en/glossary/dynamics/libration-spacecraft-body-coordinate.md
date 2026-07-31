---
title: Libration Point Spacecraft Body Coordinate System (Libration Point Spacecraft Body Coordinate System)
description: Detailed analysis of libration point spacecraft body coordinate system definition, coordinate axis directions, and relationship with sensor measurement coordinate system
keywords: Libration Point Spacecraft Body Coordinate System, Body Coordinate System, Principal Axes of Inertia, Roll Pitch Yaw, Sensor Installation
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Libration Point Spacecraft Body Coordinate System
  desc: Cislunar space research frontiers, terminology definitions, and tool resources in one-stop learning.
  image: /logo.png
og:
  title: "Libration Point Spacecraft Body Coordinate System Explained | Attitude Reference"
  description: Detailed analysis of libration point spacecraft body coordinate system definition, coordinate axis directions, and relationship with sensor measurement coordinate system
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Libration Point Spacecraft Body Coordinate System Explained | Attitude Reference"
  description: Detailed analysis of libration point spacecraft body coordinate system definition, coordinate axis directions, and relationship with sensor measurement coordinate system
  image: /logo.png
permalink: /en/glossary/dynamics/libration-spacecraft-body-coordinate/
---

# Libration Point Spacecraft Body Coordinate System (Libration Point Spacecraft Body Coordinate System)

> Author: Tianjiang Shuo
>
> Reference: 钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Libration Point Spacecraft Body Coordinate System ($\mathcal{O}_b - X_b Y_b Z_b$) is a body-fixed coordinate system with its origin at the spacecraft center of mass, used to describe spacecraft attitude and sensor installation directions. In 钱霙婧 (2014)'s research, the body coordinate system is defined as the **principal axes of inertia coordinate system**, with $X_b$ as the roll axis, $Y_b$ as the pitch axis, and $Z_b$ as the yaw axis.

## Coordinate Axis Definition

| Axis | Name | Direction | Description |
| :--- | :--- | :--- | :--- |
| **$X_b$** | Roll axis | Along a characteristic axis of the spacecraft | Describes rotation about the longitudinal axis |
| **$Y_b$** | Pitch axis | Along another characteristic axis of the spacecraft | Describes rotation about the transverse axis |
| **$Z_b$** | Yaw axis | Along the third characteristic axis of the spacecraft | Describes rotation about the vertical axis |

The three axes $X_b$, $Y_b$, and $Z_b$ form a right-handed Cartesian coordinate system.

## Relationship with Sensor Measurement Coordinate System

钱霙婧 (2014) assumed that the **sensor measurement coordinate system coincides with the libration point spacecraft body coordinate system**, with installation errors considered separately. This means:

1. Sensor measurement axes align with body coordinate axes
2. Angle measurements in observation equations are directly processed in the body system
3. In actual engineering, sensor installation error compensation needs to be considered

## Role in Autonomous Navigation

### Observation Equation

In autonomous navigation systems, sensor measurement angle information needs to be transformed to the inertial coordinate system:

$$\mathbf{y}_{\text{measured}} = \mathbf{R}_{b \to i} \cdot \mathbf{y}_{\text{body}}$$

Where $\mathbf{R}_{b \to i}$ is the attitude transformation matrix from body to inertial coordinates.

### Attitude Determination

Star sensor measures star direction projection in the body coordinate system; combined with attitude control system attitude information, observation equations can be established for state estimation.

## Attitude Control Terminology

| Terminology | English | Description |
| :--- | :--- | :--- |
| Roll | Roll | Rotation about $X_b$ axis |
| Pitch | Pitch | Rotation about $Y_b$ axis |
| Yaw | Yaw | Rotation about $Z_b$ axis |

## Related Concepts

- [Libration Point Spacecraft Orbital Coordinate System](/en/glossary/dynamics/libration-spacecraft-orbital-coordinate/)
- [Autonomous Navigation](/en/glossary/navigation/autonomous-navigation/)

## References

- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.
