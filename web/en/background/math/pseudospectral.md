---
title: Pseudospectral Methods
description: Pseudospectral methods are direct methods that discretize continuous optimal control problems into nonlinear programming problems by approximating state and control variables at orthogonal collocation points.
keywords: Pseudospectral Methods, Optimal Control, Trajectory Optimization, Collocation, Nonlinear Programming
author: 天疆说
date: 2026-06-05
lastUpdated: 2026-06-05
permalink: /en/background/math/pseudospectral/
wechatShare:
  title: "Cislunar Space Guide | Pseudospectral Methods"
  desc: "Pseudospectral methods are direct methods that discretize continuous optimal control problems into nonlinear programming problems by approximating state and control variables at orthogonal collocation points."
  image: "/logo.png"
---

# Pseudospectral Methods

## Overview

Pseudospectral Methods are a class of direct methods used to discretize continuous-time optimal control problems into Nonlinear Programming (NLP) problems. The core idea is to approximate state and control variables at collocation points defined by orthogonal polynomials, leveraging the high accuracy of global interpolation polynomials for rapid convergence. Common collocation schemes include Gauss-Legendre, Gauss-Lobatto, and Radau points.

Pseudospectral methods are widely applied in spacecraft trajectory optimization, low-thrust transfer orbit design, and reentry vehicle guidance, complementing the [Shooting Method](/en/background/math/shooting-method/) and [Arc-length Continuation](/en/background/math/continuation/).

> This is a placeholder page. Detailed content is to be added.
