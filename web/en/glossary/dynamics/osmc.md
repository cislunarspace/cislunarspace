---
title: Sliding Mode Control and Optimal Sliding Mode Control (OSMC)
description: Sliding Mode Control (SMC) shapes a switching control law that drives the state onto a prescribed sliding surface and then slides along it, achieving invariance to matched uncertainties and disturbances. Optimal Sliding Mode Control (OSMC) embeds the LQR gain in an integral sliding surface so that the sliding motion is optimal for a quadratic cost, while a discontinuous switching term rejects disturbances. This entry covers SMC's mathematical structure (equivalent control, switching term, Lyapunov stability, chattering), integral sliding surface design, the coupling of LQR and SMC in OSMC, and engineering tuning for cislunar libration-point station-keeping.
keywords: sliding mode control, SMC, optimal sliding mode control, OSMC, integral sliding surface, equivalent control, chattering, Lyapunov stability, libration point station-keeping
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Sliding Mode Control and OSMC
  desc: SMC's sliding surface, equivalent control, and switching term; OSMC embeds LQR in an integral sliding surface for optimal-yet-robust sliding motion.
  image: /logo.png
og:
  title: Sliding Mode Control and OSMC Explained | Term Definition
  description: Sliding Mode Control shapes a switching control law that drives the state onto a sliding surface, achieving invariance to matched disturbances; OSMC embeds the LQR gain in an integral sliding surface. This entry covers SMC's mathematics, integral sliding surfaces, OSMC tuning, and libration-point station-keeping.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Sliding Mode Control and OSMC Explained | Term Definition
  description: Sliding Mode Control shapes a switching control law that drives the state onto a sliding surface, achieving invariance to matched disturbances; OSMC embeds the LQR gain in an integral sliding surface. This entry covers SMC's mathematics, integral sliding surfaces, OSMC tuning, and libration-point station-keeping.
  image: /logo.png
permalink: /en/glossary/dynamics/osmc/
---

# Sliding Mode Control and Optimal Sliding Mode Control (OSMC)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Sliding Mode Control (SMC)** is a variable-structure control method: a lower-dimensional manifold — the **sliding surface** $s(\boldsymbol{x},t)=0$ — is designed in state space, and the control law switches between structures in different regions to drive the state onto the surface in finite time and then slide along it. Once on the sliding surface, the closed-loop behaviour is governed by the surface equation, **achieving invariance to matched model uncertainties and disturbances** (Utkin 1977; Slotine & Li 1991).

**Optimal Sliding Mode Control (OSMC)** embeds the [LQR](/en/glossary/dynamics/linear-quadratic-optimal-control/) feedback gain in the sliding surface so that sliding motion is optimal for a predefined quadratic cost, while a discontinuous switching term compensates for disturbances. This combines LQR optimality with SMC robustness (Utkin & Shi 1996; Zhang & Wang 2022).

## SMC Mathematical Structure

Consider an uncertain system $\dot{\boldsymbol{x}} = \boldsymbol{A}\boldsymbol{x} + \boldsymbol{B}(\boldsymbol{u} + \boldsymbol{d})$ with bounded matched disturbance $\|\boldsymbol{d}\|_\infty \le \bar d$. The control law has two parts

$$
\boldsymbol{u} = \boldsymbol{u}_{eq} + \boldsymbol{u}_{sw},
$$

- **Equivalent control** $\boldsymbol{u}_{eq}$: the continuous control obtained by solving $\dot{s}=0$, describing nominal sliding dynamics;
- **Switching control** $\boldsymbol{u}_{sw}$: typically $-(\boldsymbol{G}\boldsymbol{B})^{-1}\boldsymbol{k}\,\mathrm{sgn}(\boldsymbol{s})$, which keeps $\dot{s}\,s<0$ under disturbance.

With the Lyapunov function $V=\tfrac{1}{2}\boldsymbol{s}^T\boldsymbol{s}$, $\dot V = \boldsymbol{s}^T[-\boldsymbol{k}\,\mathrm{sgn}(\boldsymbol{s}) + \boldsymbol{G}\boldsymbol{d}]$. Choosing $k_i > \bar d_i$ ensures $\dot V<0$ and the reaching condition holds (Utkin 1977).

**Chattering.** The sign function $\mathrm{sgn}(\cdot)$ oscillates at high frequency on the switching surface and excites unmodelled dynamics. Common mitigations include a boundary layer (replacing $\mathrm{sgn}$ with $\mathrm{sat}(s/\varepsilon)$), second/higher-order sliding modes (e.g. super-twisting), and dynamic sliding surfaces.

## Integral Sliding Surface

An integral sliding surface augments the proportional state-error term with its integral, so that the surface contains cumulative error information from the initial time and **eliminates steady-state error**. The general form is

