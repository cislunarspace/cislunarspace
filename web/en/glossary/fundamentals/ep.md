---
title: Electric Propulsion (EP / Low-Thrust Propulsion)
description: Propulsion technology that uses electric energy to accelerate propellant and generate thrust. Specific impulse far exceeds chemical propulsion; thrust magnitude is small but efficiency is high—the core propulsion solution for long-duration cislunar transfers and deep space exploration. Covers EP classification, thrust acceleration equation, specific impulse and the rocket equation, comparison with impulsive thrust, cislunar EP transfer strategies, and engineering parameters.
keywords: Electric Propulsion, EP, Low-Thrust Propulsion, Continuous Low Thrust, Solar Electric Propulsion, SEP, Specific Impulse, Thrust Acceleration, Rocket Equation, Cislunar Transfer, Chemical-Electric Combined Transfer, Low-Thrust Periodic Orbit, LTPO
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Electric Propulsion (EP / Low-Thrust Propulsion)
  desc: A systematic treatment of low-thrust propulsion for cislunar space — specific impulse, thrust magnitude, EP classification, and engineering parameters.
  image: /logo.png
og:
  title: "Electric Propulsion (EP / Low-Thrust Propulsion) Explained | Terminology Definition"
  description: Propulsion technology that uses electric energy to accelerate propellant and generate thrust. Specific impulse far exceeds chemical propulsion; thrust magnitude is small but efficiency is high—the core propulsion solution for long-duration cislunar transfers and deep space exploration. Covers EP classification, thrust acceleration equation, specific impulse and the rocket equation, comparison with impulsive thrust, cislunar EP transfer strategies, and engineering parameters.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Electric Propulsion (EP / Low-Thrust Propulsion) Explained | Terminology Definition"
  description: Propulsion technology that uses electric energy to accelerate propellant and generate thrust. Specific impulse far exceeds chemical propulsion; thrust magnitude is small but efficiency is high—the core propulsion solution for long-duration cislunar transfers and deep space exploration. Covers EP classification, thrust acceleration equation, specific impulse and the rocket equation, comparison with impulsive thrust, cislunar EP transfer strategies, and engineering parameters.
  image: /logo.png
permalink: /en/glossary/fundamentals/ep/
---

# Electric Propulsion (EP / Low-Thrust Propulsion)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Electric Propulsion (EP) refers to propulsion technology that uses electric energy—typically from solar arrays or a nuclear power source—to ionize and accelerate propellant, producing thrust. Unlike chemical propulsion, where energy is released through chemical reactions, EP separates the energy source (power supply) from the propellant. The specific impulse is therefore not limited by the chemical bond energy of the propellant and can reach 2000--10000 seconds, far exceeding the 100--400 s of chemical rockets (Vepa 2024, Table 2.2).

The trade-off is extremely low thrust. Typical EP engines produce thrust in the milli-Newton range: NASA's Deep Space 1 mission used an ion thruster delivering only 92 mN of thrust but with a specific impulse of 2200 s (Fahey 2024, Table 6.2). Chemical rockets can produce hundreds of thousands of Newtons but only achieve $I_{sp}$ of 300--400 s. This comparison illustrates the fundamental thrust-vs-efficiency trade-off.

In the cislunar context, EP offers two key advantages: (1) drastically reduced propellant consumption, allowing a larger fraction of spacecraft mass to be allocated to payload; and (2) thrust, though small, can be sustained for months, making EP suitable for the gradual energy accumulation required by low-energy transfer trajectories.

## The Rocket Equation and Key Parameters

Regardless of propulsion type, the fundamental constraint on spacecraft maneuvering is given by the Tsiolkovsky rocket equation:

$$
\Delta v = c_e \ln\frac{m_0}{m_f} = I_{sp}\, g_0 \ln\frac{m_0}{m_f}
$$

where $\Delta v$ is the velocity increment, $c_e$ is the effective exhaust velocity, $m_0$ and $m_f$ are the spacecraft masses before and after the maneuver, and $g_0 = 9.80665\ \mathrm{m/s^2}$ is the standard gravitational acceleration (Vepa 2024, Eq. 5.4; Vallado 2022).

**Specific impulse** $I_{sp}$ is the core performance metric of a propulsion system, defined as the ratio of thrust $F$ to the propellant weight flow rate $\dot{m} g_0$:

$$
I_{sp} = \frac{F}{\dot{m} g_0} = \frac{c_e}{g_0}
$$

with units of seconds. Typical EP $I_{sp}$ ranges (Fahey 2024, Table 2.2): ion thrusters 2000--10000 s, Hall-effect thrusters 1000--8000 s, field emission electric propulsion 7000--11000 s. For comparison: chemical rockets 100--400 s.

**Thrust acceleration** $a_T$ is the direct input for EP trajectory design:

