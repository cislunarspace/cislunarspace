<template>
  <div class="forum-container">
    <!-- 用户栏 -->
    <div class="forum-topbar">
      <div class="forum-topbar-left">
        <span class="forum-title">{{ t('forumTitle') }}</span>
      </div>
      <div class="forum-topbar-right">
        <template v-if="currentUser">
          <span class="user-badge" :class="{ 'guest-badge': currentUser.isGuest }">
            {{ currentUser.isGuest ? t('guest') : currentUser.username }}
          </span>
          <button class="btn btn-sm btn-outline" @click="logout">{{ t('logout') }}</button>
        </template>
        <template v-else>
          <button class="btn btn-sm btn-primary" @click="showLoginModal = true">{{ t('login') }}</button>
          <button class="btn btn-sm btn-outline" @click="enterAsGuest">{{ t('guestEnter') }}</button>
        </template>
      </div>
    </div>

    <!-- 登录弹窗 -->
    <div v-if="showLoginModal" class="modal-overlay" @click.self="showLoginModal = false">
      <div class="modal-box">
        <div class="modal-header">
          <h3>{{ activeTab === 'login' ? t('login') : t('register') }}</h3>
          <button class="modal-close" @click="showLoginModal = false">&times;</button>
        </div>
        <div class="modal-tabs">
          <button :class="{ active: activeTab === 'login' }" @click="activeTab = 'login'">{{ t('login') }}</button>
          <button :class="{ active: activeTab === 'register' }" @click="activeTab = 'register'">{{ t('register') }}</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>{{ t('username') }}</label>
            <input v-model="authForm.username" :placeholder="t('usernamePlaceholder')" @keydown.enter="handleAuth" />
          </div>
          <div class="form-group">
            <label>{{ t('password') }}</label>
            <input v-model="authForm.password" type="password" :placeholder="t('passwordPlaceholder')" @keydown.enter="handleAuth" />
          </div>
          <p v-if="authError" class="auth-error">{{ authError }}</p>
          <button class="btn btn-primary btn-block" @click="handleAuth">
            {{ activeTab === 'login' ? t('login') : t('register') }}
          </button>
          <p class="guest-hint" @click="enterAsGuest(); showLoginModal = false;">
            {{ t('orGuestEnter') }}
          </p>
        </div>
      </div>
    </div>

    <!-- 主内容区 -->
    <div class="forum-main">
      <!-- 帖子列表视图 -->
      <div v-if="currentView === 'list'" class="forum-list-view">
        <div class="forum-controls">
          <div class="forum-search">
            <input v-model="searchQuery" :placeholder="t('searchPlaceholder')" />
          </div>
          <div class="forum-filters">
            <button
              v-for="cat in categories"
              :key="cat.key"
              :class="['filter-btn', { active: activeCategory === cat.key }]"
              @click="activeCategory = cat.key"
            >
              {{ cat.label }}
            </button>
          </div>
          <button class="btn btn-primary" @click="openNewPost">{{ t('newPost') }}</button>
        </div>

        <div v-if="filteredPosts.length === 0" class="forum-empty">
          <p>{{ t('noPosts') }}</p>
        </div>

        <div v-else class="post-list">
          <div
            v-for="post in filteredPosts"
            :key="post.id"
            class="post-card"
            @click="openPost(post)"
          >
            <div class="post-card-left">
              <span class="post-category-tag" :class="'cat-' + post.category">{{ getCategoryLabel(post.category) }}</span>
              <h3 class="post-card-title">{{ post.title }}</h3>
              <p class="post-card-preview">{{ getPreview(post.content) }}</p>
              <div class="post-card-meta">
                <span class="post-author">{{ post.isGuest ? t('guest') : post.author }}</span>
                <span class="post-time">{{ formatTime(post.createdAt) }}</span>
              </div>
            </div>
            <div class="post-card-right">
              <div class="post-stat">
                <span class="stat-num">{{ post.replies ? post.replies.length : 0 }}</span>
                <span class="stat-label">{{ t('replies') }}</span>
              </div>
              <div class="post-stat">
                <span class="stat-num">{{ post.likes || 0 }}</span>
                <span class="stat-label">{{ t('likes') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 发帖视图 -->
      <div v-if="currentView === 'newpost'" class="forum-newpost-view">
        <div class="view-header">
          <button class="btn btn-sm btn-outline" @click="currentView = 'list'">&larr; {{ t('back') }}</button>
          <h3>{{ t('createPost') }}</h3>
        </div>
        <div class="form-group">
          <label>{{ t('postTitle') }}</label>
          <input v-model="newPost.title" :placeholder="t('postTitlePlaceholder')" />
        </div>
        <div class="form-group">
          <label>{{ t('category') }}</label>
          <div class="category-select">
            <button
              v-for="cat in postCategories"
              :key="cat.key"
              :class="['filter-btn', { active: newPost.category === cat.key }]"
              @click="newPost.category = cat.key"
            >
              {{ cat.label }}
            </button>
          </div>
        </div>
        <div class="form-group">
          <label>{{ t('postContent') }}</label>
          <textarea v-model="newPost.content" :placeholder="t('postContentPlaceholder')" rows="10"></textarea>
        </div>
        <button class="btn btn-primary" @click="submitPost" :disabled="!newPost.title.trim() || !newPost.content.trim()">
          {{ t('publish') }}
        </button>
      </div>

      <!-- 帖子详情视图 -->
      <div v-if="currentView === 'detail' && selectedPost" class="forum-detail-view">
        <div class="view-header">
          <button class="btn btn-sm btn-outline" @click="currentView = 'list'">&larr; {{ t('back') }}</button>
        </div>
        <div class="detail-post">
          <div class="detail-header">
            <span class="post-category-tag" :class="'cat-' + selectedPost.category">{{ getCategoryLabel(selectedPost.category) }}</span>
            <h2>{{ selectedPost.title }}</h2>
            <div class="detail-meta">
              <span class="post-author">{{ selectedPost.isGuest ? t('guest') : selectedPost.author }}</span>
              <span class="post-time">{{ formatTime(selectedPost.createdAt) }}</span>
            </div>
          </div>
          <div class="detail-body" v-html="renderContent(selectedPost.content)"></div>
          <div class="detail-actions">
            <button class="btn btn-sm" :class="{ 'btn-liked': hasLiked(selectedPost.id) }" @click="toggleLike(selectedPost)">
              ❤ {{ selectedPost.likes || 0 }}
            </button>
            <button v-if="canDelete(selectedPost)" class="btn btn-sm btn-danger" @click="deletePost(selectedPost)">
              {{ t('delete') }}
            </button>
          </div>
        </div>

        <!-- 回复列表 -->
        <div class="replies-section">
          <h3>{{ t('replies') }} ({{ selectedPost.replies ? selectedPost.replies.length : 0 }})</h3>
          <div v-if="!selectedPost.replies || selectedPost.replies.length === 0" class="forum-empty">
            <p>{{ t('noReplies') }}</p>
          </div>
          <div v-for="reply in selectedPost.replies" :key="reply.id" class="reply-card">
            <div class="reply-header">
              <span class="post-author">{{ reply.isGuest ? t('guest') : reply.author }}</span>
              <span class="post-time">{{ formatTime(reply.createdAt) }}</span>
              <button v-if="canDeleteReply(reply)" class="btn-icon btn-danger-text" @click="deleteReply(selectedPost, reply)">
                {{ t('delete') }}
              </button>
            </div>
            <div class="reply-body" v-html="renderContent(reply.content)"></div>
          </div>
        </div>

        <!-- 回复框 -->
        <div class="reply-input-area">
          <textarea v-model="replyContent" :placeholder="currentUser ? t('replyPlaceholder') : t('loginToReply')" :disabled="!currentUser" rows="4"></textarea>
          <button class="btn btn-primary" @click="submitReply" :disabled="!currentUser || !replyContent.trim()">
            {{ t('submitReply') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const STORAGE_KEY_POSTS = 'cislunar-forum-posts'
const STORAGE_KEY_USER = 'cislunar-forum-user'
const STORAGE_KEY_USERS = 'cislunar-forum-users'
const STORAGE_KEY_LIKES = 'cislunar-forum-likes'

const i18n = {
  zh: {
    forumTitle: '社区论坛',
    login: '登录',
    register: '注册',
    logout: '退出',
    guest: '游客',
    guestEnter: '游客进入',
    orGuestEnter: '👉 不想注册？点击以游客身份进入',
    username: '用户名',
    usernamePlaceholder: '请输入用户名',
    password: '密码',
    passwordPlaceholder: '请输入密码',
    searchPlaceholder: '搜索帖子...',
    newPost: '发帖',
    createPost: '发布新帖',
    postTitle: '标题',
    postTitlePlaceholder: '请输入帖子标题',
    category: '分类',
    postContent: '内容',
    postContentPlaceholder: '请输入帖子内容...',
    publish: '发布',
    back: '返回',
    replies: '回复',
    likes: '赞',
    noPosts: '暂无帖子，来发布第一个吧！',
    noReplies: '暂无回复，来说两句吧~',
    replyPlaceholder: '写下你的回复...',
    loginToReply: '请先登录或以游客身份进入后回复',
    submitReply: '回复',
    delete: '删除',
    all: '全部',
    discussion: '讨论',
    question: '问答',
    sharing: '分享',
    announcement: '公告',
    loginFirst: '请先登录或以游客身份进入',
    userExists: '用户名已存在',
    wrongPassword: '密码错误',
    userNotFound: '用户不存在',
    usernameRequired: '请输入用户名',
    passwordRequired: '请输入密码',
    toolbarTitle: '社区论坛',
  },
  en: {
    forumTitle: 'Community Forum',
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    guest: 'Guest',
    guestEnter: 'Enter as Guest',
    orGuestEnter: '👉 Don\'t want to register? Click to enter as guest',
    username: 'Username',
    usernamePlaceholder: 'Enter username',
    password: 'Password',
    passwordPlaceholder: 'Enter password',
    searchPlaceholder: 'Search posts...',
    newPost: 'New Post',
    createPost: 'Create New Post',
    postTitle: 'Title',
    postTitlePlaceholder: 'Enter post title',
    category: 'Category',
    postContent: 'Content',
    postContentPlaceholder: 'Enter post content...',
    publish: 'Publish',
    back: 'Back',
    replies: 'Replies',
    likes: 'Likes',
    noPosts: 'No posts yet. Be the first to post!',
    noReplies: 'No replies yet. Say something~',
    replyPlaceholder: 'Write your reply...',
    loginToReply: 'Please login or enter as guest to reply',
    submitReply: 'Reply',
    delete: 'Delete',
    all: 'All',
    discussion: 'Discussion',
    question: 'Q&A',
    sharing: 'Sharing',
    announcement: 'Announcement',
    loginFirst: 'Please login or enter as guest first',
    userExists: 'Username already exists',
    wrongPassword: 'Wrong password',
    userNotFound: 'User not found',
    usernameRequired: 'Username is required',
    passwordRequired: 'Password is required',
    toolbarTitle: 'Community Forum',
  }
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

// Client-side password hashing (SHA-256). Not a substitute for server-side auth.
async function hashPassword(password) {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

function escapeHtml(text) {
  const div = document.createElement('div')
  div.appendChild(document.createTextNode(text))
  return div.innerHTML
}

export default {
  name: 'Forum',
  data() {
    return {
      currentUser: null,
      showLoginModal: false,
      activeTab: 'login',
      authForm: { username: '', password: '' },
      authError: '',
      posts: [],
      currentView: 'list', // list | newpost | detail
      selectedPost: null,
      searchQuery: '',
      activeCategory: 'all',
      newPost: { title: '', content: '', category: 'discussion' },
      replyContent: '',
      likedPosts: new Set(),
    }
  },
  computed: {
    lang() {
      return (typeof window !== 'undefined' && window.location.pathname.startsWith('/en/')) ? 'en' : 'zh'
    },
    categories() {
      return [
        { key: 'all', label: this.t('all') },
        ...this.postCategories,
      ]
    },
    postCategories() {
      return [
        { key: 'discussion', label: this.t('discussion') },
        { key: 'question', label: this.t('question') },
        { key: 'sharing', label: this.t('sharing') },
        { key: 'announcement', label: this.t('announcement') },
      ]
    },
    filteredPosts() {
      let list = this.posts.slice().sort((a, b) => b.createdAt - a.createdAt)
      if (this.activeCategory !== 'all') {
        list = list.filter(p => p.category === this.activeCategory)
      }
      if (this.searchQuery.trim()) {
        const q = this.searchQuery.trim().toLowerCase()
        list = list.filter(p =>
          p.title.toLowerCase().includes(q) ||
          p.content.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q)
        )
      }
      return list
    }
  },
  mounted() {
    this.loadUser()
    this.loadPosts()
    this.loadLikes()
  },
  methods: {
    t(key) {
      return (i18n[this.lang] && i18n[this.lang][key]) || key
    },
    // ---- 持久化 ----
    loadUser() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY_USER)
        if (raw) this.currentUser = JSON.parse(raw)
      } catch (e) { /* ignore */ }
    },
    saveUser() {
      try {
        if (this.currentUser) {
          localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(this.currentUser))
        } else {
          localStorage.removeItem(STORAGE_KEY_USER)
        }
      } catch (e) { /* ignore */ }
    },
    loadPosts() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY_POSTS)
        if (raw) this.posts = JSON.parse(raw)
      } catch (e) { /* ignore */ }
    },
    savePosts() {
      try {
        localStorage.setItem(STORAGE_KEY_POSTS, JSON.stringify(this.posts))
      } catch (e) { /* ignore */ }
    },
    loadLikes() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY_LIKES)
        if (raw) this.likedPosts = new Set(JSON.parse(raw))
      } catch (e) { /* ignore */ }
    },
    saveLikes() {
      try {
        localStorage.setItem(STORAGE_KEY_LIKES, JSON.stringify([...this.likedPosts]))
      } catch (e) { /* ignore */ }
    },
    getUsers() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY_USERS)
        return raw ? JSON.parse(raw) : {}
      } catch (e) { return {} }
    },
    saveUsers(users) {
      try {
        localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users))
      } catch (e) { /* ignore */ }
    },
    // ---- 认证 ----
    async handleAuth() {
      this.authError = ''
      const { username, password } = this.authForm
      if (!username.trim()) {
        this.authError = this.t('usernameRequired')
        return
      }
      if (!password.trim()) {
        this.authError = this.t('passwordRequired')
        return
      }
      const users = this.getUsers()
      if (this.activeTab === 'register') {
        if (users[username]) {
          this.authError = this.t('userExists')
          return
        }
        const hashed = await hashPassword(password)
        users[username] = { password: hashed, createdAt: Date.now() }
        this.saveUsers(users)
        this.currentUser = { id: generateId(), username, isGuest: false }
        this.saveUser()
        this.showLoginModal = false
        this.authForm = { username: '', password: '' }
      } else {
        if (!users[username]) {
          this.authError = this.t('userNotFound')
          return
        }
        const hashed = await hashPassword(password)
        if (users[username].password !== hashed) {
          this.authError = this.t('wrongPassword')
          return
        }
        this.currentUser = { id: generateId(), username, isGuest: false }
        this.saveUser()
        this.showLoginModal = false
        this.authForm = { username: '', password: '' }
      }
    },
    enterAsGuest() {
      this.currentUser = { id: generateId(), username: 'Guest_' + Math.random().toString(36).slice(2, 6), isGuest: true }
      this.saveUser()
    },
    logout() {
      this.currentUser = null
      this.saveUser()
    },
    // ---- 帖子操作 ----
    openNewPost() {
      if (!this.currentUser) {
        this.showLoginModal = true
        return
      }
      this.newPost = { title: '', content: '', category: 'discussion' }
      this.currentView = 'newpost'
    },
    submitPost() {
      if (!this.currentUser) return
      const post = {
        id: generateId(),
        title: this.newPost.title.trim(),
        content: this.newPost.content.trim(),
        category: this.newPost.category,
        author: this.currentUser.username,
        authorId: this.currentUser.id,
        isGuest: this.currentUser.isGuest,
        createdAt: Date.now(),
        likes: 0,
        replies: [],
      }
      this.posts.push(post)
      this.savePosts()
      this.currentView = 'list'
    },
    openPost(post) {
      this.selectedPost = post
      this.replyContent = ''
      this.currentView = 'detail'
    },
    submitReply() {
      if (!this.currentUser || !this.replyContent.trim() || !this.selectedPost) return
      const reply = {
        id: generateId(),
        content: this.replyContent.trim(),
        author: this.currentUser.username,
        authorId: this.currentUser.id,
        isGuest: this.currentUser.isGuest,
        createdAt: Date.now(),
      }
      if (!this.selectedPost.replies) this.selectedPost.replies = []
      this.selectedPost.replies.push(reply)
      this.replyContent = ''
      this.savePosts()
    },
    toggleLike(post) {
      if (this.likedPosts.has(post.id)) {
        this.likedPosts.delete(post.id)
        post.likes = Math.max(0, (post.likes || 0) - 1)
      } else {
        this.likedPosts.add(post.id)
        post.likes = (post.likes || 0) + 1
      }
      this.saveLikes()
      this.savePosts()
    },
    hasLiked(postId) {
      return this.likedPosts.has(postId)
    },
    canDelete(post) {
      return this.currentUser && !this.currentUser.isGuest && this.currentUser.username === post.author
    },
    canDeleteReply(reply) {
      return this.currentUser && !this.currentUser.isGuest && this.currentUser.username === reply.author
    },
    deletePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
      this.savePosts()
      this.currentView = 'list'
    },
    deleteReply(post, reply) {
      post.replies = post.replies.filter(r => r.id !== reply.id)
      this.savePosts()
    },
    // ---- 工具方法 ----
    getCategoryLabel(key) {
      const cat = this.postCategories.find(c => c.key === key)
      return cat ? cat.label : key
    },
    getPreview(content) {
      const text = content.replace(/\n/g, ' ')
      return text.length > 120 ? text.slice(0, 120) + '...' : text
    },
    formatTime(ts) {
      if (!ts) return ''
      const d = new Date(ts)
      const now = new Date()
      const diff = now - d
      if (diff < 60000) return this.lang === 'zh' ? '刚刚' : 'Just now'
      if (diff < 3600000) return Math.floor(diff / 60000) + (this.lang === 'zh' ? ' 分钟前' : 'm ago')
      if (diff < 86400000) return Math.floor(diff / 3600000) + (this.lang === 'zh' ? ' 小时前' : 'h ago')
      if (diff < 604800000) return Math.floor(diff / 86400000) + (this.lang === 'zh' ? ' 天前' : 'd ago')
      return d.toLocaleDateString()
    },
    renderContent(content) {
      return escapeHtml(content).replace(/\n/g, '<br>')
    },
  }
}
</script>

