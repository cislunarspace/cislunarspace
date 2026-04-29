---
title: Impulsive Maneuver (脉冲机动)
description: Detailed explanation of the impulsive maneuver model — definition, mathematical model, applications in preliminary orbital transfer design, and comparison with finite-thrust maneuvers
keywords: impulsive maneuver, velocity increment, orbital transfer, cislunar space, Delta-v, lunar gravity assist, finite thrust
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Impulsive Maneuver
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Impulsive Maneuver Explained | Idealized Orbital Transfer Maneuver Model
  description: Detailed explanation of the impulsive maneuver model — definition, mathematical model, applications in preliminary orbital transfer design, and comparison with finite-thrust maneuvers
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Impulsive Maneuver Explained | Idealized Orbital Transfer Maneuver Model
  description: Detailed explanation of the impulsive maneuver model — definition, mathematical model, applications in preliminary orbital transfer design, and comparison with finite-thrust maneuvers
  image: /logo.png
permalink: /en/glossary/dynamics/impulsive-maneuver/
---

# Impulsive Maneuver

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An **Impulsive Maneuver** is an idealized orbital maneuver model in orbital mechanics that assumes the spacecraft's velocity change occurs instantaneously — the velocity increment $\Delta \mathbf{v}$ is applied in zero time. Under the impulsive maneuver assumption, the spacecraft's position remains unchanged before and after the maneuver, while the velocity vector undergoes a discontinuous jump:

$$\mathbf{r}^+ = \mathbf{r}^-, \quad \mathbf{v}^+ = \mathbf{v}^- + \Delta \mathbf{v}$$

where superscripts "$-$" and "$+$" denote states before and after the maneuver, respectively. The impulsive maneuver is the most fundamental and commonly used maneuver model in preliminary orbital transfer design, providing a concise and effective analytical framework for evaluating the energy requirements of transfer schemes.

## Core Elements

### Physical Basis and Applicability Conditions

The physical meaning of the impulsive maneuver assumption is that the engine thrust is much larger than the gravitational and other external forces on the spacecraft, so that the orbital change due to gravity during the brief burn can be neglected. This assumption holds under the following conditions:

- Engine thrust is sufficiently large (chemical engines typically satisfy this)
- Burn duration is much shorter than the orbital period (typically $t_{\text{burn}} \ll T_{\text{orbit}}$, i.e., burn time is less than 1% of the orbital period)
- Precise orbital evolution during the burn is not of interest

When thrust is low (e.g., electric propulsion engines), the impulsive assumption no longer applies, and **finite thrust** or **continuous thrust** models must be used.

### Velocity Increment and $\Delta v$ Budget

The core metric of an impulsive maneuver is the velocity increment $\Delta v = \|\Delta \mathbf{v}\|$. In mission design, the $\Delta v$ budget is a key indicator for evaluating transfer scheme feasibility:

$$\Delta v_{\text{total}} = \sum_{i=1}^{n} \Delta v_i$$

where $n$ is the total number of maneuvers. The relationship between $\Delta v$ and fuel consumption is given by the **Tsiolkovsky Equation**:

$$\Delta v = I_{\text{sp}} \cdot g_0 \cdot \ln\left(\frac{m_0}{m_f}\right)$$

where $I_{\text{sp}}$ is the specific impulse, $g_0$ is the standard gravitational acceleration, and $m_0$ and $m_f$ are the spacecraft masses before and after the maneuver, respectively.

### Typical Impulsive Maneuvers in Orbital Transfers

| Maneuver Type | Description | Typical $\Delta v$ Magnitude |
|:---|:---|:---|
| **Hohmann Transfer** | Two-impulse coplanar circular orbit transfer | 3.2 km/s (LEO to GEO) |
| **Bi-elliptic Transfer** | Three-impulse transfer, suitable for large radius ratios | Can be less than Hohmann |
| **Plane Change** | Impulse to change orbital inclination | Depends on inclination change |
| **Lunar Flyby Injection** | Impulse at perilune to enter target orbit | Hundreds of m/s |

### Application to DRO Transfer Design

Wei et al. (2026) employed impulsive maneuvers in their study of powered lunar flyby transfer injection to cislunar DRO orbit families:

