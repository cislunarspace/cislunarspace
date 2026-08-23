---
title: Earth–Moon Transfer Orbits
description: Classification architecture, energy budgets, invariant manifolds, weak stability boundary (WSB) transfer mechanisms, and rendezvous design with target orbits in cislunar space.
keywords: Earth-Moon transfer orbit, TLI, ballistic capture, weak stability boundary, invariant manifold, energy budget
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-08-20
permalink: /en/cislunar-orbits/transfer/
wechatShare:
  title: Earth–Moon Transfer Orbit Overview
  desc: Dynamical mechanisms, energy budgets, and engineering trade-offs of Earth–Moon transfer orbits.
  image: /logo.png
og:
  title: Earth–Moon Transfer Orbit Overview
  description: Dynamical mechanisms, energy budgets, and engineering trade-offs of Earth–Moon transfer orbits.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Earth–Moon Transfer Orbit Overview
  description: Dynamical mechanisms, energy budgets, and engineering trade-offs of Earth–Moon transfer orbits.
  image: /logo.png
---

# Earth–Moon Transfer Orbits

An Earth–Moon transfer orbit is the dynamical trajectory corridor connecting near-Earth space (such as Low Earth Orbit, LEO) to target operational orbits in cislunar space (such as NRHO, DRO, libration point orbits, or Low Lunar Orbit). The design of Earth–Moon transfers governs mission payload capacity and propellant mass fraction, while fundamentally shaping launch window frequencies, tracking visibility, and mission timelines.

Within the multi-body gravitational environment of cislunar space, transfer orbit design transcends classical Keplerian patched-conic approximations. By exploiting invariant manifolds associated with libration point orbits, Weak Stability Boundaries (WSB), and multi-body gravitational perturbations, modern trajectory designers utilize direct high-energy transfers, low-energy manifold transfers, and gravity-assisted ballistic captures.

## Transfer Classification & Dynamical Mechanisms

Based on orbital energy, propulsion modes, and dynamical structures, Earth–Moon transfers are categorized into three primary architectures:

| Transfer Architecture | Typical Time of Flight | TLI Injection $\Delta V$ | Dynamical Mechanism & Characteristics | Primary Mission Scenarios |
| :--- | :--- | :--- | :--- | :--- |
| **Direct Impulsive Transfer** | 3–5 days | 3.1–3.3 km/s | Patched-conic geometry; minimal flight time and rapid radiation belt transit, but large orbit insertion $\Delta V$ | Crewed lunar missions (Apollo, Artemis), time-critical cargo |
| **Weak Stability Boundary (WSB)** | 2–4 months | 2.9–3.0 km/s | Sun–Earth $L_1$/$L_2$ transit utilizing solar tidal perturbations to raise perilune; ballistic capture at Moon | Scientific orbiters (GRAIL, CAPSTONE), propellant-constrained logistics |
| **Invariant Manifold Transfer** | Weeks to months | 3.0–3.1 km/s | Spacecraft coasts along stable manifold tubes of libration-point periodic orbits with near-zero insertion $\Delta V$ | Libration point missions, Lunar Gateway assembly & deployment |

### 1. Direct Impulsive Transfer

From a low-Earth parking orbit, the upper stage performs a high-thrust Trans-Lunar Injection (TLI) burn to place the spacecraft onto a high-eccentricity lunar transfer ellipse. While demanding high thrust and exhibiting strict launch window constraints tied to lunar phases, this approach minimizes crew exposure to the Van Allen radiation belts and deep-space microgravity.

### 2. Low-Energy Manifold & Weak Stability Boundary (WSB) Transfer

Low-energy transfers exploit natural energy corridors in the multi-body rotating frame. The spacecraft is injected toward the Sun–Earth libration points ($\approx 1.5\text{ million km}$ from Earth), where solar tidal forces stretch orbital eccentricity and reshape angular momentum. The spacecraft then falls back toward the Moon with very low relative velocity, achieving natural ballistic capture within the lunar sphere of influence. This saves $100\text{–}200+\text{ m/s}$ in insertion $\Delta V$ compared to direct transfers.

### 3. Continuous Low-Thrust Electric Propulsion Transfer

Spacecraft equipped with high-specific-impulse Hall-effect or ion thrusters apply continuous low thrust to spiral outward from LEO, gradually expanding the orbit before smoothly transitioning onto target orbit manifolds near the Earth–Moon libration points. This architecture exchanges longer transfer durations for vastly improved payload mass ratios.

## Energy Characteristics & Characteristic Velocity

Earth–Moon transfer energy is characterized by the characteristic energy $C_3$ (square of hyperbolic excess velocity):

$$C_3 = v^2 - \frac{2\mu_E}{r}$$

where $v$ is the Earth-centered inertial velocity, $r$ is the geocentric distance, and $\mu_E$ is Earth's gravitational parameter.

Departing from a standard 200 km circular LEO, the required TLI injection $C_3$ typically ranges between $-2.0\text{ km}^2/\text{s}^2$ and $-0.5\text{ km}^2/\text{s}^2$, corresponding to an injection $\Delta V$ of approximately 3.12 to 3.20 km/s applied at perigee.

## Orbit Interface & Target Rendezvous

The terminal state of the transfer trajectory must be rigorously matched to the geometry and energy state of the target orbit:

- **NRHO Insertion**: Entering via stable manifolds or perilune targeting with an insertion impulse of $200\text{–}400\text{ m/s}$, or via weak stability manifolds with an insertion cost under $50\text{ m/s}$.
- **DRO Insertion**: Due to the large scale and lack of hyperbolic manifolds in DROs, insertion typically employs a lunar gravity assist coupled with an apolune insertion burn ($\Delta V \approx 100\text{–}300\text{ m/s}$).
- **Lunar Landing Descent**: Transitioning from the transfer orbit to a lunar parking orbit (e.g., 100 km circular) or NRHO, followed by powered perilune descent ignition toward the surface.

## In-Depth Topics

- **TLI Overview & Launch Windows**: Read [Trans-Lunar Injection (TLI) Overview](/en/cislunar-orbits/transfer/tli-overview/) to master $\Delta V$ budgeting and launch window analysis.
- **Ballistic Capture Mechanisms**: Read [Ballistic Capture Dynamics](/en/cislunar-orbits/transfer/ballistic-capture/) to explore weak stability boundaries and gravitational capture.
- **Manifold Transfers & Optimization**: Read [Manifold Transfers & Optimization](/en/cislunar-orbits/transfer/tli-overview/) to learn zero-thrust insertion design using invariant manifolds.
- **Low-Thrust Electric Propulsion Transfers**: Read [Low-Thrust Transfers](/en/cislunar-orbits/transfer/ballistic-capture/) for continuous-thrust trajectory optimization and numerical propagation methods.
