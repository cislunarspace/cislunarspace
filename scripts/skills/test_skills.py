#!/usr/bin/env python3
"""
Space News Skills 测试

测试 diagnose_update skill
"""

import json
import subprocess
import sys
from pathlib import Path

# 添加项目根目录到 Python 路径
REPO_ROOT = Path(__file__).parent.parent.parent
sys.path.insert(0, str(REPO_ROOT))


def test_diagnose_update():
    """测试 diagnose_update skill"""
    print("测试 diagnose_update...")

    # 测试 1: 检查所有项目
    result = subprocess.run(
        ["python3", "scripts/skills/diagnose_update.py", "--check-all"],
        capture_output=True, text=True, timeout=60
    )

    if result.returncode != 0:
        print(f"  ✗ diagnose_update 执行失败: {result.stderr}")
        return False

    try:
        data = json.loads(result.stdout)
        assert "all_ok" in data
        assert "checks" in data
        assert "summary" in data
        print("  ✓ 诊断测试通过")
    except (json.JSONDecodeError, AssertionError) as e:
        print(f"  ✗ 输出格式错误: {e}")
        return False

    # 测试 2: 只检查 SSH
    result = subprocess.run(
        ["python3", "scripts/skills/diagnose_update.py", "--checks", "ssh"],
        capture_output=True, text=True, timeout=60
    )

    if result.returncode != 0:
        print(f"  ✗ SSH 检查失败: {result.stderr}")
        return False

    try:
        data = json.loads(result.stdout)
        assert "ssh" in data["checks"]
        print("  ✓ SSH 检查测试通过")
    except (json.JSONDecodeError, AssertionError) as e:
        print(f"  ✗ SSH 检查输出错误: {e}")
        return False

    # 测试 3: 只检查 API
    result = subprocess.run(
        ["python3", "scripts/skills/diagnose_update.py", "--checks", "api"],
        capture_output=True, text=True, timeout=60
    )

    if result.returncode != 0:
        print(f"  ✗ API 检查失败: {result.stderr}")
        return False

    try:
        data = json.loads(result.stdout)
        assert "api" in data["checks"]
        print("  ✓ API 检查测试通过")
    except (json.JSONDecodeError, AssertionError) as e:
        print(f"  ✗ API 检查输出错误: {e}")
        return False

    return True


def main():
    """运行所有测试"""
    print("=" * 50)
    print("Space News Skills 测试")
    print("=" * 50)

    tests = [
        ("diagnose_update", test_diagnose_update),
    ]

    results = []
    for name, test_func in tests:
        print(f"\n[{name}]")
        try:
            success = test_func()
            results.append((name, success))
        except Exception as e:
            print(f"  ✗ 测试异常: {e}")
            results.append((name, False))

    # 汇总结果
    print("\n" + "=" * 50)
    print("测试结果汇总")
    print("=" * 50)

    passed = sum(1 for _, success in results if success)
    total = len(results)

    for name, success in results:
        status = "✓ 通过" if success else "✗ 失败"
        print(f"  {name}: {status}")

    print(f"\n总计: {passed}/{total} 测试通过")

    return 0 if passed == total else 1


if __name__ == "__main__":
    sys.exit(main())
