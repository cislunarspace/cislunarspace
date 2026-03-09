<template>
  <footer class="page-edit">
    <div v-if="editLink" class="edit-link">
      <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
      <OutboundLink />
    </div>

    <div v-if="lastUpdated" class="last-updated">
      <span class="prefix">{{ lastUpdatedText }}:</span>
      <span class="time">{{ lastUpdated }}</span>
    </div>
  </footer>
</template>

<script>
const TRAILING_SLASH_RE = /\/$/

function trimTrailingSlash(value) {
  return value.replace(TRAILING_SLASH_RE, '')
}

function joinPath(...segments) {
  return segments
    .filter(Boolean)
    .map((segment, index) => {
      const normalized = String(segment).replace(/^\/+|\/+$/g, '')
      return index === 0 ? normalized : normalized
    })
    .filter(Boolean)
    .join('/')
}

function normalizeGiteeTarget(relativePath) {
  if (relativePath === 'README.md') {
    return ''
  }

  if (relativePath.endsWith('/README.md')) {
    return relativePath.slice(0, -'/README.md'.length)
  }

  return relativePath
}

function toRepoUrl(repo) {
  if (!repo) {
    return ''
  }

  return /^https?:\/\//.test(repo) ? repo : `https://github.com/${repo}`
}

export default {
  name: 'PageEdit',
  computed: {
    lastUpdated() {
      return this.$page.lastUpdated
    },
    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }

      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }

      return 'Last Updated'
    },
    editLink() {
      const { frontmatter = {}, relativePath } = this.$page
      const editLinksEnabled = typeof frontmatter.editLink === 'boolean'
        ? frontmatter.editLink
        : this.$site.themeConfig.editLinks

      if (!editLinksEnabled || !relativePath) {
        return null
      }

      const {
        repo,
        docsRepo = repo,
        docsDir = '',
        docsBranch = 'master',
      } = this.$site.themeConfig

      if (!docsRepo) {
        return null
      }

      return this.createEditLink(docsRepo, docsDir, docsBranch, relativePath)
    },
    editLinkText() {
      return this.$themeLocaleConfig.editLinkText || this.$site.themeConfig.editLinkText || 'Edit this page'
    },
  },
  methods: {
    createEditLink(repo, docsDir, docsBranch, relativePath) {
      const repoUrl = trimTrailingSlash(toRepoUrl(repo))
      const repoPath = joinPath(docsDir, relativePath)

      if (/gitee\.com/.test(repoUrl)) {
        const giteePath = joinPath(docsDir, normalizeGiteeTarget(relativePath))
        return giteePath
          ? `${repoUrl}/tree/${docsBranch}/${giteePath}`
          : `${repoUrl}/tree/${docsBranch}`
      }

      if (/bitbucket\.org/.test(repoUrl)) {
        return `${repoUrl}/src/${docsBranch}/${repoPath}?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
      }

      if (/gitlab\.com/.test(repoUrl)) {
        return `${repoUrl}/-/edit/${docsBranch}/${repoPath}`
      }

      return `${repoUrl}/edit/${docsBranch}/${repoPath}`
    },
  },
}
</script>