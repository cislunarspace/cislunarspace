---
title: Sun-Earth-Moon Autonomous Navigation
description: An in-depth analysis of the Sun-Earth-Moon angular-position-based autonomous navigation method, including principles, sensor configurations, and applications for libration-point quasi-periodic orbit probes
keywords: Sun-Earth-Moon navigation, SEM navigation, autonomous navigation, libration point navigation, quasi-periodic orbit, celestial navigation, cislunar space
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Sun-Earth-Moon Autonomous Navigation (SEM Navigation)
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Sun-Earth-Moon Autonomous Navigation Explained | Libration-Point Probe Navigation Method
  description: An in-depth analysis of the Sun-Earth-Moon angular-position-based autonomous navigation method, including principles, sensor configurations, and applications for libration-point quasi-periodic orbit probes
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Sun-Earth-Moon Autonomous Navigation Explained | Libration-Point Probe Navigation Method
  description: An in-depth analysis of the Sun-Earth-Moon angular-position-based autonomous navigation method, including principles, sensor configurations, and applications for libration-point quasi-periodic orbit probes
  image: /logo.png
permalink: /en/glossary/navigation/sem-autonomous-navigation/
---

# Sun-Earth-Moon Autonomous Navigation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Reference: Qian Yingjing (2014), "Research on Autonomous Navigation and Orbit Keeping of Spacecraft on Quasi-Periodic Orbits in Cislunar Space"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Sun-Earth-Moon Autonomous Navigation (SEM Navigation) is an autonomous navigation method that uses angular position observations of the Sun, Earth, and Moon relative to the spacecraft to estimate the spacecraft's orbital state through filtering algorithms. This method requires only a Sun sensor, an Earth sensor, and a Moon sensor, and can achieve high-precision orbit determination for probes on quasi-periodic orbits near libration points without relying on ground tracking and control networks.

The core advantage of SEM navigation lies in its strong autonomy, simple sensor configuration, and stable, reliable measurement information, making it particularly suitable for probes on quasi-periodic orbits near the Earth-Moon L1/L2 libration points.

## Navigation Principles

### Observation Geometry

Near the Earth-Moon libration points, the observation geometry of the spacecraft relative to the Sun, Earth, and Moon is as follows:

1. **Sun azimuth observation**: Measures the azimuth and elevation angles of the Sun relative to the spacecraft, providing a directional reference
2. **Earth azimuth observation**: Measures the Earth's disk edge or Earth-center direction, providing an Earth position reference
3. **Moon azimuth observation**: Measures the Moon's angular radius or Moon-center direction relative to the spacecraft, providing a Moon position reference

By observing the angular information of these celestial bodies in the spacecraft's inertial reference frame and combining it with the known ephemeris positions of the Sun, Earth, and Moon, the spacecraft's position and velocity in the inertial coordinate system can be back-calculated.

### State Estimation

Let the spacecraft state vector be $\mathbf{X} = [\mathbf{r}^T, \mathbf{v}^T]^T$, containing position $\mathbf{r}$ and velocity $\mathbf{v}$. The measurement equation is:

$$\mathbf{y} = h(\mathbf{X}) + \mathbf{v}_{\text{noise}}$$

where $h(\cdot)$ is the nonlinear measurement function that maps the spacecraft state to theoretical measurement values. Typical measurements include:

- Solar Angular Diameter
- Earth Angular Diameter
- Lunar Angular Diameter
- Sun-Earth Angle
- Sun-Moon Angle
- Earth-Moon Angle

### Filtering Algorithm

Qian Yingjing (2014) adopted the Extended Kalman Filter (EKF) for state estimation. The EKF linearizes the nonlinear measurement equation at the current state estimate and combines it with the dynamics model for state propagation and measurement update:

1. **State prediction**: Integrate the dynamics equations to predict the state and covariance
2. **Linearization**: Compute the measurement matrix $\mathbf{H} = \frac{\partial h}{\partial \mathbf{X}}$
3. **State update**: Use new measurement information to correct the state estimate

