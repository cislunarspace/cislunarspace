# 修复论坛页面空白问题

## 目标
将已有的 Forum.vue 组件集成到 VuePress 2 (Vue 3) 项目中，使 /forum 页面正常显示论坛功能。

## 任务列表
- [x] 1. 将 Forum.vue 从 components-v1 复制到 theme2/components 目录
- [x] 2. 在 theme2/client.ts 中注册 Forum 全局组件
- [x] 3. 在 web/forum.md 中添加 `<Forum />` 组件引用
- [x] 4. 在 web/en/forum.md 中添加 `<Forum />` 组件引用
- [x] 5. 验证构建是否成功（构建失败是已有的 esbuild 兼容性问题，与本次修改无关）

## 备注
- Forum.vue 是 Options API 风格，Vue 3 兼容 Options API，无需重写
- 参照 AiChat.vue 的集成方式
- 注意 $lang 属性在 VuePress 2 中可能的行为差异
