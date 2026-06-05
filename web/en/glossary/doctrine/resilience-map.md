---
title: Resilience Map
description: A detailed analysis of the Resilience Map, its generation methodology, and its application in evaluating the resilience of cislunar SSA architectures.
keywords: Resilience Map, cislunar space, situational awareness, architecture resilience, low thrust, reachable set, coverage analysis
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Resilience Map
  desc: A detailed analysis of the Resilience Map, its generation methodology, and its application in evaluating SSA architecture resilience.
  image: /logo.png
og:
  title: Resilience Map
  description: A detailed analysis of the Resilience Map and its application in evaluating cislunar SSA architecture resilience.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Resilience Map
  description: A detailed analysis of the Resilience Map and its application in evaluating cislunar SSA architecture resilience.
  image: /logo.png
permalink: /en/glossary/doctrine/resilience-map/
---

# Resilience Map

## Definition

The Resilience Map is an SSA architecture evaluation visualization tool proposed by Klonowski (2025). It presents a heatmap showing a given SSA architecture's detection capability over time for low-thrust spacecraft starting from any initial position in cislunar space. The Resilience Map captures the dynamic evolution characteristics of SSA architecture coverage, serving as an important complement to traditional static volume coverage ratio metrics.

## Generation Method

### Step 1: Precompute Reachable Sets

Precompute the reachable sets of low-thrust spacecraft on a three-dimensional grid in cislunar space:
- **Grid Resolution**: Covers critical regions of cislunar space
- **Time Horizon**: Evaluation period (e.g., 7 days)
- **Control Constraint**: Low-thrust upper bound

### Step 2: Coverage Overlay

For each grid point and each time step:
- Check whether the reachable set at that point intersects the architecture's detection region
- Calculate the fraction of the reachable set that is detected

### Step 3: Heatmap Generation

Visualize the coverage analysis results:
- **Color Encoding**: Red indicates high coverage capability, blue indicates low coverage capability
- **Time Dimension**: Animation showing how coverage evolves over time
- **Spatial Dimension**: Two-dimensional slices or three-dimensional volume rendering

## Comparison with Traditional Volume Coverage Ratio

| Metric | Description | Limitations |
|:---|:---|:---|
| Volume Coverage Ratio | Fraction of static points within the architecture's detection region | Cannot reflect dynamic target detection capability |
| Resilience Map | Temporal match between reachable sets and detection regions | Higher computational cost |

## Core Elements

### Mathematical Definition
The Resilience Map $\mathcal{RM}(\mathbf{x}_0, t)$ is defined as the fraction of the low-thrust reachable set $\mathcal{R}^t(\mathbf{x}_0)$ from initial position $\mathbf{x}_0$ that is detected by the architecture at time $t$:

$$\mathcal{RM}(\mathbf{x}_0, t) = \frac{\text{Vol}(\mathcal{R}^t(\mathbf{x}_0) \cap \mathcal{D}(t))}{\text{Vol}(\mathcal{R}^t(\mathbf{x}_0))}$$

where $\mathcal{D}(t)$ is the detection region at time $t$.

### Key Properties
The Resilience Map can:
- Identify temporal blind spots in architecture coverage
- Quantify the architecture's detection capability for dynamic targets
- Provide localized improvement directions for architecture optimization

### Application Scenarios
The Resilience Map is applicable to SSA architecture performance evaluation, resource allocation optimization, and mission planning scenarios.

## Related Concepts

- [Reachable Set](/en/glossary/dynamics/reachable-set/)
- [Cislunar Space Situational Awareness Architecture](/en/glossary/doctrine/cislunar-space-situational-awareness/)
- [Resilient/Disaggregated Architecture](/en/glossary/doctrine/resilient-architecture/)

## References

- Klonowski M, Holzinger M J. Resilience of Architectures for Cislunar Space Situational Awareness Using Low-Thrust Reachable Sets[J]. The Journal of Spacecraft and Rockets, 2025.
- Klonowski M. Cislunar Space Situational Awareness Architecture Design and Analysis[D]. University of Colorado Boulder, 2025.
