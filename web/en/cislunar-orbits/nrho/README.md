---
title: NRHO (Near-Rectilinear Halo Orbit)
description: Dynamical mechanism, stability characteristics, orbit family evolution, and engineering applications of Near-Rectilinear Halo Orbits (NRHO).
keywords: NRHO, Near-Rectilinear Halo Orbit, L1 NRHO, L2 NRHO, CR3BP, Halo orbit, Gateway
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-08-20
permalink: /en/cislunar-orbits/nrho/
wechatShare:
  title: Near-Rectilinear Halo Orbit (NRHO) Overview
  desc: Near-Rectilinear Halo Orbit characteristics and mission design under three-body dynamics.
  image: /logo.png
og:
  title: Near-Rectilinear Halo Orbit (NRHO) Overview
  description: Near-Rectilinear Halo Orbit characteristics and mission design under three-body dynamics.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Near-Rectilinear Halo Orbit (NRHO) Overview
  description: Near-Rectilinear Halo Orbit characteristics and mission design under three-body dynamics.
  image: /logo.png
---

# Near-Rectilinear Halo Orbit (NRHO)

A Near-Rectilinear Halo Orbit (NRHO) is a distinct subset of three-dimensional periodic orbits within the Halo orbit family of the Circular Restricted Three-Body Problem (CR3BP). Located in the vicinity of the Earth–Moon $L_1$ and $L_2$ libration points, these orbits exhibit highly elongated geometry perpendicular to the Earth–Moon orbital plane. In the rotating reference frame, their projection resembles a nearly straight line, earning them the name "near-rectilinear."

In deep-space mission design, NRHOs offer exceptional operational advantages: they provide continuous visibility to the lunar polar regions with minimal Earth occultations, and demand low insertion and departure $\Delta V$ budgets. Consequently, NRHO has been selected as the baseline operational orbit for the NASA-led Lunar Gateway space station and crewed lunar landing architectures.

## Dynamical Mechanisms & Stability Characteristics

NRHOs emerge as a branch of the Halo orbit family when evolving toward the Moon with large vertical amplitudes. Their primary dynamical features include:

1. **3D High-Eccentricity Geometry**: The out-of-plane amplitude ($A_z$) of an NRHO is significantly larger than its in-plane amplitude. Perilune altitudes range from a few hundred to several thousand kilometers, while apolune extends up to $\approx 70,000\text{ km}$. This geometry avoids frequent lunar eclipses and Earth occultations, ensuring continuous solar array illumination and uninterrupted ground communication links.
2. **Weak Instability & High Controllability**: Unlike classical libration-point Halo orbits with rapid exponential divergence, NRHOs lie near the three-body stability boundary. Their dominant Floquet multipliers have moduli very close to 1 (typically $1.2\text{ to } 1.5$), demonstrating weak instability or neutral stability. A spacecraft does not rapidly escape and requires only minimal periodic correction maneuvers (less than $1\text{ m/s}$ per revolution, totaling $2\text{ to } 10\text{ m/s}$ per year) for long-duration station-keeping.
3. **Resonance & Perturbation Synergy**: In high-fidelity ephemeris models incorporating solar gravitational perturbations and lunar non-spherical harmonics ($J_2$, Mascons), orbits with specific Earth–Moon orbital resonances (such as the 9:2 synodic resonance with a period of $\approx 6.5\text{ days}$) are favored to align perturbations with orbital motion and reduce station-keeping costs.

## Orbit Classification & Selection

Based on the associated Lagrange point and the hemisphere of perilune/apolune, NRHOs are classified into four primary families:

| Family | Perilune Location | Apolune Direction | Typical Period | Key Advantages |
| :--- | :--- | :--- | :--- | :--- |
| **$L_1$ Southern NRHO** | Over Lunar South Pole | Northward (Earth side) | $\approx 6.5\text{–}8$ days | Long polar dwell time; low insertion energy from Earth |
| **$L_1$ Northern NRHO** | Over Lunar North Pole | Southward (Earth side) | $\approx 6.5\text{–}8$ days | Suited for lunar north pole exploration & staging |
| **$L_2$ Southern NRHO** | Over Lunar South Pole | Lunar Farside (Aft) | $\approx 6.5\text{–}8$ days | Simultaneous lunar south pole and farside communications |
| **$L_2$ Northern NRHO** | Over Lunar North Pole | Lunar Farside (Aft) | $\approx 6.5\text{–}8$ days | High-latitude lunar farside tracking and relay |

NASA's Artemis Lunar Gateway has baselined an **$L_2$ Southern 9:2 Resonant NRHO**. With a perilune of $\approx 1,500\text{–}3,000\text{ km}$, an apolune of $\approx 70,000\text{ km}$, and a 6.56-day orbital period, the station spends the vast majority of each orbit hovering over the lunar south pole to provide reliable communications and landing staging for Artemis surface missions.

## Engineering Advantages

- **Crewed Staging Hub**: Transferring from an Earth-departure trajectory into NRHO requires an insertion impulse of only $\approx 200\text{–}400\text{ m/s}$. Descending from NRHO to the lunar south pole also demands significantly less $\Delta V$ than direct descent from Low Lunar Orbit (LLO).
- **Extended Orbit Lifetime**: Benefiting from weak instability and resonance tuning, an NRHO spacecraft can maintain its orbit for over a decade with low-thrust electric propulsion or small RCS pulses, avoiding the severe orbit degradation caused by lunar mascons in low circular orbits.
- **Continuous Coverage**: High apolune dwell time eliminates line-of-sight blockage by the Moon, making NRHO an ideal relay platform for polar surface landers and rovers.

## In-Depth Topics

- **$L_1$ NRHO Characteristics**: Read [$L_1$ NRHO Properties](/en/cislunar-orbits/nrho/l1-nrho/) for low-energy insertion mechanics from the Earth direction.
- **$L_2$ NRHO Characteristics**: Read [$L_2$ NRHO Properties](/en/cislunar-orbits/nrho/l2-nrho/) for lunar farside relay and south pole coverage orbital designs.
- **Station-Keeping & Control**: Read [NRHO Stability & Station-Keeping](/en/cislunar-orbits/nrho/stability-maintenance/) for differential correction and target point algorithms.
- **High-Fidelity Ephemeris Modeling**: Read [Full Ephemeris Numerical Computation](/en/cislunar-orbits/nrho/ephemeris-computation/) for multi-revolution continuation techniques from CR3BP to real-world force models.
- **Mission Cases**: Read [Gateway Mission Case Study](/en/cislunar-orbits/nrho/gateway-cases/) for practical operational design insights.
