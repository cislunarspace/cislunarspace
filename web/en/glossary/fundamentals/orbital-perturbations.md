---
title: Orbital Perturbations
description: The complete framework for orbital perturbations—starting from Cowell's formulation $\ddot{\mathbf{r}} = -\frac{\mu}{r^3}\mathbf{r} + \sum \mathbf{a}_{p_i}$, covering conservative (non-spherical gravity, third-body) vs non-conservative (atmospheric drag, solar-radiation pressure) perturbations, special perturbation methods (Cowell/Encke) and general perturbation methods (Gauss/Lagrange variational equations), with magnitude ordering and model selection guidance across LEO/MEO/GEO and cislunar regimes.
keywords: orbital perturbations, Cowell's formulation, special perturbations, general perturbations, Encke's method, Gauss variational equations, variation of parameters, third-body perturbation, lunar eccentricity perturbation, relativistic correction, cislunar perturbation sources, perturbation magnitude
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Orbital Perturbations
  desc: From Cowell's formulation to perturbation magnitude ordering—the complete framework of orbital perturbations.
  image: /logo.png
og:
  title: Orbital Perturbations Explained | Term Definition
  description: The complete framework for orbital perturbations—starting from Cowell's formulation, covering conservative/non-conservative perturbations, special methods (Cowell/Encke) and general methods (Gauss/Lagrange), with magnitude ordering and model selection across orbital regimes.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Orbital Perturbations Explained | Term Definition
  description: The complete framework for orbital perturbations—starting from Cowell's formulation, covering conservative/non-conservative perturbations, special methods (Cowell/Encke) and general methods (Gauss/Lagrange), with magnitude ordering and model selection across orbital regimes.
  image: /logo.png
permalink: /en/glossary/fundamentals/orbital-perturbations/
---

# Orbital Perturbations

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Orbital perturbations are deviations of a spacecraft's actual motion from the idealised Keplerian two-body orbit. Two-body motion assumes a spherically symmetric central body and no other forces—a useful analytical baseline, but the real spacecraft additionally feels the non-spherical gravity field of the central body, the gravity of other celestial bodies, atmospheric drag, solar-radiation pressure, and other effects. These forces form a perturbation acceleration $\mathbf{a}_p$ that is added to the two-body acceleration:

$$
\ddot{\mathbf{r}} = -\frac{\mu}{r^3}\mathbf{r} + \mathbf{a}_p
$$

This form is called **Cowell's formulation** (Vallado 2022, Ch. 8).

"Cowell's formulation" and "Cowell's method" are distinct: the formulation is a way of writing the equation of motion (perturbation acceleration added linearly to the two-body term), whereas the method is a specific numerical-integration technique (see "Perturbation Handling Methods" below). Because each perturbing acceleration can be added linearly, $\mathbf{a}_p = \sum_i \mathbf{a}_{p_i}$ (Vallado 2022).

It is worth noting that perturbations are not necessarily "small." When a spacecraft re-enters the atmosphere, drag is comparable to two-body gravity; in the three-body problem, the third-body force can exceed the primary attraction. In such cases, the problem is no longer a "perturbation" of a different dynamical system (Vallado 2022, Ch. 8).

## Classification of Perturbation Sources

### Conservative vs Non-Conservative

By the physical nature of the force, perturbations are divided into two classes (Vallado 2022, Ch. 8):

- **Conservative perturbations**: the force field can be written as the gradient of a potential function, $\mathbf{a} = \nabla U$, and the total system energy is conserved. Examples include the non-spherical gravity of the central body, third-body gravity, and solid/ocean tides. These are typically handled through a **disturbing function** $R = U - U_{2\text{-body}}$.

- **Non-conservative perturbations**: no potential function exists, and the system energy changes. Examples include atmospheric drag, solar-radiation pressure, and thrust. These are modelled directly as a **disturbing force**.

### By Physical Source

| Source | Nature | Dominant Regime | Order of Magnitude (LEO) | Order of Magnitude (Cislunar) |
|--------|--------|-----------------|-------------------------|------------------------------|
| Central-body non-spherical gravity (J2) | Conservative | LEO→MEO | ~dominant | ≪1 |
| Third-body gravity (Sun, Moon, planets) | Conservative | GEO+, cislunar | ≪1 (LEO) | ~1–10 |
| Atmospheric drag | Non-conservative | LEO (<800 km) | ~0.1–10 | 0 (Moon has no atmosphere) |
| Solar-radiation pressure | Non-conservative | GEO+, cislunar | ≪1 (LEO) | ~0.1–1 |
| Relativistic effects | — | High-precision navigation | ≪1 (all regimes) | ≪1 |

Magnitude ordering: Vallado (2022, Ch. 8–9). Specific cislunar model configurations are discussed below.

