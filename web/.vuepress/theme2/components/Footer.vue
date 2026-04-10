<template>
  <main class="footer">
    <div class="friend-links-title">{{ isEn ? 'Related Links' : '友情链接' }}</div>
    <div v-for="(item, index) in footerList" :key="index" class="footer-item">
      <a :href="item.href" target="_blank" rel="noopener noreferrer">
        <span class="item-text">{{ item.label }}</span>
      </a>
    </div>
    <div class="copy-right">
      <span class="name">{{ `${currentYear} ${isEn ? 'Cislunar Space Beginner\'s Guide' : '地月空间入门指南'} &nbsp; |  &nbsp; ` }}</span>
      <a :href="government.href" target="_blank" rel="noreferrer">
        {{ government.name }}
      </a>
    </div>
  </main>
</template>

<script setup lang="ts">
import footerConfig from '../../footer.js'
import { useIsEn } from '../composables/useIsEn'

const isEn = useIsEn()
const footerList = footerConfig.friendLinks
const government = footerConfig.copyright
const currentYear = String(new Date().getFullYear())
</script>

<style lang="scss">
.footer {
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background-color: #f0f2f5;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.footer-item {
  padding: 0 1rem;
  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #85858a;
  }
}
.friend-links-title {
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.item-icon {
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 0.4rem;
}
.copy-right {
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
  padding: 0 1rem;
  box-sizing: border-box;
  color: #85858a;
  text-align: center;
  line-height: 1.6;
  .name {
    margin-right: 0.4rem;
  }
}
@media (max-width: 719px) {
  .footer {
    padding: 1.5rem 1rem;
  }
  .footer-item {
    padding: 0.35rem 0.75rem;
  }
  .copy-right .name {
    margin-right: 0;
  }
}
</style>
