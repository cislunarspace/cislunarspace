<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    />

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <Home v-if="$page.frontmatter.home" />

    <div
      v-else-if="$page.frontmatter.layout === 'SpaceNewsHome'"
      class="page space-news-layout-root"
    >
      <SpaceNewsHome />
      <Footer />
    </div>

    <div
      v-else-if="$page.frontmatter.layout === 'SpaceNewsArchive'"
      class="page space-news-layout-root"
    >
      <SpaceNewsArchive />
      <Footer />
    </div>

    <Page
      v-else
      :sidebar-items="sidebarItems"
      :page-sidebar-items="pageSidebarItems"
    >
      <template #top>
        <slot name="page-top" />

      </template>
      <template #bottom>
        <slot name="page-bottom" />
        <Footer />
      </template>
    </Page>

    <PageSidebar
       v-if="shouldShowPageSidebar"
       :page-sidebar-items="pageSidebarItems"
       :sidebar-items="sidebarItems"
    >
      <template #top>
        <slot name="page-sidebar-top" />
      </template>
      <template #bottom>
        <slot name="page-sidebar-bottom" />
      </template>
    </PageSidebar>
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import PageSidebar from '@theme/components/ExtraSidebar.vue'
import Footer from "@theme/components/Footer.vue";
import SpaceNewsHome from '@theme/components/SpaceNewsHome.vue'
import SpaceNewsArchive from '@theme/components/SpaceNewsArchive.vue'
import { resolveSidebarItems, resolveHeaders } from '../util'


export default {
  components: { Home, Page, Sidebar, Navbar, PageSidebar, Footer, SpaceNewsHome, SpaceNewsArchive },

  data () {
    return {
      isSidebarOpen: false,
      resizeTimer: null,
      touchStart: null
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    shouldShowPageSidebar (){
        const { frontmatter } = this.$page

        if (frontmatter.layout === 'SpaceNewsHome' || frontmatter.layout === 'SpaceNewsArchive') {
          return false
        }

        return (
            !frontmatter.home
            && frontmatter.sidebar !== false
            && this.pageSidebarItems.length
        )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageSidebarItems () {
        return resolveHeaders(this.$page)
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted () {
    this.updateDesktopSidebarWidth()
    this.syncMobileSidebarState()
    window.addEventListener('resize', this.handleResize)

    this.$router.afterEach(() => {
      this.isSidebarOpen = false
      this.$nextTick(() => {
        this.updateDesktopSidebarWidth()
        this.syncMobileSidebarState()
      })
    })
  },

  beforeDestroy () {
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer)
      this.resizeTimer = null
    }
    window.removeEventListener('resize', this.handleResize)
    this.clearMobileSidebarState()
  },

  methods: {
    handleResize () {
      if (this.resizeTimer) {
        clearTimeout(this.resizeTimer)
      }
      this.resizeTimer = setTimeout(() => {
        this.updateDesktopSidebarWidth()
        this.syncMobileSidebarState()
      }, 120)
    },

    syncMobileSidebarState () {
      const isMobile = window.innerWidth <= 959
      const shouldLockScroll = isMobile && this.isSidebarOpen

      if (this.$el) {
        this.$el.classList.toggle('mobile-sidebar-open', shouldLockScroll)
      }
      document.documentElement.classList.toggle('mobile-sidebar-open', shouldLockScroll)
      document.body.classList.toggle('mobile-sidebar-open', shouldLockScroll)
      document.body.style.overflow = shouldLockScroll ? 'hidden' : ''
    },

    clearMobileSidebarState () {
      if (this.$el) {
        this.$el.classList.remove('mobile-sidebar-open')
      }
      document.documentElement.classList.remove('mobile-sidebar-open')
      document.body.classList.remove('mobile-sidebar-open')
      document.body.style.overflow = ''
    },

    updateDesktopSidebarWidth () {
      // Desktop only: keep left sidebar width based on longest title text.
      if (window.innerWidth <= 959) {
        document.documentElement.style.removeProperty('--desktop-sidebar-width')
        document.documentElement.style.removeProperty('--desktop-toc-width')
        return
      }

      this.$nextTick(() => {
        const sidebar = document.querySelector('.theme-container .sidebar')
        if (!sidebar) return

        const nodes = sidebar.querySelectorAll('.sidebar-link, .group-label, .sidebar-heading')
        let maxTextWidth = 0
        
        // 临时设置不换行来测量真实宽度
        nodes.forEach((el) => {
          const originalWhiteSpace = el.style.whiteSpace
          el.style.whiteSpace = 'nowrap'
          maxTextWidth = Math.max(maxTextWidth, el.scrollWidth)
          el.style.whiteSpace = originalWhiteSpace
        })

        if (!maxTextWidth) return

        // 考虑左边栏链接的实际渲染：文字宽度 + 图标 + 内边距
        const width = Math.min(Math.max(maxTextWidth + 10, 180), 550)
        document.documentElement.style.setProperty('--desktop-sidebar-width', `${width}px`)

        // Right TOC sidebar
        const tocBox = document.querySelector('.toc-box')
        if (tocBox) {
          const links = tocBox.querySelectorAll('a')
          let maxTocWidth = 0
          links.forEach((el) => {
            const originalWhiteSpace = el.style.whiteSpace
            el.style.whiteSpace = 'nowrap'
            maxTocWidth = Math.max(maxTocWidth, el.scrollWidth)
            el.style.whiteSpace = originalWhiteSpace
          })
          if (maxTocWidth) {
            // 考虑TOC链接的实际渲染：文字宽度 + 缩进 + 内边距
            // 每个层级缩进约 20px，最大考虑 6 级缩进（支持 h4-h6 标题）
            // 加上容器内边距（左右各16px）和滚动条空间（约20px）
            // 四级标题缩进：0.8rem ≈ 12.8px，五级：1.6rem ≈ 25.6px，六级：2.4rem ≈ 38.4px
            // 最大缩进考虑 2.4rem ≈ 38.4px，加上文字宽度和余量
            const maxIndent = 40 // 六级标题的最大缩进
            const padding = 32   // 左右内边距各16px
            const scrollbar = 20 // 滚动条空间
            const tocWidth = Math.min(Math.max(maxTocWidth + maxIndent + padding + scrollbar, 220), 500)
            document.documentElement.style.setProperty('--desktop-toc-width', `${tocWidth}px`)
          }
        }
      })
    },

    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.syncMobileSidebarState()
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      if (!this.touchStart) {
        return
      }

      const { x, y } = this.touchStart
      const dx = e.changedTouches[0].clientX - x
      const dy = e.changedTouches[0].clientY - y
      this.touchStart = null

      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>

<style lang="stylus">
html, body
  max-width 100%
  overflow-x hidden

.theme-container
  width 100%
  max-width 100%

@media (max-width: 959px)
  .theme-container .sidebar
    width min(82vw, 20rem)
    max-width calc(100vw - 2.5rem)
    padding-bottom calc(0.5rem + env(safe-area-inset-bottom, 0px))
    overscroll-behavior contain
    -webkit-overflow-scrolling touch

  .theme-container .sidebar .nav-links,
  .theme-container .sidebar > .sidebar-links
    max-width 100%

  .theme-container .sidebar .sidebar-link,
  .theme-container .sidebar .sidebar-heading,
  .theme-container .sidebar .group-label
    white-space normal
    word-break break-word
    line-height 1.5

  .theme-container .sidebar .sidebar-links
    padding-bottom 0.75rem

  .theme-container.mobile-sidebar-open,
  body.mobile-sidebar-open
    overflow hidden
</style>
