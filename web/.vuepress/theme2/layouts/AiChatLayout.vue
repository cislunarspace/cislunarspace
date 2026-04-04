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
  background: #fff;
}

html[data-chat-theme="dark"] .ai-chat-layout {
  background: #212121;
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
