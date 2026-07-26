#!/usr/bin/env python3
"""
Space News Skills - 诊断更新问题

用法：
    python3 scripts/skills/diagnose_update.py --check-all

输出：
    JSON 格式的诊断结果
"""

import argparse
import json
import subprocess
import sys
from pathlib import Path


def check_ssh_connection() -> dict:
    """检查 SSH 连接"""
    key_path = Path.home() / ".ssh" / "thinkstation.pem"
    if not key_path.exists():
        return {
            "status": "error",
            "message": f"SSH 密钥不存在: {key_path}",
            "suggestion": "运行: mv /home/ouyangjiahong/thinkstation.pem ~/.ssh/"
        }

    try:
        result = subprocess.run(
            ["ssh", "-i", str(key_path), "-o", "ConnectTimeout=10",
             "ubuntu@106.54.4.220", "echo 'SSH OK'"],
            capture_output=True, text=True, timeout=15
        )
        if result.returncode == 0:
            return {
                "status": "ok",
                "message": "SSH 连接成功",
                "key_path": str(key_path)
            }
        else:
            return {
                "status": "error",
                "message": f"SSH 连接失败: {result.stderr}",
                "suggestion": "检查密钥权限: chmod 600 ~/.ssh/thinkstation.pem"
            }
    except subprocess.TimeoutExpired:
        return {
            "status": "error",
            "message": "SSH 连接超时",
            "suggestion": "检查网络连接和服务器状态"
        }


def check_api_connection() -> dict:
    """检查 MIMO API 连接"""
    env_path = Path.home() / ".hermes" / ".env"
    if not env_path.exists():
        return {
            "status": "error",
            "message": "~/.hermes/.env 文件不存在",
            "suggestion": "创建配置文件并添加 XIAOMI_API_KEY"
        }

    # 读取 API Key
    api_key = None
    with open(env_path, 'r', encoding='utf-8') as f:
        for line in f:
            if line.strip().startswith('XIAOMI_API_KEY='):
                api_key = line.strip().split('=', 1)[1]
                break

    if not api_key or api_key == 'your_key_here':
        return {
            "status": "error",
            "message": "XIAOMI_API_KEY 未配置或使用占位符",
            "suggestion": "编辑 ~/.hermes/.env，设置 XIAOMI_API_KEY"
        }

    # 测试 API 调用
    try:
        result = subprocess.run(
            ["curl", "-s", "-X", "POST",
             "https://token-plan-cn.xiaomimimo.com/anthropic/v1/messages",
             "-H", "Content-Type: application/json",
             "-H", f"x-api-key: {api_key}",
             "-H", "anthropic-version: 2023-06-01",
             "-d", json.dumps({
                 "model": "mimo-v2.5-pro",
                 "max_tokens": 10,
                 "messages": [{"role": "user", "content": "Hello"}]
             })],
            capture_output=True, text=True, timeout=30
        )
        response = json.loads(result.stdout)
        if "id" in response:
            return {
                "status": "ok",
                "message": "MIMO API 连接成功",
                "model": "mimo-v2.5-pro"
            }
        else:
            return {
                "status": "error",
                "message": f"API 调用失败: {response}",
                "suggestion": "检查 API Key 是否正确"
            }
    except Exception as e:
        return {
            "status": "error",
            "message": f"API 测试失败: {e}",
            "suggestion": "检查网络连接"
        }


def check_gateway() -> dict:
    """检查 Hermes Gateway 状态"""
    try:
        result = subprocess.run(
            ["hermes", "gateway", "status"],
            capture_output=True, text=True, timeout=10
        )
        if "active (running)" in result.stdout:
            return {
                "status": "ok",
                "message": "Gateway 正在运行"
            }
        else:
            return {
                "status": "error",
                "message": "Gateway 未运行",
                "suggestion": "运行: hermes gateway start"
            }
    except Exception as e:
        return {
            "status": "error",
            "message": f"检查 Gateway 失败: {e}",
            "suggestion": "运行: hermes gateway install && hermes gateway start"
        }


