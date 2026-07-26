---
title: Extended Kalman Filter (EKF)
description: An in-depth analysis of the Extended Kalman Filter, including its principles, algorithm workflow, applications in autonomous navigation, and advantages and disadvantages
keywords: extended Kalman filter, EKF, Kalman filter, nonlinear filtering, state estimation, navigation filtering, orbit determination
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Extended Kalman Filter (EKF)
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Extended Kalman Filter Explained | Nonlinear State Estimation Method
  description: An in-depth analysis of the Extended Kalman Filter, including its principles, algorithm workflow, applications in autonomous navigation, and advantages and disadvantages
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Extended Kalman Filter Explained | Nonlinear State Estimation Method
  description: An in-depth analysis of the Extended Kalman Filter, including its principles, algorithm workflow, applications in autonomous navigation, and advantages and disadvantages
  image: /logo.png
permalink: /en/glossary/navigation/extended-kalman-filter/
---

# Extended Kalman Filter (EKF)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Reference: Qian Yingjing (2014), "Research on Autonomous Navigation and Orbit Keeping of Spacecraft on Quasi-Periodic Orbits in Cislunar Space"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Extended Kalman Filter (EKF) is an extension of the standard Kalman filter to nonlinear systems. It achieves state estimation for nonlinear systems by performing first-order linearization at the current state estimate. The EKF is one of the most widely used filtering algorithms in the field of spacecraft autonomous navigation.

The core idea of the EKF: expand the nonlinear system equations in a Taylor series at the current state estimate, retain the first-order terms (ignoring higher-order terms), and transform the problem into a Kalman filtering problem for a linear system.

## Algorithm Principles

### System Model

Let the nonlinear system model be:

**State equation:**
$$\mathbf{x}_{k+1} = \mathbf{f}(\mathbf{x}_k, \mathbf{u}_k) + \mathbf{w}_k$$

**Measurement equation:**
$$\mathbf{y}_k = h(\mathbf{x}_k) + \mathbf{v}_k$$

where $\mathbf{w}_k \sim \mathcal{N}(\mathbf{0}, \mathbf{Q}_k)$ is the process noise and $\mathbf{v}_k \sim \mathcal{N}(\mathbf{0}, \mathbf{R}_k)$ is the measurement noise.

### EKF Algorithm Workflow

#### 1. State Prediction

Predict the state and covariance using the nonlinear state equation:

$$\hat{\mathbf{x}}_{k|k-1} = \mathbf{f}(\hat{\mathbf{x}}_{k-1|k-1}, \mathbf{u}_{k-1})$$

$$\mathbf{P}_{k|k-1} = \mathbf{A}_k \mathbf{P}_{k-1|k-1} \mathbf{A}_k^T + \mathbf{Q}_{k-1}$$

where $\mathbf{A}_k = \frac{\partial \mathbf{f}}{\partial \mathbf{x}}\big|_{\hat{\mathbf{x}}_{k-1|k-1}}$ is the state transition matrix (Jacobian).

#### 2. Linearization

Compute the measurement matrix (Jacobian):

$$\mathbf{H}_k = \frac{\partial h}{\partial \mathbf{x}}\big|_{\hat{\mathbf{x}}_{k|k-1}}$$

#### 3. Kalman Gain

$$\mathbf{K}_k = \mathbf{P}_{k|k-1} \mathbf{H}_k^T (\mathbf{H}_k \mathbf{P}_{k|k-1} \mathbf{H}_k^T + \mathbf{R}_k)^{-1}$$

#### 4. State Update

$$\hat{\mathbf{x}}_{k|k} = \hat{\mathbf{x}}_{k|k-1} + \mathbf{K}_k (\mathbf{y}_k - h(\hat{\mathbf{x}}_{k|k-1}))$$

$$\mathbf{P}_{k|k} = (\mathbf{I} - \mathbf{K}_k \mathbf{H}_k) \mathbf{P}_{k|k-1}$$

## Applications in Autonomous Navigation

### Cislunar Space Navigation

Qian Yingjing (2014) applied the EKF to autonomous navigation systems for quasi-periodic orbits near Earth-Moon libration points:

1. **State vector**: $\mathbf{X} = [\mathbf{r}^T, \mathbf{v}^T]^T$, containing position and velocity
2. **Dynamics model**: N-body dynamics under an ephemeris model
3. **Measurement inputs**: Angular measurements from Sun-Earth-Moon sensors
4. **Filter output**: Estimated spacecraft position and velocity along with covariance

### Key Implementation Details

#### Jacobian Matrix Computation

The key to the EKF lies in computing the state transition matrix $\mathbf{A}_k$ and measurement matrix $\mathbf{H}_k$. For an ephemeris model:

- The state transition matrix is obtained through integration of the variational equations
- The measurement matrix is obtained by taking partial derivatives of the measurement functions

#### Numerical Stability

Long-duration integration may cause the covariance matrix to lose positive definiteness. The following techniques can be employed:

- U-D decomposition
- Square-root filtering
- Covariance bounding

### Convergence Analysis

The convergence of the EKF is influenced by the following factors:

1. **Initial estimate**: The initial state estimate must be sufficiently accurate
2. **Noise statistics**: The statistical properties of process and measurement noise must be accurately modeled
3. **Observability**: The system must satisfy observability requirements
4. **Linearization error**: For strongly nonlinear systems, neglecting higher-order terms may cause error accumulation

## Advantages and Disadvantages of the EKF

### Advantages

| Advantage | Description |
| :--- | :--- |
| High computational efficiency | Jacobian matrix computation and matrix operations have computational complexity of $O(n^2)$ |
| Engineering maturity | Well-established theory, rich code libraries, widely used in aerospace engineering |
| Strong real-time capability | Suitable for online estimation with low storage requirements |

### Disadvantages

| Disadvantage | Description |
| :--- | :--- |
| Linearization error | First-order approximation may introduce significant errors for strongly nonlinear systems |
| Convergence uncertainty | Global convergence is not guaranteed; divergence may occur |
| Jacobian computation | Deriving the Jacobian matrix for complex systems is tedious and error-prone |

## Improved Variants of the EKF

### Unscented Kalman Filter (UKF)

The UKF uses sigma-point sampling instead of linearization, avoiding Jacobian computation:

- Accuracy can reach second or third order
- Better robustness for strongly nonlinear systems
- Slightly higher computational cost than the EKF

### Cubature Kalman Filter (CKF)

Based on a spherical cubature rule for numerical integration, offering good numerical stability.

### Adaptive EKF

Estimates noise statistics online to adapt to changing environments.

## Related Concepts

- [Autonomous Navigation](/en/glossary/navigation/autonomous-navigation/)
- [Sun-Earth-Moon Autonomous Navigation (SEM Navigation)](/en/glossary/navigation/sem-autonomous-navigation/)
- [Observability](/en/glossary/navigation/observability/)
- [State Transition Matrix (STM)](/en/glossary/dynamics/state-transition-matrix/)
- [Ephemeris Model](/en/glossary/dynamics/ephemeris-model/)

## References

- Gelb A. Applied Optimal Estimation [M]. MIT Press, 1974.
- Qian Yingjing. Research on Autonomous Navigation and Orbit Keeping of Spacecraft on Quasi-Periodic Orbits in Cislunar Space [D]. Harbin Institute of Technology, 2014.
- Julier S J, Uhlmann J K. Unscented filtering and nonlinear estimation [J]. Proceedings of the IEEE, 2004.
