<template>
  <div class="forum-container" :aria-label="t('forumAriaLabel')">
    <header class="forum-hero">
      <p class="forum-hero-eyebrow">{{ t('forumEyebrow') }}</p>
      <h1 class="forum-hero-title">{{ t('forumTitle') }}</h1>
      <p class="forum-hero-desc">{{ t('forumIntro') }}</p>
    </header>

    <p class="forum-local-hint">{{ t('localDataHint') }}</p>

    <div class="forum-topbar">
      <div class="forum-topbar-left">
        <span class="forum-topbar-label">{{ t('sessionLabel') }}</span>
      </div>
      <div class="forum-topbar-right">
        <template v-if="currentUser">
          <span class="user-badge" :class="{ 'guest-badge': currentUser.isGuest }">
            {{ currentUser.isGuest ? t('guest') : currentUser.username }}
          </span>
          <button type="button" class="btn btn-sm btn-outline" @click="logout">
            {{ t('logout') }}
          </button>
        </template>
        <template v-else>
          <button type="button" class="btn btn-sm btn-primary" @click="openLoginModal">
            {{ t('login') }}
          </button>
          <button type="button" class="btn btn-sm btn-outline" @click="enterAsGuest">
            {{ t('guestEnter') }}
          </button>
        </template>
      </div>
    </div>

    <div
      v-if="showLoginModal"
      class="modal-overlay"
      role="presentation"
      @click.self="showLoginModal = false"
    >
      <div
        class="modal-box"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="modalTitleId"
      >
        <div class="modal-header">
          <h3 :id="modalTitleId">{{ activeTab === 'login' ? t('login') : t('register') }}</h3>
          <button
            type="button"
            class="modal-close"
            :aria-label="t('closeModal')"
            @click="showLoginModal = false"
          >
            &times;
          </button>
        </div>
        <div class="modal-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            :aria-selected="activeTab === 'login'"
            :class="{ active: activeTab === 'login' }"
            @click="activeTab = 'login'"
          >
            {{ t('login') }}
          </button>
          <button
            type="button"
            role="tab"
            :aria-selected="activeTab === 'register'"
            :class="{ active: activeTab === 'register' }"
            @click="activeTab = 'register'"
          >
            {{ t('register') }}
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="forum-auth-user">{{ t('username') }}</label>
            <input
              id="forum-auth-user"
              v-model="authForm.username"
              autocomplete="username"
              :placeholder="t('usernamePlaceholder')"
              @keydown.enter="onAuthEnter"
            />
          </div>
          <div class="form-group">
            <label for="forum-auth-pass">{{ t('password') }}</label>
            <input
              id="forum-auth-pass"
              v-model="authForm.password"
              type="password"
              autocomplete="current-password"
              :placeholder="t('passwordPlaceholder')"
              @keydown.enter="onAuthEnter"
            />
          </div>
          <p v-if="authError" class="auth-error">{{ authError }}</p>
          <button type="button" class="btn btn-primary btn-block" @click="runAuth">
            {{ activeTab === 'login' ? t('login') : t('register') }}
          </button>
          <p class="guest-hint" role="button" tabindex="0" @click="guestFromModal" @keydown.enter.prevent="guestFromModal">
            {{ t('orGuestEnter') }}
          </p>
        </div>
      </div>
    </div>

    <div class="forum-main">
      <div v-if="currentView === 'list'" class="forum-list-view">
        <div class="forum-controls">
          <div class="forum-search">
            <label class="sr-only" for="forum-search-input">{{ t('searchPlaceholder') }}</label>
            <input
              id="forum-search-input"
              v-model="searchQuery"
              type="search"
              :placeholder="t('searchPlaceholder')"
            />
          </div>
          <div class="forum-filters" role="group" :aria-label="t('category')">
            <button
              v-for="cat in categories"
              :key="cat.key"
              type="button"
              :class="['filter-btn', { active: activeCategory === cat.key }]"
              @click="activeCategory = cat.key"
            >
              {{ cat.label }}
            </button>
          </div>
          <button type="button" class="btn btn-primary" @click="openNewPost">
            {{ t('newPost') }}
          </button>
        </div>

        <div v-if="filteredPosts.length === 0" class="forum-empty">
          <p>{{ t('noPosts') }}</p>
        </div>

        <div v-else class="post-list">
          <div
            v-for="post in filteredPosts"
            :key="post.id"
            class="post-card"
            role="button"
            tabindex="0"
            @click="openPost(post)"
            @keydown.enter.prevent="openPost(post)"
          >
            <div class="post-card-left">
              <span class="post-category-tag" :class="'cat-' + post.category">{{
                getCategoryLabel(post.category)
              }}</span>
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

      <div v-if="currentView === 'newpost'" class="forum-newpost-view">
        <div class="view-header">
          <button type="button" class="btn btn-sm btn-outline" @click="currentView = 'list'">
            &larr; {{ t('back') }}
          </button>
          <h3>{{ t('createPost') }}</h3>
        </div>
        <div class="form-group">
          <label for="forum-new-title">{{ t('postTitle') }}</label>
          <input id="forum-new-title" v-model="newPost.title" :placeholder="t('postTitlePlaceholder')" />
        </div>
        <div class="form-group">
          <span class="form-label-block">{{ t('category') }}</span>
          <div class="category-select" role="group">
            <button
              v-for="cat in postCategories"
              :key="cat.key"
              type="button"
              :class="['filter-btn', { active: newPost.category === cat.key }]"
              @click="newPost.category = cat.key"
            >
              {{ cat.label }}
            </button>
          </div>
        </div>
        <div class="form-group">
          <label for="forum-new-body">{{ t('postContent') }}</label>
          <textarea
            id="forum-new-body"
            v-model="newPost.content"
            :placeholder="t('postContentPlaceholder')"
            rows="10"
          />
        </div>
        <button
          type="button"
          class="btn btn-primary"
          :disabled="!newPost.title.trim() || !newPost.content.trim()"
          @click="onSubmitPost"
        >
          {{ t('publish') }}
        </button>
      </div>

      <div v-if="currentView === 'detail' && selectedPost" class="forum-detail-view">
        <div class="view-header">
          <button type="button" class="btn btn-sm btn-outline" @click="goList">&larr; {{ t('back') }}</button>
        </div>
        <div class="detail-post">
          <div class="detail-header">
            <span class="post-category-tag" :class="'cat-' + selectedPost.category">{{
              getCategoryLabel(selectedPost.category)
            }}</span>
            <h2>{{ selectedPost.title }}</h2>
            <div class="detail-meta">
              <span class="post-author">{{ selectedPost.isGuest ? t('guest') : selectedPost.author }}</span>
              <span class="post-time">{{ formatTime(selectedPost.createdAt) }}</span>
            </div>
          </div>
          <div class="detail-body" v-html="renderContent(selectedPost.content)" />
          <div class="detail-actions">
            <button
              type="button"
              class="btn btn-sm"
              :class="{ 'btn-liked': hasLiked(selectedPost.id) }"
              @click="toggleLike(selectedPost)"
            >
              {{ hasLiked(selectedPost.id) ? '♥' : '♡' }} {{ selectedPost.likes || 0 }}
            </button>
            <button
              v-if="canDeletePost(selectedPost)"
              type="button"
              class="btn btn-sm btn-danger"
              @click="onDeletePost(selectedPost)"
            >
              {{ t('delete') }}
            </button>
          </div>
        </div>

        <div class="replies-section">
          <h3>{{ t('replies') }} ({{ selectedPost.replies ? selectedPost.replies.length : 0 }})</h3>
          <div v-if="!selectedPost.replies || selectedPost.replies.length === 0" class="forum-empty">
            <p>{{ t('noReplies') }}</p>
          </div>
          <div v-for="reply in selectedPost.replies" :key="reply.id" class="reply-card">
            <div class="reply-header">
              <span class="post-author">{{ reply.isGuest ? t('guest') : reply.author }}</span>
              <span class="post-time">{{ formatTime(reply.createdAt) }}</span>
              <button
                v-if="canDeleteReply(reply)"
                type="button"
                class="btn-icon btn-danger-text"
                @click="deleteReply(selectedPost, reply)"
              >
                {{ t('delete') }}
              </button>
            </div>
            <div class="reply-body" v-html="renderContent(reply.content)" />
          </div>
        </div>

        <div class="reply-input-area">
          <label class="sr-only" for="forum-reply">{{ t('replyPlaceholder') }}</label>
          <textarea
            id="forum-reply"
            v-model="replyContent"
            :placeholder="currentUser ? t('replyPlaceholder') : t('loginToReply')"
            :disabled="!currentUser"
            rows="4"
          />
          <button
            type="button"
            class="btn btn-primary"
            :disabled="!currentUser || !replyContent.trim()"
            @click="onSubmitReply"
          >
            {{ t('submitReply') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import type { ForumPost } from '../composables/useForum'
import { useForum } from '../composables/useForum'

const modalTitleId = 'forum-modal-title'

const {
  t,
  currentUser,
  posts,
  postCategories,
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
  handleAuth,
} = useForum()

const showLoginModal = ref(false)
const activeTab = ref<'login' | 'register'>('login')
const authForm = ref({ username: '', password: '' })
const authError = ref('')

const currentView = ref<'list' | 'newpost' | 'detail'>('list')
const selectedPost = ref<ForumPost | null>(null)
const searchQuery = ref('')
const activeCategory = ref('all')
const newPost = ref({ title: '', content: '', category: 'discussion' })
const replyContent = ref('')

const categories = computed(() => [{ key: 'all', label: t('all') }, ...postCategories.value])

const filteredPosts = computed(() => {
  let list = posts.value.slice().sort((a, b) => b.createdAt - a.createdAt)
  if (activeCategory.value !== 'all') {
    list = list.filter((p) => p.category === activeCategory.value)
  }
  const q = searchQuery.value.trim().toLowerCase()
  if (q) {
    list = list.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q),
    )
  }
  return list
})

