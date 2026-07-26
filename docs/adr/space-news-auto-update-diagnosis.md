# Space News 自动更新诊断报告

## 问题总结

经过检查，发现之前的自动更新服务存在以下问题：

### 1. **API 密钥未配置** ❌
**现状**：`~/.hermes/.env` 中所有 API 密钥都被注释或使用占位符
```bash
# MINIMAX_API_KEY=your_minimax_api_key_here
# DEEPSEEK_API_KEY=your_deepseek_api_key_here
```

**影响**：Hermes 无法调用 MIMO/DeepSeek API，导致搜索和写稿失败

### 2. **SSH 密钥位置错误** ❌
**现状**：
- 脚本期望：`~/.ssh/thinkstation.pem`（不存在）
- 实际位置：`/home/ouyangjiahong/thinkstation.pem`

**影响**：rsync 部署阶段失败，无法将构建产物推送到服务器

### 3. **Hermes Gateway 未运行** ❌
**现状**：Gateway 服务未启动
```
✗ Gateway is not running — cron jobs will NOT fire
```

**影响**：即使创建了 cron 任务，也不会自动执行

### 4. **Cron 任务不存在** ❌
**现状**：`hermes cron list` 显示没有任务
```
No scheduled jobs.
```

**历史记录**：Git 提交 `cd332ad1` 显示之前创建过任务 `88b1c60e7584`，但已被删除

## 问题根源

根据 Git 历史分析：
- **提交 `cd332ad1`**（2026-06-02）：添加了自动更新脚本和 cron 任务
- **问题**：任务 `88b1c60e7584` 替换了旧任务 `f72a7e645135`
- **结果**：旧任务运行了 903 次但没有推送 dist，新任务可能因配置问题未生效

## 修复方案

### 阶段 1：环境配置（5 分钟）

#### 1.1 移动 SSH 密钥
```bash
# 移动到标准位置
mv /home/ouyangjiahong/thinkstation.pem ~/.ssh/thinkstation.pem
chmod 600 ~/.ssh/thinkstation.pem

# 测试连接
ssh -i ~/.ssh/thinkstation.pem -o ConnectTimeout=10 ubuntu@106.54.4.220 "echo 'SSH OK'"
```

#### 1.2 配置 API 密钥
```bash
# 编辑 Hermes 环境变量
vim ~/.hermes/.env

# 添加以下配置（根据你的实际 API Key）：
MINIMAX_API_KEY=your_actual_minimax_key
DEEPSEEK_API_KEY=your_actual_deepseek_key
```

### 阶段 2：启动 Gateway（2 分钟）

#### 2.1 安装 Gateway 服务
```bash
# 安装为用户服务（推荐）
hermes gateway install

# 或者前台运行测试
hermes gateway run
```

#### 2.2 验证 Gateway 状态
```bash
# 检查状态
hermes gateway status

# 查看日志
hermes gateway logs
```

### 阶段 3：创建 Cron 任务（3 分钟）

#### 3.1 创建每小时任务
```bash
hermes cron create \
  --name "space-news-hourly" \
  --no-agent \
  --script "/home/ouyangjiahong/codes/cislunarspace/scripts/space-news-update-local.sh" \
  --workdir "/home/ouyangjiahong/codes/cislunarspace" \
  "0 * * * *"
```

#### 3.2 验证任务配置
```bash
# 查看任务列表
hermes cron list

# 手动测试执行
hermes cron run space-news-hourly
```

### 阶段 4：测试验证（5 分钟）

#### 4.1 测试 SSH 连接
```bash
ssh -i ~/.ssh/thinkstation.pem ubuntu@106.54.4.220 "ls -la /home/ubuntu/"
```

#### 4.2 测试 API 调用
```bash
hermes chat -q "Hello, are you working?" \
  --provider minimax-cn -m MiniMax-M3 --max-turns 1
```

#### 4.3 手动运行完整流程
```bash
bash /home/ouyangjiahong/codes/cislunarspace/scripts/space-news-update-local.sh
```

## 预期效果

修复后，系统将实现：

1. ✅ **每小时自动搜索**：9 条查询并行执行
2. ✅ **智能筛选**：MIMO LLM 筛选有价值的新闻
3. ✅ **自动写稿**：中英双语稿件自动生成
4. ✅ **构建部署**：自动构建并推送到生产服务器
5. ✅ **完整日志**：所有操作记录在日志文件中

## 快速修复命令汇总

```bash
# 1. 移动 SSH 密钥
mv /home/ouyangjiahong/thinkstation.pem ~/.ssh/thinkstation.pem
chmod 600 ~/.ssh/thinkstation.pem

# 2. 配置 API（需要手动编辑）
vim ~/.hermes/.env

# 3. 启动 Gateway
hermes gateway install
hermes gateway start

# 4. 创建 Cron 任务
hermes cron create \
  --name "space-news-hourly" \
  --no-agent \
  --script "/home/ouyangjiahong/codes/cislunarspace/scripts/space-news-update-local.sh" \
  --workdir "/home/ouyangjiahong/codes/cislunarspace" \
  "0 * * * *"

# 5. 测试执行
hermes cron run space-news-hourly
```

## 监控建议

1. **定期检查日志**：
   ```bash
   tail -f logs/space-news-update.log
   ```

2. **监控 Gateway 状态**：
   ```bash
   hermes gateway status
   ```

3. **检查文章更新**：
   ```bash
   find web/space-news -name "*.md" -mtime -1 | wc -l
   ```

---

**诊断时间**：2026-07-26
**诊断工具**：Claude Code
**状态**：待修复
