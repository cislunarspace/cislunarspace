<template>
  <main class="space-news-archive">
    <header class="sna-hero">
      <div class="sna-hero__inner">
        <p class="sna-kicker">{{ labels.kicker }}</p>
        <h1 class="sna-title">{{ labels.title }}</h1>
        <p class="sna-lead">{{ labels.lead }}</p>
        <router-link class="sna-back" :to="homePath">← {{ labels.backHome }}</router-link>
      </div>
    </header>

    <div class="sna-container">
      <section v-for="group in groups" :key="group.key" class="sna-group">
        <h2 class="sna-group__title">{{ group.label }}</h2>
        <ul class="sna-list">
          <li v-for="item in group.items" :key="item.key" class="sna-list__item">
            <router-link :to="item.path" class="sna-list__link">
              <time class="sna-time">{{ formatDate(item) }}</time>
              <span class="sna-list__text">{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </section>

      <div v-if="!groups.length" class="sna-empty">
        <p>{{ labels.empty }}</p>
      </div>

      <footer class="sna-foot">
        <Content class="theme-default-content sna-foot__content" />
      </footer>
    </div>
  </main>
</template>

<script>
export default {
  name: 'SpaceNewsArchive',
  computed: {
    isEn() {
      return (this.$page.path || '').startsWith('/en/')
    },
    labels() {
      return this.isEn
        ? {
            kicker: 'Space News',
            title: 'Archive by date',
            lead: 'All published items under space-news/YYYY/MM/, newest first within each month.',
            backHome: 'Back to Space News',
            empty: 'No articles yet. Add Markdown files under web/space-news/YYYY/MM/.',
          }
        : {
            kicker: '航天动态',
            title: '按日期查阅',
            lead: '以下为已发布的全部条目（路径 space-news/年/月/），按月分组，月内按日期倒序。',
            backHome: '返回航天动态首页',
            empty: '暂无稿件。请在 web/space-news/年/月/ 下添加 Markdown 文件。',
          }
    },
    homePath() {
      return this.isEn ? '/en/space-news/' : '/space-news/'
    },
    articles() {
      const pages = (this.$site.pages || []).filter((p) => this.isArticlePage(p))
      return pages
        .map((p, i) => ({
          key: p.path || String(i),
          path: p.path,
          title: (p.frontmatter && p.frontmatter.title) || p.title || 'Untitled',
          frontmatter: p.frontmatter || {},
          lastUpdated: p.lastUpdated,
          relativePath: p.relativePath || '',
        }))
        .sort((a, b) => this.sortKey(b) - this.sortKey(a))
    },
    groups() {
      const map = new Map()
      for (const a of this.articles) {
        const ym = this.yearMonthFromPath(a.relativePath)
        if (!ym) continue
        const key = `${ym.y}-${ym.m}`
        if (!map.has(key)) {
          map.set(key, {
            key,
            y: ym.y,
            m: ym.m,
            label: this.formatMonthLabel(ym.y, ym.m),
            items: [],
          })
        }
        map.get(key).items.push(a)
      }
      const list = Array.from(map.values())
      list.sort((a, b) => {
        if (a.y !== b.y) return b.y - a.y
        return b.m - a.m
      })
      return list
    },
  },
  methods: {
    isArticlePage(page) {
      const rp = page.relativePath || ''
      if (!rp || (page.frontmatter && page.frontmatter.draft === true)) return false
      const base = this.isEn ? /^en\/space-news\/\d{4}\/\d{2}\// : /^space-news\/\d{4}\/\d{2}\//
      if (!base.test(rp)) return false
      if (/\/README\.md$/i.test(rp)) return false
      return /\.md$/i.test(rp)
    },
    yearMonthFromPath(rp) {
      const re = this.isEn
        ? /^en\/space-news\/(\d{4})\/(\d{2})\//
        : /^space-news\/(\d{4})\/(\d{2})\//
      const m = rp.match(re)
      if (!m) return null
      return { y: parseInt(m[1], 10), m: parseInt(m[2], 10) }
    },
    formatMonthLabel(y, mo) {
      if (this.isEn) {
        const d = new Date(y, mo - 1, 1)
        return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
      }
      return `${y} 年 ${mo} 月`
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
        : d.toLocaleDateString('zh-CN', { year: 'numeric', month: 'numeric', day: 'numeric' })
    },
  },
}
</script>

<style lang="stylus" scoped>
.space-news-archive
  width 100%
  min-height 60vh
  background #f6f7f9
  padding-bottom 2.5rem

.sna-hero
  background linear-gradient(135deg, #0f172a 0%, #1e293b 100%)
  color #fff
  padding 2rem 1.25rem 2.25rem

.sna-hero__inner
  max-width 720px
  margin 0 auto

.sna-kicker
  font-size 0.75rem
  letter-spacing 0.1em
  text-transform uppercase
  opacity 0.8
  margin 0 0 0.35rem

.sna-title
  font-size clamp(1.5rem, 3vw, 2rem)
  font-weight 800
  margin 0 0 0.5rem

.sna-lead
  font-size 0.95rem
  line-height 1.5
  opacity 0.9
  margin 0 0 1rem

.sna-back
  display inline-block
  font-size 0.9rem
  font-weight 600
  color #7dd3fc
  text-decoration none
  &:hover
    text-decoration underline

.sna-container
  max-width 720px
  margin 0 auto
  padding 1.75rem 1.25rem 0

.sna-group
  margin-bottom 2rem

.sna-group__title
  font-size 1.1rem
  font-weight 700
  color #0f172a
  margin 0 0 0.65rem
  padding-bottom 0.35rem
  border-bottom 2px solid #e2e8f0

.sna-list
  list-style none
  padding 0
  margin 0
  background #fff
  border-radius 8px
  border 1px solid #e2e8f0
  overflow hidden

.sna-list__item
  border-bottom 1px solid #f1f5f9
  &:last-child
    border-bottom none

.sna-list__link
  display flex
  flex-wrap wrap
  align-items baseline
  gap 0.5rem 1rem
  padding 0.75rem 1rem
  text-decoration none
  color #0f172a
  &:hover
    background #f8fafc

.sna-time
  flex 0 0 auto
  font-size 0.8rem
  color #64748b
  min-width 6.5rem
  font-variant-numeric tabular-nums

.sna-list__text
  flex 1 1 10rem
  font-weight 600
  line-height 1.4

.sna-empty
  background #fff
  border 1px dashed #cbd5e1
  border-radius 8px
  padding 2rem
  text-align center
  color #64748b

.sna-foot
  margin-top 2rem
  padding-top 1.25rem
  border-top 1px solid #e2e8f0

.sna-foot__content
  font-size 0.9rem
  color #475569
  max-width none
</style>
