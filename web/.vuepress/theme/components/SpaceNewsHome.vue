<template>
  <main class="space-news-home">
    <header class="sn-hero">
      <div class="sn-hero__inner">
        <p class="sn-kicker">{{ labels.kicker }}</p>
        <h1 class="sn-title">{{ labels.title }}</h1>
        <p class="sn-lead">{{ labels.lead }}</p>
        <nav class="sn-hero__nav">
          <router-link class="sn-btn sn-btn--ghost" :to="archivePath">{{ labels.archive }}</router-link>
        </nav>
      </div>
    </header>

    <div class="sn-container">
      <section v-if="featured" class="sn-featured">
        <router-link :to="featured.path" class="sn-featured__card">
          <div class="sn-featured__body">
            <time class="sn-date">{{ formatDate(featured) }}</time>
            <h2 class="sn-featured__headline">{{ featured.title }}</h2>
            <p class="sn-featured__deck">{{ excerpt(featured) }}</p>
            <span class="sn-readmore">{{ labels.readMore }} →</span>
          </div>
        </router-link>
      </section>

      <section class="sn-section">
        <div class="sn-section__head">
          <h2 class="sn-section__title">{{ labels.latest }}</h2>
          <router-link class="sn-section__more" :to="archivePath">{{ labels.viewAll }}</router-link>
        </div>

        <ul v-if="restItems.length" class="sn-grid">
          <li v-for="item in restItems" :key="item.key" class="sn-grid__cell">
            <router-link :to="item.path" class="sn-card">
              <time class="sn-date sn-card__date">{{ formatDate(item) }}</time>
              <h3 class="sn-card__title">{{ item.title }}</h3>
              <p class="sn-card__deck">{{ excerpt(item) }}</p>
            </router-link>
          </li>
        </ul>

        <div v-else-if="!featured" class="sn-empty">
          <p>{{ labels.empty }}</p>
          <p class="sn-empty__hint">{{ labels.emptyHint }}</p>
          <router-link class="sn-btn sn-btn--primary" :to="archivePath">{{ labels.browseArchive }}</router-link>
        </div>
      </section>

      <footer class="sn-foot">
        <p class="sn-foot__note">{{ labels.footnote }}</p>
        <Content class="theme-default-content sn-foot__content" />
      </footer>
    </div>
  </main>
</template>

<script>
export default {
  name: 'SpaceNewsHome',
  computed: {
    isEn() {
      return (this.$page.path || '').startsWith('/en/')
    },
    labels() {
      return this.isEn
        ? {
            kicker: 'Cislunar Space',
            title: 'Space News',
            lead: 'Policy, launches, missions, and industry updates — sourced from public reporting.',
            archive: 'Browse by date',
            latest: 'Latest',
            viewAll: 'Full archive →',
            readMore: 'Read',
            empty: 'No stories yet.',
            emptyHint: 'Add Markdown under web/space-news/YYYY/MM/ (see archive page for structure).',
            browseArchive: 'Open archive',
            footnote: 'Editorial guidelines & folder layout appear below.',
          }
        : {
            kicker: '地月空间入门指南',
            title: '航天动态',
            lead: '政策、发射、任务与产业动态摘录，均基于公开报道并可在正文中核对来源。',
            archive: '按日期查阅',
            latest: '最新动态',
            viewAll: '全部存档 →',
            readMore: '阅读全文',
            empty: '暂无新闻稿。',
            emptyHint: '在 web/space-news/年/月/ 下新增 Markdown 后即可在此自动展示。',
            browseArchive: '打开存档页',
            footnote: '栏目说明与撰稿约定见下方。',
          }
    },
    archivePath() {
      return this.isEn ? '/en/space-news/archive' : '/space-news/archive'
    },
    articles() {
      const pages = (this.$site.pages || []).filter((p) => this.isArticlePage(p))
      const sorted = pages.sort((a, b) => this.sortKey(b) - this.sortKey(a))
      return sorted.map((p, i) => ({
        key: p.path || String(i),
        path: p.path,
        title: (p.frontmatter && p.frontmatter.title) || p.title || 'Untitled',
        frontmatter: p.frontmatter || {},
        lastUpdated: p.lastUpdated,
      }))
    },
    featured() {
      return this.articles[0] || null
    },
    restItems() {
      return this.articles.slice(1, 7)
    },
  },
  methods: {
    isArticlePage(page) {
      const rp = page.relativePath || ''
      if (!rp || page.frontmatter && page.frontmatter.draft === true) return false
      const base = this.isEn ? /^en\/space-news\/\d{4}\/\d{2}\// : /^space-news\/\d{4}\/\d{2}\//
      if (!base.test(rp)) return false
      if (/\/README\.md$/i.test(rp)) return false
      return /\.md$/i.test(rp)
    },
    sortKey(page) {
      const fm = page.frontmatter || {}
      const d = fm.date || fm.lastUpdated || page.lastUpdated
      if (d) {
        const t = new Date(d).getTime()
        if (!Number.isNaN(t)) return t
      }
      return 0
    },
    formatDate(page) {
      const fm = page.frontmatter || {}
      const raw = fm.date || fm.lastUpdated || page.lastUpdated
      if (!raw) return '—'
      const d = new Date(raw)
      if (Number.isNaN(d.getTime())) return String(raw)
      return this.isEn
        ? d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
        : d.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
    },
    excerpt(page) {
      const fm = page.frontmatter || {}
      if (fm.description) return fm.description
      return this.isEn ? 'Open for details and sources.' : '点击查看要点与信息来源。'
    },
  },
}
</script>

