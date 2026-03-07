---
sidebar: false
wechatShare:
  title: AI问答
  desc: 使用AI助手，快速了解地月空间科学、轨道动力学与航天技术。
  image: /logo.png
---

<AiChat />

## 安全部署说明

AI 问答页面的前端只应请求本站同源接口，例如 `/api/ai/v1/chat/completions`。

请勿将真实 API 密钥写入前端源码、浏览器可访问的 JSON 文件，或静态资源目录。

生产环境推荐做法：

1. 在云服务器的 Nginx 或后端服务中配置 `/api/ai/` 反向代理。
2. 将 DeepSeek API 密钥保存在服务器环境变量中，例如 `DEEPSEEK_API_KEY`。
3. 由服务器向 DeepSeek 添加 `Authorization: Bearer ...` 请求头。
4. 浏览器只访问你自己的站点接口，不直接接触第三方密钥。

可参考 [deploy/nginx-ai-proxy.conf](deploy/nginx-ai-proxy.conf) 中的示例配置。