1. **LEO departure impulse**: A departure velocity increment $\Delta v_{\text{LEO}}$ applied at Low Earth Orbit to enter the Earth-Moon transfer trajectory
2. **Perilune correction impulse**: A velocity increment $\Delta v_{\text{PLF}}$ applied at the lunar perilune to adjust the velocity vector direction and magnitude to match the target DRO orbit's perilune conditions
3. **DRO injection impulse**: If necessary, an orbit correction impulse applied upon reaching the DRO to precisely converge the orbit to the nominal DRO

The total $\Delta v$ requirement is:

$$\Delta v_{\text{total}} = \Delta v_{\text{LEO}} + \Delta v_{\text{PLF}} + \Delta v_{\text{DRO}}$$

Through the patched method and continuation methods to optimize each arc, $\Delta v_{\text{total}}$ can be minimized.

### Lambert's Problem and Impulsive Transfers

Given two positions $\mathbf{r}_1$ and $\mathbf{r}_2$ and a transfer time $\Delta t$, Lambert's problem solves for the Keplerian orbit connecting the two points, yielding the required velocities $\mathbf{v}_1$ and $\mathbf{v}_2$. The impulsive velocity increments are:

$$\Delta v_1 = \|\mathbf{v}_1 - \mathbf{v}_{\text{orbit},1}\|, \quad \Delta v_2 = \|\mathbf{v}_{\text{orbit},2} - \mathbf{v}_2\|$$

Lambert's problem is the fundamental tool for impulsive transfer design. By scanning different departure times and transfer times, a **Porkchop Plot** can be generated to visually display how $\Delta v$ varies with launch windows.

### Comparison with Finite-Thrust Maneuvers

| Feature | Impulsive Maneuver | Finite-Thrust Maneuver |
|:---|:---|:---|
| Thrust model | Infinite thrust, zero burn duration | Finite thrust, finite burn duration |
| Position change | Position unchanged before and after maneuver | Position continuously changes during burn |
| Computational complexity | Low (orbital mechanics only) | High (requires thrust vector control) |
| Design phase | Conceptual design, preliminary schemes | Detailed design, mission execution |
| Engine type | Chemical engines | Chemical or electric propulsion |
| $\Delta v$ accuracy | Approximate (neglects gravity losses) | Exact |

It is important to note that finite-thrust maneuvers incur **gravity losses** — during a finite-duration thrust, gravity continuously decelerates the spacecraft (for acceleration maneuvers) or changes the velocity direction. In actual missions, the impulsive $\Delta v$ must be multiplied by a correction factor (typically 1.05-1.3) to estimate the actual fuel consumption for finite-thrust scenarios.

## Application Value

The core value of the impulsive maneuver model in cislunar space mission design lies in:

- **Rapid Scheme Assessment**: The impulsive assumption greatly simplifies orbital transfer calculations, enabling rapid screening of numerous candidate schemes during the conceptual design phase
- **Energy Requirement Baseline**: The $\Delta v$ budget is the first feasibility threshold for mission assessment; the impulsive model provides a concise energy requirement metric
- **Porkchop Plot Generation**: Impulsive transfer analysis based on Lambert's problem can produce a global view of launch windows
- **Foundation of the Patched Method**: Within the patched method framework, arc connections are typically realized as impulsive maneuvers, making the impulsive model a natural component of the patched method

## Related Concepts

- [Transfer Orbit](/en/glossary/orbits/transfer-orbit/)
- [Lunar Gravity Assist](/en/glossary/other/lunar-gravity-assist/)
- [Powered Lunar Flyby](/en/glossary/other/powered-lunar-flyby/)
- [Patched Method](/en/glossary/dynamics/patched-method/)
- [Differential Correction](/en/glossary/dynamics/differential-correction/)

## References

- Wei Z, et al. Research on powered lunar flyby transfer injection to cislunar distant retrograde orbit families[J]. Journal of Beijing University of Aeronautics and Astronautics, 2026.
- Bate R R, Mueller D D, White J E. Fundamentals of Astrodynamics[M]. Dover Publications, 1971.
- Vallado D A. Fundamentals of Astrodynamics and Applications[M]. 4th ed. Microcosm Press, 2013.
- Lawden D F. Optimal Trajectories for Space Navigation[M]. Butterworths, 1963.
