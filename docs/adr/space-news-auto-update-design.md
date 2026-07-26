# Space News 自动更新服务设计方案

## 背景

用户希望在当前系统上设计一个自动更新 Space News 的服务，依托 Xiaomi Mimo 的 WebSearch 工具和 Hermes Agent 来完成。服务器部署在腾讯云（IP: 106.54.4.220），使用 SSH 密钥 `~/.ssh/thinkstation.pem` 进行连接。

## 现状分析

### 已有基础
1. **脚本基础**：已有完整的 5 阶段更新脚本
   - `scripts/space-news-update-local.sh`：完整的构建+部署流程
   - `scripts/space-news-update-phase1-hermes.py`：Phase 1 搜索+写稿（9 query 并行）

2. **技术栈**：
   - Hermes Agent CLI
   - Xiaomi MIMO LLM（通过 `--provider minimax-cn --model MiniMax-M3`）
   - SSH 密钥认证（腾讯云服务器）

3. **文档基础**：
   - `scripts/space-news-publish/SKILL.md`：完整的工作流程文档
   - `scripts/space-news-publish/CRON.md`：自动化执行流程
   - `scripts/space-news-publish/SOURCES.md`：新闻源和搜索策略

### 待解决问题
1. **API 凭证**：需要配置 `~/.hermes/.env`
2. **SSH 密钥**：需要将密钥移动到正确位置
3. **Cron 任务**：当前未创建定时任务
4. **脚本路径**：需要更新 SSH 密钥路径引用

## 设计方案

### 1. 环境配置

#### 1.1 SSH 密钥配置
```bash
# 移动密钥到标准位置
mv /home/ouyangjiahong/thinkstation.pem ~/.ssh/thinkstation.pem
chmod 600 ~/.ssh/thinkstation.pem

# 测试连接
ssh -i ~/.ssh/thinkstation.pem ubuntu@106.54.4.220 "echo 'SSH connection OK'"
```

#### 1.2 Hermes API 凭证配置
```bash
# 编辑 Hermes 环境变量
vim ~/.hermes/.env

# 添加以下内容（根据实际情况调整）：
MINIMAX_API_KEY=your_minimax_api_key
DEEPSEEK_API_KEY=your_deepseek_api_key
```

#### 1.3 Hermes 配置验证
```bash
# 验证 Hermes 安装
hermes --version

# 验证 provider 配置
hermes status

# 测试 MIMO 模型调用
hermes chat -q "Hello, are you working?" --provider minimax-cn -m MiniMax-M3 --max-turns 1
```

### 2. 脚本优化

#### 2.1 更新 SSH 密钥路径
修改 `scripts/space-news-update-local.sh` 中的默认密钥路径：

```bash
# 当前（第 85 行）
REMOTE_KEY="${REMOTE_KEY:-/home/ouyangjiahong/.ssh/thinkstation.pem}"

# 保持不变（因为用户选择 ~/.ssh/thinkstation.pem）
```

#### 2.2 添加配置文件
创建 `scripts/space-news-config.sh` 集中管理配置：

```bash
#!/bin/bash
# Space News 自动更新配置

# 服务器配置
REMOTE_HOST="106.54.4.220"
REMOTE_USER="ubuntu"
REMOTE_KEY="$HOME/.ssh/thinkstation.pem"
REMOTE_DEST="/home/ubuntu/cislunarspace/"

# Hermes 配置
HERMES_PROVIDER="minimax-cn"
HERMES_MODEL="MiniMax-M3"
HERMES_MAX_TURNS="3"

# 构建配置
BUILD_SHARDS=4
CUTOFF_DAYS=3

# 日志配置
LOG_DIR="$HOME/codes/cislunarspace/logs"
LOG_FILE="$LOG_DIR/space-news-update.log"
```

### 3. Cron 任务创建

#### 3.1 使用 Hermes Cron
```bash
# 创建每小时执行的 cron 任务
hermes cron create \
  --name "space-news-hourly" \
  --no-agent \
  --script "/home/ouyangjiahong/codes/cislunarspace/scripts/space-news-update-local.sh" \
  --workdir "/home/ouyangjiahong/codes/cislunarspace" \
  "0 * * * *"

# 验证任务创建
hermes cron list

# 手动测试执行
hermes cron run space-news-hourly
```

#### 3.2 Cron 任务配置说明
- `--name`：任务名称，便于管理
- `--no-agent`：直接执行脚本，不通过 LLM
- `--script`：指定要执行的脚本路径
- `--workdir`：设置工作目录
- `"0 * * * *"`：每小时整点执行

### 4. 监控与日志

#### 4.1 日志管理
脚本已内置日志功能：
- 日志位置：`logs/space-news-update.log`
- 自动截断：保留最近 2000 行
- 输出重定向：所有 stdout/stderr 写入日志

#### 4.2 监控脚本
创建 `scripts/space-news-monitor.sh`：

