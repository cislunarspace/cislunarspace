#!/bin/bash
# Space News 自动更新服务测试脚本
# 验证所有组件是否正常工作

set -e

echo "========================================="
echo "Space News 自动更新服务测试"
echo "========================================="
echo ""

# ============================================================================
# 测试 1：SSH 连接
# ============================================================================
echo "[测试 1] SSH 连接测试..."
echo "-----------------------------------------"

if ssh -i ~/.ssh/thinkstation.pem -o ConnectTimeout=10 ubuntu@106.54.4.220 "echo 'SSH 连接成功'" 2>/dev/null; then
    echo "✓ SSH 连接正常"
else
    echo "✗ SSH 连接失败"
    exit 1
fi

# ============================================================================
# 测试 2：MIMO API 连接
# ============================================================================
echo ""
echo "[测试 2] MIMO API 连接测试..."
echo "-----------------------------------------"

MIMO_KEY=$(grep "^XIAOMI_API_KEY=" ~/.hermes/.env | cut -d'=' -f2)
if [ -z "$MIMO_KEY" ]; then
    echo "✗ 未找到 MIMO API Key"
    exit 1
fi

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
    echo "✓ MIMO API 连接正常"
else
    echo "✗ MIMO API 连接失败"
    echo "$MIMO_TEST"
    exit 1
fi

# ============================================================================
# 测试 3：Gateway 状态
# ============================================================================
echo ""
echo "[测试 3] Hermes Gateway 状态..."
echo "-----------------------------------------"

if hermes gateway status 2>&1 | grep -q "active (running)"; then
    echo "✓ Gateway 正在运行"
else
    echo "✗ Gateway 未运行"
    echo "请运行：hermes gateway start"
    exit 1
fi

# ============================================================================
# 测试 4：Cron 任务
# ============================================================================
echo ""
echo "[测试 4] Cron 任务状态..."
echo "-----------------------------------------"

if hermes cron list 2>&1 | grep -q "space-news-hourly"; then
    echo "✓ Cron 任务已配置"
else
    echo "✗ Cron 任务未找到"
    exit 1
fi

# ============================================================================
# 测试 5：脚本配置
# ============================================================================
echo ""
echo "[测试 5] 脚本配置验证..."
echo "-----------------------------------------"

if grep -q 'HERMES_PROVIDER = "xiaomi"' scripts/space-news-update-phase1-hermes.py; then
    echo "✓ Provider 已配置为 Xiaomi"
else
    echo "✗ Provider 配置错误"
    exit 1
fi

if grep -q 'HERMES_MODEL = "mimo-v2.5-pro"' scripts/space-news-update-phase1-hermes.py; then
    echo "✓ Model 已配置为 mimo-v2.5-pro"
else
    echo "✗ Model 配置错误"
    exit 1
fi

# ============================================================================
# 测试 6：日志目录
# ============================================================================
echo ""
echo "[测试 6] 日志目录..."
echo "-----------------------------------------"

if [ -d "logs" ]; then
    echo "✓ 日志目录存在: $(pwd)/logs"
else
    echo "✗ 日志目录不存在"
    exit 1
fi

# ============================================================================
# 测试 7：手动执行测试（可选）
# ============================================================================
echo ""
echo "[测试 7] 手动执行测试（跳过）..."
echo "-----------------------------------------"

echo "跳过手动执行测试（耗时较长）"
echo "如需测试，请运行："
echo "  bash scripts/space-news-update-local.sh"

# ============================================================================
# 完成
# ============================================================================
echo ""
echo "========================================="
echo "✓ 所有测试通过！"
echo "========================================="
echo ""
echo "自动更新服务已配置完成："
echo ""
echo "  - SSH 连接：正常"
echo "  - MIMO API：正常"
echo "  - Gateway：运行中"
echo "  - Cron 任务：已配置（每小时整点执行）"
echo "  - 脚本配置：已切换到 Xiaomi MIMO"
echo ""
echo "下一步："
echo ""
echo "1. 等待下次整点执行（16:00）"
echo "2. 或手动测试：bash scripts/space-news-update-local.sh"
echo "3. 查看日志：tail -f logs/space-news-update.log"
echo "4. 查看 Cron 执行历史：hermes cron runs"
echo ""