def check_cron() -> dict:
    """检查 Cron 任务状态"""
    try:
        result = subprocess.run(
            ["hermes", "cron", "list"],
            capture_output=True, text=True, timeout=10
        )
        if "space-news-hourly" in result.stdout:
            return {
                "status": "ok",
                "message": "Cron 任务已配置"
            }
        else:
            return {
                "status": "error",
                "message": "Cron 任务未找到",
                "suggestion": "运行: hermes cron create --name space-news-hourly ..."
            }
    except Exception as e:
        return {
            "status": "error",
            "message": f"检查 Cron 失败: {e}",
            "suggestion": "运行: hermes cron create --name space-news-hourly ..."
        }


def check_scripts() -> dict:
    """检查脚本文件"""
    repo = Path("/home/ouyangjiahong/codes/cislunarspace")
    scripts = [
        "scripts/space-news-update-local.sh",
        "scripts/space-news-update-phase1-hermes.py",
        "scripts/space-news-config.sh"
    ]

    missing = []
    for script in scripts:
        if not (repo / script).exists():
            missing.append(script)

    if missing:
        return {
            "status": "error",
            "message": f"缺少脚本文件: {', '.join(missing)}",
            "suggestion": "从 Git 恢复或重新创建"
        }
    else:
        return {
            "status": "ok",
            "message": "所有脚本文件存在"
        }


def check_logs() -> dict:
    """检查日志目录"""
    log_dir = Path("/home/ouyangjiahong/codes/cislunarspace/logs")
    log_file = log_dir / "space-news-update.log"

    if not log_dir.exists():
        return {
            "status": "warning",
            "message": "日志目录不存在",
            "suggestion": "运行: mkdir -p logs"
        }

    if log_file.exists():
        # 读取最后几行
        try:
            result = subprocess.run(
                ["tail", "-n", "5", str(log_file)],
                capture_output=True, text=True, timeout=5
            )
            return {
                "status": "ok",
                "message": "日志文件存在",
                "last_lines": result.stdout
            }
        except Exception:
            return {
                "status": "ok",
                "message": "日志文件存在"
            }
    else:
        return {
            "status": "warning",
            "message": "日志文件不存在（可能还未执行过）"
        }


def diagnose_update(check_all: bool = False, checks: list[str] = None) -> dict:
    """
    诊断更新问题

    Args:
        check_all: 是否检查所有项目
        checks: 要检查的项目列表

    Returns:
        诊断结果字典
    """
    if check_all or checks is None:
        checks = ["ssh", "api", "gateway", "cron", "scripts", "logs"]

    results = {}
    all_ok = True

    for check in checks:
        if check == "ssh":
            results["ssh"] = check_ssh_connection()
        elif check == "api":
            results["api"] = check_api_connection()
        elif check == "gateway":
            results["gateway"] = check_gateway()
        elif check == "cron":
            results["cron"] = check_cron()
        elif check == "scripts":
            results["scripts"] = check_scripts()
        elif check == "logs":
            results["logs"] = check_logs()
        else:
            results[check] = {
                "status": "error",
                "message": f"未知检查项: {check}"
            }

        if results.get(check, {}).get("status") == "error":
            all_ok = False

    return {
        "all_ok": all_ok,
        "checks": results,
        "summary": "所有检查通过" if all_ok else "存在问题需要修复"
    }


def main():
    parser = argparse.ArgumentParser(description="Space News Skills - 诊断更新问题")
    parser.add_argument(
        "--check-all",
        action="store_true",
        help="检查所有项目"
    )
    parser.add_argument(
        "--checks",
        nargs="+",
        choices=["ssh", "api", "gateway", "cron", "scripts", "logs"],
        help="要检查的项目"
    )

    args = parser.parse_args()

    # 执行诊断
    result = diagnose_update(
        check_all=args.check_all,
        checks=args.checks
    )

    # 输出 JSON
    print(json.dumps(result, ensure_ascii=False, indent=2))

    return 0 if result["all_ok"] else 1


if __name__ == "__main__":
    sys.exit(main())