$$
\boldsymbol{s}(\boldsymbol{x},t) = \boldsymbol{G}\big[\boldsymbol{x}(t) - \boldsymbol{x}(0)\big] - \boldsymbol{G}\int_{0}^{t}\!\big[\boldsymbol{A}-\boldsymbol{B}\boldsymbol{R}^{-1}\boldsymbol{B}^T\boldsymbol{P}\big]\boldsymbol{x}(\tau)\,d\tau,
$$

where $\boldsymbol{P}$ solves the Riccati equation. Because $\boldsymbol{s}(\boldsymbol{x}_0,0)=0$, the state starts on the surface and the **reaching phase is eliminated** (Utkin & Shi 1996). The equivalent control obtained from $\dot{\boldsymbol{s}}=0$ is $\boldsymbol{u}_{eq}^* = -\boldsymbol{R}^{-1}\boldsymbol{B}^T\boldsymbol{P}\boldsymbol{x}$, exactly the LQR feedback law, so **sliding motion is optimal for the predefined quadratic cost**.

## OSMC Tuning and Libration-Point Station-Keeping

Cislunar libration-point station-keeping (DRO, Halo, NRHO) is a canonical OSMC application (Zhang & Wang 2022). The study uses $\boldsymbol{G}=\boldsymbol{B}^T=[\,\boldsymbol{0}_{3\times3}\ \ \boldsymbol{I}_{3\times3}\,]$ (so that $\boldsymbol{G}\boldsymbol{B}$ is nonsingular), weights $\boldsymbol{Q}=10\boldsymbol{I}_{6}$, $\boldsymbol{R}=\boldsymbol{I}_3$, and switching gains matched to the disturbance magnitude:

| Disturbance | Nondimensional magnitude | Switching gain $\boldsymbol{k}$ |
| --- | --- | --- |
| Jupiter gravity (weak) | $\sim 10^{-7}$ | $2\times10^{-7}\boldsymbol{I}_3$ |
| Solar radiation pressure (strong) | $\sim 10^{-4}$ | $2\times10^{-4}\boldsymbol{I}_3$ |

Simulations show that with only insertion error OSMC performs comparably to LQR; under SRP-magnitude disturbances LQR's position error no longer converges, while OSMC returns the state to the nominal orbit in a short time. Under realistic constraints (navigation error 1 km / 1 cm/s, propulsion error 2%, 2-day navigation interval, thrust upper bound $5\times10^{-4}$ m/s²), OSMC achieves a 99% success rate on the 9:2 NRHO with annual $\Delta V$ about 26 m/s.

## Design Notes

- **$k$ must strictly exceed the disturbance bound.** With $k_i \le \bar d_i$ the reaching condition fails; too large a $k$ amplifies chattering and fuel cost. OSMC practice is to **scale $k$ to the disturbance magnitude** (table above), unlike LQR's fixed gain.
- **Chattering vs sampling/actuation rate.** The boundary layer thickness $\varepsilon$ should match the actuator time constant and control period; too small a value does not smooth, too large a value defeats the sliding behaviour.
- **Matching condition limitation.** SMC invariance holds only for disturbances in the column space of $\boldsymbol{B}$ (matched). Non-matched disturbances require higher-order SMC or adaptive gains.
- **Discrete-time implementation.** For long control periods (e.g. 2 days on NRHO), the discrete-time reaching condition must be re-derived (Drakunov & Utkin 1989), with the sign function replaced by its discrete equivalent.

## Related Concepts

- [LQR and the Riccati Equation](/en/glossary/dynamics/linear-quadratic-optimal-control/)
- [Co-state Variables](/en/glossary/dynamics/co-state-variables/)
- [Pontryagin Minimum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References

- Utkin, V. I., 1977, "Variable structure systems with sliding modes," *IEEE Trans. Autom. Control* 22(2) (the founding work on SMC).
- Slotine, J.-J. E., Li, W., 1991, *Applied Nonlinear Control* (textbook treatment of SMC: equivalent control, reaching condition, chattering).
- Utkin, V. I., Shi, J., 1996, "Integral sliding mode in systems operating under uncertainty conditions," *Proc. IEEE CDC* (integral sliding surface that eliminates the reaching phase).
- Drakunov, S. V., Utkin, V. I., 1989, "On discrete-time sliding modes" (the reaching condition in discrete time).
- Zhang, R., Wang, Y., 2022, "Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints," *Adv. Space Res.* (OSMC tuning for DRO/Halo/NRHO with Monte-Carlo verification).
- Capello, E., et al., 2017, "Sliding-mode control strategies for rendezvous and docking maneuvers" (SMC applied to rendezvous and docking).
