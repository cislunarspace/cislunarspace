#!/bin/bash
# Space News 自动更新服务一键修复脚本
# 修复所有已知问题：SSH密钥、API配置、Gateway、Cron任务

set -e  # 遇到错误立即退出

echo "========================================="
echo "Space News 自动更新服务修复脚本"
echo "========================================="
echo ""

# ============================================================================
# 1. 修复 SSH 密钥
# ============================================================================
echo "[1/6] 修复 SSH 密钥..."
echo "-----------------------------------------"

# 检查源文件
if [ -f "/home/ouyangjiahong/thinkstation.pem" ]; then
    # 创建 ~/.ssh 目录（如果不存在）
    mkdir -p ~/.ssh
    chmod 700 ~/.ssh

    # 移动密钥
    mv /home/ouyangjiahong/thinkstation.pem ~/.ssh/thinkstation.pem
    chmod 600 ~/.ssh/thinkstation.pem

    echo "✓ SSH 密钥已移动到 ~/.ssh/thinkstation.pem"
else
    if [ -f "$HOME/.ssh/thinkstation.pem" ]; then
        echo "✓ SSH 密钥已存在"
    else
        echo "✗ 错误：找不到 SSH 密钥文件"
        exit 1
    fi
fi

# 测试连接
echo "测试 SSH 连接..."
if ssh -i ~/.ssh/thinkstation.pem -o ConnectTimeout=10 ubuntu@106.54.4.220 "echo 'SSH 连接成功'" 2>/dev/null; then
    echo "✓ SSH 连接测试成功"
else
    echo "⚠ SSH 连接测试失败（继续执行，稍后手动测试）"
fi

# ============================================================================
# 2. 验证 API 配置
# ============================================================================
echo ""
echo "[2/6] 验证 API 配置..."
echo "-----------------------------------------"

# 检查 Hermes 配置文件
if [ -f "$HOME/.hermes/.env" ]; then
    # 检查 MIMO API Key
    if grep -q "^XIAOMI_API_KEY=" "$HOME/.hermes/.env"; then
        MIMO_KEY=$(grep "^XIAOMI_API_KEY=" "$HOME/.hermes/.env" | cut -d'=' -f2)
        if [ -n "$MIMO_KEY" ] && [ "$MIMO_KEY" != "your_key_here" ]; then
            echo "✓ Xiaomi MIMO API Key 已配置"
        else
            echo "✗ 错误：Xiaomi MIMO API Key 未正确配置"
            echo "请编辑 ~/.hermes/.env，设置 XIAOMI_API_KEY"
            exit 1
        fi
    else
        echo "✗ 错误：未找到 XIAOMI_API_KEY 配置"
        exit 1
    fi
else
    echo "✗ 错误：~/.hermes/.env 文件不存在"
    exit 1
fi

# 测试 MIMO API
echo "测试 MIMO API 连接..."
MIMO_TEST=$(curl -s -X POST "https://token-plan-cn.xiaomimimo.com/anthropic/v1/messages" \
  -H "Content-Type: application/json" \
  -H "x-api-key: $MIMO_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -d '{
    "model": "mimo-v2.5-pro",
    "max_tokens": 10,
    "messages": [{"role": "user", "content": "Hello"}]
  }' 2>&1)

if echo "$MIMO_TEST" | grep -q '"id"'; then
    echo "✓ MIMO API 测试成功"
else
    echo "⚠ MIMO API 测试失败："
    echo "$MIMO_TEST"
    echo "继续执行，但需要检查 API 配置"
fi

# ============================================================================
# 3. 更新脚本配置（切换到 MIMO）
# ============================================================================
echo ""
echo "[3/6] 更新脚本配置（切换到 Xiaomi MIMO）..."
echo "-----------------------------------------"

# 备份原脚本
if [ -f "scripts/space-news-update-phase1-hermes.py" ]; then
    cp scripts/space-news-update-phase1-hermes.py scripts/space-news-update-phase1-hermes.py.bak
    echo "✓ 已备份原脚本"
fi

# 更新配置（使用 sed 替换）
sed -i 's/HERMES_PROVIDER = "minimax-cn"/HERMES_PROVIDER = "xiaomi"/' scripts/space-news-update-phase1-hermes.py
sed -i 's/HERMES_MODEL = "MiniMax-M3"/HERMES_MODEL = "mimo-v2.5-pro"/' scripts/space-news-update-phase1-hermes.py

echo "✓ 已切换到 Xiaomi MIMO"

# ============================================================================
# 4. 创建日志目录
# ============================================================================
echo ""
echo "[4/6] 创建日志目录..."
echo "-----------------------------------------"

mkdir -p logs
echo "✓ 日志目录已创建: $(pwd)/logs"

# ============================================================================
# 5. 启动 Hermes Gateway
# ============================================================================
echo ""
echo "[5/6] 启动 Hermes Gateway..."
echo "-----------------------------------------"

# 检查 Gateway 状态
GATEWAY_STATUS=$(hermes gateway status 2>&1)
if echo "$GATEWAY_STATUS" | grep -q "Gateway is running"; then
    echo "✓ Gateway 已在运行"
else
    echo "启动 Gateway..."
    # 安装为用户服务
    hermes gateway install 2>&1 || true

    # 启动服务
    hermes gateway start 2>&1 || true

    # 等待启动
    sleep 3

    # 验证状态
    if hermes gateway status 2>&1 | grep -q "Gateway is running"; then
        echo "✓ Gateway 启动成功"
    else
        echo "⚠ Gateway 启动失败（继续执行，稍后手动启动）"
    fi
fi

# ============================================================================
# 6. 创建 Cron 任务
# ============================================================================
echo ""
echo "[6/6] 创建 Cron 任务..."
echo "-----------------------------------------"

# 检查是否已存在任务
if hermes cron list 2>&1 | grep -q "space-news-hourly"; then
    echo "✓ Cron 任务已存在"
else
    echo "创建 Cron 任务..."
    hermes cron create \
      --name "space-news-hourly" \
      --no-agent \
      --script "$(pwd)/scripts/space-news-update-local.sh" \
      --workdir "$(pwd)" \
      "0 * * * *"

    if hermes cron list 2>&1 | grep -q "space-news-hourly"; then
        echo "✓ Cron 任务创建成功"
    else
        echo "✗ Cron 任务创建失败"
        exit 1
    fi
fi

# ============================================================================
# 完成
# ============================================================================
echo ""
echo "========================================="
echo "✓ 修复完成！"
echo "========================================="
echo ""
echo "下一步操作："
echo ""
echo "1. 测试 SSH 连接："
echo "   ssh -i ~/.ssh/thinkstation.pem ubuntu@106.54.4.220 'ls -la'"
echo ""
echo "2. 手动测试自动更新："
echo "   bash scripts/space-news-update-local.sh"
echo ""
echo "3. 查看 Cron 任务："
echo "   hermes cron list"
echo ""
echo "4. 查看 Gateway 状态："
echo "   hermes gateway status"
echo ""
echo "5. 查看日志："
echo "   tail -f logs/space-news-update.log"
echo ""
