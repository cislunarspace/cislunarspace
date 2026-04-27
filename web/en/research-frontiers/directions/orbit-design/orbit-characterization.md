---
title: Orbit Parameter Characterization for Cislunar Space
description: Representative works on orbit parameterization, object cataloging, and dynamical substitute models for cislunar libration points
keywords: cislunar orbit parameterization, libration point orbits, object cataloging, dynamical substitute, Hamiltonian analysis
author: 天疆说
date: 2026-03-07
lastUpdated: 2026-04-27
permalink: /research-frontiers/directions/orbit-characterization/
---

> Author: [天疆说](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

# Orbit Parameter Characterization for Cislunar Space

## Background

Orbit parameter characterization is a fundamental problem for space situational awareness and orbit cataloging in cislunar space. Unlike near-Earth orbits, libration point orbits are governed by three-body dynamics, rendering traditional Keplerian orbital elements inapplicable. New parameterization methods are needed.

Two core challenges exist: (1) establishing standardized orbit descriptions within the Circular Restricted Three-Body Problem (CRTBP) framework; and (2) extending CRTBP results to real ephemeris models (e.g., DE430) to support actual observation data processing.

## Key Techniques

### Canonical Transformation-Based Orbit Parameterization

For orbits near collinear libration points (L1, L2, L3), canonical transformations convert the CRTBP equations of motion into integrable form. Through generating functions, the 6-dimensional phase space coordinates are transformed into action-angle variables $(q_1, p_1, I_2, \theta_2, I_3, \theta_3)$:

- $(q_1, p_1)$ describe large-amplitude motion along the collinear direction (e.g., vertical component of Halo orbits)
- $(I_2, \theta_2)$ describe in-plane quasi-periodic motion
- $(I_3, \theta_3)$ describe vertical quasi-periodic motion

These 6 characteristic parameters form an orbit's "fingerprint," uniquely identifying an orbit family. Poincaré section distribution maps provide visual representation of orbit family distributions in parameter space.

### Dynamical Substitute Models

The real Earth-Moon system's ephemeris model (e.g., DE430) includes solar perturbations, planetary perturbations, and other complex factors that cannot be directly analyzed. Dynamical substitute models aim to construct an equivalent simplified model based on CRTBP through Hamiltonian analysis, preserving key dynamical characteristics.

The approach involves:
1. **Hamiltonian formulation** of the ephemeris model
2. **Canonical transformation** to separate forced motion (caused by the Sun and other major bodies) from free motion (intrinsic orbit motion)
3. **Iterative frequency analysis** to extract characteristic frequencies and construct analytical expressions

This method has been successfully applied to all 5 libration points over a 360-year timespan, providing efficient computation tools for long-term orbit prediction and catalog maintenance.

### Orbit Cataloging and Identification

Based on the parameterization methods above, an orbit cataloging and identification workflow has been established:

1. **Distribution mapping**: Plotting characteristic parameter distributions of different orbit families on Poincaré sections
2. **Orbit identification**: Given observation data, Bayesian optimization searches the parameter space for the best-matching orbit family
3. **Robustness validation**: Sensitivity analysis shows robustness to position errors (~100 km) and velocity errors (~1 m/s)

## Key Contributions

1. Proposed canonical transformation-based parameterization for collinear libration point orbits using 6 characteristic parameters
2. Developed Hamiltonian analysis-based dynamical substitute model computation for all 5 libration points
3. Established orbit cataloging and identification framework based on Poincaré sections and Bayesian optimization
4. Validated method robustness against observation errors, laying foundation for practical applications

## References

[1] Qiao C, Long X, Yang L, et al. Calculation of a dynamical substitute for the real earth–moon system based on hamiltonian analysis[J]. Astrophysical Journal, 2025, 991(1): 46-59.

[2] Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025: 103869-103896.

[3] Yang L, Qiao C, Long X, et al. A method for orbit parameter characterization of Earth-Moon collinear libration points[P].

---

**Related Links**
- ↑ [Orbit Design & Optimization](./README.md) — Back to direction homepage
- ↔ [Low-Energy Transfer Orbits](./low-energy-transfer.md) — Related subtopic