function openLoginModal() {
  showLoginModal.value = true
  authError.value = ''
}

function onModalEscape(e: KeyboardEvent) {
  if (e.key === 'Escape' && showLoginModal.value) {
    showLoginModal.value = false
  }
}

function openNewPost() {
  if (!currentUser.value) {
    openLoginModal()
    return
  }
  newPost.value = { title: '', content: '', category: 'discussion' }
  currentView.value = 'newpost'
}

async function runAuth() {
  authError.value = ''
  const err = await handleAuth(activeTab.value, authForm.value.username, authForm.value.password)
  if (err) {
    authError.value = err
    return
  }
  showLoginModal.value = false
  authForm.value = { username: '', password: '' }
}

function onAuthEnter() {
  void runAuth()
}

function guestFromModal() {
  enterAsGuest()
  showLoginModal.value = false
}

function openPost(post: ForumPost) {
  selectedPost.value = post
  replyContent.value = ''
  currentView.value = 'detail'
}

function goList() {
  currentView.value = 'list'
  selectedPost.value = null
}

function onSubmitPost() {
  submitPost(newPost.value)
  currentView.value = 'list'
}

function onSubmitReply() {
  if (!selectedPost.value) return
  submitReply(selectedPost.value, replyContent.value)
  replyContent.value = ''
}

