---
title: 2D Convolutional Neural Network
description: A variant of convolutional neural network architecture that treats input data as a 2D matrix (rows for time steps, columns for state components), extracting loc
keywords: 2D Convolutional Neural Network, 2DCNN, observation
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 2D Convolutional Neural Network
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: 2D Convolutional Neural Network Explained | Term Definition
  description: A variant of convolutional neural network architecture that treats input data as a 2D matrix (rows for time steps, columns for state components), extracting loc
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 2D Convolutional Neural Network Explained | Term Definition
  description: A variant of convolutional neural network architecture that treats input data as a 2D matrix (rows for time steps, columns for state components), extracting loc
  image: /logo.png
permalink: /en/glossary/observation/2dcnn/
---

# 2D Convolutional Neural Network

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A variant of convolutional neural network architecture that treats input data as a 2D matrix (rows for time steps, columns for state components), extracting local features by sliding 2D convolutional kernels over the time-state space. Compared to 1D CNN, 2DCNN captures local patterns along both temporal and state dimensions simultaneously; compared to recurrent networks like LSTM, it offers higher computational efficiency for transient anomaly detection in short sequences with lower overfitting risk. This paper uses 2DCNN to classify cislunar object observation sequences for detecting impulsive maneuvers within time windows, with input shape 20x6x1 (20 time steps, 6 state components, single channel), processed through three convolutional-pooling layers and two fully connected layers to output binary classification probabilities.

## Application Value

2D convolutional neural networks classify cislunar space targets and detect anomalies, enabling rapid processing of short-sequence data.

## Related Concepts

- [Space Surveillance Network](/en/glossary/observation/ssn/)
- [Space-Based Space Surveillance](/en/glossary/observation/sbss/)
- [EU Space Surveillance and Tracking](/en/glossary/observation/eu sst/)

## References

- Zhang和Dang - 2025 - Impulsive maneuver detection of cislunar space objects based on convolutional neural network
