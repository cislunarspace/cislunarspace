<template>
  <div class="ai-chat-layout">
    <Content />
  </div>
</template>

<style>
.ai-chat-layout {
  position: fixed;
  inset: 0;
  z-index: 100;
  overflow: hidden;
  background: linear-gradient(165deg, #f0f9ff 0%, #f8fafc 38%, #ffffff 100%);
}

html[data-chat-theme="dark"] .ai-chat-layout {
  background: linear-gradient(165deg, #0c1222 0%, #0f172a 45%, #111827 100%);
}

.ai-chat-layout .theme-default-content,
.ai-chat-layout .theme-default-content:not(.custom) {
  max-width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
  height: 100%;
}

.ai-chat-layout .page-nav,
.ai-chat-layout .page-meta,
.ai-chat-layout .page-footer,
.ai-chat-layout [class*="page-bottom"],
.ai-chat-layout .theme-default-content h1 {
  display: none !important;
}
</style>
