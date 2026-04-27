---
title: Low-Thrust Transfer MDP Formulation
description: Formulates the cislunar low-thrust orbit transfer problem as a finite-horizon Markov Decision Process for autonomous trajectory optimization under the reinforcement learning framework
keywords: MDP, Markov Decision Process, low-thrust trajectory optimization, reinforcement learning, orbit design, cislunar space, state space, action space, reward function
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: Low-Thrust Transfer MDP Formulation
  description: Formulating cislunar low-thrust orbit transfer as a finite-horizon MDP
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Low-Thrust Transfer MDP Formulation
  description: Formulating cislunar low-thrust orbit transfer as a finite-horizon MDP
  image: /logo.png
permalink: /en/glossary/lt-transfer-mdp/
---

# Low-Thrust Transfer MDP Formulation

## Definition

In deep reinforcement learning frameworks such as A2PPO, the cislunar low-thrust orbit transfer problem is formulated as a finite-horizon Markov Decision Process (MDP), defined as the tuple $(S, A, p, R, \gamma)$, where $S$ is the state space, $A$ is the action space, $p(s'|s,a)$ is the state transition probability, $R$ is the reward function, and $\gamma \in [0,1]$ is the discount factor[[1]]().

## State Space Design

The agent's state space $S \subset \mathbb{R}^{16}$ contains the spacecraft's absolute dynamical state and relative deviation from the target orbit:

$$
\mathbf{s}_t = [\mathbf{r}_t, \mathbf{v}_t, \tilde{m}_t, \Delta\mathbf{r}_t, \Delta\mathbf{v}_t, \Delta d_t, \Delta v_t, t_{\text{el},t}]^\top \in \mathbb{R}^{16}
$$

| State Component | Dimension | Description |
|:---|:---:|:---|
| $\mathbf{r}_t = [x_t, y_t, z_t]$ | 3 | Position in rotating frame |
| $\mathbf{v}_t = [\dot{x}_t, \dot{y}_t, \dot{z}_t]$ | 3 | Velocity in rotating frame |
| $\tilde{m}_t$ | 1 | Normalized spacecraft mass |
| $\Delta\mathbf{r}_t = \mathbf{r}_t - \mathbf{r}_{\text{ref},t}$ | 3 | Position deviation (relative to nearest target orbit point) |
| $\Delta\mathbf{v}_t = \mathbf{v}_t - \mathbf{v}_{\text{ref},t}$ | 3 | Velocity deviation |
| $\Delta d_t = \|\Delta\mathbf{r}_t\|$ | 1 | Euclidean position error |
| $\Delta v_t = \|\Delta\mathbf{v}_t\|$ | 1 | Velocity error magnitude |
| $t_{\text{el},t}$ | 1 | Normalized elapsed time relative to maximum episode length |

This combination of absolute state and relative error simultaneously captures the spacecraft's current dynamical configuration and its guidance deviation from the target orbit, and has been shown to facilitate stable A2PPO training.

## Action Space Design

The agent outputs a continuous action $\mathbf{a}_t = (a_1, a_2, a_3) \in [-1,1]^3$ at each time step, using spherical coordinate parameterization:

| Action Component | Mapping | Physical Meaning |
|:---:|:---|:---|
| $a_1$ | $\nu = (a_1 + 1)/2 \in [0,1]$ | Throttle (thrust magnitude fraction) |
| $a_2$ | $\phi = \pi a_2 \in [-\pi, \pi]$ | Azimuth angle |
| $a_3$ | $\theta = (\pi/2)a_3 \in [-\pi/2, \pi/2]$ | Elevation angle |

The dimensionless thrust control vector is:

$$
\mathbf{u} = \nu \cdot \hat{\mathbf{u}}, \quad \hat{\mathbf{u}} = (\cos\theta\cos\phi, \cos\theta\sin\phi, \sin\theta)
$$

## Reward Function Design

The reward function combines potential-based shaping, penalty terms, and safety constraints:

$$
r_t = \underbrace{\Delta\Phi(\mathbf{s}_t, \mathbf{s}_{t-1})}_{\text{Potential shaping}} - \underbrace{c_t - c_f \Delta m_t}_{\text{Time and fuel cost}} + \underbrace{r_{\text{safe},t}}_{\text{Safety constraint}} + \underbrace{\Omega_t}_{\text{Terminal reward}}
$$

### Potential Function

$$
\Phi(\mathbf{s}) = -w_1^{\text{pos}}\Delta d - w_1^{\text{vel}}\Delta v + w_2^{\text{pos}} e^{-w_3^{\text{pos}}\Delta d} + w_2^{\text{vel}} e^{-w_3^{\text{vel}}\Delta v}
$$

The exponential terms approach $w_2^{\text{pos}}, w_2^{\text{vel}}$ as $\Delta d, \Delta v \to 0$, while the linear terms provide sustained directional guidance.

### Terminal Reward

| Condition | Reward |
|:---|---:|
| Successful orbit insertion | $+1000$ |
| Moon collision / fuel depletion | $-1000$ |
| Timeout | $0$ |

### Moon Safety Constraint

$$
r_{\text{safe},t} = \begin{cases}
-c_s\left(1 - \frac{\|\mathbf{r}_t - \mathbf{r}_M\|}{\beta R_M}\right)^2 & \text{if } \|\mathbf{r}_t - \mathbf{r}_M\| < \beta R_M \\
0 & \text{otherwise}
\end{cases}
$$

where $\beta = 3$ is the safety buffer multiplier and $R_M = 1737.4$ km is the Moon's radius.

## Episode Termination Conditions

| Termination Type | Condition | Result |
|:---|:---|:---|
| Success | $\Delta d < \Delta d_{\text{thr}}$ and $\Delta v < \Delta v_{\text{thr}}$ | +1000 |
| Moon collision | $r_{M,t} \leq R_M$ | -1000 |
| Fuel depletion | $m_t \leq m_{\min}$ | -1000 |
| Timeout | Maximum episode length reached | 0 |

## Transition Probabilities

State transitions in the CR3BP-LT environment are described by the following ordinary differential equations:

$$
\dot{\mathbf{x}} = f(\mathbf{x}, \mathbf{u}), \quad \mathbf{x} = [\mathbf{r}, \mathbf{v}, \tilde{m}]^\top
$$

Numerical integration uses an adaptive Runge-Kutta 4(5) integrator (relative tolerance $10^{-9}$, absolute tolerance $10^{-12}$).

## References

- [[1]]() Ul Haq I U, Dai H, Du C. Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning[J]. Aerospace Science and Technology, 2026.
