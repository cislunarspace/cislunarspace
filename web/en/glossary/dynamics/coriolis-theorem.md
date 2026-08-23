---
title: Coriolis Theorem (Transport Theorem)
description: The relation between the time derivative of a vector in an inertial frame and in a rotating frame — $(\mathrm d\vec q/\mathrm dt)_I=(\mathrm d\vec q/\mathrm dt)_R+\vec\omega\times\vec q$. Covers its derivation, the two successive applications to the position vector that generate the Coriolis acceleration $2\vec\omega\times\vec v_R$ and the centrifugal acceleration $\vec\omega\times(\vec\omega\times\vec r)$, and its role in deriving the equations of motion in the [synodic frame](/en/glossary/fundamentals/synodic-frame/) (CR3BP) and in body-fixed frames such as the Moon-fixed frame for precision landing.
keywords: Coriolis Theorem, Transport Theorem, Coriolis acceleration, centrifugal acceleration, rotating frame, synodic frame, body-fixed frame
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Coriolis Theorem (Transport Theorem)
  desc: The relation between inertial and rotating-frame time derivatives — the foundation of equations of motion in the CR3BP and body-fixed frames.
  image: /logo.png
og:
  title: Coriolis Theorem | Equations of Motion in Rotating Frames
  description: The relation between the time derivative of a vector in an inertial frame and in a rotating frame. Covers the derivation, the two successive applications that generate the Coriolis and centrifugal accelerations, and the derivation of spacecraft equations of motion in the synodic frame and Moon-fixed frame.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Coriolis Theorem | Equations of Motion in Rotating Frames
  description: The relation between the time derivative of a vector in an inertial frame and in a rotating frame. Covers the derivation, the two successive applications that generate the Coriolis and centrifugal accelerations, and the derivation of spacecraft equations of motion in the synodic frame and Moon-fixed frame.
  image: /logo.png
permalink: /en/glossary/dynamics/coriolis-theorem/
---

# Coriolis Theorem (Transport Theorem)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The **Coriolis theorem** (a.k.a. transport theorem) relates the time derivative of any vector in an inertial frame $\mathcal I$ to its derivative in a frame $\mathcal R$ that rotates with angular velocity $\vec\omega$ relative to $\mathcal I$. For any vector $\vec q$,

$$
\left(\frac{\mathrm d\vec q}{\mathrm dt}\right)_{\!\mathcal I}
=
\left(\frac{\mathrm d\vec q}{\mathrm dt}\right)_{\!\mathcal R}
+
\vec\omega\times\vec q.
$$

$\vec\omega$ is the instantaneous angular velocity of $\mathcal R$ relative to $\mathcal I$. The vector itself is frame-independent, but its components and the operation of differentiating with respect to time both depend on the frame; the Coriolis theorem is the transformation rule for the latter. It is the foundation on which equations of motion are derived in every rotating reference frame used in astrodynamics: the [synodic frame](/en/glossary/fundamentals/synodic-frame/), the Moon-fixed frame, the Earth-fixed frame, and so on.

## Sketch of Derivation

Let $\hat e_1, \hat e_2, \hat e_3$ be the unit basis vectors of $\mathcal R$, so $\vec q=q_1\hat e_1+q_2\hat e_2+q_3\hat e_3$. Differentiating in $\mathcal I$:

$$
\left(\frac{\mathrm d\vec q}{\mathrm dt}\right)_{\!\mathcal I}
= \sum_i \dot q_i\hat e_i + \sum_i q_i\!\left(\frac{\mathrm d\hat e_i}{\mathrm dt}\right)_{\!\mathcal I}.
$$

The first sum is the derivative in $\mathcal R$ (where $\hat e_i$ are constants); in the second sum the basis vectors rotate in $\mathcal I$ with $\mathrm d\hat e_i/\mathrm dt=\vec\omega\times\hat e_i$. Substitution gives the Coriolis theorem.

## Two Applications: Coriolis and Centrifugal Accelerations

Apply the theorem to the position vector $\vec r$ of a body at the origin of $\mathcal R$. The first application gives the velocity transformation

$$
\vec v_I = \vec v_R + \vec\omega\times\vec r,
$$

where $\vec v_I, \vec v_R$ are the time derivatives of $\vec r$ in $\mathcal I, \mathcal R$. Differentiating once more (allowing $\vec\omega$ to vary in time) and rearranging gives the acceleration transformation:

$$
\vec a_I
= \vec a_R
+ 2\,\vec\omega\times\vec v_R
+ \dot{\vec\omega}\times\vec r
+ \vec\omega\times(\vec\omega\times\vec r).
$$

The three extra terms on the right are:

