---
title: Bicircular Restricted Four-Body Problem (BCR4BP)
description: An approximate four-body model that superimposes a fourth-body (e.g., the Sun) perturbation atop the CR3BP framework. Covers the Bicircular Problem (BCP), BCR4BP formulation, planar and spatial variants, the improved bi-circular model, the full-ephemeris restricted four-body problem (FER4BP), and applications to weak-stability-boundary transfers and the interplanetary superhighway.
keywords: Bicircular Restricted Four-Body Problem, BCR4BP, Bicircular Problem, BCP, four-body problem, restricted four-body, interplanetary superhighway, weak stability boundary, cislunar transfer
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Bicircular Restricted Four-Body Problem (BCR4BP)
  desc: Beyond the CR3BP — adding solar perturbation to the three-body model, from BCP to full-ephemeris models.
  image: /logo.png
og:
  title: Bicircular Restricted Four-Body Problem (BCR4BP) | Cislunar Dynamics
  description: An approximate four-body model superimposing a fourth-body perturbation atop the CR3BP framework. Covers the BCP, BCR4BP, planar and spatial variants, and applications to WSB transfers.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Bicircular Restricted Four-Body Problem (BCR4BP) | Cislunar Dynamics
  description: An approximate four-body model superimposing a fourth-body perturbation atop the CR3BP framework. Covers the BCP, BCR4BP, planar and spatial variants, and applications to WSB transfers.
  image: /logo.png
permalink: /en/glossary/dynamics/bcr4bp/
---

# Bicircular Restricted Four-Body Problem (BCR4BP)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Bicircular Restricted Four-Body Problem (BCR4BP) is an approximate four-body model that superimposes a fourth-body perturbation atop the [CR3BP](/en/glossary/dynamics/cr3bp/) framework. Take the Earth--Moon--Sun system: the Earth and Moon revolve about their barycenter in circular motion (the Earth--Moon CR3BP), while the Sun acts as a point mass in large-scale circular motion, exerting a time-varying gravitational pull. The spacecraft has negligible mass under the influence of all three bodies.

The BCR4BP is termed "approximate" because the two circular-motion assumptions are not dynamically self-consistent — if Earth, Moon, and Sun obeyed Newtonian gravity and strict circular orbits simultaneously, their equations of motion would be incompatible. Nevertheless, the model performs well in trajectory design practice because it captures the time-varying solar perturbation on the Earth--Moon leg without the high computational cost of full-ephemeris integration.

Another common symmetric configuration is the Sun--Earth--Moon model: Sun and Earth revolve in circular motion about the Sun--Earth barycenter (Sun--Earth CR3BP), with the Moon as the perturbing fourth body.

## BCP vs. BCR4BP

These two abbreviations are often conflated in the literature, but a meaningful conceptual distinction exists (Gómez et al. 2001):

- **BCP** (Bicircular Problem): The original bicircular model introduced by Simó et al., in which the Earth--Moon and barycenter--Sun circular motions are kinematically inconsistent — they violate Newton's third law. The BCP is an **inconsistent simplified model** useful for rapid exploration of the gross geometry of periodic orbits.

- **BCR4BP** (Bicircular Restricted Four-Body Problem): A more recent self-consistent formulation that treats the fourth body's gravity as an explicit periodic forcing term on the CR3BP equations, without requiring the two circular pictures to be dynamically self-consistent. The BCR4BP retains the CR3BP's rotating frame and merely adds time-varying terms involving the solar mass parameter $\mu_s$ and solar phase angle $\theta_s$.

In the spacecraft trajectory-design context, "BCR4BP" generally refers to the self-consistent model, while "bicircular problem" serves as an interchangeable umbrella term.

## Planar and Spatial Variants

