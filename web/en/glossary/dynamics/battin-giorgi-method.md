---
title: Battin-Giorgi Method
description: A numerically stable formulation of the third-body perturbation acceleration. An auxiliary variable q replaces the catastrophic cancellation of two nearly equal large vectors with a well-conditioned polynomial evaluation. Originated with Giorgi (1964); the canonical modern form appears in Battin (1999), §8.4.1, and underlies the perturbation evaluation in Cowell, Encke, and high-fidelity ephemeris computations.
keywords: Battin-Giorgi Method, Giorgi 1964, third-body perturbation, perturbing acceleration, catastrophic cancellation, q variable, Cowell's method, Encke's method
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Battin-Giorgi Method
  desc: Replace catastrophic cancellation in the third-body acceleration with a well-conditioned polynomial via the auxiliary variable q.
  image: /logo.png
og:
  title: Battin-Giorgi Method | Numerically Stable Third-Body Perturbation
  description: A numerically stable formulation of the third-body perturbation acceleration via an auxiliary variable q. Originated with Giorgi (1964); Battin (1999) §8.4.1 gives the canonical modern form. Underlies Cowell, Encke, and high-fidelity ephemeris computation.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Battin-Giorgi Method | Numerically Stable Third-Body Perturbation
  description: A numerically stable formulation of the third-body perturbation acceleration via an auxiliary variable q. Originated with Giorgi (1964); Battin (1999) §8.4.1 gives the canonical modern form. Underlies Cowell, Encke, and high-fidelity ephemeris computation.
  image: /logo.png
permalink: /en/glossary/dynamics/battin-giorgi-method/
---

# Battin-Giorgi Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The **Battin-Giorgi method** is a numerically stable formulation of the third-body gravitational perturbation acceleration. Given a central body $m_1$ (Earth), a perturbing body $m_j$ (the Moon or Sun), and a spacecraft at $\vec r$, the most direct form of the third-body acceleration is

$$
\vec a_{3B} = G m_j\!\left[\frac{\vec\rho_j-\vec r}{|\vec\rho_j-\vec r|^3}-\frac{\vec\rho_j}{|\vec\rho_j|^3}\right]
= -G m_j\!\left[\frac{\vec d_j}{d_j^3}+\frac{\vec\rho_j}{\rho_j^3}\right],
$$

with $\vec\rho_j$ the perturbing body's position relative to the central body and $\vec d_j=\vec r-\vec\rho_j$ the spacecraft's position relative to the perturbing body. When $r\ll\rho_j$ (spacecraft close to the central body), $\vec d_j/d_j^3$ and $-\vec\rho_j/\rho_j^3$ are two large, nearly equal, oppositely directed vectors; their direct subtraction suffers **catastrophic cancellation**, with a steep loss of significant digits. The algorithm given by Giorgi (1964) and consolidated into its canonical modern form by Battin (1999, §8.4.1) introduces an auxiliary variable $q$ that rewrites the difference as a small correction riding on a single vector:

$$
\vec a_{3B} = -\frac{G m_j}{d_j^3}\big[\vec r + f(q_j)\,\vec\rho_j\big],
$$

$$
q_j = \frac{\vec r\cdot(\vec r-2\vec\rho_j)}{\vec\rho_j\cdot\vec\rho_j}
     = \frac{r}{\rho_j}\!\left(\frac{r}{\rho_j}-2\cos\alpha_j\right),\qquad
f(q) = (1+q)^{3/2}-1.
$$

Geometrically $q\approx -2(r/\rho_j)\cos\alpha_j+(r/\rho_j)^2$; for $r\ll\rho_j$ one has $|q|\ll 1$, and the cancellation problem is shifted onto a well-conditioned polynomial in $q$.

## Stable Evaluation of f(q)

Evaluating $(1+q)^{3/2}-1$ directly cancels again as $q\to 0$. Battin (1999, Eq. 8-60) gives the **closed stable form**

