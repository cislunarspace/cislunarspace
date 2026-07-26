# Space News 自动更新服务 - 使用指南

## 服务状态

✅ **已配置完成，等待下次执行**

- **当前时间**：2026-07-26 15:11
- **下次执行**：2026-07-26 16:00（整点）
- **执行频率**：每小时整点执行
- **任务ID**：774fca8f9fae

## 快速开始

### 查看服务状态

```bash
# 查看 Cron 任务
hermes cron list

# 查看 Gateway 状态
hermes gateway status

# 查看执行历史
hermes cron runs
```

### 手动测试

```bash
# 完整测试（验证所有组件）
bash scripts/test-space-news-auto-update.sh

# 手动运行自动更新
bash scripts/space-news-update-local.sh

# 跳过 Phase 1（只测试构建和部署）
SKIP_PHASE1=1 bash scripts/space-news-update-local.sh

# 只测试构建（不部署）
SKIP_DEPLOY=1 bash scripts/space-news-update-local.sh
```

### 查看日志

```bash
# 实时查看日志
tail -f logs/space-news-update.log

# 查看最近 100 行
tail -n 100 logs/space-news-update.log

# 查看最近一次执行
grep "started\|finished\|ABORTED" logs/space-news-update.log | tail -5
```

## 自动更新流程

每小时整点自动执行以下流程：

### Phase 1：搜索和写稿（约 10-15 分钟）
- 9 query 并行搜索（4 CN + 5 INTL）
- MIMO LLM 智能筛选有价值的新闻
- 自动生成中英双语稿件
- 图片下载和 README 更新

### Phase 2：构建（约 5-10 分钟）
- 并行构建（4 shards）
- 生成静态文件
- 验证 dist 内容

### Phase 3：提交和推送（约 1-2 分钟）
- Git commit 新文章
- 推送到 GitHub

### Phase 4：部署（约 2-3 分钟）
- rsync 推送到生产服务器
- 修复文件权限

### Phase 5：完成
- 记录日志
- 截断日志文件（保留最近 2000 行）

## 配置文件说明

### 核心脚本
- `scripts/space-news-update-local.sh` - 主更新脚本
- `scripts/space-news-update-phase1-hermes.py` - Phase 1 搜索和写稿
- `scripts/space-news-config.sh` - 集中管理所有配置

### 工具脚本
- `scripts/fix-space-news-auto-update.sh` - 一键修复脚本
- `scripts/test-space-news-auto-update.sh` - 测试脚本

### 配置文件
- `~/.hermes/.env` - Hermes API 配置
- `~/.ssh/thinkstation.pem` - SSH 密钥
- `~/.hermes/scripts/space-news-update.sh` - Cron wrapper

### 文档
- `docs/adr/space-news-auto-update-design.md` - 设计文档
- `docs/adr/space-news-auto-update-diagnosis.md` - 诊断报告
- `docs/adr/space-news-auto-update-fix-guide.md` - 修复指南
- `docs/adr/space-news-auto-update-fix-summary.md` - 修复总结

## 故障排查

### 问题：Gateway 未运行

```bash
# 查看状态
hermes gateway status

# 启动 Gateway
hermes gateway start

# 查看日志
hermes gateway logs
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

# 测试连接
ssh -i ~/.ssh/thinkstation.pem -o ConnectTimeout=10 ubuntu@106.54.4.220 "echo OK"

# 如果失败，检查服务器防火墙
ssh -i ~/.ssh/thinkstation.pem ubuntu@106.54.4.220 "sudo ufw status"
```

### 问题：构建失败

```bash
# 查看详细日志
tail -n 200 logs/space-news-update.log

# 跳过 Phase 1 测试构建
SKIP_PHASE1=1 bash scripts/space-news-update-local.sh

# 手动运行构建
cd web && npm run docs:build
```

## 监控建议

### 每日检查
- 查看日志：`tail -n 50 logs/space-news-update.log`
- 检查文章数量：`find web/space-news -name "*.md" -mtime -1 | wc -l`

### 每周检查
- 查看 Cron 执行历史：`hermes cron runs`
- 检查服务器空间：`ssh -i ~/.ssh/thinkstation.pem ubuntu@106.54.4.220 "df -h"`

### 每月检查
- 验证 API 配额
- 检查日志文件大小
- 更新搜索关键词（如需要）

## 性能指标

- **执行时间**：约 15-25 分钟/次
- **API 调用**：约 20-30 次/次
- **文章产出**：约 2-5 篇/次（取决于新闻量）
- **日志大小**：约 100-200KB/次

## 安全考虑

- ✅ SSH 密钥权限 600
- ✅ API 密钥存储在 `~/.hermes/.env`（不提交到 Git）
- ✅ 服务器访问仅限必要目录
- ✅ 日志不记录敏感信息

## 后续优化

1. **智能调度**：根据新闻量动态调整执行频率
2. **质量反馈**：基于文章表现优化筛选算法
3. **多源聚合**：接入更多新闻源
4. **实时通知**：重要新闻发布时即时通知
5. **数据分析**：统计文章表现，优化内容策略

## 获取帮助

### 查看文档
- 设计文档：`docs/adr/space-news-auto-update-design.md`
- 诊断报告：`docs/adr/space-news-auto-update-diagnosis.md`
- 修复指南：`docs/adr/space-news-auto-update-fix-guide.md`
- 修复总结：`docs/adr/space-news-auto-update-fix-summary.md`

### 查看日志
```bash
tail -f logs/space-news-update.log
```

### 手动测试
```bash
bash scripts/test-space-news-auto-update.sh
```

---

**配置完成时间**：2026-07-26 15:11
**维护者**：Claude Code
**版本**：v1.0
**状态**：✅ 生产就绪