<style scoped>
.forum-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* 顶部栏 */
.forum-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 1.5rem;
}
.forum-topbar-left { display: flex; align-items: center; gap: 1rem; }
.forum-topbar-right { display: flex; align-items: center; gap: 0.5rem; }
.forum-title { font-size: 1.4rem; font-weight: 700; color: #1a1a2e; }
.user-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  background: #3eaf7c;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 500;
}
.guest-badge { background: #909399; }

/* 按钮 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  line-height: 1.4;
}
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
.btn-sm { padding: 0.3rem 0.8rem; font-size: 0.82rem; }
.btn-primary { background: #3eaf7c; color: #fff; }
.btn-primary:hover:not(:disabled) { background: #359e6e; }
.btn-outline { background: transparent; border: 1px solid #dcdfe6; color: #606266; }
.btn-outline:hover:not(:disabled) { border-color: #3eaf7c; color: #3eaf7c; }
.btn-block { width: 100%; }
.btn-danger { background: #f56c6c; color: #fff; }
.btn-danger:hover:not(:disabled) { background: #e64d4d; }
.btn-liked { background: #f56c6c; color: #fff; }
.btn-icon { background: none; border: none; cursor: pointer; font-size: 0.82rem; padding: 0.1rem 0.4rem; }
.btn-danger-text { color: #f56c6c; }
.btn-danger-text:hover { color: #e64d4d; text-decoration: underline; }

/* 弹窗 */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-box {
  background: #fff;
  border-radius: 12px;
  width: 380px;
  max-width: 90vw;
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
  overflow: hidden;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.5rem 0.5rem;
}
.modal-header h3 { margin: 0; font-size: 1.2rem; color: #1a1a2e; }
.modal-close {
  background: none; border: none; font-size: 1.5rem; color: #999; cursor: pointer;
  line-height: 1;
}
.modal-close:hover { color: #333; }
.modal-tabs {
  display: flex;
  padding: 0 1.5rem;
  gap: 0;
  border-bottom: 1px solid #e8e8e8;
}
.modal-tabs button {
  flex: 1;
  background: none;
  border: none;
  padding: 0.75rem 0;
  font-size: 0.9rem;
  color: #909399;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}
.modal-tabs button.active { color: #3eaf7c; border-bottom-color: #3eaf7c; font-weight: 600; }
.modal-body { padding: 1.2rem 1.5rem 1.5rem; }
.form-group { margin-bottom: 1rem; }
.form-group label { display: block; font-size: 0.85rem; color: #606266; margin-bottom: 0.4rem; font-weight: 500; }
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.6rem 0.8rem;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}
.form-group input:focus,
.form-group textarea:focus { border-color: #3eaf7c; }
.auth-error { color: #f56c6c; font-size: 0.82rem; margin: 0.5rem 0; }
.guest-hint {
  text-align: center;
  margin-top: 1rem;
  color: #909399;
  font-size: 0.85rem;
  cursor: pointer;
  transition: color 0.2s;
}
.guest-hint:hover { color: #3eaf7c; }

/* 控制栏 */
.forum-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
.forum-search { flex: 1; min-width: 180px; }
.forum-search input {
  width: 100%;
  padding: 0.5rem 0.8rem;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
  font-size: 0.9rem;
  outline: none;
  box-sizing: border-box;
}
.forum-search input:focus { border-color: #3eaf7c; }
.forum-filters { display: flex; gap: 0.4rem; flex-wrap: wrap; }
.filter-btn {
  padding: 0.35rem 0.8rem;
  border: 1px solid #e8e8e8;
  border-radius: 20px;
  background: #fff;
  font-size: 0.82rem;
  color: #606266;
  cursor: pointer;
  transition: all 0.2s;
}
.filter-btn:hover { border-color: #3eaf7c; color: #3eaf7c; }
.filter-btn.active { background: #3eaf7c; color: #fff; border-color: #3eaf7c; }

/* 空状态 */
.forum-empty { text-align: center; padding: 3rem 0; color: #909399; }

/* 帖子列表 */
.post-list { display: flex; flex-direction: column; gap: 0.8rem; }
.post-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.5rem;
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  background: #fff;
}
.post-card:hover { border-color: #3eaf7c; box-shadow: 0 2px 12px rgba(62,175,124,0.08); }
.post-card-left { flex: 1; min-width: 0; }
.post-card-title { margin: 0.4rem 0 0.3rem; font-size: 1.05rem; color: #1a1a2e; font-weight: 600; }
.post-card-preview { margin: 0; font-size: 0.85rem; color: #909399; line-height: 1.5; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.post-card-meta { margin-top: 0.5rem; font-size: 0.78rem; color: #c0c4cc; display: flex; gap: 0.8rem; }
.post-card-right { display: flex; gap: 1.5rem; margin-left: 1.5rem; text-align: center; flex-shrink: 0; }
.post-stat { display: flex; flex-direction: column; gap: 0.1rem; }
.stat-num { font-size: 1.1rem; font-weight: 600; color: #606266; }
.stat-label { font-size: 0.72rem; color: #c0c4cc; }

/* 分类标签 */
.post-category-tag {
  display: inline-block;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  font-size: 0.72rem;
  font-weight: 500;
}
.cat-discussion { background: #ecf5ff; color: #409eff; }
.cat-question { background: #fdf6ec; color: #e6a23c; }
.cat-sharing { background: #f0f9eb; color: #67c23a; }
.cat-announcement { background: #fef0f0; color: #f56c6c; }

/* 发帖 */
.view-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
.view-header h3 { margin: 0; }
.category-select { display: flex; gap: 0.4rem; flex-wrap: wrap; }
.forum-newpost-view textarea {
  resize: vertical;
  min-height: 200px;
}

/* 帖子详情 */
.detail-post {
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}
.detail-header { margin-bottom: 1rem; }
.detail-header h2 { margin: 0.5rem 0; font-size: 1.4rem; color: #1a1a2e; }
.detail-meta { font-size: 0.82rem; color: #c0c4cc; display: flex; gap: 0.8rem; }
.detail-body { line-height: 1.8; color: #303133; font-size: 0.95rem; padding: 1rem 0; border-top: 1px solid #f2f2f2; }
.detail-actions { display: flex; gap: 0.5rem; padding-top: 0.8rem; border-top: 1px solid #f2f2f2; }

/* 回复 */
.replies-section { margin-bottom: 2rem; }
.replies-section h3 { font-size: 1.1rem; color: #1a1a2e; margin-bottom: 1rem; }
.reply-card {
  padding: 1rem 1.2rem;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  margin-bottom: 0.6rem;
  background: #fafafa;
}
.reply-header { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 0.5rem; font-size: 0.82rem; }
.reply-body { line-height: 1.7; color: #303133; font-size: 0.9rem; }
.post-author { font-weight: 600; color: #3eaf7c; }
.post-time { color: #c0c4cc; }

/* 回复输入 */
.reply-input-area { display: flex; gap: 0.8rem; align-items: flex-end; }
.reply-input-area textarea {
  flex: 1;
  padding: 0.6rem 0.8rem;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
  font-size: 0.9rem;
  outline: none;
  resize: vertical;
  font-family: inherit;
  box-sizing: border-box;
}
.reply-input-area textarea:focus { border-color: #3eaf7c; }

/* 响应式 */
@media (max-width: 640px) {
  .forum-controls { flex-direction: column; align-items: stretch; }
  .forum-search { min-width: unset; }
  .post-card { flex-direction: column; align-items: flex-start; }
  .post-card-right { flex-direction: row; margin-left: 0; margin-top: 0.8rem; gap: 1.5rem; }
  .reply-input-area { flex-direction: column; }
  .forum-topbar { flex-direction: column; gap: 0.8rem; align-items: flex-start; }
}
</style>
