<template>
  <aside class="page-sidebar">
    <div class="page-side-toolbar">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="option-box"
        @mouseover="showToc($event)"
        @mouseout="hideToc($event)"
      >
        <img class="nozoom" :src="item.icon" width="24px" />
        <span class="show-txt">{{ item.title }}</span>
        <div class="toc-container">
          <div class="pos-box">
            <div class="icon-arrow"></div>
            <div class="scroll-box" style="text-align: center">
              <span class="popover-title">{{ item.popoverTitle }}</span>
              <img :src="item.popoverUrl" height="180px" style="margin: 10px" />
              <span>{{ item.popoverDesc }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import extraSideBarConfig from '../data/wechat-widget.ts';

const list = ref(extraSideBarConfig);

function showToc(event: MouseEvent) {
  (event.currentTarget as HTMLElement).className = 'option-box on';
}
function hideToc(event: MouseEvent) {
  (event.currentTarget as HTMLElement).className = 'option-box';
}
</script>

<style lang="scss">
.page-sidebar {
  font-size: 0.75rem;
  width: 3.8rem;
  position: fixed;
  z-index: 11;
  margin: 0;
  top: 3.6rem;
  right: 1.5rem;
  bottom: 0;
  box-sizing: border-box;
  border-left: 0;
}

.toc-container {
  display: none;
  position: absolute;
  top: 0;
  color: var(--vp-c-text);
  left: unset;
  right: 100%;
  margin-right: 10px;
  margin-left: 0;
  width: 240px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  animation: dropdownIn 0.2s var(--ease-out-expo);
  .pos-box {
    position: relative;
    padding: 16px;
    .icon-arrow {
      position: relative;
      margin-left: -20px;
    }
    .scroll-box {
      overflow-x: hidden;
      overflow-y: hidden;
    }
  }
}

.page-side-toolbar {
  position: fixed;
  right: 10px;
  top: calc(var(--navbar-height, 3.6rem) + 2rem) !important;
  width: 44px;
  div.option-box:last-child {
    border-bottom: 0;
  }
  div.option-box.on {
    .toc-container {
      display: block;
    }
  }
  div.option-box {
    font-size: 0.75rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--vp-c-border);
    border-radius: var(--radius-md);
    background-color: var(--vp-c-bg);
    height: 60px;
    cursor: pointer;
    transition:
      background 0.2s var(--ease-smooth),
      color 0.2s var(--ease-smooth),
      transform 0.2s var(--ease-out-back);
    .show-txt {
      color: var(--vp-c-text-mute);
      margin-top: 3px;
      font-size: 0.6875rem;
      transition: color 0.2s var(--ease-smooth);
    }
  }
  div.option-box:hover {
    color: var(--vp-c-text);
    background: var(--vp-c-accent-soft);
    transform: translateY(-2px);
    .show-txt {
      color: var(--vp-c-text);
    }
  }
}

@media (max-width: 959px) {
  .page-side-toolbar {
    right: 6px;
    top: calc(var(--navbar-height, 3.6rem) + 2rem) !important;
  }
}
@media (max-width: 719px) {
  .page-sidebar {
    display: none;
  }
}

.popover-title {
  font-size: 0.8rem;
  font-weight: bold;
}
</style>
