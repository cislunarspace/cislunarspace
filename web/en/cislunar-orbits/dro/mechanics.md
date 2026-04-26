---
title: DRO Dynamics Mechanism
description: Analysis of retrograde geometry, Jacobi constant constraints, and stability origins in the CR3BP for Distant Retrograde Orbits.
keywords: DRO dynamics, retrograde geometry, Jacobi constant, CR3BP stability, Coriolis effect
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/cislunar-orbits/dro/mechanics/
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Source: https://cislunarspace.cn

# DRO Dynamics Mechanism

## Retrograde Geometry

The most distinctive feature of a Distant Retrograde Orbit (DRO) in the Earth-Moon rotating frame is its **retrograde motion**: the spacecraft's orbital motion is opposite to the rotation direction of the Earth-Moon line. In the rotating frame, the orbital angular velocity $\dot{\theta} < 0$, meaning the spacecraft appears to be moving "backwards" from the rotating frame perspective.

This geometric characteristic can be explained using the angular momentum in the synodic reference frame. Let the spacecraft's angular momentum in inertial space be $h$, then its effective angular momentum in the rotating frame is:

$$h_{eff} = h - r^2 \dot{\theta}_{frame}$$

For retrograde orbits, $h_{eff} < 0$, corresponding to a negative "effective" angular momentum direction. This negative rotation causes the Coriolis effect's influence on orbital stability to be fundamentally different from prograde orbits.

## Jacobi Constant Constraint

The existence of DROs is governed by the conservation of the Jacobi constant $C_J$ in the CR3BP:

$$C_J = 2 - v^2 + \frac{2(1-\mu)}{r_1} + \frac{2\mu}{r_2} = 2\Omega - v^2$$

where $\Omega = \frac{1-\mu}{r_1} + \frac{\mu}{r_2}$ is the effective potential function.

DROs typically correspond to Jacobi constant values in the range $3.0 < C_J < 3.1$, which represents a special collision-free region in CR3BP phase space — this region lies between the two primary potential wells, corresponding to stable oscillations outside the Moon's sphere of influence.

In the rotating frame, $C_J$ can be rewritten as:

$$C_J = x^2 + y^2 + \frac{2(1-\mu)}{r_1} + \frac{2\mu}{r_2} - \dot{x}^2 - \dot{y}^2$$

This indicates that for a given position $(x,y)$, the kinetic energy has an upper bound — i.e., "Jacobi energy" is conserved.

## Source of Stability

The relatively high intrinsic stability of DROs in the CR3BP arises from the special interaction between retrograde motion and the Coriolis effect.

### Role of the Coriolis Effect

In a rotating frame, a body's motion is subject to the Coriolis force $-2\boldsymbol{\omega} \times \mathbf{v}$. For prograde orbits, the Coriolis force acts radially outward (similar to enhanced centrifugal force), which amplifies certain directional perturbations; for retrograde orbits, the Coriolis force acts radially inward, acting like a "stabilizing spring" that suppresses perturbation growth.

### Connection to Lyapunov Orbits

DROs share a **bifurcation** relationship with Lyapunov periodic orbits near L1/L2. As the Jacobi constant $C_J$ decreases (energy increases), Lyapunov orbits transform into DROs through bifurcation. This bifurcation relationship indicates that DROs are not an isolated orbital family, but rather part of the CR3BP periodic orbit family.

## Velocity Components and Orbital Shape

In the rotating frame, DRO velocity components satisfy:

$$v_x^2 + v_y^2 + v_z^2 = 2\Omega - C_J$$

The retrograde characteristic implies $v_y < 0$ (assuming the rotation direction is positive y), but this does not mean the entire orbit is "reversing" — rather, it refers to negative net angular momentum. The $v_x$ component of a DRO may be positive or negative at different orbital phases, forming an approximately elliptical orbital shape.

## Simulation Experiment

You can set DRO initial conditions in the [Satellite Orbit Simulation Laboratory](/en/satellite-simulation/) to observe its retrograde orbital shape in the rotating frame and compare the differences with NRHOs.
