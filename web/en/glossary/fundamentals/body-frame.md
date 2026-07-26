---
title: Body Frame
description: A detailed analysis of the body frame — its definition, axis conventions, relationship with the launch frame, and central role in vehicle attitude description
keywords: body frame, missile body frame, launch vehicle frame, attitude angles, Euler angles, coordinate frame, spacecraft
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Body Frame
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Body Frame | Terminology Definition"
  description: A detailed analysis of the body frame — its definition, axis conventions, and central role in vehicle attitude description
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Body Frame | Terminology Definition"
  description: A detailed analysis of the body frame — its definition, axis conventions, and central role in vehicle attitude description
  image: /logo.png
permalink: /en/glossary/fundamentals/body-frame/
---

# Body Frame

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The body frame is a coordinate frame fixed to the vehicle. It is also referred to as the missile body frame or the launch vehicle frame, denoted $o_1 - x_1 y_1 z_1$ and abbreviated as $B$. The origin of the body frame is at the vehicle's center of mass, and its axes are fixed to the vehicle structure, moving and rotating with the vehicle. The body frame is the core reference frame for describing vehicle attitude.

## Core Elements

### Axis Definitions

| Axis | Definition |
| :--- | :--- |
| $o_1 x_1$ | Principal longitudinal symmetry axis of the vehicle, pointing toward the nose |
| $o_1 y_1$ | In the principal symmetry plane, perpendicular to the $x_1$ axis |
| $o_1 z_1$ | Perpendicular to the principal symmetry plane, pointing to the right when viewed from behind along the direction of flight |

The principal symmetry plane coincides with the $xoy$ plane of the launch frame at the instant of launch.

### Attitude Angle Definitions

The orientation of the body frame relative to the launch frame (or launch inertial frame) is described by three Euler angles (attitude angles) using a 3-2-1 rotation sequence:

| Attitude Angle | Symbol | Definition |
| :--- | :--- | :--- |
| Yaw | $\varphi$ | Rotation about the $z$-axis; angle between the projection of $x_1$ on the horizontal plane and the $x$-axis |
| Pitch | $\psi$ | Rotation about the $y$-axis; angle between the $x_1$-axis and the horizontal plane |
| Roll | $\gamma$ | Rotation about the $x$-axis; angle between the $y_1$-axis and the principal symmetry plane |

### Conversion with the Launch Frame

The direction cosine matrix between the body frame and the launch frame is composed of trigonometric functions of the three attitude angles:

$$\mathbf{B}_G = \mathbf{R}_x(\gamma) \cdot \mathbf{R}_y(\psi) \cdot \mathbf{R}_z(\varphi)$$

This matrix is used to transform measurements taken in the body frame (such as thrust direction and aerodynamic forces) into the launch frame.

## Application Value

The body frame is fundamental to vehicle attitude control and analysis of motion about the center of mass. Gyroscopes and accelerometers in inertial navigation systems are mounted in the body frame, and their measurements must be transformed to the navigation frame via the attitude matrix. For cislunar missions, accurate determination of the body frame is a prerequisite for attitude control, rendezvous and docking, and precision pointing.

## Related Concepts

<!-- EN mirrors for velocity frame, ECI, INS, lift-to-drag ratio, and aerospace vehicle do not exist yet -->

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
