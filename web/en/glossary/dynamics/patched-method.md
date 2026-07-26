---
title: Patched Method
description: Detailed explanation of the patched method in orbital design — segmenting complex trajectories into arcs with different dynamical models, matched at connection points
keywords: patched method, orbital patching, perilune patching, transfer trajectory design, cislunar space, dynamical model matching
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Patched Method
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Patched Method Explained | Segmented Trajectory Design and Dynamical Model Matching
  description: Detailed explanation of the patched method in orbital design — segmenting complex trajectories into arcs with different dynamical models, matched at connection points
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Patched Method Explained | Segmented Trajectory Design and Dynamical Model Matching
  description: Detailed explanation of the patched method in orbital design — segmenting complex trajectories into arcs with different dynamical models, matched at connection points
  image: /logo.png
permalink: /en/glossary/dynamics/patched-method/
---

# Patched Method

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The **Patched Method** is a classical numerical design approach in orbital mechanics. Its core idea is to divide a complex transfer trajectory into several simpler sub-arcs, each described and propagated using the most appropriate dynamical model. The arcs are then "patched" together at connection points by matching position and velocity state vectors. The primary advantage of this method is that it reduces the complexity of solving a global trajectory under a single model, enabling efficient computation by leveraging the dominant dynamical characteristics within each region.

In cislunar Distant Retrograde Orbit (DRO) transfer trajectory design, the patched method is widely applied to join the departure arc from Low Earth Orbit (LEO) and the arrival arc to DRO at the perilune, thereby constructing a complete transfer scheme.

## Core Elements

### Basic Principles

The core steps of the patched method are:

1. **Segmentation**: Divide the complete trajectory into $N$ sub-arcs based on the gravity-dominant regions. Each arc uses the dynamical model that best captures the gravitational characteristics of that region.
2. **Independent Solution**: Within each arc, propagate and optimize the trajectory using the corresponding dynamical equations (e.g., two-body model, restricted three-body problem model).
3. **State Matching**: At the connection point between adjacent arcs, require continuity of position and velocity:

$$\mathbf{r}_i^- = \mathbf{r}_i^+, \quad \mathbf{v}_i^- = \mathbf{v}_i^+ \quad (i = 1, 2, \ldots, N-1)$$

1. **Iterative Correction**: If the states at the connection point do not satisfy matching conditions, adjust the free parameters of each arc through differential correction or optimization algorithms until all patching conditions converge.

### Application to Cislunar DRO Transfers

Wei et al. (2026), in their study of powered lunar flyby (PLF) transfer trajectories to cislunar DRO families, employed the patched method to split the trajectory at the perilune into two segments:

| Segment | Arc Description | Dynamical Model | Key Parameters |
| :--- | :--- | :--- | :--- |
| Segment 1 | LEO to perilune | Earth-Moon CR3BP or high-fidelity ephemeris model | LEO departure velocity, transfer time |
| Segment 2 | Perilune to DRO | Earth-Moon CR3BP | Perilune altitude, DRO terminal state |

At the perilune, the velocity directions of the two arcs may differ (since the lunar flyby changes the velocity vector direction). By introducing a **Powered Lunar Flyby** (PLF) maneuver at the perilune, an impulse can be applied to match the velocity vectors and complete the patching.

### Mathematical Expression of Patching Conditions

Let the perilune state be $(\mathbf{r}_{\text{pl}}, \mathbf{v}_{\text{pl}})$. The velocity at the end of Segment 1 is $\mathbf{v}_{\text{pl}}^-$ and the velocity at the start of Segment 2 is $\mathbf{v}_{\text{pl}}^+$. The patching conditions are:

$$\mathbf{r}_{\text{pl}}^- = \mathbf{r}_{\text{pl}}^+ = \mathbf{r}_{\text{pl}}$$

$$\mathbf{v}_{\text{pl}}^+ = \mathbf{v}_{\text{pl}}^- + \Delta \mathbf{v}_{\text{PLF}}$$

where $\Delta \mathbf{v}_{\text{PLF}}$ is the velocity increment applied at the lunar flyby. When $\Delta \mathbf{v}_{\text{PLF}} = \mathbf{0}$, this corresponds to a pure gravitational flyby (unpowered flyby), known as natural patching.

### Comparison with Continuous Methods

| Feature | Patched Method | Continuous Method (Direct Method) |
| :--- | :--- | :--- |
| Model usage | Different models per segment | Unified model throughout |
| Computational efficiency | Higher (independent solution per segment) | Lower (global optimization) |
| Physical interpretability | Strong (each segment corresponds to a clear flight phase) | Weaker |
| Accuracy | Depends on patching point matching precision | Depends on discretization density |
| Applicable scenario | Conceptual design, preliminary scheme screening | High-precision mission design |

### Limitations

- Dynamical model switching at patching points may introduce discontinuous physical assumption errors
- In strongly nonlinear regions (e.g., low-altitude flybys), segmented models may lack sufficient accuracy
- Convergence of patching conditions depends on the quality of initial guesses

## Application Value

In cislunar space mission design, the patched method is one of the most commonly used conceptual design tools:

- **DRO Injection Design**: The patched method enables rapid screening of feasible transfer windows from LEO to DRO, evaluating $\Delta v$ requirements under different launch conditions
- **Lunar Flyby Trajectory Design**: By patching at the perilune, the method naturally incorporates lunar gravitational assist effects, reducing the energy required for transfer
- **Multi-Segment Transfer Schemes**: For complex multi-body transfers involving Earth gravity assists and lunar gravity assists, the patched method provides an intuitive physical segmentation framework

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Differential Correction](/en/glossary/dynamics/differential-correction/)
- [Transfer Orbit](/en/glossary/orbits/transfer-orbit/)
- [Powered Lunar Flyby](/en/glossary/other/powered-lunar-flyby/)
- [Lunar Gravity Assist](/en/glossary/other/lunar-gravity-assist/)

## References

- Wei Z, et al. Research on powered lunar flyby transfer injection to cislunar distant retrograde orbit families[J]. Journal of Beijing University of Aeronautics and Astronautics, 2026.
- Bate R R, Mueller D D, White J E. Fundamentals of Astrodynamics[M]. Dover Publications, 1971.
- Stern S A, et al. Patched-conic and CR3BP methods for lunar transfer design[C]. AAS/AIAA Astrodynamics Specialist Conference, 2019.
