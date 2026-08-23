---
title: Canonical Coordinates and Canonical Transformation
description: The phase-space variable framework of Hamiltonian mechanics — canonical coordinates and conjugate momenta, canonical equations, canonical (symplectic) transformations, action-angle variables, and the canonical element sets of celestial mechanics (Delaunay elements, Poincaré elements, modified Delaunay variables, modified equinoctial elements MEEs, Jacobi coordinates) with their applications.
keywords: canonical coordinates, canonical equations, canonical transformation, symplectic transformation, Poisson bracket, action-angle variables, Delaunay, MEEs, modified equinoctial, Jacobi coordinates
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Canonical Coordinates and Canonical Transformation
  desc: Phase-space variables of Hamiltonian mechanics and canonical elements of celestial mechanics.
  image: /logo.png
og:
  title: Canonical Coordinates and Canonical Transformation Explained | Glossary
  description: Canonical coordinates, canonical equations, canonical (symplectic) transformations, action-angle variables, and Delaunay/MEEs canonical elements.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Canonical Coordinates and Canonical Transformation Explained | Glossary
  description: The phase-space variable framework and canonical elements of celestial mechanics.
  image: /logo.png
permalink: /en/glossary/dynamics/canonical-variables/
---

# Canonical Coordinates and Canonical Transformation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Canonical coordinates are a pair of coordinate-momentum variables $(q, p)$ in Hamiltonian mechanics satisfying the Poisson-bracket relation, so that the equations of motion take the canonical (Hamiltonian) form:

$\dot{q} = \partial H / \partial p$, $\dot{p} = -\partial H / \partial q$

This first-order system is the canonical equations (Hamilton's equations). The duality of canonical coordinates (conjugate coordinates and generalized momenta) originates in Lagrange's analytical dynamics; position-velocity pairs and the Delaunay elements are both instances of canonical variables (Vallado 2022; Meyer and Offin 2017).

## Canonical Transformation

A canonical transformation is a change of phase-space variables $(q,p) \to (Q,P)$ that preserves the canonical form of the equations, i.e., a symplectic transformation: it preserves the Poisson bracket $\{Q,P\}_{q,p} = 1$, has unit Jacobian determinant, and hence preserves phase-space volume (Liouville's theorem). Canonical transformations are the central tool of celestial mechanics for simplifying perturbation problems: they separate fast from slow variables and turn time-varying coordinates into cyclic coordinates whose conjugate momenta are conserved (Vallado 2022; Ding et al. 2025). Finding a canonical transformation is essentially a search for more cyclic coordinates. Typical applications: Brouwer's two-stage canonical transformations eliminating short-period terms in artificial-satellite theory, improved by Deprit's Lie-transform method; von Zeipel and Hori methods belong to the same family.

## Action-Angle Variables

For a completely integrable Hamiltonian system there exist action-angle variables $(J, \theta)$: the actions $J$ are conserved (loop integrals $J_i = \oint p_i dq_i$), and the angles $\theta_i$ evolve linearly in time $\theta_i = \omega_i t + \theta_{i0}$ with frequencies $\omega_i = \partial H / \partial J_i$. Motion is quasi-periodic on invariant tori; KAM theory describes the persistence and breakdown of these tori precisely in the action-angle framework (Meyer and Offin 2017).

## Canonical Elements in Celestial Mechanics

Canonical element sets rewrite the classical Keplerian elements as conjugate variable pairs so that the perturbation equations take Hamiltonian form.

### Delaunay Elements

The Delaunay elements are the canonical counterpart of the classical orbital elements (Vallado 2022):

- Actions: $L_d = \sqrt{\mu a}$, $G_d = \sqrt{\mu a(1-e^2)}$, $H_d = \sqrt{\mu a(1-e^2)}\cos i$

- Conjugate angles: $M$ (mean anomaly), $\omega$ (argument of perigee), $\Omega$ (right ascension of the ascending node)

$H_d$ is the projection of the angular momentum onto the pole axis. Delaunay elements carry singularities at zero eccentricity and zero inclination (as do the classical elements); Brouwer's theory, the Lyddane modification (removing zero-e/inclination singularities) and Deprit's theory are all built on them (Vallado 2022). The Delaunay variables are this conjugate pair set, used directly for the regularization of two-body and restricted three-body problems (Celletti 2010).

### Modified Delaunay Variables

The modified Delaunay variables recombine the standard Delaunay elements to avoid the singularity at zero eccentricity (Ding et al. 2025):

$\Lambda = L$, $P = L - G$, $Q = G - H$

with conjugate angles $\lambda = M + \omega + \Omega$, $p = \omega + \Omega$, $q = \Omega$. They are especially useful for analyzing mean-motion resonances (MMR) of low-eccentricity orbits and are the basis of resonant canonical Hamiltonians.

### Poincaré Elements and Modified Equinoctial Elements

- **Poincaré elements** are the canonical counterpart of the equinoctial elements, constructed with $\sqrt{\cdot}$ factors to avoid singularities at zero eccentricity and inclination; they suit Hamiltonian perturbation analysis of near-circular/near-equatorial orbits (Brouwer and Clemence 1961; Vallado 2022).

- **Modified equinoctial elements (MEEs)**: a nonsingular orbital element set composed of the semi-latus rectum $p$, eccentricity-vector components $(f,g)$, inclination-vector components $(h,k)$, and true longitude $L$. Unlike the classical Keplerian elements, MEEs have no singularities for circular or equatorial orbits, and their transformation matrix to Cartesian coordinates is continuous and smooth, ideal for deriving costate equations in low-thrust trajectory optimization (Singh et al. 2021; Broucke and Cefola 1972).

### Jacobi Coordinates

Jacobi coordinates are a coordinate transformation reducing the N-body problem to a chain of relative coordinates: successively take the barycenter of two bodies and the relative position of the next, separating the kinetic energy and decoupling center-of-mass motion, facilitating the analysis of relative motion (Meyer and Offin 2017). They are a coordinate transformation rather than conjugate variable pairs, but belong to the same coordinate toolkit of celestial mechanics.

## Applications

Value of the canonical framework: (1) systematic construction and analysis of the disturbing Hamiltonian (fast/slow variable separation, resonance-term identification); (2) perturbation solutions retain Hamiltonian (symplectic) structure independent of coordinates, suitable for long-term integration with symplectic integrators; (3) nonsingular element sets (MEEs, Poincaré elements) directly support continuous smooth derivatives needed in optimal control and trajectory design.

## Related Concepts

- [Hamiltonian](/glossary/dynamics/hamiltonian/)

- [Symplectic Transformation](/en/glossary/dynamics/hamiltonian-normal-form/)

- [Invariant Torus](/glossary/fundamentals/invariant-torus/)

- [KAM Theory](/en/glossary/dynamics/kam-theory/)

## References

- Vallado, 2022, Fundamentals of Astrodynamics and Applications (canonical elements, Delaunay/Poincaré elements, Brouwer theory)

- Meyer and Offin, 2017, Introduction to Hamiltonian Dynamical Systems and the N-Body Problem

- Brouwer and Clemence, 1961, Methods of Celestial Mechanics (Poincaré elements)

- Celletti, 2010, Stability and Chaos in Celestial Mechanics (Delaunay variables)

- Ding et al., 2025, Cislunar Space Situational Awareness via Earth-Moon Resonant Orbits (modified Delaunay variables)

- Singh et al., 2021 (MEEs in low-thrust optimization)

- Broucke and Cefola, 1972, Celestial Mechanics (modified equinoctial elements)
