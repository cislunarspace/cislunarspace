---
title: e2m2e - Cislunar Space Orbit Design Library
description: e2m2e is a Python library for cislunar orbit design based on CR3BP and ephemeris-based N-body dynamics, supporting periodic orbit design, transfer trajectory search, and MBSE modeling.
keywords: e2m2e, CR3BP, transfer trajectory, orbit design, differential correction, continuation, cislunar space, ephemeris, SPICE, MBSE, multiple shooting
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-04-26
wechatShare:
  title: e2m2e Cislunar Orbit Design Library
  desc: Python library for cislunar orbit design based on CR3BP and ephemeris dynamics
  image: /logo.png
og:
  title: e2m2e - Cislunar Space Orbit Design Library
  description: Python library for cislunar orbit design based on CR3BP and ephemeris dynamics
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: e2m2e Cislunar Orbit Design Library
  description: Python library for cislunar orbit design based on CR3BP and ephemeris dynamics
  image: /logo.png
permalink: /en/resources-tools/e2m2e/
---

# e2m2e — Earth to Moon, Moon to Earth

[e2m2e](https://github.com/cislunarspace/e2m2e) (Earth to Moon, Moon to Earth) is a Python library based on the Circular Restricted Three-Body Problem (CR3BP) and ephemeris-based N-body dynamics (SPICE), focused on designing and analyzing cislunar space transfer trajectories. It supports a complete orbit design workflow from theoretical CR3BP models to high-fidelity ephemeris models.

## Core Features

- **CR3BP System Modeling**: Supports Earth-Moon, Sun-Earth, Sun-Jupiter systems
- **Ephemeris Dynamics**: N-body high-fidelity dynamics based on SPICE kernels
- **Solar Radiation Pressure**: SRP modeling in the CR3BP framework
- **Multiple Orbit Types**: DRO, ARO, RO, Halo, Lyapunov, Lissajous, Butterfly, Dragonfly
- **Orbit Design Algorithms**: Strategy-pattern differential correction, natural/pseudo-arclength continuation, multiple shooting, stability analysis
- **Transfer Trajectory Search**: DRO/RO transfer search, NLP optimization, impulsive transfer design
- **MBSE Architecture**: Protocol-based systems engineering, requirements management, architecture components

## Supported Orbit Types

| Orbit Type | Description |
|------------|-------------|
| **DRO** | Distant Retrograde Orbit |
| **RO** | Resonant Orbit (3:2, 4:3, etc.) |
| **ARO** | Axial Resonant Orbit |
| **Halo** | Halo orbit (periodic orbit) |
| **Lyapunov** | Lyapunov orbit (planar periodic) |
| **Lissajous** | Lissajous orbit (quasi-periodic) |
| **Butterfly** | Butterfly orbit (symmetric about xy-plane) |
| **Dragonfly** | Dragonfly orbit (multiple symmetries) |

## New Modules

### Ephemeris Dynamics & SPICE

High-fidelity N-body dynamics based on NASA SPICE kernels, supporting multi-body gravitational perturbations. Configure multi-body systems with `EphemerisSystem` and propagate high-fidelity orbits with `EphemerisDynamics`. Suitable for mission design requiring real ephemeris accuracy.

```python
from e2m2e.core import EphemerisSystem, EphemerisDynamics

system = EphemerisSystem(bodies=["earth", "moon", "sun"])
dynamics = EphemerisDynamics(system=system)
```

### Solar Radiation Pressure

Introduces solar radiation pressure perturbation in the CR3BP framework, applicable to orbit analysis of spacecraft with high area-to-mass ratios (e.g., solar sails).

```python
from e2m2e.core import CR3BP_SRP_Dynamics

srp_dynamics = CR3BP_SRP_Dynamics(system=system, area=10.0, mass=100.0, Cr=1.5)
```

### MBSE Architecture

A systems engineering framework based on Python Protocol interfaces, including architecture components, requirements management, and data models. Supports the full systems engineering workflow for orbit design.

- `mbse/architecture/` — System architecture component definitions
- `mbse/requirements/` — Requirements management and traceability
- `mbse/data/` — Pydantic data models and enumerations
- `mbse/diagrams/` — Architecture diagram generation

### Multiple Shooting

Multi-segment shooting method for high-fidelity solving of complex transfer trajectories, with multiprocessing support.

```python
from e2m2e.algorithms import MultipleShooting, sample_patch_points

patch_points = sample_patch_points(orbit, n_segments=10)
ms = MultipleShooting(dynamics=dynamics)
result = ms.solve(patch_points)
```

## Installation

```bash
pip install e2m2e
```

Development dependencies:
```bash
pip install e2m2e[dev]
```

## Example Usage

```python
import e2m2e
from e2m2e.core import CR3BP_System, Orbit
from e2m2e.algorithms import DifferentialCorrection, Continuation
from e2m2e.visualization import FamilyPlotter

# 1. Create Earth-Moon system and compute libration points
system = CR3BP_System(mu=0.01215, primary="earth", secondary="moon")
system.compute_libration_points()

# 2. Create dynamics object
dynamics = e2m2e.core.dynamics.CR3BP_Dynamics(system=system)

# 3. Differential correction to generate DRO orbit
corrector = DifferentialCorrection(dynamic=dynamics)
corrector.setup_2D_symmetric_x_fixed_x0(x0=0.79188556619742)
seed_orbit = Orbit(states=[[0.79188556619742, 0, 0, 0, 0.53682, 0]], times=[0])
seed_orbit.period = 3.472526005624708
seed_dro = corrector.iterate_correction(initial_guess=seed_orbit)

# 4. Natural continuation to generate orbit family
continuation = Continuation(corrector=corrector)
family = continuation.natural_continuation(
    seed_orbit=seed_dro,
    param_range=(0.14, 0.9),
    step_size=0.005,
)

# 5. Visualize orbit family with Jacobi constant coloring
plotter = FamilyPlotter(system)
plotter.plot_family_2d(family, jacobi_values=family.get_jacobi_constants())
```

## Project Structure

```
e2m2e/
├── core/                          # Core modules
│   ├── system.py                  # CR3BP system definition
│   ├── dynamics.py                # CR3BP dynamics model
│   ├── srp_dynamics.py            # Solar radiation pressure
│   ├── ephemeris_system.py        # Ephemeris multi-body system
│   ├── ephemeris_dynamics.py      # N-body ephemeris dynamics
│   ├── spice.py                   # SPICE kernel management
│   ├── orbit.py                   # Orbit data structure
│   └── coordinate.py              # Coordinate transformation
├── algorithms/                    # Algorithm modules
│   ├── differential_correction.py # Differential correction
│   ├── continuation.py            # Orbit continuation
│   ├── stability.py               # Stability analysis
│   ├── multiple_shooting.py       # Multiple shooting
│   └── strategies/                # Strategy-pattern correction configs
│       ├── halo.py                # Halo orbit strategies
│       ├── symmetric_2d.py        # 2D symmetric orbit strategies
│       └── symmetric_3d.py        # 3D symmetric orbit strategies
├── transfer/                      # Transfer trajectory design
│   ├── transfer.py                # Transfer orbit class
│   ├── transfer_search.py         # DRO/RO transfer search
│   ├── transfer_optimization.py   # NLP optimization
│   └── search_config.py           # Search configuration
├── mbse/                          # Systems engineering modeling
│   ├── architecture/              # System architecture components
│   ├── requirements/              # Requirements management
│   ├── data/                      # Pydantic data models
│   └── diagrams/                  # Architecture diagram generation
└── visualization/                 # Visualization
    ├── plotting.py                # Base plotting
    ├── family.py                  # Orbit family plotting
    ├── transfer.py                # Transfer orbit plotting
    ├── stability.py               # Stability analysis plots
    └── config.py                  # Plot configuration
```

## Resources

- [e2m2e Documentation](https://cislunarspace.github.io/e2m2e/)
- [e2m2e GitHub Repository](https://github.com/cislunarspace/e2m2e)
