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
  background: linear-gradient(165deg, oklch(0.967 0.001 286.375) 0%, oklch(1 0 0) 100%);
}

html[data-chat-theme='dark'] .ai-chat-layout {
  background: linear-gradient(
    165deg,
    oklch(0.141 0.005 285.823) 0%,
    oklch(0.21 0.006 285.885) 100%
  );
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
.ai-chat-layout [class*='page-bottom'],
.ai-chat-layout .theme-default-content h1 {
  display: none !important;
}
</style>