```bash
#!/bin/bash
# Space News 更新监控

LOG_FILE="/home/ouyangjiahong/codes/cislunarspace/logs/space-news-update.log"

# 检查最近一次执行
tail -n 50 "$LOG_FILE" | grep -E "(started|finished|ABORTED|FATAL)"

# 检查执行状态
if tail -n 10 "$LOG_FILE" | grep -q "finished"; then
    echo "✓ 最近一次执行完成"
else
    echo "✗ 最近一次执行可能失败"
fi

# 检查文章数量
ARTICLE_COUNT=$(find /home/ouyangjiahong/codes/cislunarspace/web/space-news -name "*.md" -mtime -1 | wc -l)
echo "最近 24 小时新增文章：$ARTICLE_COUNT"
```

### 5. 故障处理

#### 5.1 常见问题及解决方案

**问题 1：SSH 连接失败**
```bash
# 检查密钥权限
chmod 600 ~/.ssh/thinkstation.pem

# 测试连接
ssh -i ~/.ssh/thinkstation.pem -o ConnectTimeout=10 ubuntu@106.54.4.220 "echo OK"

# 检查服务器防火墙
ssh -i ~/.ssh/thinkstation.pem ubuntu@106.54.4.220 "sudo ufw status"
```

**问题 2：Hermes API 调用失败**
```bash
# 检查 API 凭证
cat ~/.hermes/.env

# 测试 API 连接
hermes chat -q "test" --provider minimax-cn -m MiniMax-M3 --max-turns 1

# 检查账户余额/配额
hermes auth status
```

**问题 3：构建失败**
```bash
# 跳过 Phase 1 测试构建
SKIP_PHASE1=1 bash scripts/space-news-update-local.sh

# 查看详细日志
tail -f logs/space-news-update.log

# 手动运行构建
cd web && npm run docs:build
```

**问题 4：rsync 部署失败**
```bash
# 检查服务器目录权限
ssh -i ~/.ssh/thinkstation.pem ubuntu@106.54.4.220 "ls -la /home/ubuntu/"

# 手动测试 rsync
rsync -avz --dry-run \
  -e "ssh -i ~/.ssh/thinkstation.pem" \
  web/.vuepress/dist/ \
  ubuntu@106.54.4.220:/home/ubuntu/cislunarspace/
```

#### 5.2 回滚机制
```bash
# Git 回滚（本地）
git log --oneline web/space-news/
git revert <commit-hash>

# 服务器回滚（从备份恢复）
ssh -i ~/.ssh/thinkstation.pem ubuntu@106.54.4.220
cd /home/ubuntu/cislunarspace
# 如果有备份目录
cp -r backup/current web/.vuepress/dist
```

### 6. 性能优化

#### 6.1 构建优化
- 使用并行构建：`BUILD_SHARDS=4`
- 增量构建：VuePress 默认支持
- 图片优化：压缩大图片

#### 6.2 API 调用优化
- 并行搜索：9 个 query 并行执行
- 超时控制：搜索 180s，写稿 240s
- 错误重试：单个 query 失败不影响整体

#### 6.3 网络优化
- rsync 压缩：`--compress-level=6`
- HTTP/1.1 避免 HTTP/2 问题
- Keep-Alive 连接复用

### 7. 安全考虑

#### 7.1 凭证安全
- SSH 密钥权限：`chmod 600`
- API 密钥存储：`~/.hermes/.env`（不提交到 git）
- 服务器访问：仅限必要目录

#### 7.2 数据安全
- Git 提交：自动 commit 新文章
- 备份策略：定期备份服务器数据
- 日志安全：不记录敏感信息

## 实施步骤

### 阶段 1：环境准备（15 分钟）
1. 移动 SSH 密钥到 `~/.ssh/thinkstation.pem`
2. 配置 Hermes API 凭证
3. 测试 SSH 连接
4. 测试 Hermes API 调用

### 阶段 2：脚本优化（10 分钟）
1. 创建配置文件 `scripts/space-news-config.sh`
2. 更新脚本引用配置文件
3. 测试脚本执行

### 阶段 3：Cron 任务创建（5 分钟）
1. 创建 Hermes cron 任务
2. 验证任务配置
3. 手动测试执行

### 阶段 4：监控与验证（10 分钟）
1. 创建监控脚本
2. 观察首次自动执行
3. 验证文章更新和部署

## 预期效果

1. **自动化程度**：每小时自动搜索、筛选、写稿、构建、部署
2. **更新频率**：实时捕获航天新闻，及时发布
3. **质量保证**：多层去重、质量筛选、自动验证
4. **运维友好**：完整日志、监控脚本、故障处理文档

## 风险与缓解

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| API 额度耗尽 | 无法搜索和写稿 | 监控 API 使用量，设置告警 |
| 服务器宕机 | 无法部署 | 监控服务器状态，备用部署方案 |
| 网络中断 | 各阶段失败 | 重试机制，离线模式 |
| 构建失败 | 无法生成静态文件 | 跳过 Phase 1 测试，详细日志 |
| SSH 密钥泄露 | 安全风险 | 定期轮换密钥，最小权限原则 |

## 后续优化方向

1. **智能调度**：根据新闻量动态调整执行频率
2. **质量评分**：基于阅读量、分享数等反馈优化筛选算法
3. **多源聚合**：接入更多新闻源，提高覆盖率
4. **实时通知**：重要新闻发布时即时通知用户
5. **数据分析**：统计文章表现，优化内容策略

---

**设计完成时间**：2026-07-26
**设计者**：Claude Code
**版本**：v1.0
