# 修复英文页面 permalink 与中文页面冲突

## 目标
修复 `web/en/` 下所有英文页面的 permalink，添加 `/en/` 前缀，避免与中文页面路由冲突。

## 任务列表
- [x] 1. 修复 en/glossary/ 下 3 个文件的 permalink
- [x] 2. 修复 en/research-frontiers/ 下 4 个文件的 permalink
- [x] 3. 修复 en/cislunar-orbits/README.md 的 permalink
- [x] 4. 修复 en/resources-tools/ 下 5 个文件的 permalink
- [x] 5. 构建验证

## 备注
- 共 13 个文件需要修复
- 修复方式：将 permalink 中不带 /en/ 前缀的路径改为带 /en/ 前缀
- 例如 `/glossary/` → `/en/glossary/`