<style lang="stylus" scoped>
.space-news-home
  width 100%
  min-height 60vh
  background #f6f7f9
  padding-bottom 2.5rem

.sn-hero
  background linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #0c4a6e 100%)
  color #fff
  padding 2.5rem 1.25rem 2.75rem
  margin-bottom 0

.sn-hero__inner
  max-width 960px
  margin 0 auto

.sn-kicker
  font-size 0.75rem
  letter-spacing 0.12em
  text-transform uppercase
  opacity 0.85
  margin 0 0 0.5rem

.sn-title
  font-size clamp(1.75rem, 4vw, 2.35rem)
  font-weight 800
  line-height 1.15
  margin 0 0 0.75rem
  letter-spacing -0.02em

.sn-lead
  font-size 1.05rem
  line-height 1.55
  opacity 0.92
  max-width 40rem
  margin 0 0 1.25rem

.sn-hero__nav
  display flex
  flex-wrap wrap
  gap 0.75rem

.sn-btn
  display inline-flex
  align-items center
  justify-content center
  padding 0.45rem 1rem
  border-radius 6px
  font-size 0.9rem
  font-weight 600
  text-decoration none
  transition background 0.15s, color 0.15s

.sn-btn--ghost
  border 1px solid rgba(255, 255, 255, 0.45)
  color #fff
  &:hover
    background rgba(255, 255, 255, 0.12)

.sn-btn--primary
  background #0ea5e9
  color #fff
  border none
  &:hover
    background #0284c7

.sn-container
  max-width 1100px
  margin 0 auto
  padding 1.75rem 1.25rem 0

.sn-featured
  margin-top -1.25rem
  margin-bottom 2rem

.sn-featured__card
  display block
  background #fff
  border-radius 12px
  overflow hidden
  text-decoration none
  color inherit
  box-shadow 0 8px 30px rgba(15, 23, 42, 0.08)
  border 1px solid rgba(15, 23, 42, 0.06)
  transition transform 0.2s, box-shadow 0.2s
  &:hover
    transform translateY(-2px)
    box-shadow 0 12px 36px rgba(15, 23, 42, 0.12)

.sn-featured__body
  padding 1.5rem 1.5rem 1.65rem

.sn-featured__headline
  font-size clamp(1.35rem, 2.5vw, 1.75rem)
  font-weight 700
  line-height 1.25
  margin 0.35rem 0 0.65rem

.sn-featured__deck
  font-size 1rem
  line-height 1.55
  color #475569
  margin 0 0 1rem

.sn-readmore
  font-size 0.9rem
  font-weight 600
  color #0284c7

.sn-section__head
  display flex
  align-items baseline
  justify-content space-between
  gap 1rem
  margin-bottom 1rem
  padding-bottom 0.5rem
  border-bottom 2px solid #e2e8f0

.sn-section__title
  font-size 1.15rem
  font-weight 700
  margin 0
  color #0f172a

.sn-section__more
  font-size 0.875rem
  font-weight 600
  color #0284c7
  text-decoration none
  white-space nowrap
  &:hover
    text-decoration underline

.sn-date
  font-size 0.8rem
  color #64748b
  font-variant-numeric tabular-nums

.sn-grid
  list-style none
  padding 0
  margin 0
  display grid
  grid-template-columns repeat(auto-fill, minmax(260px, 1fr))
  gap 1rem

.sn-card
  display block
  height 100%
  background #fff
  border-radius 10px
  padding 1.1rem 1.15rem
  text-decoration none
  color inherit
  border 1px solid #e2e8f0
  transition border-color 0.15s, box-shadow 0.15s
  &:hover
    border-color #bae6fd
    box-shadow 0 4px 16px rgba(14, 165, 233, 0.12)

.sn-card__title
  font-size 1.05rem
  font-weight 650
  line-height 1.35
  margin 0.4rem 0 0.5rem
  color #0f172a

.sn-card__deck
  font-size 0.875rem
  line-height 1.5
  color #64748b
  margin 0

.sn-empty
  background #fff
  border 1px dashed #cbd5e1
  border-radius 10px
  padding 2rem 1.5rem
  text-align center
  color #475569

.sn-empty__hint
  font-size 0.9rem
  margin 0.5rem 0 1.25rem

.sn-list
  list-style none
  padding 0
  margin 0
  background #fff
  border-radius 10px
  border 1px solid #e2e8f0
  overflow hidden

.sn-list__row
  border-bottom 1px solid #f1f5f9
  &:last-child
    border-bottom none

.sn-list__link
  display flex
  flex-wrap wrap
  align-items baseline
  gap 0.5rem 1rem
  padding 0.85rem 1rem
  text-decoration none
  color #0f172a
  &:hover
    background #f8fafc

.sn-list__time
  flex 0 0 auto
  min-width 7.5rem

.sn-list__title
  flex 1 1 12rem
  font-weight 600

.sn-foot
  margin-top 2.5rem
  padding-top 1.5rem
  border-top 1px solid #e2e8f0

.sn-foot__note
  font-size 0.85rem
  color #64748b
  margin 0 0 0.75rem

.sn-foot__content
  font-size 0.9rem
  color #475569
  max-width none
</style>
