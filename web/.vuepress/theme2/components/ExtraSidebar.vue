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
        <span class="show-txt" v-html="item.title" />
        <div class="toc-container">
          <div class="pos-box">
            <div class="icon-arrow"></div>
            <div class="scroll-box" style="text-align:center">
              <span v-html="item.popoverTitle"></span>
              <img :src="item.popoverUrl" height="180px" style="margin:10px;" />
              <span v-html="item.popoverDesc"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import extraSideBarConfig from '../../extraSideBar.js'

const list = ref<any[]>([])

onMounted(() => {
  list.value = extraSideBarConfig
})

function showToc(event: MouseEvent) {
  ;(event.currentTarget as HTMLElement).className = 'option-box on'
}
function hideToc(event: MouseEvent) {
  ;(event.currentTarget as HTMLElement).className = 'option-box'
}
</script>

<style lang="scss">
.page-sidebar {
  font-size: 12px;
  width: 3.8rem;
  position: fixed;
  z-index: 11;
  margin: 0;
  top: 3.6rem;
  right: 1.5rem;
  bottom: 0;
  box-sizing: border-box;
  border-left: 0px solid #eaecef;
}

.toc-container {
  display: none;
  position: absolute;
  color: var(--c-text);
  left: unset;
  right: 100%;
  margin-right: 10px;
  margin-left: 0;
  width: 240px;
  background: #fff;
  border: 1px solid #eee;
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
  top: 70px !important;
  width: 44px;
  div.option-box:last-child {
    border-top: 0px solid #eee;
  }
  div.option-box.on {
    .toc-container {
      display: block;
    }
  }
  div.option-box {
    font-size: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    height: 60px;
    cursor: pointer;
    .show-txt {
      color: gray;
      margin-top: 3px;
      font-size: 11px;
    }
  }
  div.option-box:hover {
    color: white;
    background: #eee;
  }
}

@media (max-width: 959px) {
  .page-side-toolbar {
    right: 6px;
    top: 65px !important;
  }
}
@media (max-width: 719px) {
  .page-sidebar {
    display: none;
  }
}
</style>