function onDeletePost(post: ForumPost) {
  deletePost(post)
  goList()
}

onMounted(() => {
  init()
  window.addEventListener('keydown', onModalEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onModalEscape)
})
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.forum-container {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0 0 2rem;
  font-family: var(--font-family);
  color: var(--c-text);
}

.forum-hero {
  margin-bottom: 1.25rem;
  padding: 1.25rem 0 1.5rem;
  border-bottom: 1px solid var(--c-border);
}
.forum-hero-eyebrow {
  margin: 0 0 0.35rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-brand);
}
.forum-hero-title {
  margin: 0 0 0.5rem;
  font-family: var(--font-family-heading);
  font-size: clamp(1.5rem, 4vw, 1.85rem);
  font-weight: 700;
  color: var(--c-text);
  line-height: 1.25;
}
.forum-hero-desc {
  margin: 0;
  max-width: 52rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--c-text-light);
}

.forum-local-hint {
  margin: 0 0 1.25rem;
  padding: 0.65rem 0.9rem;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--c-text-lighter);
  background: var(--c-accent-soft);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-sm);
}

.forum-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  margin-bottom: 1.5rem;
  gap: 0.75rem;
  background: var(--c-bg-light);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}
.forum-topbar-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.forum-topbar-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.forum-topbar-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--c-text-lighter);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.user-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-pill);
  background: var(--c-brand);
  color: var(--vp-c-accent-text, #fff);
  font-size: 0.85rem;
  font-weight: 500;
}
.guest-badge {
  background: var(--c-text-lighter);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background var(--vp-t-color), border-color var(--vp-t-color), color var(--vp-t-color);
  line-height: 1.4;
}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.btn-sm {
  padding: 0.3rem 0.8rem;
  font-size: 0.82rem;
}
.btn-primary {
  background: var(--c-brand);
  color: var(--vp-c-accent-text, #fff);
}
.btn-primary:hover:not(:disabled) {
  background: var(--c-brand-dark);
}
.btn-outline {
  background: transparent;
  border: 1px solid var(--c-border-dark);
  color: var(--c-text-light);
}
.btn-outline:hover:not(:disabled) {
  border-color: var(--c-brand);
  color: var(--c-brand);
}
.btn-block {
  width: 100%;
}
.btn-danger {
  background: #dc2626;
  color: #fff;
}
.btn-danger:hover:not(:disabled) {
  background: #b91c1c;
}
.btn-liked {
  background: var(--c-accent-soft);
  color: var(--c-brand);
  border: 1px solid var(--c-border-dark);
}
.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.82rem;
  padding: 0.1rem 0.4rem;
  margin-left: auto;
  color: inherit;
}
.btn-danger-text {
  color: #dc2626;
}
.btn-danger-text:hover {
  text-decoration: underline;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgb(0 0 0 / 45%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}
.modal-box {
  background: var(--c-bg-light);
  border-radius: var(--radius-md);
  width: 380px;
  max-width: 100%;
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  border: 1px solid var(--c-border);
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.5rem 0.5rem;
}
.modal-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--c-text);
}
.modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--c-text-lighter);
  cursor: pointer;
  line-height: 1;
}
.modal-close:hover {
  color: var(--c-text);
}
.modal-tabs {
  display: flex;
  padding: 0 1.5rem;
  gap: 0;
  border-bottom: 1px solid var(--c-border);
}
.modal-tabs button {
  flex: 1;
  background: none;
  border: none;
  padding: 0.75rem 0;
  font-size: 0.9rem;
  color: var(--c-text-lighter);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: color var(--vp-t-color), border-color var(--vp-t-color);
}
.modal-tabs button.active {
  color: var(--c-brand);
  border-bottom-color: var(--c-brand);
  font-weight: 600;
}
.modal-body {
  padding: 1.2rem 1.5rem 1.5rem;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label,
.form-label-block {
  display: block;
  font-size: 0.85rem;
  color: var(--c-text-light);
  margin-bottom: 0.4rem;
  font-weight: 500;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.6rem 0.8rem;
  border: 1px solid var(--c-border-dark);
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  outline: none;
  transition: border-color var(--vp-t-color);
  box-sizing: border-box;
  background: var(--c-bg-light);
  color: var(--c-text);
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--c-brand);
}
.auth-error {
  color: #dc2626;
  font-size: 0.82rem;
  margin: 0.5rem 0;
}
.guest-hint {
  text-align: center;
  margin-top: 1rem;
  color: var(--c-text-lighter);
  font-size: 0.85rem;
  cursor: pointer;
  transition: color var(--vp-t-color);
}
.guest-hint:hover {
  color: var(--c-brand);
}

