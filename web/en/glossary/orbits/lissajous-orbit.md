---
title: Lissajous Orbit
description: A quasi-periodic orbit on the center manifold near a collinear libration point, formed by an in-plane oscillation and an out-of-plane oscillation of a different frequency, with the two amplitudes as free parameters; the ARTEMIS spacecraft flew such orbits at Earth–Moon L1 and L2.
keywords: Lissajous Orbit, quasi-periodic orbit, quasi-halo, ARTEMIS, libration point orbit, cislunar space
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Lissajous Orbit
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Lissajous Orbit Explained | Term Definition"
  description: A quasi-periodic orbit on the center manifold near a collinear libration point, formed by an in-plane oscillation and an out-of-plane oscillation of a different frequency, with the two amplitudes as free parameters; the ARTEMIS spacecraft flew such orbits at Earth–Moon L1 and L2.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Lissajous Orbit Explained | Term Definition"
  description: A quasi-periodic orbit on the center manifold near a collinear libration point, formed by an in-plane oscillation and an out-of-plane oscillation of a different frequency, with the two amplitudes as free parameters; the ARTEMIS spacecraft flew such orbits at Earth–Moon L1 and L2.
  image: /logo.png
permalink: /en/glossary/orbits/lissajous-orbit/
---

# Lissajous Orbit

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A Lissajous orbit is a quasi-periodic orbit on the center manifold near a collinear libration point: an in-plane (xy) oscillation combined with an out-of-plane (z) oscillation of a different frequency, with the in-plane amplitude Ax and out-of-plane amplitude Az as two free parameters (Canalias 2008, Renk 2010). Because the two frequencies are generally incommensurate, the orbit never closes but remains in a bounded region around the libration point, tracing a Lissajous figure. Dynamically, Lissajous orbits are two-dimensional tori surrounding the vertical periodic orbits (Folta 2014). The name comes from the figures studied by the French physicist Jules Antoine Lissajous.

## Relation to Halo Orbits

When the in-plane and out-of-plane frequencies become equal, a Lissajous orbit degenerates into a periodic halo orbit (Renk 2010, Gómez 2001). The two differ in symmetry: Lissajous orbits remain (quasi-)symmetric about both the xy- and xz-planes, while halo orbits keep only the xz-plane symmetry and lose the xy-plane one (Renk 2010).

## Variants

- **Square Lissajous orbits**: Lissajous orbits whose in-plane and out-of-plane amplitudes are equal (α3 = α4) (Alessi 2010). Note that "square" is an amplitude constraint — the two frequencies still differ, so there is no "equal period" property.
- **Quasi-halo orbits**: quasi-periodic tori surrounding halo orbits (Folta 2014). Generative relation: once the out-of-plane amplitude exceeds a certain lower bound, a Lissajous orbit loses its xy-plane symmetry and develops an exclusion zone around the line of the primaries — it has then become a quasi-halo (Renk 2010). Quasi-halos therefore do **not** have small out-of-plane amplitudes; they correspond to the large-amplitude end of the Lissajous family.
- **High/low z-amplitude modes**: in the nonlinear model the z-amplitude is no longer constant but cycles between high and low modes; the entry phase selects which region of the torus is reached. The low z-amplitude mode is also called the nearly-planar mode. ARTEMIS exploited the high z-amplitude mode on the L2 side to accommodate the out-of-plane arrival conditions of ballistic transfers, and the low z-amplitude (nearly-planar) phase on the L1 side to reduce the ΔV of entering low-inclination lunar orbits (Folta 2014). Note that these modes belong to large quasi-halo orbits (and quasi-periodic orbits in general) — Folta 2014 explicitly states that Lissajous orbits (the central region of the Poincaré section) do not possess nearly-planar modes.

## Parameterization

- **Osculating Lissajous elements** (Renk 2010): by analogy with Keplerian elements — unstable amplitude A1 (exponentially growing term), stable amplitude A2 (decaying term), in-plane amplitude Ax (Ay scales with Ax and is not listed separately), out-of-plane amplitude Az, in-plane phase Φxy, out-of-plane phase Φz. Setting A1 = A2 = 0 yields a Lissajous orbit.
- **Effective phase plane (EPP)**: the effective phases (Φ, Ψ) map one-to-one onto the state of a Lissajous orbit of given amplitudes, used for two-spacecraft rendezvous and eclipse-avoidance design (Perozzi & Ferraz-Mello 2010).

## Applications

- **ARTEMIS**: P1 and P2 entered Earth–Moon L2 and L1 Lissajous orbits on 2010-08-25 and 2010-10-22 respectively, each via a single Lissajous orbit insertion (LOI) maneuver (Folta 2012). Station-keeping with orbit continuation proved best under ephemeris-model errors, with a floor of about 15 m/s per year against a budget under 25 m/s per year (Folta 2010). After the fact, Poincaré-section analysis showed all three ARTEMIS libration-point orbits to be arcs of large southern quasi-halo orbits (Folta 2014) — "Lissajous" by design intent and "quasi-halo" by post-hoc classification, both attested in the literature.
- **Sun–Earth↔Earth–Moon natural transfers**: matching the hyperbolic manifolds of two three-body systems on a Poincaré section enables maneuver-free transfers between their Lissajous orbits, with coupling maneuvers generally below 100 m/s after multiple-shooting refinement (Canalias 2008).
- **Eclipse avoidance**: the shape controllability of the two-parameter Lissajous family makes eclipse avoidance inexpensive (Alessi 2010).

## Terminology Variants

| Term | Meaning | Source |
|------|---------|--------|
| Lissajous trajectory | Same as Lissajous orbit | Canalias 2008 |
| Square Lissajous | Variant with equal in-plane and out-of-plane amplitudes | Alessi 2010 |
| Lissajous orbit insertion (LOI) | Maneuver entering a Lissajous orbit from a transfer | Folta 2012 |
| Quasi-halo | Quasi-periodic torus around a halo orbit (large-amplitude end of Lissajous) | Renk 2010, Folta 2014 |
| High/low z-amplitude mode | Phase regions of peak/valley z-amplitude on the torus | Folta 2014 |
| Osculating Lissajous elements | A1, A2, Ax, Az, Φxy, Φz | Renk 2010 |

## Related Concepts

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/orbits/nrho/)
- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)
- [Quasi-Periodic Orbit (QPO)](/en/glossary/orbits/qpo/)
- [Weak Stability Boundary Transfer Trajectory](/en/glossary/orbits/weak-stability-boundary-transfer-trajectory/)

## References

- Canalias & Masdemont, 2008, Computing natural transfers between Sun–Earth and Earth–Moon Lissajous libration point orbits
- Renk et al., 2010, Study on Lissajous and quasi-halo orbits
- Alessi et al., 2010, Two-manoeuvres transfers between LEOs and Lissajous orbits in the Earth–Moon system
- Folta et al., 2010, Stationkeeping of Lissajous trajectories in the Earth-Moon system with applications to ARTEMIS
- Folta et al., 2012, ARTEMIS transfer and insertion study
- Folta et al., 2014, Earth–Moon libration point orbit stationkeeping: theory, modeling, and operations
- Perozzi & Ferraz-Mello, 2010, Effective-phase methods for rendezvous and eclipse avoidance on libration-point orbits
- Qiao et al., 2025, Review of cislunar libration-point missions
