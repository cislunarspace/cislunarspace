# e2m2e Documentation Update Design

**Date:** 2026-04-26
**Scope:** Complete rewrite of e2m2e documentation in cislunarspace (zh + en)
**Trigger:** e2m2e v4.1.0 released (2026-04-14), docs last updated 2026-03-25

## Problem

The cislunarspace e2m2e documentation is significantly outdated. Key gaps:

- Missing modules: ephemeris dynamics, SPICE, SRP, MBSE, multiple shooting, strategies
- Code example uses `OrbitVisualizer` for family plots (should use `FamilyPlotter` with `jacobi_values`)
- Project structure tree doesn't reflect v4.1.0 layout
- Documentation link points to GitHub README instead of Sphinx docs
- No version number mentioned

## Files to Modify

| File | Action |
|------|--------|
| `web/resources-tools/e2m2e.md` | Complete rewrite |
| `web/en/resources-tools/e2m2e.md` | Complete rewrite (English mirror) |

No sidebar or index changes needed — sidebar already has the entry, index pages already link correctly.

## Design

### Section 1: Metadata

- `date` / `lastUpdated`: `2026-04-26`
- `description`: Mention both CR3BP and ephemeris-based N-body dynamics
- `keywords`: Add `ephemeris`, `SPICE`, `MBSE`, `multiple shooting`
- `permalink`: Unchanged

### Section 2: Introduction & Core Features

Updated intro to reflect dual dynamics (CR3BP + ephemeris). Core features expanded from 5 to 7:

1. CR3BP system modeling
2. Ephemeris dynamics (SPICE N-body)
3. Solar radiation pressure
4. Multiple orbit types (unchanged)
5. Orbit design algorithms (strategy-pattern correction, continuation, multiple shooting, stability)
6. Transfer trajectory search
7. MBSE architecture

### Section 3: New Modules (dedicated section)

Four subsections with descriptions and minimal code snippets:

- **Ephemeris Dynamics & SPICE** — `EphemerisSystem`, `EphemerisDynamics`
- **Solar Radiation Pressure** — `CR3BP_SRP_Dynamics`
- **MBSE** — architecture, requirements, data models, diagrams
- **Multiple Shooting** — `MultipleShooting`, `sample_patch_points`

### Section 4: Code Example

New example using v4.0+ API:
- `setup_2D_symmetric_x_fixed_x0` for DRO correction (strategies are internal implementation)
- `FamilyPlotter.plot_family_2d` for orbit family visualization (requires `jacobi_values`)
- `OrbitFamily.get_jacobi_constants()` to compute Jacobi values from family
- Clean flow: system → dynamics → corrector → continuation → plotter

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

### Section 5: Project Structure

Updated tree with all v4.1.0 modules:
- `core/`: + srp_dynamics, ephemeris_system, ephemeris_dynamics, spice
- `algorithms/`: + multiple_shooting, strategies/
- `transfer/`: + transfer.py, search_config.py
- `mbse/`: new module (architecture, requirements, data, diagrams)
- `visualization/`: + family, transfer, stability, config

### Section 6: Resources

- Documentation link → `https://cislunarspace.github.io/e2m2e/`
- GitHub repo link (unchanged)

## Verification

After implementation:
1. Run `npm run docs:build` to verify build passes
2. Check both zh and en pages render correctly
3. Verify all links are valid
