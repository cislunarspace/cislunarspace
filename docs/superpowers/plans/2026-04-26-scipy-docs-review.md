# SciPy Documentation Review Fixes — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix 7 issues in the SciPy documentation pages (technical accuracy, content quality, formatting)

**Architecture:** Direct edits to two markdown files — `web/resources-tools/scipy.md` (Chinese) and `web/en/resources-tools/scipy.md` (English). Each task is a self-contained edit.

**Tech Stack:** Markdown, Python code snippets

---

### Task 1: Fix Formatting — Remove Extra Space Before "Lambert"

**Files:**
- Modify: `web/resources-tools/scipy.md:34`

- [ ] **Step 1: Fix Chinese table formatting**

In `web/resources-tools/scipy.md`, line 34, change:

```
| `scipy.optimize` | 优化算法、非线性方程与最小二乘求解 | 轨道设计、参数优化、 Lambert 问题求解 |
```

to:

```
| `scipy.optimize` | 优化算法、非线性方程与最小二乘求解 | 轨道设计、参数优化、Lambert问题求解 |
```

- [ ] **Step 2: Verify no other spacing issues in the table**

Check that no other rows have similar extra spaces.

- [ ] **Step 3: Commit**

```bash
git add web/resources-tools/scipy.md
git commit -m "fix: remove extra space before Lambert in scipy table"
```

---

### Task 2: Fix Version Number — Use Stable Range

**Files:**
- Modify: `web/resources-tools/scipy.md:52`
- Modify: `web/en/resources-tools/scipy.md:52`

- [ ] **Step 1: Update Chinese version reference**

In `web/resources-tools/scipy.md`, line 52, change:

```
- **版本**：当前开发分支为 1.18.0.dev0
```

to:

```
- **版本**：当前稳定版为 1.17+
```

- [ ] **Step 2: Update English version reference**

In `web/en/resources-tools/scipy.md`, line 52, change:

```
- **Version**: Current development branch is 1.18.0.dev0
```

to:

```
- **Version**: Current stable release is 1.17+
```

- [ ] **Step 3: Commit**

```bash
git add web/resources-tools/scipy.md web/en/resources-tools/scipy.md
git commit -m "fix: use stable version range instead of pinned dev version"
```

---

### Task 3: Remove Unused matplotlib Import from FFT Example

**Files:**
- Modify: `web/resources-tools/scipy.md:126`
- Modify: `web/en/resources-tools/scipy.md:126`

- [ ] **Step 1: Remove import from Chinese version**

In `web/resources-tools/scipy.md`, delete the line:

```python
import matplotlib.pyplot as plt
```

from the FFT 频谱分析 code block (currently line 126).

- [ ] **Step 2: Remove import from English version**

In `web/en/resources-tools/scipy.md`, delete the line:

```python
import matplotlib.pyplot as plt
```

from the FFT Spectral Analysis code block (currently line 126).

- [ ] **Step 3: Commit**

```bash
git add web/resources-tools/scipy.md web/en/resources-tools/scipy.md
git commit -m "fix: remove unused matplotlib import from FFT example"
```

---

### Task 4: Fix Shapiro-Wilk Comment — Explain Constraint

**Files:**
- Modify: `web/resources-tools/scipy.md:178`
- Modify: `web/en/resources-tools/scipy.md:178`

- [ ] **Step 1: Update Chinese comment**

In `web/resources-tools/scipy.md`, line 178, change:

```python
# 正态性检验（Shapiro-Wilk 对小子集）
```

to:

```python
# 正态性检验（Shapiro-Wilk 限制 n ≤ 5000，大样本用 scipy.stats.kstest）
```

- [ ] **Step 2: Update English comment**

In `web/en/resources-tools/scipy.md`, line 178, change:

```python
# Normality test (Shapiro-Wilk on subset)
```

to:

```python
# Normality test (Shapiro-Wilk limited to n ≤ 5000; use kstest for larger samples)
```

- [ ] **Step 3: Commit**

```bash
git add web/resources-tools/scipy.md web/en/resources-tools/scipy.md
git commit -m "docs: explain Shapiro-Wilk sample size constraint"
```

---

