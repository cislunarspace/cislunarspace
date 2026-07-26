<template>
  <div class="dialectic-layout">
    <Content />
  </div>
</template>

<style>
.dialectic-layout {
  position: fixed;
  inset: 0;
  z-index: 100;
  overflow: hidden;
  background: linear-gradient(165deg, #f5f0e8 0%, #faf7f2 50%, #ffffff 100%);
}

html[data-chat-theme='dark'] .dialectic-layout {
  background: linear-gradient(165deg, #1a1510 0%, #201c14 50%, #0f0d0a 100%);
}

.dialectic-layout .theme-default-content,
.dialectic-layout .theme-default-content:not(.custom) {
  max-width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
  height: 100%;
}

.dialectic-layout .page-nav,
.dialectic-layout .page-meta,
.dialectic-layout .page-footer,
.dialectic-layout [class*='page-bottom'],
.dialectic-layout .theme-default-content h1 {
  display: none !important;
}
</style>