.forum-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
.forum-search {
  flex: 1;
  min-width: 180px;
}
.forum-search input {
  width: 100%;
  padding: 0.5rem 0.8rem;
  border: 1px solid var(--c-border-dark);
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  outline: none;
  box-sizing: border-box;
  background: var(--c-bg-light);
  color: var(--c-text);
}
.forum-search input:focus {
  border-color: var(--c-brand);
}
.forum-filters {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}
.filter-btn {
  padding: 0.35rem 0.8rem;
  border: 1px solid var(--c-border);
  border-radius: var(--radius-pill);
  background: var(--c-bg-light);
  font-size: 0.82rem;
  color: var(--c-text-light);
  cursor: pointer;
  transition: border-color var(--vp-t-color), color var(--vp-t-color), background var(--vp-t-color);
}
.filter-btn:hover {
  border-color: var(--c-brand);
  color: var(--c-brand);
}
.filter-btn.active {
  background: var(--c-brand);
  color: var(--vp-c-accent-text, #fff);
  border-color: var(--c-brand);
}

.forum-empty {
  text-align: center;
  padding: 3rem 0;
  color: var(--c-text-lighter);
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.post-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.5rem;
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: border-color var(--vp-t-color), box-shadow var(--vp-t-color);
  background: var(--c-bg-light);
}
.post-card:hover,
.post-card:focus {
  outline: none;
  border-color: var(--c-brand);
  box-shadow: var(--shadow-md);
}
.post-card-left {
  flex: 1;
  min-width: 0;
}
.post-card-title {
  margin: 0.4rem 0 0.3rem;
  font-size: 1.05rem;
  color: var(--c-text);
  font-weight: 600;
}
.post-card-preview {
  margin: 0;
  font-size: 0.85rem;
  color: var(--c-text-lighter);
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.post-card-meta {
  margin-top: 0.5rem;
  font-size: 0.78rem;
  color: var(--c-text-quote);
  display: flex;
  gap: 0.8rem;
}
.post-card-right {
  display: flex;
  gap: 1.5rem;
  margin-left: 1.5rem;
  text-align: center;
  flex-shrink: 0;
}
.post-stat {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}
.stat-num {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--c-text-light);
}
.stat-label {
  font-size: 0.72rem;
  color: var(--c-text-quote);
}

.post-category-tag {
  display: inline-block;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  font-size: 0.72rem;
  font-weight: 500;
}
.cat-discussion {
  background: var(--vp-c-accent-soft);
  color: var(--c-brand);
}
.cat-question {
  background: rgba(234, 179, 8, 0.15);
  color: #ca8a04;
}
.cat-sharing {
  background: rgba(34, 197, 94, 0.15);
  color: #16a34a;
}
.cat-announcement {
  background: rgba(220, 38, 38, 0.12);
  color: #dc2626;
}

.view-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.view-header h3 {
  margin: 0;
}
.category-select {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}
.forum-newpost-view textarea {
  resize: vertical;
  min-height: 200px;
}

.detail-post {
  background: var(--c-bg-light);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  margin-bottom: 2rem;
}
.detail-header {
  margin-bottom: 1rem;
}
.detail-header h2 {
  margin: 0.5rem 0;
  font-size: 1.4rem;
  color: var(--c-text);
}
.detail-meta {
  font-size: 0.82rem;
  color: var(--c-text-quote);
  display: flex;
  gap: 0.8rem;
}
.detail-body {
  line-height: 1.8;
  color: var(--c-text);
  font-size: 0.95rem;
  padding: 1rem 0;
  border-top: 1px solid var(--c-border);
}
.detail-actions {
  display: flex;
  gap: 0.5rem;
  padding-top: 0.8rem;
  border-top: 1px solid var(--c-border);
}

.replies-section {
  margin-bottom: 2rem;
}
.replies-section h3 {
  font-size: 1.1rem;
  color: var(--c-text);
  margin-bottom: 1rem;
}
.reply-card {
  padding: 1rem 1.2rem;
  border: 1px solid var(--c-border);
  border-radius: var(--radius-sm);
  margin-bottom: 0.6rem;
  background: var(--c-bg-lighter);
}
.reply-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.5rem;
  font-size: 0.82rem;
}
.reply-body {
  line-height: 1.7;
  color: var(--c-text);
  font-size: 0.9rem;
}
.post-author {
  font-weight: 600;
  color: var(--c-brand);
}
.post-time {
  color: var(--c-text-quote);
}

.reply-input-area {
  display: flex;
  gap: 0.8rem;
  align-items: flex-end;
}
.reply-input-area textarea {
  flex: 1;
  padding: 0.6rem 0.8rem;
  border: 1px solid var(--c-border-dark);
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  outline: none;
  resize: vertical;
  font-family: inherit;
  box-sizing: border-box;
  background: var(--c-bg-light);
  color: var(--c-text);
}
.reply-input-area textarea:focus {
  border-color: var(--c-brand);
}

@media (max-width: 640px) {
  .forum-controls {
    flex-direction: column;
    align-items: stretch;
  }
  .forum-search {
    min-width: unset;
  }
  .post-card {
    flex-direction: column;
    align-items: flex-start;
  }
  .post-card-right {
    flex-direction: row;
    margin-left: 0;
    margin-top: 0.8rem;
    gap: 1.5rem;
  }
  .reply-input-area {
    flex-direction: column;
  }
  .forum-topbar {
    flex-direction: column;
    align-items: stretch;
  }
  .forum-topbar-right {
    justify-content: flex-start;
  }
}
</style>
