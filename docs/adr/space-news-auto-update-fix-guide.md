# Space News 自动更新服务修复指南

## 问题总结

经过诊断，发现之前的自动更新服务存在以下问题：

1. **❌ API 密钥未配置** - 所有 API Keys 都被注释掉了
2. **❌ SSH 密钥位置错误** - 密钥在 `/home/ouyangjiahong/thinkstation.pem`，但脚本期望在 `~/.ssh/`
3. **❌ Hermes Gateway 未运行** - 没有启动 cron 调度器
4. **❌ Cron 任务不存在** - 之前的任务已被删除
5. **⚠️ 模型配置错误** - 脚本使用 MiniMax，应该使用 Xiaomi MIMO

## 修复方案

### 方案 1：一键修复（推荐）

使用自动修复脚本完成所有配置：

```bash
cd /home/ouyangjiahong/codes/cislunarspace
bash scripts/fix-space-news-auto-update.sh
```

脚本将自动：
- ✅ 移动 SSH 密钥到正确位置
- ✅ 验证 API 配置
- ✅ 更新脚本配置（切换到 MIMO）
- ✅ 创建日志目录
- ✅ 启动 Hermes Gateway
- ✅ 创建 Cron 任务

### 方案 2：手动修复（逐步执行）

如果需要逐步执行，请按以下步骤操作：

#### 步骤 1：修复 SSH 密钥

```bash
# 移动密钥到标准位置
mv /home/ouyangjiahong/thinkstation.pem ~/.ssh/thinkstation.pem
chmod 600 ~/.ssh/thinkstation.pem

# 测试连接
ssh -i ~/.ssh/thinkstation.pem -o ConnectTimeout=10 ubuntu@106.54.4.220 "echo 'SSH OK'"
```

#### 步骤 2：验证 API 配置

```bash
# 检查配置文件
cat ~/.hermes/.env | grep XIAOMI_API_KEY

# 测试 API 连接
curl -s -X POST "https://token-plan-cn.xiaomimimo.com/anthropic/v1/messages" \
  -H "Content-Type: application/json" \
  -H "x-api-key: tp-ctaabhnrj88tl0bw0p3a0orjfadgkcdqsmhnjpki6nov13so" \
  -H "anthropic-version: 2023-06-01" \
  -d '{
    "model": "mimo-v2.5-pro",
    "max_tokens": 10,
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

#### 步骤 3：更新脚本配置

```bash
cd /home/ouyangjiahong/codes/cislunarspace

# 备份原脚本
cp scripts/space-news-update-phase1-hermes.py scripts/space-news-update-phase1-hermes.py.bak

# 更新配置
sed -i 's/HERMES_PROVIDER = "minimax-cn"/HERMES_PROVIDER = "xiaomi"/' scripts/space-news-update-phase1-hermes.py
sed -i 's/HERMES_MODEL = "MiniMax-M3"/HERMES_MODEL = "mimo-v2.5-pro"/' scripts/space-news-update-phase1-hermes.py

# 验证修改
grep "HERMES_PROVIDER\|HERMES_MODEL" scripts/space-news-update-phase1-hermes.py
```

#### 步骤 4：启动 Hermes Gateway

```bash
# 安装 Gateway 服务
hermes gateway install

# 启动服务
hermes gateway start

# 验证状态
hermes gateway status
```

#### 步骤 5：创建 Cron 任务

```bash
# 创建每小时执行的 cron 任务
hermes cron create \
  --name "space-news-hourly" \
  --no-agent \
  --script "/home/ouyangjiahong/codes/cislunarspace/scripts/space-news-update-local.sh" \
  --workdir "/home/ouyangjiahong/codes/cislunarspace" \
  "0 * * * *"

# 验证任务
hermes cron list
```

## 验证修复

### 测试 SSH 连接

```bash
ssh -i ~/.ssh/thinkstation.pem ubuntu@106.54.4.220 "ls -la /home/ubuntu/"
```

### 测试 API 调用

```bash
cd /home/ouyangjiahong/codes/cislunarspace
hermes chat -q "Hello, are you working?" --provider xiaomi -m mimo-v2.5-pro --max-turns 1
```

### 手动运行完整流程

```bash
bash scripts/space-news-update-local.sh
```

### 查看日志

```bash
tail -f logs/space-news-update.log
```

## 预期效果

修复后，系统将实现：

- ✅ **每小时自动执行**：整点触发
- ✅ **9 query 并行搜索**：4 CN + 5 INTL
- ✅ **MIMO LLM 筛选**：智能筛选有价值的新闻
- ✅ **自动写稿**：中英双语稿件
- ✅ **自动构建**：并行构建（4 shards）
- ✅ **自动部署**：rsync 推送到生产服务器
- ✅ **完整日志**：所有操作记录在日志文件中

## 故障排查

### 问题：Gateway 未运行

```bash
# 查看 Gateway 状态
hermes gateway status

# 查看 Gateway 日志
hermes gateway logs

# 重启 Gateway
hermes gateway restart
```

### 问题：Cron 任务未执行

```bash
# 查看任务列表
hermes cron list

# 手动触发任务
hermes cron run space-news-hourly

# 查看任务历史
hermes cron runs
```

### 问题：API 调用失败

```bash
# 检查 API Key
cat ~/.hermes/.env | grep XIAOMI_API_KEY

# 测试 API 连接
curl -s -X POST "https://token-plan-cn.xiaomimimo.com/anthropic/v1/messages" \
  -H "Content-Type: application/json" \
  -H "x-api-key: <YOUR_API_KEY>" \
  -H "anthropic-version: 2023-06-01" \
  -d '{
    "model": "mimo-v2.5-pro",
    "max_tokens": 10,
    "messages": [{"role": "user", "content": "test"}]
  }'
```

### 问题：SSH 连接失败

```bash
# 检查密钥权限
ls -la ~/.ssh/thinkstation.pem

# 应该显示：-rw------- 1 ouyangjiahong ouyangjiahong ... thinkstation.pem

# 测试连接
ssh -i ~/.ssh/thinkstation.pem -o ConnectTimeout=10 ubuntu@106.54.4.220 "echo OK"

# 如果失败，检查服务器防火墙
ssh -i ~/.ssh/thinkstation.pem ubuntu@106.54.4.220 "sudo ufw status"
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

4. **查看 Cron 执行历史**：
   ```bash
   hermes cron runs
   ```

## 回滚方案

如果需要回滚到 MiniMax：

```bash
# 恢复备份
cp scripts/space-news-update-phase1-hermes.py.bak scripts/space-news-update-phase1-hermes.py

# 验证配置
grep "HERMES_PROVIDER\|HERMES_MODEL" scripts/space-news-update-phase1-hermes.py
```

## 配置文件说明

- `scripts/space-news-config.sh` - 集中管理所有配置
- `scripts/space-news-update-local.sh` - 主更新脚本
- `scripts/space-news-update-phase1-hermes.py` - Phase 1 搜索和写稿
- `scripts/fix-space-news-auto-update.sh` - 一键修复脚本
- `~/.hermes/.env` - Hermes API 配置
- `~/.ssh/thinkstation.pem` - SSH 密钥

## 相关文档

- `docs/adr/space-news-auto-update-design.md` - 设计文档
- `docs/adr/space-news-auto-update-diagnosis.md` - 诊断报告
- `scripts/space-news-publish/CRON.md` - Cron 执行流程
- `scripts/space-news-publish/SKILL.md` - 完整工作流程

---

**修复时间**：2026-07-26
**维护者**：Claude Code
**版本**：v1.0
