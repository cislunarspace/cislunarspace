---
title: K-Medoids Clustering (K-Medoids Clustering)
description: Detailed analysis of K-Medoids clustering algorithm principles, differences from K-Means, and application in cislunar SSA architecture clustering analysis
keywords: K-Medoids, Clustering, PAM, Architecture Design, Cislunar Space, Situational Awareness, Classification
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: K-Medoids Clustering Explained
  description: Detailed analysis of K-Medoids clustering algorithm principles and application in cislunar SSA architecture clustering analysis
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: K-Medoids Clustering Explained
  description: Detailed analysis of K-Medoids clustering algorithm principles and application in cislunar SSA architecture clustering analysis
  image: /logo.png
permalink: /en/glossary/dynamics/k-medoids/
wechatShare:
  title: "Cislunar Space Guide | K-Medoids Clustering (K-Medoids Clustering)"
  desc: "Detailed analysis of K-Medoids clustering algorithm principles, differences from K-Means, and application in cislunar SSA architecture clustering analysis"
  image: "/logo.png"
---

# K-Medoids Clustering (K-Medoids Clustering)

## Definition

K-Medoids (also known as PAM, Partitioning Around Medoids) is a clustering algorithm that uses actual data points as cluster representatives. Unlike K-Means which uses cluster means as centroids, K-Medoids always selects an actual data point from within the cluster as the center point (Medoid), making it more robust to noise and outliers.

## Algorithm Principles

### Objective Function

K-Medoids minimizes the sum of distances from data points to cluster centers:

$$\min \sum_{i=1}^{K} \sum_{\mathbf{x} \in \mathcal{C}_i} D(\mathbf{x}, \mathbf{m}_i)$$

Where $\mathbf{m}_i$ is the actual center point of the $i$-th cluster and $D(\cdot, \cdot)$ is the distance function.

### PAM Algorithm Steps

1. Randomly select $K$ data points as initial Medoids
2. Repeat until convergence:
   - **Assignment step**: Assign each data point to the nearest Medoid
   - **Swap step**: Try replacing current Medoid with a non-Medoid point; accept replacement if it reduces total cost

### Comparison with K-Means

| Characteristic | K-Means | K-Medoids |
|:---|:---|:---|
| Center point type | Cluster mean (may not be data point) | Actual data point in cluster |
| Noise robustness | Low | High |
| Distance function | Euclidean distance | Any distance metric |
| Computational complexity | $O(I \cdot N \cdot K \cdot d)$ | $O(I \cdot N^2 \cdot K \cdot d)$ |

## Application in Cislunar SSA Architecture Analysis

Klonowski (2025) used K-Medoids clustering to classify cislunar space SSA Pareto-optimal architectures:
- K-Medoids center points are actual architecture configurations, facilitating interpretation and decision-making
- Less sensitive to outliers on the Pareto frontier
- Can identify architecture categories with different orbital family configurations

## Core Elements

### Mathematical Definition
K-Medoids partitions dataset $\mathcal{X} = \{\mathbf{x}_1, ..., \mathbf{x}_N\}$ into $K$ clusters, with each cluster represented by an actual data point $\mathbf{m}_i$, minimizing total distance cost.

### Key Properties
K-Medoids is robust to noise and outliers because center points are actual data points rather than means. Computational complexity is higher than K-Means, but results are more stable.

### Application Scenarios
K-Medoids is suitable for scenarios requiring robust clustering, such as anomaly detection, image segmentation, document clustering, and the SSA architecture classification focused on in this document.

## Related Concepts

- [K-Means Clustering](/en/glossary/dynamics/k-means/)
- [NSGA II](/en/glossary/dynamics/nsga-ii/)
- [Pareto Optimality](/en/glossary/dynamics/pareto-optimal/)

## References

- Kaufman L, Rousseeuw P J. Finding groups in data: an introduction to cluster analysis[M]. John Wiley & Sons, 1990.
- Klonowski M, Owens-Fahrner N, Heidrich C, et al. Cislunar space domain awareness architecture design and analysis for cooperative agents[J]. The Journal of the Astronautical Sciences, 2024.
