# Space News Skills

Space News 更新系统的模块化 skills，用于自动化新闻搜索、筛选、写稿和部署。

## 目录结构

```
scripts/skills/
├── README.md              # 本文件
├── search_news.py         # 搜索新闻
├── filter_news.py         # 筛选新闻
├── draft_article.py       # 撰写文章（待实现）
├── save_article.py        # 保存文章（待实现）
├── fetch_hero_image.py    # 获取配图（待实现）
├── search_and_filter.py   # 搜索并筛选（待实现）
├── draft_and_save.py      # 撰写并保存（待实现）
├── build_and_deploy.py    # 构建并部署（待实现）
├── update_space_news.py   # 完整更新流程（待实现）
├── diagnose_update.py     # 诊断更新问题
└── monitor_update.py      # 监控更新状态（待实现）
```

## 使用方法

### 1. 搜索新闻

```bash
# 使用默认关键词搜索
python3 scripts/skills/search_news.py

# 指定关键词
python3 scripts/skills/search_news.py --queries "SpaceX launch" "NASA mission"

# 只搜索中文关键词
python3 scripts/skills/search_news.py --cn-only

# 只搜索英文关键词
python3 scripts/skills/search_news.py --intl-only

# 指定时间窗口
python3 scripts/skills/search_news.py --cutoff-days 5
```

**输出示例**：
```json
{
  "total_queries": 9,
  "total_results": 45,
  "unique_results": 38,
  "query_results": {...},
  "results": [
    {
      "title": "SpaceX launches Starlink satellites",
      "url": "https://...",
      "description": "SpaceX launched 23 Starlink satellites...",
      "date_iso": "2026-07-26",
      "source_name": "spacenews.com"
    }
  ]
}
```

### 2. 筛选新闻

```bash
# 筛选新闻（从文件加载候选）
python3 scripts/skills/filter_news.py --candidates candidates.json

# 筛选新闻（从文件加载已有稿件）
python3 scripts/skills/filter_news.py --candidates candidates.json --existing existing.json

# 指定时间窗口
python3 scripts/skills/filter_news.py --candidates candidates.json --cutoff-days 5
```

**输入文件格式**：

`candidates.json`（搜索结果）：
```json
[
  {
    "title": "标题",
    "url": "URL",
    "description": "摘要",
    "date_iso": "YYYY-MM-DD",
    "source_name": "来源"
  }
]
```

`existing.json`（已有稿件，可选）：
```json
{
  "urls": ["url1", "url2"],
  "titles": ["标题1", "标题2"],
  "slugs": ["slug1", "slug2"],
  "metas": [
    {
      "date": "YYYY-MM-DD",
      "category": "spacex",
      "fingerprints": ["spacex", "launch", "starlink"],
      "title_zh": "中文标题",
      "slug": "slug"
    }
  ]
}
```

**输出示例**：
```json
{
  "total_candidates": 38,
  "total_filtered": 5,
  "cn_count": 2,
  "cn_ratio": 0.4,
  "meets_cn_target": true,
  "articles": [
    {
      "index": 1,
      "title_zh": "SpaceX 成功发射 23 颗 Starlink 卫星",
      "title_en": "SpaceX Successfully Launches 23 Starlink Satellites",
      "slug": "spacex-starlink-launch",
      "category": "spacex",
      "date": "2026-07-26",
      "summary_zh": "...",
      "summary_en": "...",
      "source_url": "https://...",
      "source_name": "spacenews.com"
    }
  ]
}
```

### 3. 诊断更新问题

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

## 集成方式

### 1. 与 Cron 集成

修改 `~/.hermes/scripts/space-news-update.sh`：

```bash
#!/bin/bash
cd /home/ouyangjiahong/codes/cislunarspace
python3 scripts/skills/update_space_news.py --mode full
```

### 2. 手动调用

```bash
# 搜索新闻
python3 scripts/skills/search_news.py --cn-only > cn_results.json

# 筛选新闻
python3 scripts/skills/filter_news.py --candidates cn_results.json

# 诊断问题
python3 scripts/skills/diagnose_update.py --check-all
```

### 3. 与 Hermes Agent 集成

```bash
# 通过 hermes chat 调用
hermes chat -q "使用 search_news skill 搜索最近 3 天的航天新闻" \
  -t web --provider xiaomi -m mimo-v2.5-pro
```

## 开发指南

### 添加新 Skill

1. 创建脚本文件：`scripts/skills/my_skill.py`
2. 实现主函数：接受 JSON 输入，返回 JSON 输出
3. 添加命令行参数解析
4. 更新本 README
5. 添加测试

### Skill 接口规范

```python
def my_skill(input_data: dict) -> dict:
    """
    My Skill 描述

    Args:
        input_data: 输入数据

    Returns:
        输出数据
    """
    # 实现逻辑
    return {"status": "success", "result": ...}


def main():
    parser = argparse.ArgumentParser()
    # 添加参数
    args = parser.parse_args()

    # 执行 skill
    result = my_skill(...)

    # 输出 JSON
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
```

## 测试

```bash
# 测试搜索
python3 scripts/skills/search_news.py --queries "test" 2>&1

# 测试筛选
echo '[]' > /tmp/test_candidates.json
python3 scripts/skills/filter_news.py --candidates /tmp/test_candidates.json

# 测试诊断
python3 scripts/skills/diagnose_update.py --check-all
```

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
**版本**：v1.0
