<template>
  <aside v-if="headerList.length" class="page-toc">
    <div class="page-toc-inner">
      <div class="page-toc-title">{{ pageTitle }}</div>
      <hr class="page-toc-divider" />
      <nav class="page-toc-nav">
        <ul class="page-toc-list">
          <li
            v-for="header in headerList"
            :key="header.id"
            class="page-toc-item"
            :class="{ active: activeId === header.id }"
          >
            <a
              :href="'#' + header.id"
              class="page-toc-link"
              :class="{ active: activeId === header.id }"
              @click.prevent="scrollTo(header.id)"
            >
              {{ header.text }}
            </a>
            <ul v-if="header.children.length" class="page-toc-sublist">
              <li
                v-for="child in header.children"
                :key="child.id"
                class="page-toc-item"
                :class="{ active: activeId === child.id }"
              >
                <a
                  :href="'#' + child.id"
                  class="page-toc-link page-toc-link-sub"
                  :class="{ active: activeId === child.id }"
                  @click.prevent="scrollTo(child.id)"
                >
                  {{ child.text }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useRoute } from 'vuepress/client'
import { onContentUpdated } from 'vuepress/client'
import { usePage } from 'vuepress/client'
import type { PageData } from '../utils/types'

interface TocHeader {
  id: string
  text: string
  level: number
  children: TocHeader[]
}

const route = useRoute()
const page = usePage()
const activeId = ref('')
const headerList = ref<TocHeader[]>([])

const pageTitle = computed(() => {
  return (page.value as PageData).title || ''
})

function extractHeaders(): TocHeader[] {
  const content = document.querySelector('[vp-content]') || document.querySelector('.theme-default-content')
  if (!content) return []

  const headingElements = content.querySelectorAll('h2, h3')
  const result: TocHeader[] = []
  let currentH2: TocHeader | null = null

  headingElements.forEach((el) => {
    const id = el.getAttribute('id')
    if (!id) return
    const text = (el.textContent || '').replace(/^#\s*/, '').trim()
    if (!text) return

    const level = parseInt(el.tagName[1], 10)

    if (level === 2) {
      currentH2 = { id, text, level, children: [] }
      result.push(currentH2)
    } else if (level === 3) {
      if (currentH2) {
        currentH2.children.push({ id, text, level, children: [] })
      } else {
        result.push({ id, text, level, children: [] })
      }
    }
  })

  return result
}

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    const navHeight = 60
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight
    window.scrollTo({ top, behavior: 'smooth' })
    history.replaceState(null, '', '#' + id)
    activeId.value = id
  }
}

function updateActive() {
  const allIds: string[] = []
  for (const h of headerList.value) {
    allIds.push(h.id)
    for (const c of h.children) {
      allIds.push(c.id)
    }
  }
  if (!allIds.length) return

  const navHeight = 70
  let current = allIds[0]
  for (const id of allIds) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= navHeight + 10) {
      current = id
    }
  }
  activeId.value = current
}

function refreshHeaders() {
  headerList.value = extractHeaders()
  if (route.hash) {
    activeId.value = route.hash.replace('#', '')
  } else {
    updateActive()
  }
}

let ticking = false
function onScroll() {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(() => {
      updateActive()
      ticking = false
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  nextTick(refreshHeaders)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

onContentUpdated((reason) => {
  if (reason !== 'beforeUnmount') {
    setTimeout(refreshHeaders, 100)
  }
})

watch(
  () => route.path,
  () => setTimeout(refreshHeaders, 200),
)
</script>

<style lang="scss">
.page-toc {
  position: fixed;
  top: calc(var(--navbar-height, 3.6rem) + 1rem);
  right: 1.5rem;
  width: 220px;
  max-height: calc(100vh - var(--navbar-height, 3.6rem) - 2rem);
  z-index: 10;
  box-sizing: border-box;

  @media (max-width: 1435px) {
    display: none;
  }
}

.page-toc-inner {
  padding: 16px;
  border-left: 1px solid var(--c-border, #eaecef);
  max-height: calc(100vh - var(--navbar-height, 3.6rem) - 4rem);
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.15) transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 2px;
  }
}

.page-toc-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--c-text, #2c3e50);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.page-toc-divider {
  border: none;
  border-top: 1px solid var(--c-border, #eaecef);
  margin: 0.5rem 0 0.75rem;
}

.page-toc-nav {
  font-size: 0.8rem;
}

.page-toc-list,
.page-toc-sublist {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.page-toc-sublist {
  padding-left: 0.75rem;
}

.page-toc-item {
  margin-top: 6px;

  &:first-child {
    margin-top: 0;
  }
}

.page-toc-link {
  display: block;
  color: var(--c-text-lighter, #666);
  text-decoration: none;
  line-height: 1.4;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: color 0.2s;

  &:hover {
    color: var(--c-brand, #42b983);
  }

  &.active {
    color: var(--c-brand, #42b983);
    font-weight: 600;
  }
}

.page-toc-link-sub {
  font-size: 0.9em;
}
</style>
