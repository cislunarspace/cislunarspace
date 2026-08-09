---
title: Long-Period, Short-Period, and Dual-Period Motion near Triangular Libration Points
description: The two natural modes of relative motion near Earth–Moon L4/L5 — a long-period mode (period ≈ 92 d, axis ratio ≈ 16/3) and a short-period mode (period ≈ 1 synodic month, axis ratio ≈ 2). Either can be filtered out by initial-velocity selection; the dual-period case (both modes combined) has period ≈ 458 d and axis ratio ≈ 16/5. Covers formation-flight implications and sensitivity to initial conditions.
keywords: long-period motion, short-period motion, dual-period motion, triangular libration point, L4, L5, Earth–Moon, formation flight, CR3BP, Catlin McLaughlin
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Long-, Short-, and Dual-Period Motion near L4/L5
  desc: Two natural relative-motion modes at Earth–Moon L4/L5: long period (≈ 92 d, 16/3) and short period (≈ 1 month, 2); dual-period combination ≈ 458 d.
  image: /logo.png
og:
  title: Long-, Short-, and Dual-Period Motion near L4/L5 | Glossary
  description: The two natural modes of relative motion near Earth–Moon L4/L5 — long-period (≈ 92 d, 16/3) and short-period (≈ 1 synodic month, 2); the dual-period combination has period ≈ 458 d and axis ratio ≈ 16/5.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Long-, Short-, and Dual-Period Motion near L4/L5 | Glossary
  description: The two natural modes of relative motion near Earth–Moon L4/L5 — long-period (≈ 92 d, 16/3) and short-period (≈ 1 synodic month, 2); the dual-period combination has period ≈ 458 d and axis ratio ≈ 16/5.
  image: /logo.png
permalink: /en/glossary/dynamics/long-period-motion/
---

# Long-, Short-, and Dual-Period Motion near Triangular Libration Points

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Linearising the CR3BP equations about either triangular libration point ($L_4$ or $L_5$) yields two in-plane oscillatory modes plus an out-of-plane harmonic. The in-plane modes are the **long-period** and **short-period** modes; their combination is the **dual-period** case. Following Catlin & McLaughlin (2007), the in-plane frequencies are

$$
s_{1,2} = \sqrt{\tfrac{1}{2}\Big(\tfrac{1}{2} \pm \sqrt{\tfrac{1}{4} - 27\,\mu(1-\mu)}\Big)},
$$

where $\mu \approx 0.0121506$ for the Earth–Moon system. The $s_1 < s_2$ convention gives the long-period frequency $s_1$ and the short-period frequency $s_2$; $s_z = \sqrt{1 - \mu + \mu^2} \approx 0.999893$ is the (near-unit) out-of-plane frequency. With these, the periods and axis ratios (semimajor over semiminor of the relative-motion ellipse, $1/\bar\alpha$) are:

| Mode | Period | Axis ratio $1/\bar\alpha$ |
|---|---|---|
| Long-period ($s_1$ only) | ≈ 92 d | ≈ 16/3 ≈ 5.33 |
| Short-period ($s_2$ only) | ≈ 1 synodic month | ≈ 2 |
| Dual-period ($s_1 + s_2$) | ≈ 458 d | ≈ 16/5 = 3.2 |

The dual-period period of 458 d is *not* the period of either mode; it is the common recurrence time of the combined quasi-periodic motion at Earth–Moon $\mu$.

## Pure long-period and pure short-period motion

Either mode can be filtered out by judicial choice of the initial velocity (Catlin & McLaughlin 2007, Eqs. 6–7). When only the long-period mode is retained, the relative motion is an in-plane ellipse with axis ratio ≈ 16/3 and period ≈ 92 d; the required initial relative velocity is on the order of millimetres per second. When only the short-period mode is retained, the ellipse has axis ratio ≈ 2 and period ≈ one synodic month. These single-mode solutions are the practical building blocks for formation flight at $L_4/L_5$: the motion is repeatable, planar, and amenable to analytical description.

A natural circular formation (axis ratio 1) is impossible in pure long-period motion — the required in-plane and out-of-plane frequencies do not coincide ($s_z$ is far from $s_1$). It is only approximately realisable in short-period motion, where $s_2$ and $s_z$ differ by less than 0.05 non-dimensional frequency units. Even there, the planar approximation is *not* an accurate representation of CR3BP dynamics and must be supplemented by active control to hold circularity over long durations.

## Dual-period motion and why it is rarely used

When both modes are present, the relative dynamics resolve into intricate three-dimensional curves (axis ratio ≈ 16/5, period ≈ 458 d). They are mathematically rich but practically inconvenient: the second satellite does not repeat a closed path relative to the first within any operationally useful interval, so most formation-flight concepts at $L_4/L_5$ deliberately filter one of the two modes.

## Sensitivity to initial conditions

Single-mode motion at $L_4/L_5$ is not lost by instability (the linearised triangular points are stable for $\mu < \mu_\text{Routh} \approx 0.0385$) but by **resurgence of the filtered mode**: a small initial-condition error reintroduces the suppressed frequency, and over weeks the formation drifts away from its designed geometry. Catlin & McLaughlin's sensitivity analysis (2007, Table 3) shows that keeping the total relative-position error below 10% over 30 days requires initial-velocity knowledge at the $\sim 1$ µm/s level for long-period and short-period formations; the parallel (in-plane, phase-shifted) formation is dramatically more tolerant, accepting kilometre-scale initial-position errors. This is why uncontrolled formations at triangular libration points are unlikely to keep their geometry over mission-relevant timescales, and why active control is required for any practical concept.

## Perturbations and model limits

The analysis above is CR3BP-only. In the real Earth–Moon system, solar gravity dominates the perturbation budget at $L_4/L_5$: a short-period formation propagated for three years accumulates ≈ 110 km of relative-range error if solar gravity is neglected (≈ 1800% of the unperturbed amplitude). Solar-radiation pressure produces ≈ 14 m peak error (≈ 20%); Earth oblateness is negligible at the sub-millimetre level (Catlin & McLaughlin 2007, §IV). A faithful model therefore requires at least the bicircular or full-ephemeris formulation, not the pure CR3BP.

## Related entries

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Triangular Libration Point (L4/L5)](/en/glossary/fundamentals/libration-point/)

- [Periodic Orbit Family at Triangular Libration Point](/en/glossary/dynamics/periodic-orbit-family-at-triangular-libration-point/)

- [Jacobi Constant](/en/glossary/dynamics/jacobi-integral/)

- [Synodic Period](/en/glossary/fundamentals/synodic-period/)

## References

- Catlin, K. & McLaughlin, C., 2007, "Earth–Moon Triangular Libration Point Spacecraft Formations," *J. Guid. Control Dyn.* — derivation of the long/short-period mode frequencies, axis ratios, formation designs, sensitivity analysis, and perturbation assessment (source of all numerical values quoted above).

- Catlin & McLaughlin, 2004, "Relative motion of two spacecraft near the Earth–Moon triangular libration points" — earlier planar analysis.

- Szebehely, 1967, *Theory of Orbits*, §§5.2–5.4 — linearisation about $L_4/L_5$, characteristic roots, Routh stability criterion.

- Hou & Liu, 2010, "On quasi-periodic motions around the triangular libration points of the real Earth–Moon system" — extensions into the ephemeris model.