### Dominant Perturbations by Orbital Regime (Model-Selection Guide)

- **LEO (<800 km)**: Atmospheric drag > J2 > others. Drag is the primary error source; high-fidelity density models (e.g. NRLMSISE-00) are required.

- **MEO (800 km – 30,000 km)**: J2 dominates; drag fades; third-body effects begin to appear.

- **GEO (~35,800 km)**: Third-body + SRP > J2. SRP drives long-term evolution.

- **Cislunar**: Lunar third-body gravity is the dominant perturbation; solar perturbation is secondary; J2 is relevant for low lunar orbits (Vallado 2022, Ch. 8.6.3). In cislunar-debris orbit-determination practice, an Earth gravity field of only 5×5 spherical harmonics suffices, combined with point-mass models for the Sun, Moon, and Jupiter, plus a cannonball SRP model and an RKF7(8) variable-step integrator (Cowell's formulation); this yields forecast accuracy up to 2 years (Framework paper, 2023).

## Third-Body Gravitational Perturbation

A spacecraft is gravitationally attracted by bodies other than the central body. With Earth as the central body and the Sun as the third body, the perturbing acceleration is (Vallado 2022, Eq. 8-34):

$$
\mathbf{a}_{3\text{rd}} = \mu_3 \left( \frac{\mathbf{r}_{sat-3}}{r_{sat-3}^3} - \frac{\mathbf{r}_{\oplus-3}}{r_{\oplus-3}^3} \right)
$$

The first term is the **direct effect** (the Sun's direct attraction on the spacecraft) and the second is the **indirect effect** (the Sun's attraction on the geocenter). The two are of similar magnitude and their subtraction can produce numerical cancellation errors (Vallado 2022, Ch. 8.6.3). Expanding the direct term in Legendre polynomials reveals that the lowest-order term cancels the indirect term exactly—this is the algebraic reason why third-body perturbations are usually small in near-Earth orbits.

In cislunar space, the lunar third body far exceeds the solar one: the Moon orbits Earth at only ~384,400 km, so the perturbation-to-two-body ratio near the libration points is $\mathcal{O}(1)$. The dynamics are no longer a "perturbed two-body problem" but require the restricted three-body problem (CR3BP) as the model.

## Lunar Eccentricity Perturbation

The Earth-Moon three-body model is typically simplified to the circular CR3BP (circular lunar orbit, constant Earth-Moon distance). In reality the lunar orbital eccentricity is $e \approx 0.0549$, and the Earth-Moon distance varies periodically between 363,000 and 405,000 km with a period of ~27.3 days (sidereal month). This eccentricity makes the libration-point positions and the geometry/period of orbit families such as halo and NRHO vary with lunar phase—this is one of the fundamental reasons Earth-Moon libration-point orbits are harder to maintain than Sun-Earth ones. Folta et al. (2010) note that to fully capture this periodic effect, a simulation must span at least one lunar orbital period (~27.3 days).

## Relativistic Correction

In high-precision orbit determination and navigation, deviations of the spacetime metric due to general relativity must be corrected. The main components are (Vallado 2022, Ch. 8.6.5; IAU 2000 resolutions):

- **Schwarzschild term**: acceleration correction due to spacetime curvature by the central body's mass, $\mathbf{a}_{rel} = \frac{\mu}{c^2 r^3}\left[ \left( \frac{4\mu}{r} - v^2 \right)\mathbf{r} + 4(\mathbf{r}\cdot\mathbf{v})\mathbf{v} \right]$.

- **Shapiro delay**: signal-propagation-time correction across regions of different gravitational potential.

- **Sagnac effect**: signal-propagation-time correction in a rotating reference frame.

In cislunar inter-satellite ranging and autonomous orbit determination, relativistic corrections are necessary to reach millimetre-level ranging accuracy (Cong et al., 2025).

## Perturbation Handling Methods

Methods for handling orbital perturbations fall into three broad classes (Vallado 2022, Ch. 8–9).

### Special Perturbations (Numerical Integration)

The perturbation acceleration $\mathbf{a}_p$ is computed directly and the equations of motion are integrated numerically. The result is a discrete numerical solution containing all secular and periodic terms introduced by the perturbations; accuracy is highest but computational cost is significant. Two historical variants:

- **Cowell's method**: directly integrates the full acceleration (including the two-body term). All modern high-precision orbit-propagation software (GMAT, ODTK, STK/OD) uses Cowell's formulation with a high-order integrator (Runge-Kutta-Fehlberg, Gauss-Jackson, Adams-Cowell).

- **Encke's method**: uses a two-body osculating orbit as a reference and integrates only the deviation $\delta\mathbf{r}$ caused by perturbations. Because the deviation is small, this was historically more efficient than Cowell's under limited computing resources, but modern computing has made it largely unnecessary (Vallado 2022, Ch. 8.3). Its core idea—integrating the deviation from a reference orbit—still finds use in orbit determination and accuracy analysis.

In practice, **time-regularised Cowell integration** (s-integration) is widely adopted: instead of uniform time steps, the integration proceeds in uniform steps of an orbital reference variable (eccentric or true anomaly), automatically shrinking the time step at periapsis and lengthening it at apoapsis—dramatically improving the efficiency of eccentric-orbit integration (Vallado 2022, Ch. 8.5.1).

### General Perturbations (Analytical / Semi-Analytical)

Closed-form or series expressions for the rates of change of the orbital elements are derived analytically. The core tool is the **Variation of Parameters (VOP)**, which projects the perturbation acceleration onto the rates of the osculating orbital elements.

- **Lagrange Planetary Equations**: applicable to conservative perturbations; express the rates of the six orbital elements in terms of partial derivatives of the disturbing function $R$.

- **Gaussian VOP (Gauss-type Perturbation Equations)**: applicable to non-conservative perturbations; decompose the perturbation acceleration into radial ($S$), transverse ($T$), and normal ($W$) components and directly derive the element rates—well-suited to forces such as low-thrust and atmospheric drag that have no potential. A typical form is (Vallado 2022, Eq. 9-14):

$$
\frac{da}{dt} = \frac{2a^2 v}{\mu} a_S, \quad
\frac{de}{dt} = \frac{1}{v}\left[ 2(e + \cos\nu) a_S - \frac{r}{a}\sin\nu \cdot a_T \right], \quad \dots
$$

- **Kozai's method**, **Brouwer's method**: developed from VOP; the periodic terms in the disturbing function are averaged out to extract secular terms, yielding simplified analytical predictions.

### Semianalytical Methods

Analytical treatment of secular effects combined with numerical integration of periodic effects—e.g. the Draper Semianalytical Satellite Theory (DSST). A trade-off between efficiency and accuracy.

## Cislunar Perturbation Modelling in Practice

For orbit determination and propagation of cislunar debris, the following model configuration has been shown to give an optimal balance between accuracy and computational cost (Framework paper, 2023):

- Earth gravity: spherical-harmonic expansion to degree/order 5×5 (SH[5,5]).

- Third-body point masses: Sun, Moon, Jupiter (DE440 ephemeris).

- Solar-radiation pressure: cannonball model ($C_r = 1.2$, cylindrical shadow model).

- Atmospheric drag: included only near perigee using NRLMSISE-00.

- Integrator: RKF7(8), variable step, error tolerance $10^{-10}$.

- Propagator: Cowell's formulation.

Under this framework, propagation span accuracies (PSAs) up to 2 years were obtained for the Chang'e 2 upper stage, and 50 days to 1 year for the Chang'e 3 upper stage.

## Related Concepts

- [Non-Spherical Gravity Perturbation](/en/glossary/dynamics/non-spherical-gravity-perturbation/)

- [Atmospheric Drag](/en/glossary/dynamics/atmospheric-drag/)

- [Solar Radiation Pressure (SRP)](/en/glossary/dynamics/srp/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Osculating Orbital Elements](/en/glossary/fundamentals/osculating-orbital-elements/)

- [Method of Variation of Constants](/en/glossary/fundamentals/method-of-variation-of-constants/)

- [Libration Point](/en/glossary/fundamentals/libration-point/)

- [Synodic Frame](/en/glossary/fundamentals/synodic-frame/)

- [Jacobi Integral](/en/glossary/dynamics/jacobi-integral/)

## References

- Vallado, 2022, Fundamentals of Astrodynamics and Applications (Ch. 8 Special Perturbations—definition of perturbations, Cowell/Encke formulations, numerical-integration implementation; Ch. 9 General Perturbations—variation of parameters, Gauss/Lagrange equations; Ch. 8.6.3 Third-Body Perturbations—third-body acceleration formula).

- A model framework for high-accuracy orbit determination and propagation of cislunar space debris, 2023 (cislunar-debris model selection: SH[5,5] + DE440 point masses + cannonball SRP + RKF7(8); validated up to 2-year forecast accuracy).

- Battin, 1999, An Introduction to the Mathematics and Methods of Astrodynamics (mathematical foundations of perturbation theory).

- Folta et al., 2010, Earth-Moon libration point orbit stationkeeping: Theory, modeling, and operations (effect of lunar eccentricity on libration-point stationkeeping).

- Cong et al., 2025, Autonomous Navigation Technology for Cislunar Spacecraft and Research Progress (relativistic-correction requirements in cislunar navigation).