$$
a_T = \frac{F}{m} = \frac{I_{sp}\, g_0 \, \dot{m}}{m}
$$

For a 500 kg spacecraft with 92 mN thrust (Deep Space 1-class EP), $a_T \approx 1.84 \times 10^{-4}\ \mathrm{m/s^2}$ (Fahey 2024, Table 6.2). This value is 3--4 orders of magnitude smaller than chemical propulsion, meaning orbital transfers require weeks to months.

**Thrust magnitude and thrust bounds**: Real EP engines have a maximum thrust limit $F \leq F_{\max}$; some also have a minimum stable thrust $F_{\min}$. Together these form the thrust bound. In optimal control problems, the thrust magnitude as a control variable is constrained by these bounds—this is exactly why bang-bang control arises: the optimal solution pushes thrust magnitude to the upper or lower bound rather than any intermediate value.

## Classification of Electric Propulsion

By the physical mechanism used to accelerate propellant, EP falls into three categories (Vepa 2024, Ch. 5):

| Type | Thrust Range | $I_{sp}$ (s) | Readiness | Representative Model |
|------|---------|:-----:|:-----:|------|
| Electrostatic (ion thrusters) | 25--300 mN | 2000--10000 | Flight-proven | NSTAR (Deep Space 1) |
| Electromagnetic (Hall-effect) | 40--600 mN | 1000--8000 | Flight-proven | SPT-100 (SMART-1) |
| Electrothermal (resistojet/arcjet) | 100--1000 mN | 300--700 | Flight-proven | MR-502 |

**Solar Electric Propulsion** (SEP) is not an independent propulsion mechanism, but rather an EP system powered by solar arrays. SEP is suitable for inner solar system missions, with thrust acceleration on the order of $10^{-5}g_0$. ESA's SMART-1 lunar probe (2003) and NASA's Deep Space 1 (1998) both validated SEP feasibility for deep space navigation.

## Impulsive Thrust vs. Continuous Thrust

Chemical and electric propulsion correspond to two different mathematical modeling approaches in trajectory design:

- **Impulsive thrust**: Assumes $F \to \infty$, burn time $\Delta t \to 0$, with finite impulse $F\Delta t$, producing an instantaneous jump in orbital velocity. Suitable for chemical rockets, where thrust far exceeds vehicle weight and burn time is negligible relative to orbital period.

- **Continuous thrust**: Thrust is finite and applied over an extended time interval; orbital changes accumulate through time-integration of thrust acceleration. Suitable for EP, with the control variable being a continuous-time function $u(t)$.

The equations of motion under continuous thrust in the two-body problem are:

$$
\ddot{\mathbf{r}} + \frac{\mu}{r^3}\mathbf{r} = \mathbf{a}_T(t)
$$

where the thrust acceleration $\mathbf{a}_T(t)$, in both direction and magnitude, is solved as part of an optimal control problem. Incorporating $\mathbf{a}_T$ into the synodic-frame equations of motion yields the CR3BP+LT model (Fahey 2024, Ch. 2.2):

$$
\ddot{x} - 2\dot{y} = \frac{\partial \Omega}{\partial x} + a_{Tx},\quad \ddot{y} + 2\dot{x} = \frac{\partial \Omega}{\partial y} + a_{Ty},\quad \ddot{z} = \frac{\partial \Omega}{\partial z} + a_{Tz}
$$

where $\Omega$ is the CR3BP effective potential. Under the CR3BP+LT model, low thrust shifts the libration points (called artificial libration points) and can produce Low-Thrust Periodic Orbits (LTPO).

## Numerical Parameterization of the Continuous-Thrust Model

In trajectory optimization, the continuous-thrust control acceleration $\mathbf{a}_T(t)$ is an infinite-dimensional time function that must be parameterized into a finite-dimensional variable set before numerical solution is possible. Common parameterization methods include:

- **B-splines**: Represent the thrust profile via control coefficients at a set of nodes, interpolating through basis functions to obtain thrust values at arbitrary times.

- **Fourier series**: Expand thrust components as sine/cosine series; well-suited to periodic orbit transfers.

- **Shape methods**: Prescribe a geometric shape for the trajectory (e.g., an exponential sinusoid), then back-calculate the required thrust profile, converting the optimal control problem into a parameter optimization problem.

These parameterization techniques transform an originally infinite-dimensional optimal control problem into a finite-dimensional nonlinear program (NLP), forming the core of the direct method (Betts 1998; Conway 2010).

## EP Transfer Strategies in Cislunar Space

Typical application modes of EP in cislunar transfers:

### Full Continuous Thrust

Engine operates continuously throughout the transfer; thrust direction is solved via optimal control. The advantage is simplicity—no need for complex on/off switching logic. The drawback is reduced thrust efficiency compared to impulsive schemes, since the thrust direction on some arcs may not be optimal for changing orbital energy.

