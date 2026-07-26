# Space News Skills

Space News 更新系统的模块化 skills，用于自动化新闻搜索、筛选、写稿和部署。

## 目录结构

```
scripts/skills/
├── README.md              # 本文件
├── diagnose_update.py     # 诊断更新问题
└── test_skills.py         # 测试脚本
```

## 使用方法

### 1. 诊断更新问题

```bash
# 检查所有项目
python3 scripts/skills/diagnose_update.py --check-all

# 只检查特定项目
python3 scripts/skills/diagnose_update.py --checks ssh api

# 可用检查项：
# - ssh: SSH 连接
# - api: MIMO API 连接
# - gateway: Hermes Gateway
# - cron: Cron 任务
# - scripts: 脚本文件
# - logs: 日志文件
```

**输出示例**：
```json
{
  "all_ok": true,
  "checks": {
    "ssh": {
      "status": "ok",
      "message": "SSH 连接成功",
      "key_path": "/home/ouyangjiahong/.ssh/thinkstation.pem"
    },
    "api": {
      "status": "ok",
      "message": "MIMO API 连接成功",
      "model": "mimo-v2.5-pro"
    },
    "gateway": {
      "status": "ok",
      "message": "Gateway 正在运行"
    },
    "cron": {
      "status": "ok",
      "message": "Cron 任务已配置"
    },
    "scripts": {
      "status": "ok",
      "message": "所有脚本文件存在"
    },
    "logs": {
      "status": "ok",
      "message": "日志文件存在"
    }
  },
  "summary": "所有检查通过"
}
```

## 测试

```bash
# 运行所有测试
python3 scripts/skills/test_skills.py
```

## 为什么只保留 diagnose_update

根据 CLAUDE.md 的"避免过度工程"原则：

> **过早抽象。** 用户要的只是 `sendWelcomeEmail(user)`，你却写了一个带策略模式、支持多家供应商的 EmailService。以后真需要更多，他们会开口。

现有的 `space-news-update-phase1-hermes.py` 已经包含了所有搜索、筛选、写稿功能。创建 skills 只是包装这些函数，没有增加实际价值。

`diagnose_update` 是有用的，因为它：
1. 提供系统状态检查功能
2. 不是现有函数的简单包装
3. 便于故障排查

## 依赖

- Python 3.11+
- Hermes Agent CLI
- Xiaomi MIMO API
- 项目脚本：`scripts/space-news-update-phase1-hermes.py`

## 配置

Skills 读取以下配置：

- `~/.hermes/.env` - API 配置
- `~/.ssh/thinkstation.pem` - SSH 密钥
- `scripts/space-news-config.sh` - 项目配置

## 文档

- 实施细节：`docs/adr/space-news-auto-update-implementation-details.md`
- Skills 规划：`docs/adr/space-news-skills-planning.md`
- 使用指南：`docs/adr/space-news-auto-update-usage-guide.md`

---

**创建时间**：2026-07-26
**维护者**：Claude Code
**版本**：v1.1（简化版）