- **Coriolis acceleration** $2\vec\omega\times\vec v_R$: present only when the body moves relative to $\mathcal R$; direction perpendicular to $\vec v_R$.
- **Euler acceleration** $\dot{\vec\omega}\times\vec r$: present only when the frame's angular velocity changes; vanishes for uniform rotation.
- **Centrifugal acceleration** $\vec\omega\times(\vec\omega\times\vec r)$: always directed outward from the rotation axis; magnitude $\omega^2\rho$, where $\rho$ is the distance to the axis.

## Application to the CR3BP Synodic Frame

The standard derivation of the [circular restricted three-body problem](/en/glossary/dynamics/cr3bp/) is a direct application of the Coriolis theorem (Szebehely 1967, §1.5; Vallado 2022, §1.5). In the [synodic frame](/en/glossary/fundamentals/synodic-frame/) the two primaries are fixed and the frame rotates with their orbital angular velocity $\vec\omega=n\hat z$. Moving Newton's gravity $\vec a_I=-\mu_1\vec r_1/r_1^3-\mu_2\vec r_2/r_2^3$ into the rotating frame gives

$$
\ddot{\vec r}+2\vec\omega\times\dot{\vec r}+\vec\omega\times(\vec\omega\times\vec r)
= -\frac{\mu_1}{r_1^3}\vec r_1-\frac{\mu_2}{r_2^3}\vec r_2,
$$

or equivalently

$$
\ddot{\vec r} = -\nabla\Omega - 2\vec\omega\times\dot{\vec r},\qquad
\Omega = \frac{\mu_1}{r_1}+\frac{\mu_2}{r_2}+\tfrac{1}{2}\omega^2(x^2+y^2).
$$

Once $\Omega$ is written as a single scalar two-body gravity + centrifugal potential, the Coriolis term $-2\vec\omega\times\dot{\vec r}$ is a **gyroscopic force** (does no work, perpendicular to velocity), from which the [Jacobi integral](/en/glossary/dynamics/jacobi-integral/) follows. This is the mechanical origin of the Coriolis + centrifugal terms in the synodic-frame equations.

## Application to Body-Fixed Frames

Lunar soft landing, Earth re-entry and similar missions require dynamics in body-fixed frames co-rotating with the body. For the Moon-fixed frame (Zhou & Zhou 2007):

$$
\vec V_I = \vec V_L + \vec\omega_M\times\vec R,
$$

with $\vec V_I$ the inertial velocity, $\vec V_L$ the Moon-fixed velocity, $\vec\omega_M$ the lunar rotation rate, and $\vec R$ the position vector. Differentiating and applying the Coriolis theorem gives the relative equations of motion containing Coriolis $2\vec\omega_M\times\vec V_L$ and centrifugal $\vec\omega_M\times(\vec\omega_M\times\vec R)$ terms; adding lunar non-spherical gravity and control forces yields the precision dynamics model for lunar soft landing. This is the basis of engineering-level landing guidance laws.

## Common Pitfalls

- **Does the Coriolis force do work?** No. The term $2\vec\omega\times\vec v_R$ is always perpendicular to $\vec v_R$ and contributes nothing to the energy integral, one of the reasons the Jacobi integral is conserved.
- **Is Coriolis acceleration the cost of relative velocity?** Yes. It is the inertial observer's view of relative motion being dragged along by the rotating frame.
- **Everyday Coriolis force**: rivers scouring one bank, Foucault pendulum precession, etc. These are the result of multiplying the acceleration term by mass and treating it as a pseudo-force; strictly it is a kinematic effect, not a physical force.
- **Frame of $\vec\omega$**: in the Coriolis theorem, $\vec\omega$ is the angular velocity of $\mathcal R$ relative to $\mathcal I$, not of the body relative to $\mathcal R$.

## Related Concepts

- [Synodic Frame](/en/glossary/fundamentals/synodic-frame/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Jacobi Integral](/en/glossary/dynamics/jacobi-integral/)
- [Inertial Reference Frames](/en/glossary/fundamentals/inertial-reference-frames/)

## References

- Szebehely, V. (1967). *Theory of Orbits: The Restricted Problem of Three Bodies*, §1.5. Academic Press.
- Vallado, D. A. (2022). *Fundamentals of Astrodynamics and Applications*, 5th ed., §1.5 (rotating frames and the transport theorem).
- Goldstein, H., Poole, C. P., & Safko, J. L. (2002). *Classical Mechanics*, 3rd ed., Chapter 4. Addison-Wesley.
- 周净扬, 周荻 (2007). 月球探测器软着陆精确建模及最优轨道设计. 宇航学报.
