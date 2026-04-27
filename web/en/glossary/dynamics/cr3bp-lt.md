---
title: CR3BP with Low-Thrust (CR3BP-LT)
description: CR3BP-LT is an extension of the standard Circular Restricted Three-Body Problem model with low-thrust acceleration terms, used for studying cislunar orbit transfers under continuous low-thrust propulsion
keywords: CR3BP-LT, low-thrust three-body problem, cislunar space, orbit optimization, low-thrust propulsion, optimal control, CR3BP
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: CR3BP with Low-Thrust (CR3BP-LT)
  description: An extension of the standard CR3BP model with low-thrust acceleration terms
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: CR3BP with Low-Thrust (CR3BP-LT)
  description: An extension of the standard CR3BP model with low-thrust acceleration terms
  image: /logo.png
permalink: /en/glossary/cr3bp-lt/
---

# CR3BP with Low-Thrust (CR3BP-LT)

## Definition

CR3BP-LT is an extension of the standard Circular Restricted Three-Body Problem (CR3BP) that adds continuous low-thrust acceleration terms to the spacecraft's equations of motion, used for studying orbit transfer problems with electric propulsion, ion propulsion, and other low-thrust propulsion systems[[1]](). This model was formally proposed and systematically applied in the A2PPO research by Ul Haq et al. in 2026.

## Equations of Motion

In the normalized rotating coordinate system, the equations of motion for CR3BP-LT are:

$$
\begin{cases}
\ddot{x} = -\left[(1-\mu)\frac{x+\mu}{r_1^3} + \mu\frac{x-(1-\mu)}{r_2^3}\right] + 2\dot{y} + x + \frac{\tilde{T}_{\max}}{\tilde{m}} u_x \\[0.8em]
\ddot{y} = -\left[(1-\mu)\frac{y}{r_1^3} + \mu\frac{y}{r_2^3}\right] - 2\dot{x} + y + \frac{\tilde{T}_{\max}}{\tilde{m}} u_y \\[0.8em]
\ddot{z} = -\left[(1-\mu)\frac{z}{r_1^3} + \mu\frac{z}{r_2^3}\right] + \frac{\tilde{T}_{\max}}{\tilde{m}} u_z
\end{cases}
$$

where $r_1 = \sqrt{(x+\mu)^2 + y^2 + z^2}$ and $r_2 = \sqrt{(x-1+\mu)^2 + y^2 + z^2}$ are the distances from the spacecraft to Earth and Moon respectively, $-2\dot{y}$ and $+2\dot{x}$ are Coriolis force terms, and $u = (u_x, u_y, u_z)$ is the dimensionless thrust control vector satisfying $\|u\| \leq 1$.

Mass evolution follows the Tsiolkovsky rocket equation:

$$
\dot{\tilde{m}} = -\frac{\tilde{T}_{\max}}{\tilde{c}} \|u\|
$$

where $\tilde{c} = I_{sp} g_0 T^*/L^*$ is the dimensionless exhaust velocity.

## Key Parameters

Characteristic normalization parameters for CR3BP-LT:

| Parameter | Symbol | Earth-Moon Value |
|:---|:---:|:---|
| Mass ratio | $\mu$ | 0.01215 |
| Characteristic length | $L^*$ | $3.844 \times 10^8$ m |
| Characteristic time | $T^*$ | 375,132 s |
| Characteristic acceleration | $g_0$ | 9.80665 m/s² |

## CR3BP-LT vs. Standard CR3BP

| Property | Standard CR3BP | CR3BP-LT |
|:---|:---:|:---:|
| Energy conservation | Jacobi constant conserved | Continuous low-thrust breaks conservation |
| Dynamics | Integrable (conservative) | Non-conservative, highly nonlinear |
| Orbit characteristics | Periodic/quasi-periodic orbits | Transfer trajectories freely designable |
| Computational cost | Lower | Higher (requires mass equation integration) |

The CR3BP-LT model degenerates to the standard CR3BP when thrust is zero ($\tilde{T}_{\max} = 0$), at which point the Jacobi constant is conserved again.

## Application in Trajectory Optimization

The CR3BP-LT model is the core environment for deep reinforcement learning methods such as A2PPO applied to low-thrust trajectory optimization. This model:

1. **Retains the essential complexity of three-body dynamics** — chaotic characteristics, manifold structures, energy variations, etc.
2. **Introduces continuous thrust control** — enabling continuous acceleration/deceleration through the dimensionless thrust vector $u$
3. **Maintains computational affordability** — compared to high-fidelity Ephemeris models, CR3BP-LT can support the millions of integrations required for large-scale RL training

## References

- [[1]]() Ul Haq I U, Dai H, Du C. Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning[J]. Aerospace Science and Technology, 2026.
- [[2]]() Du C, Song L, Zhang J, et al. A novel calculation method for low-thrust transfer trajectories in the Earth-Moon restricted three-body problem[J]. Aerospace Science and Technology, 2024.
