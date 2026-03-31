---
title: e2m2e - Cislunar Space Transfer Trajectory Design Library
description: e2m2e is a Python library based on CR3BP for designing and analyzing cislunar space transfer trajectories.
keywords: e2m2e, CR3BP, transfer trajectory, orbit design, differential correction, continuation, cislunar space
author: CislunarSpace
date: 2026-03-25
lastUpdated: 2026-03-25
wechatShare:
  title: e2m2e Cislunar Trajectory Design Library
  desc: Python library for cislunar orbit design based on CR3BP
  image: /logo.png
og:
  title: e2m2e - Cislunar Space Transfer Trajectory Design Library
  description: Python library for cislunar space transfer trajectory design based on CR3BP
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: e2m2e - Cislunar Space Transfer Trajectory Design Library
  description: Python library for cislunar space transfer trajectory design based on CR3BP
  image: /logo.png
permalink: /en/resources-tools/e2m2e/
---

# e2m2e — Earth to Moon, Moon to Earth

[e2m2e](https://github.com/cislunarspace/e2m2e) (Earth to Moon, Moon to Earth) is a Python library based on the Circular Restricted Three-Body Problem (CR3BP), focused on designing and analyzing cislunar space transfer trajectories.

## Core Features

- **CR3BP System Modeling**: Supports Earth-Moon, Sun-Earth, Sun-Jupiter systems
- **Multiple Orbit Types**: DRO, ARO, RO, Halo, Lyapunov, Lissajous, Butterfly, Dragonfly
- **Orbit Design Algorithms**: Differential correction, natural continuation, pseudo-arclength continuation, stability analysis
- **Transfer Trajectory Search**: Grid search, NLP optimization, impulsive transfer design
- **Visualization Tools**: 2D/3D orbit plotting, Jacobi constant plots, stability analysis plots

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

# 1. Create Earth-Moon system and compute libration points
system = CR3BP_System(mu=0.01215, primary="earth", secondary="moon")
system.compute_libration_points()
system.info()

# 2. Create dynamics object and seed orbit
dynamics = e2m2e.core.dynamics.CR3BP_Dynamics(system=system)
x0 = 0.79188556619742
vy0 = 0.53682
initial_state = [x0, 0.0, 0.0, 0.0, vy0, 0.0]
seed_orbit = Orbit(states=[initial_state], times=[0])
seed_orbit.period = 3.472526005624708

# 3. Differential correction to generate DRO orbit
corrector = DifferentialCorrection(dynamic=dynamics)
corrector.setup_2D_symmetric_x_fixed_x0(x0=x0)
seed_dro = corrector.iterate_correction(initial_guess=seed_orbit)

# 4. Natural continuation to generate orbit family
continuation = Continuation(corrector=corrector)
family = continuation.natural_continuation(
    seed_orbit=seed_dro,
    param_range=(0.14, 0.9),
    step_size=0.005,
)

# 5. Visualization
from e2m2e.visualization import OrbitVisualizer
viz = OrbitVisualizer(system)
viz.plot_2d_projection(seed_dro, plane='xy', color='blue')
viz.plot_primary_bodies()
viz.plot_libration_points()
viz.show()
```

## Project Structure

```
e2m2e/
├── core/                 # Core modules
│   ├── system.py         # CR3BP system definition
│   ├── dynamics.py       # Dynamics model
│   ├── orbit.py          # Orbit data structure
│   └── coordinate.py     # Coordinate transformation
├── algorithms/           # Algorithm modules
│   ├── differential_correction.py  # Differential correction
│   ├── continuation.py            # Orbit continuation
│   └── stability.py              # Stability analysis
├── transfer/            # Transfer trajectory design
│   ├── transfer_search.py         # DRO transfer search
│   ├── transfer_optimization.py   # NLP optimization
│   └── transfer_base.py           # Base class
└── visualization/       # Visualization
    └── plotting.py     # Plotting tools
```

## Resources

- [e2m2e GitHub Repository](https://github.com/cislunarspace/e2m2e)
- [e2m2e Documentation](https://github.com/cislunarspace/e2m2e#readme)