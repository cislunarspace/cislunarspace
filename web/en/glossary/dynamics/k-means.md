---
title: K-Means Clustering (K-Means Clustering)
description: Detailed analysis of K-Means clustering algorithm principles, application in cislunar SSA architecture classification, and comparison with K-Medoids
keywords: K-Means, Clustering, K-Medoids, Architecture Design, Cislunar Space, Situational Awareness, Classification
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: K-Means Clustering Explained
  description: Detailed analysis of K-Means clustering algorithm principles and application in cislunar SSA architecture classification
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: K-Means Clustering Explained
  description: Detailed analysis of K-Means clustering algorithm principles and application in cislunar SSA architecture classification
  image: /logo.png
permalink: /en/glossary/dynamics/k-means/
wechatShare:
  title: "Cislunar Space Guide | K-Means Clustering (K-Means Clustering)"
  desc: "Detailed analysis of K-Means clustering algorithm principles, application in cislunar SSA architecture classification, and comparison with K-Medoids"
  image: "/logo.png"
---

# K-Means Clustering (K-Means Clustering)

## Definition

K-Means is a classic centroid-based clustering algorithm that partitions data into $K$ clusters, minimizing the sum of squared Euclidean distances from data points to cluster centroids. K-Means is simple and efficient, widely used in data mining, pattern recognition, and image segmentation.

## Algorithm Principles

### Objective Function

K-Means aims to minimize the sum of squared errors (SSE):

$$\min \sum_{i=1}^{K} \sum_{\mathbf{x} \in \mathcal{C}_i} \|\mathbf{x} - \boldsymbol{\mu}_i\|^2$$

Where $\boldsymbol{\mu}_i$ is the centroid of the $i$-th cluster and $\mathcal{C}_i$ is the set of data points in the $i$-th cluster.

### Algorithm Steps

1. Randomly initialize $K$ centroids
2. Repeat until convergence:
   - **Assignment step**: Assign each data point to the nearest centroid
   - **Update step**: Recalculate each cluster's centroid as the mean of data points in the cluster

### Convergence

K-Means algorithm is guaranteed to converge after finite iterations but may get stuck in local optima. The commonly used $K$-Means++ initialization method improves initial centroid selection.

## Application in Cislunar SSA Architecture Analysis

Klonowski (2025) used K-Means and K-Medoids clustering methods to classify Pareto-optimal architectures in cislunar space SSA architecture design:

### Feature Extraction

Extract feature vectors from architecture configurations:

- Number of observation satellites
- Orbital family distribution
- Coverage performance metrics
- Cost metrics

### Clustering Analysis

1. Apply K-Means clustering to the Pareto optimal solution set
2. Identify different types of architecture configurations
3. Analyze characteristics and applicable scenarios of each cluster

## Core Elements

### Mathematical Definition

K-Means partitions dataset $\mathcal{X} = \{\mathbf{x}_1, ..., \mathbf{x}_N\}$ into $K$ disjoint clusters $\mathcal{C} = \{\mathcal{C}_1, ..., \mathcal{C}_K\}$, minimizing the SSE objective function.

### Key Properties

K-Means time complexity is $O(I \cdot N \cdot K \cdot d)$, where $I$ is number of iterations, $N$ is number of data points, $K$ is number of clusters, and $d$ is dimensionality. The algorithm assumes spherical clusters of similar size.

### Comparison with K-Medoids

| Characteristic | K-Means | K-Medoids |
| :--- | :--- | :--- |
| Centroid type | Cluster mean (may not be data point) | Actual data point in cluster |
| Noise robustness | Low | High |
| Computational complexity | Low | Higher |

## Related Concepts

- [K-Medoids Clustering](/en/glossary/dynamics/k-medoids/)
- [NSGA II](/en/glossary/dynamics/nsga-ii/)
- [Pareto Optimality](/en/glossary/dynamics/pareto-optimal/)

## References

- MacQueen J. Some methods for classification and analysis of multivariate observations[C]. Berkeley Symposium on Mathematical Statistics and Probability, 1967.
- Klonowski M, Owens-Fahrner N, Heidrich C, et al. Cislunar space domain awareness architecture design and analysis for cooperative agents[J]. The Journal of the Astronautical Sciences, 2024.
