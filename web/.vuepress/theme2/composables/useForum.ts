import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { ForumLang } from '../utils/forumI18n'
import { forumT } from '../utils/forumI18n'

const STORAGE_KEY_POSTS = 'cislunar-forum-posts'
const STORAGE_KEY_USER = 'cislunar-forum-user'
const STORAGE_KEY_USERS = 'cislunar-forum-users'
const STORAGE_KEY_LIKES = 'cislunar-forum-likes'

export interface ForumUser {
  id: string
  username: string
  isGuest: boolean
}

export interface ForumReply {
  id: string
  content: string
  author: string
  authorId: string
  isGuest: boolean
  createdAt: number
}

export interface ForumPost {
  id: string
  title: string
  content: string
  category: string
  author: string
  authorId: string
  isGuest: boolean
  createdAt: number
  likes: number
  replies: ForumReply[]
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

export function escapeHtml(text: string): string {
  const div = document.createElement('div')
  div.appendChild(document.createTextNode(text))
  return div.innerHTML
}

export function useForum() {
  const route = useRoute()
  const lang = computed<ForumLang>(() =>
    route.path.startsWith('/en/') ? 'en' : 'zh',
  )
  const t = (key: string) => forumT(lang.value, key)

  const currentUser = ref<ForumUser | null>(null)
  const posts = ref<ForumPost[]>([])
  const likedPostIds = ref<string[]>([])

  function loadUser() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_USER)
      if (raw) currentUser.value = JSON.parse(raw) as ForumUser
    } catch {
      /* ignore */
    }
  }

  function saveUser() {
    try {
      if (currentUser.value) {
        localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(currentUser.value))
      } else {
        localStorage.removeItem(STORAGE_KEY_USER)
      }
    } catch {
      /* ignore */
    }
  }

  function loadPosts() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_POSTS)
      if (raw) posts.value = JSON.parse(raw) as ForumPost[]
    } catch {
      /* ignore */
    }
  }

  function savePosts() {
    try {
      localStorage.setItem(STORAGE_KEY_POSTS, JSON.stringify(posts.value))
    } catch {
      /* ignore */
    }
  }

  function loadLikes() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_LIKES)
      if (raw) {
        const arr = JSON.parse(raw) as string[]
        likedPostIds.value = [...new Set(Array.isArray(arr) ? arr : [])]
      }
    } catch {
      /* ignore */
    }
  }

  function saveLikes() {
    try {
      localStorage.setItem(STORAGE_KEY_LIKES, JSON.stringify(likedPostIds.value))
    } catch {
      /* ignore */
    }
  }

  function getUsers(): Record<string, { password: string; createdAt: number }> {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_USERS)
      return raw ? (JSON.parse(raw) as Record<string, { password: string; createdAt: number }>) : {}
    } catch {
      return {}
    }
  }

  function saveUsers(users: Record<string, { password: string; createdAt: number }>) {
    try {
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users))
    } catch {
      /* ignore */
    }
  }

  async function handleAuth(
    mode: 'login' | 'register',
    username: string,
    password: string,
  ): Promise<string | null> {
    const u = username.trim()
    const p = password.trim()
    if (!u) return t('usernameRequired')
    if (!p) return t('passwordRequired')

    const users = getUsers()
    if (mode === 'register') {
      if (users[u]) return t('userExists')
      const hashed = await hashPassword(p)
      users[u] = { password: hashed, createdAt: Date.now() }
      saveUsers(users)
      currentUser.value = { id: generateId(), username: u, isGuest: false }
      saveUser()
      return null
    }
    if (!users[u]) return t('userNotFound')
    const hashed = await hashPassword(p)
    if (users[u].password !== hashed) return t('wrongPassword')
    currentUser.value = { id: generateId(), username: u, isGuest: false }
    saveUser()
    return null
  }

  function enterAsGuest() {
    currentUser.value = {
      id: generateId(),
      username: 'Guest_' + Math.random().toString(36).slice(2, 6),
      isGuest: true,
    }
    saveUser()
  }

  function logout() {
    currentUser.value = null
    saveUser()
  }

  const postCategories = computed(() => [
    { key: 'discussion', label: t('discussion') },
    { key: 'question', label: t('question') },
    { key: 'sharing', label: t('sharing') },
    { key: 'announcement', label: t('announcement') },
  ])

  function getCategoryLabel(key: string): string {
    const cat = postCategories.value.find((c) => c.key === key)
    return cat ? cat.label : key
  }

  function submitPost(newPost: { title: string; content: string; category: string }) {
    if (!currentUser.value) return
    const post: ForumPost = {
      id: generateId(),
      title: newPost.title.trim(),
      content: newPost.content.trim(),
      category: newPost.category,
      author: currentUser.value.username,
      authorId: currentUser.value.id,
      isGuest: currentUser.value.isGuest,
      createdAt: Date.now(),
      likes: 0,
      replies: [],
    }
    posts.value.push(post)
    savePosts()
  }

  function submitReply(post: ForumPost, content: string) {
    if (!currentUser.value || !content.trim()) return
    const reply: ForumReply = {
      id: generateId(),
      content: content.trim(),
      author: currentUser.value.username,
      authorId: currentUser.value.id,
      isGuest: currentUser.value.isGuest,
      createdAt: Date.now(),
    }
    if (!post.replies) post.replies = []
    post.replies.push(reply)
    savePosts()
  }

  function toggleLike(post: ForumPost) {
    const id = post.id
    const idx = likedPostIds.value.indexOf(id)
    if (idx >= 0) {
      likedPostIds.value = likedPostIds.value.filter((x) => x !== id)
      post.likes = Math.max(0, (post.likes || 0) - 1)
    } else {
      likedPostIds.value = [...likedPostIds.value, id]
      post.likes = (post.likes || 0) + 1
    }
    saveLikes()
    savePosts()
  }

  function hasLiked(postId: string): boolean {
    return likedPostIds.value.includes(postId)
  }

  function canDeletePost(post: ForumPost): boolean {
    return !!(
      currentUser.value &&
      !currentUser.value.isGuest &&
      currentUser.value.username === post.author
    )
  }

  function canDeleteReply(reply: ForumReply): boolean {
    return !!(
      currentUser.value &&
      !currentUser.value.isGuest &&
      currentUser.value.username === reply.author
    )
  }

  function deletePost(post: ForumPost) {
    posts.value = posts.value.filter((p) => p.id !== post.id)
    if (hasLiked(post.id)) {
      likedPostIds.value = likedPostIds.value.filter((x) => x !== post.id)
      saveLikes()
    }
    savePosts()
  }

  function deleteReply(post: ForumPost, reply: ForumReply) {
    post.replies = post.replies.filter((r) => r.id !== reply.id)
    savePosts()
  }

  function formatTime(ts: number): string {
    if (!ts) return ''
    const d = new Date(ts)
    const now = new Date()
    const diff = +now - +d
    const isZh = lang.value === 'zh'
    if (diff < 60000) return isZh ? '刚刚' : 'Just now'
    if (diff < 3600000) return Math.floor(diff / 60000) + (isZh ? ' 分钟前' : 'm ago')
    if (diff < 86400000) return Math.floor(diff / 3600000) + (isZh ? ' 小时前' : 'h ago')
    if (diff < 604800000) return Math.floor(diff / 86400000) + (isZh ? ' 天前' : 'd ago')
    return d.toLocaleDateString()
  }

  function renderContent(content: string): string {
    return escapeHtml(content).replace(/\n/g, '<br>')
  }

  function getPreview(content: string): string {
    const text = content.replace(/\n/g, ' ')
    return text.length > 120 ? text.slice(0, 120) + '...' : text
  }

  function init() {
    loadUser()
    loadPosts()
    loadLikes()
  }

  return {
    lang,
    t,
    currentUser,
    posts,
    likedPostIds,
    postCategories,
    loadUser,
    saveUser,
    handleAuth,
    enterAsGuest,
    logout,
    getCategoryLabel,
    submitPost,
    submitReply,
    toggleLike,
    hasLiked,
    canDeletePost,
    canDeleteReply,
    deletePost,
    deleteReply,
    formatTime,
    renderContent,
    getPreview,
    init,
  }
}