$$
f(q) = q\,\frac{3+3q+q^2}{1+(1+q)^{3/2}}.
$$

The numerator is a polynomial in $q$; the denominator equals 2 at $q=0$; the expression is insensitive to cancellation for every $q$. A series form is also available,

$$
f(q) = \tfrac{3}{2}q\!\left(1+\tfrac{1}{4}q-\tfrac{1}{24}q^2+\tfrac{1}{96}q^3-\cdots\right),
$$

which converges rapidly for $|q|\ll 1$, but the closed form gives best accuracy across the full range.

## Relation to the Perturbing-Function Expansion

The third-body perturbing function

$$
R_j = G m_j\!\left(\frac{1}{d_j}-\frac{\vec r\cdot\vec\rho_j}{\rho_j^3}\right)
$$

expands as a power series in $x=r/\rho_j$ with $1/d_j=(1+q)^{-1/2}=\sum_k P_k(\cos\alpha)\,x^k$, the Legendre polynomials $P_k$ emerge naturally. Thus $q$ is simultaneously the cancellation-avoidance variable and the natural argument of the classical Legendre expansion. Battin leverages this to unify the presentation of [Cowell's](/en/glossary/fundamentals/orbital-perturbations/), Encke's and Hansen's perturbation integration methods.

## Applications

- **High-precision ephemeris integration**: Earth-Moon transfers, libration-point orbits and low lunar orbits all require long integrations under non-spherical gravity plus third-body perturbations. Cowell's method integrating the total acceleration is forced into small time steps; switching to Battin-Giorgi for the third-body term lets the step size grow without loss of accuracy.
- **Third-body assessment in cislunar space**: solar and lunar perturbations near Earth; Earth and solar perturbations near the Moon, both satisfy $r\ll\rho_j$ and use Battin-Giorgi by default.
- **Onboard navigation filters**: avoiding cancellation means equivalent accuracy at shorter word length (e.g. 32-bit floating point), an advantage for spacecraft processors.
- **Pedagogical reference**: Battin (1999, §8.4.1) gives the full derivation; Sanna et al. (2024) cite the method when formulating optimal impulsive transfers from Gateway to low lunar orbit, listing stable third-body perturbation evaluation as a baseline assumption.

## Common Confusions

- **Battin-Vaughan algorithm**: a Lambert-problem solver using universal variables; unrelated to Battin-Giorgi. Both bear Battin's name but the former solves a [Lambert problem](/en/glossary/fundamentals/lamberts-problem/) root, while the latter stabilises the perturbation acceleration.
- **q in Lambert problems**: the universal-variable Lambert algorithm defines its own $q=\sin^2(\Delta E/2)$, same symbol, different meaning.
- **Relation to Encke's method**: Encke's equation for the deviation from the osculating orbit also contains differences of the form $1/d^3-1/\rho^3$ and is cancellation-prone; Battin-Giorgi supplies a single stable evaluation of the perturbing acceleration that can be called inside Encke's method directly.

## Related Concepts

- [Cowell's Perturbation Method](/en/glossary/fundamentals/orbital-perturbations/)
- [Lambert's Problem](/en/glossary/fundamentals/lamberts-problem/)
- [Inertial Reference Frames](/en/glossary/fundamentals/inertial-reference-frames/)
- [High-Fidelity Simulation](/en/glossary/fundamentals/high-fidelity-simulation/)

## References

- Battin, R. H. (1999). *An Introduction to the Mathematics and Methods of Astrodynamics*, Revised Edition, §8.4.1. AIAA.
- Giorgi, L. (1964). Sur la détermination des positions apparentes des planètes. *Astronomische Nachrichten*, 339, 250–258.
- Sanna, D. et al. (2024). Optimal impulsive orbit transfers from Gateway to low lunar orbit. *Aerospace*, 11(10), 460.
- Vallado, D. A. (2022). *Fundamentals of Astrodynamics and Applications*, 5th ed., §9 (numerical treatment of perturbations).
