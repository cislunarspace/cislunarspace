# SciPy Documentation Review — Fix Design

**Date**: 2026-04-26
**Files**: `web/resources-tools/scipy.md`, `web/en/resources-tools/scipy.md`

## Context

The SciPy documentation pages were expanded from 5 to 12 modules, with new code examples and technical features added. A review identified 7 issues across technical accuracy, content quality, and consistency.

## Fixes

### Fix 1: CR3BP Description — No Code Change

The CR3BP rewrite (separating `r` from `r³`) is a clarity improvement, not a bug fix. Both old and new code produce identical results. No code change needed; the rewrite is already correct and cleaner.

### Fix 2: Sparse Matrix Example — Replace with Orbit Conjunction Scenario

**Problem**: Current example is a generic 3x3 `Ax=b` with no cislunar connection.

**Fix**: Replace with an orbit conjunction assessment example that naturally demonstrates sparsity:
- Build a sparse distance matrix between N space objects (only nearby pairs are non-zero)
- Use `csr_matrix` construction from coordinate arrays
- Find close-approach pairs using sparse operations
- Show why sparsity matters: N objects → N² potential pairs, but most are far apart

### Fix 3: Remove Unused matplotlib Import

**Problem**: FFT example imports `matplotlib.pyplot as plt` but never uses it.

**Fix**: Delete the import line in both zh and en versions.

### Fix 4: Shapiro-Wilk Comment — Explain Constraint

**Problem**: Comment says "on subset" without explaining why.

**Fix**: Change to explain the `scipy.stats.shapiro` limitation (n ≤ 5000) and suggest `kstest` for larger samples. This teaches the reader something practical.

### Fix 5: Optimization Title — Remove Misleading "Orbit Transfer"

**Problem**: Title says "Orbit Transfer Design" but the objective is a trivial quadratic.

**Fix**: Revert title to "Parameter Optimization" (or Chinese equivalent). Add a brief note that real orbit transfer problems use `scipy.optimize` with custom dynamics functions.

### Fix 6: Version Number — Use Stable Range

**Problem**: "1.18.0.dev0" will become stale.

**Fix**: Replace with "1.17+" to indicate current stable release range.

### Fix 7: Formatting — Remove Extra Space

**Problem**: Chinese table has extra space before "Lambert".

**Fix**: Remove space so it reads `Lambert问题求解`.

## Files to Modify

1. `web/resources-tools/scipy.md` — Fixes 2-7
2. `web/en/resources-tools/scipy.md` — Fixes 2-7

## Verification

- Run `npm run docs:build` to confirm no build errors
- Spot-check rendered output for table formatting
- Verify code examples are syntactically valid Python