### Task 5: Fix Optimization Title — Remove Misleading "Orbit Transfer"

**Files:**
- Modify: `web/resources-tools/scipy.md:102`
- Modify: `web/en/resources-tools/scipy.md:102`

- [ ] **Step 1: Update Chinese title**

In `web/resources-tools/scipy.md`, line 102, change:

```
### 参数优化（轨道转移设计）
```

to:

```
### 参数优化
```

- [ ] **Step 2: Update English title**

In `web/en/resources-tools/scipy.md`, line 102, change:

```
### Parameter Optimization (Orbit Transfer Design)
```

to:

```
### Parameter Optimization
```

- [ ] **Step 3: Commit**

```bash
git add web/resources-tools/scipy.md web/en/resources-tools/scipy.md
git commit -m "fix: remove misleading orbit transfer title from toy optimization example"
```

---

### Task 6: Replace Sparse Matrix Example with Orbit Conjunction Scenario

**Files:**
- Modify: `web/resources-tools/scipy.md:145-161`
- Modify: `web/en/resources-tools/scipy.md:145-161`

- [ ] **Step 1: Replace Chinese sparse matrix example**

In `web/resources-tools/scipy.md`, replace the entire "### 稀疏矩阵（大规模轨道网络）" section (lines 145-161) with:

```markdown
### 稀疏矩阵（空间物体接近分析）

```python
import numpy as np
from scipy.sparse import csr_matrix
from scipy.spatial.distance import cdist

# 模拟 1000 个空间物体的位置（km）
np.random.seed(42)
positions = np.random.randn(1000, 3) * 400000  # 近地轨道尺度

# 计算两两距离，仅保留 < 100 km 的接近对（稀疏）
threshold = 100.0
dists = cdist(positions, positions)
row, col = np.where((dists < threshold) & (dists > 0))
data = dists[row, col]

# 构建稀疏距离矩阵（1000×1000 中仅少量非零元素）
sparse_dist = csr_matrix((data, (row, col)), shape=(1000, 1000))
density = sparse_dist.nnz / (1000 * 1000)

print(f"空间物体数: {1000}")
print(f"接近对数: {sparse_dist.nnz}")
print(f"矩阵密度: {density:.4%}（稀疏存储节省 {1 - density:.2%} 内存）")
```
```

- [ ] **Step 2: Replace English sparse matrix example**

In `web/en/resources-tools/scipy.md`, replace the entire "### Sparse Matrices (Large-Scale Orbit Networks)" section (lines 145-161) with:

```markdown
### Sparse Matrices (Space Object Proximity Analysis)

```python
import numpy as np
from scipy.sparse import csr_matrix
from scipy.spatial.distance import cdist

# Simulate positions of 1000 space objects (km)
np.random.seed(42)
positions = np.random.randn(1000, 3) * 400000  # LEO-scale

# Compute pairwise distances, keep only close-approach pairs (< 100 km)
threshold = 100.0
dists = cdist(positions, positions)
row, col = np.where((dists < threshold) & (dists > 0))
data = dists[row, col]

# Build sparse distance matrix (1000×1000 with few non-zero elements)
sparse_dist = csr_matrix((data, (row, col)), shape=(1000, 1000))
density = sparse_dist.nnz / (1000 * 1000)

print(f"Space objects: {1000}")
print(f"Close-approach pairs: {sparse_dist.nnz}")
print(f"Matrix density: {density:.4%} (sparse saves {1 - density:.2%} memory)")
```
```

- [ ] **Step 3: Commit**

```bash
git add web/resources-tools/scipy.md web/en/resources-tools/scipy.md
git commit -m "docs: replace generic sparse matrix example with space object proximity analysis"
```

---

### Task 7: Verify Build

**Files:**
- None (verification only)

- [ ] **Step 1: Run build**

```bash
cd web && npm run docs:build
```

Expected: Build completes without errors.

- [ ] **Step 2: Spot-check rendered output**

Open `web/.vuepress/dist/resources-tools/scipy/index.html` and verify:
- Table renders correctly (no formatting issues)
- All code blocks are properly formatted
- No broken links in the Resources section

- [ ] **Step 3: Final commit if any issues found**

If build or rendering issues are found, fix and commit.