| Abbreviation | Full Name | Description |
| :--- | :--- | :--- |
| PBR4BP / PBRFBM / PBRFBP | Planar Bicircular Restricted Four-Body Problem | All motion confined to a single orbital plane; suited for qualitative analysis and Poincaré sections |
| SBCM | Spatial Bi-Circular Model | Three-dimensional version allowing non-coplanar spacecraft and fourth-body orbit planes |
| Improved Bi-Circular Model | Improved Bi-Circular Model | Introduces extra correction terms to enhance accuracy; a compromise between BCP and high-fidelity models |
| FER4BP | Full-Ephemeris Restricted 4-Body Problem | Abandons the bicircular assumption and directly integrates with ephemeris-consistent time-varying primary positions. Highest accuracy, highest cost |

## Equations of Motion

Consider the Earth--Moon CR3BP with solar perturbation. In the normalized Earth--Moon synodic frame, the dimensionless BCR4BP equations read:

$$
\begin{cases}
\ddot{x} - 2\dot{y} = \dfrac{\partial \Omega}{\partial x} + a_{s,x} \\[1em]
\ddot{y} + 2\dot{x} = \dfrac{\partial \Omega}{\partial y} + a_{s,y} \\[1em]
\ddot{z} = \dfrac{\partial \Omega}{\partial z} + a_{s,z}
\end{cases}
$$

where $\Omega$ is the standard CR3BP effective potential. The solar perturbation acceleration $\mathbf{a}_s$ is derived from the fourth body's time-varying position $\mathbf{r}_s(t)$ and mass parameter $\mu_s$ (solar mass normalized in Earth--Moon units; $\mu_s \approx 3.289 \times 10^5$ for the Sun--Earth/Moon system):

$$\mathbf{a}_s = -\mu_s \left(\frac{\mathbf{r} - \mathbf{r}_s}{|\mathbf{r} - \mathbf{r}_s|^3} + \frac{\mathbf{r}_s}{|\mathbf{r}_s|^3}\right)$$

The critical feature is the second term $\mu_s \mathbf{r}_s / |\mathbf{r}_s|^3$ — it originates from the barycentric acceleration term and ensures the complete expression of the Sun's "direct pull minus pull on the Earth--Moon barycenter" difference in the rotating frame. This term is frequently omitted in naive "direct gravitational perturbation" formulas.

## Applications

The BCR4BP fills an important gap between the CR3BP and full-ephemeris models in cislunar mission design (Koon et al. 2011):

- **Weak Stability Boundary (WSB) transfers**: Solar perturbation is the key mechanism enabling ballistic lunar capture. The BCR4BP captures the Sun's time-varying influence without the overhead of full-ephemeris integration, serving as the workhorse model for WSB transfer design.

- **Interplanetary Superhighway**: Invariant-manifold patching between Sun--Earth and Earth--Moon systems is most effectively analyzed in the BCR4BP framework — intersecting Sun--Earth outgoing manifolds with Earth--Moon incoming manifolds in the time-varying BCR4BP system.

- **Fourth-body perturbation assessment**: For specific orbits (e.g., DRO, NRHO), the BCR4BP can estimate the long-term cumulative effects of solar perturbation, helping determine which orbits require validation under higher-fidelity models.

## Related Concepts

- [CR3BP](/en/glossary/dynamics/cr3bp/)

- [ER3BP](/en/glossary/dynamics/er3bp/)

- [Libration Point](/en/glossary/dynamics/libration-point/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Weak Stability Boundary](/en/glossary/dynamics/wsb/)

- [Ballistic Capture](/en/glossary/dynamics/ballistic-capture/)

## References

- Gómez et al., 2001, *Dynamics and Mission Design near Libration Points*, Vol. I — Chapter 2 systematically treats the BCP and BCR4BP formulations, their self-consistency, and manifold-patching applications.

- Simó et al., 1995, "The Bicircular Model Near the Triangular Libration Points of the RTBP" — The original systematic formulation of the bicircular problem.

- Koon, Lo, Marsden & Ross, 2011, *Dynamical Systems, the Three-Body Problem, and Space Mission Design* — Chapter 6 discusses four-body approximations and interplanetary-superhighway patching.

- Belbruno, 2004, *Capture Dynamics and Chaotic Motions in Celestial Mechanics* — Theoretical foundations of WSB transfers, including ballistic capture mechanisms in the bicircular framework.