## Sensor Configuration

Typical sensor configurations for SEM navigation systems include three schemes:

### Scheme 1: Sun Sensor + Earth Sensor + Moon Sensor

| Sensor | Measurement Information | Accuracy Requirement |
| :--- | :--- | :--- |
| Sun sensor | Sun azimuth | ~0.01 degrees |
| Earth sensor | Earth angular diameter or Earth-center direction | ~0.1% |
| Moon sensor | Moon angular diameter or Moon-center direction | ~0.1% |

### Scheme 2: Star Tracker + Sun/Earth/Moon Sensor Combination

Uses a star tracker to provide a high-precision attitude reference, combined with celestial body sensors to observe celestial azimuths.

### Scheme 3: Optical Camera + Image Processing

Captures images of the Sun, Earth, and Moon using an optical camera, and extracts celestial body edges or center positions through image processing algorithms.

## Observability Analysis

Since libration-point orbits reside in a dynamical chaotic system, the feasibility of the SEM navigation method must be verified through observability analysis. Qian Yingjing (2014) analyzed the degree of observability for different sensor configurations based on nonlinear observability theory.

### Degree of Observability Index

The degree of observability measures the extent to which system states can be determined from measurement information. For linear time-varying systems, the degree of observability can be evaluated through Singular Value Decomposition (SVD) of the observability matrix:

$$\text{obs} = \frac{\sigma_{\min}}{\sigma_{\max}}$$

where $\sigma_{\min}$ and $\sigma_{\max}$ are the minimum and maximum singular values of the observability matrix, respectively.

### Influencing Factors

The observability of SEM navigation is influenced by the following factors:

1. **Observation arc length**: Longer observation arcs generally provide better observability
2. **Observation geometry**: The relative positions of the Sun, Earth, and Moon affect information content
3. **Sensor accuracy**: Measurement noise affects the convergence of state estimation
4. **Orbital dynamics model**: Model errors propagate into state estimation

## Applications in Libration-Point Quasi-Periodic Orbits

Qian Yingjing (2014) studied the feasibility of SEM navigation for weakly stable quasi-periodic orbits near the Earth-Moon L2 point. The research showed:

1. **Convergence**: Sun-Earth-Moon-based autonomous navigation methods can provide convergent orbit estimates
2. **Accuracy**: Navigation accuracy can reach the decameter level, meeting orbit-keeping requirements
3. **Constraints**: The navigation convergence arc length must be shorter than the orbit-keeping impulse interval

### Simulation Verification

Simulation studies showed that for quasi-periodic Halo orbits near the Earth-Moon L2 point:

- Scheme 1 (Sun + Earth + Moon sensors) can achieve state convergence within 2--3 orbital periods
- Navigation accuracy is significantly affected by measurement noise and sampling arc length
- The Extended Kalman Filter can effectively handle nonlinear measurement equations

## Related Concepts

- [Autonomous Navigation](/en/glossary/navigation/autonomous-navigation/)
- [Extended Kalman Filter (EKF)](/en/glossary/navigation/extended-kalman-filter/)
- [Observability](/en/glossary/navigation/observability/)
- [Libration Point](/en/glossary/dynamics/libration-point/)
- [Quasi-Periodic Orbit](/en/glossary/orbits/quasi-periodic-orbit/)
- [Orbit Keeping](/en/glossary/orbits/orbit-keeping/)

## References

- Qian Yingjing. Research on Autonomous Navigation and Orbit Keeping of Spacecraft on Quasi-Periodic Orbits in Cislunar Space [D]. Harbin Institute of Technology, 2014.
- Hill K, Born G H. Linked autonomous interplanetary satellite orbit navigation (LiAISON) [C]. AAS/AIAA Astrodynamics Specialist Conference, 2005.
