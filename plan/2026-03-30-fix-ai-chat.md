# 修复 AI 问答页面

## 目标
将 AiChat 组件从 components-v1 迁移到 theme2 体系中，使 ai-chat 页面能正常显示 AI 问答界面。

## 任务列表
- [x] 1. 将 AiChat.vue 复制到 theme2/components/ 目录，适配 Vue 3（`beforeDestroy` → `beforeUnmount`，`::v-deep` → `:deep()`，修复 import 路径）
- [x] 2. 在 theme2/client.ts 中注册 AiChat 组件
- [x] 3. 修复 ai-chat.md 和 en/ai-chat.md，用 `<AiChat />` 替换注释
- [x] 4. 运行 `docs:build` 验证构建成功

## 备注
- AiChat.vue 当前使用 Vue 2 Options API，VuePress 2 基于 Vue 3，Options API 仍然兼容
- 组件依赖 katex（已在 package.json 中）
- 组件需要加载 `/ai-chat-config.json`（已在 public 目录）
- API 代理配置在 config.ts 中已配置
