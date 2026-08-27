---
title: NRHO (Near-Rectilinear Halo Orbit)
description: Dynamical mechanism, stability characteristics, orbit family evolution, and engineering applications of Near-Rectilinear Halo Orbits (NRHO).
keywords: NRHO, Near-Rectilinear Halo Orbit, L1 NRHO, L2 NRHO, CR3BP, Halo orbit, Gateway
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-08-27
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

1. **3D High-Amplitude Geometry**: The out-of-plane amplitude of an NRHO is significantly larger than its in-plane amplitude. Perilune altitudes range from a few hundred to several thousand kilometers, while apolune extends up to ≈ 70,000 km. Southern-family members pass perilune over the lunar north polar region and hang their distant arc above the south; northern families are their mirror images. This geometry avoids frequent lunar eclipses and Earth occultations, ensuring continuous solar array illumination and uninterrupted ground communication links.
2. **Weak Hyperbolic Instability**: NRHOs lie near the stability boundary of the Halo family and are weakly hyperbolically unstable. For the operationally favored 9:2 resonant members, the unstable Floquet multiplier has a modulus of about 2–3 (≈ 2.2 at the 9:2 endpoint) — far smaller than the hundreds-fold multipliers of large-amplitude Halo orbits — so state errors grow only modestly per revolution. Periodic corrections at the centimeter-per-second to meter-per-second level suffice (annual budget of a few m/s, reducible to ≤ 2 m/s with modern targeting and predictive-control methods).
3. **Resonance & Perturbation Synergy**: In high-fidelity ephemeris models incorporating solar gravitational perturbations and lunar non-spherical harmonics ($J_2$, Mascons), orbits with specific Earth–Moon orbital resonances (such as the 9:2 synodic resonance with a period of $\approx 6.56\text{ days}$) are favored to align perturbations with orbital motion and reduce station-keeping costs.

## Orbit Classification & Selection

By the associated Lagrange point and north–south orientation, NRHOs fall into four primary families. Southern and northern members about the same point are mirror images: southern members stretch their apolune arc above the southern hemisphere and pass perilune near the lunar north pole, and vice versa:

| Family | Perilune passes | Apolune arc extends | Typical Period | Key Advantages |
| :--- | :--- | :--- | :--- | :--- |
| **$L_1$ Southern NRHO** | North polar side | South side (Earth-facing) | $\approx 6.5\text{–}10$ days | Long dwell visibility over the lunar south pole; low insertion energy from Earth |
| **$L_1$ Northern NRHO** | South polar side | North side (Earth-facing) | $\approx 6.5\text{–}10$ days | Suited for lunar north polar exploration & staging |
| **$L_2$ Southern NRHO** | North polar side | South side (farside outboard) | $\approx 6.5\text{–}9$ days | Combined lunar south pole and farside communications |
| **$L_2$ Northern NRHO** | South polar side | North side (farside outboard) | $\approx 6.5\text{–}9$ days | High-latitude lunar farside tracking and relay |

NASA's Artemis Lunar Gateway has baselined an **$L_2$ Southern 9:2 Synodic-Resonant NRHO**. Its perilune altitude is roughly 1,500–3,000 km depending on the reference solution; each 6.56-day revolution sweeps perilune over the lunar north pole before throwing apolune about 70,000 km beyond the Moon's south pole, so the station spends most of every revolution above the lunar south polar region — providing reliable communications and landing staging for Artemis surface missions.

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