### Thrust-Coast-Thrust (TCT)

The transfer is divided into three phases: Earth-escape spiral (continuous thrust), coasting arc (unpowered free flight across cislunar space), and lunar-capture spiral (continuous thrust). The coasting phase substantially reduces total propellant consumption (Kluever and Pierson 1995).

### Combined Chemical-Electric Propulsion

A chemical rocket first performs a single high-thrust impulsive Earth-Moon injection into a ballistic coasting phase; EP then completes lunar capture and orbit circularization. The chemical phase solves the rapid-escape problem; the EP phase solves the high-efficiency braking problem. The combined transfer time is roughly one-fifth of a pure-EP scheme (Kluever 1997).

### Thrust Optimization

Two mainstream methods exist for low-thrust trajectory optimization:

- **Indirect method**: Derives first-order necessary conditions for optimality based on Pontryagin's Minimum Principle, converting trajectory optimization into a two-point boundary value problem for costate variables. Guarantees solution optimality but has a narrow convergence radius and difficulty guessing initial costates (Zhu & Gao 2017).

- **Direct method**: Discretizes state and control variables on a time grid, directly transforming the problem into a large-scale sparse NLP solved by mature solvers (e.g., SNOPT, IPOPT). Good convergence, but optimality is harder to guarantee rigorously (Betts 2000).

For fuel-optimal problems, the optimal thrust magnitude takes bang-bang form (see [Bang-bang Control](/en/glossary/dynamics/bang-bang-control/)).

## Impact of Low Thrust on CR3BP Dynamical Structure

Applying constant low thrust alters the equilibrium point positions and orbit family structure of the CR3BP:

- **Artificial libration points**: Thrust modifies the Jacobi integral, shifting libration points in the thrust direction.

- **Low-thrust forbidden region**: Analogous to zero-velocity surfaces in the natural CR3BP, a given low-thrust Hamiltonian value confines spacecraft motion within specific regional boundaries (Cox et al. 2021).

- **Low-Thrust Periodic Orbits (LTPO)**: Within the low-thrust CR3BP (CR3BP-LT) framework, periodic orbit families exist near libration points, with linear stability characterized by the superposition of center and saddle subspaces (Cox et al. 2021).

## Related Concepts

- [Bang-bang Control](/en/glossary/dynamics/bang-bang-control/) — Optimal thrust-magnitude switching law: an inevitable consequence of fuel-optimal EP problems

- [Tangential Thrust Control](/en/glossary/dynamics/tangential-thrust-control/) — Simplified thrust-direction strategies and station-keeping

- [Two-Impulse Rendezvous](/en/glossary/dynamics/two-impulse-rendezvous/) — Maneuver methods under the impulsive chemical-propulsion model

- [Pontryagin's Minimum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/)

- [Co-state Variables](/en/glossary/dynamics/co-state-variables/)

- [Primer Vector](/en/glossary/dynamics/primer-vector/) — Optimization tool introduced by Lawden

- [CR3BP (Circular Restricted Three-Body Problem)](/en/glossary/dynamics/cr3bp/)

- [Zero-Velocity Surface](/en/glossary/dynamics/zero-velocity-surface/)

## References

- Vepa, 2024, Space Vehicle Maneuvering, Propulsion, Dynamics and Control — A Textbook for Engineers. Springer. Ch. 5: Propulsion system classification, rocket equation, engineering definitions of specific impulse and thrust acceleration.

- Vallado, 2022, Fundamentals of Astrodynamics and Applications. Rocket equation and propulsion performance from the perspective of orbital mechanics.

- Fahey, 2024, Design Strategies for Low Thrust Transfers in the Earth-Moon System. MS Thesis, Purdue Univ. (Howell group). Systematic exposition of CR3BP+LT equations of motion, EP parameters, and indirect optimization framework.

- Betts, 2000, Very Low-Thrust Trajectory Optimization Using a Direct SQP Method. JGCD. A direct-method example handling a 578-revolution low-thrust transfer using modified equinoctial elements.

- McGuire et al., 2018, Low Thrust Cis-lunar Transfers Using a 40 kW-class Solar Electric Propulsion Spacecraft. Engineering analysis of high-power SEP cislunar transfers.

- Kluever, 1997, Optimal Earth-Moon Trajectories Using Combined Chemical-Electric Propulsion. Original derivation of combined chemical-electric transfer.

- Kluever and Pierson, 1995, Optimal Earth-Moon Trajectories Using Nuclear Electric Propulsion. Early work on the TCT sequence concept.

- Cox et al., 2021, Research on low-thrust periodic orbits and forbidden regions in the CR3BP-LT framework.

- Zhu Z, Gao Y, 2017, Survey of Two Classes of Continuation Methods for Solving Optimal Bang-bang Control of Low-Thrust Space Trajectories. J. Deep Space Exploration, 4(2): 101-110.
