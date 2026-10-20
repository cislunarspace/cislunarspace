<template>
  <section class="subscribe-card">
    <div class="subscribe-card__inner">
      <p class="subscribe-card__desc">
        每天一封邮件，从本站收录的论文里挑一个学术词，给出音标、释义、论文原文例句与三个造句任务。适合地月空间、轨道动力学方向的研究与写作练习。
      </p>
      <form class="subscribe-card__form" @submit.prevent="submit">
        <label class="subscribe-card__label" for="subscribe-email">邮箱地址</label>
        <div class="subscribe-card__row">
          <input
            id="subscribe-email"
            v-model.trim="email"
            class="subscribe-card__input"
            type="email"
            name="email"
            autocomplete="email"
            inputmode="email"
            placeholder="you@example.com"
            required
            :disabled="submitting"
          />
          <button class="subscribe-card__button" type="submit" :disabled="submitting">
            {{ submitting ? '提交中' : '订阅' }}
          </button>
        </div>
      </form>
      <p class="subscribe-card__note">
        提交后会收到一封确认信，点过确认链接才算订阅完成。每封邮件都带退订链接，随时可以退出。
      </p>
      <p v-if="message" class="subscribe-card__message" :class="`is-${status}`" role="status">
        {{ message }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type Status = 'idle' | 'done' | 'error';

const email = ref('');
const submitting = ref(false);
const status = ref<Status>('idle');
const message = ref('');

async function submit() {
  if (submitting.value) return;
  submitting.value = true;
  status.value = 'idle';
  message.value = '';
  try {
    const res = await fetch('/api/sub/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, topic: 'daily-word' }),
    });
    const data = (await res.json().catch(() => ({}))) as {
      message?: string;
      detail?: string;
    };
    if (res.ok) {
      status.value = 'done';
      message.value = data.message || '确认信已发出，请到邮箱点确认链接。';
      email.value = '';
    } else {
      status.value = 'error';
      message.value = data.detail || data.message || '提交失败，请稍后再试。';
    }
  } catch {
    status.value = 'error';
    message.value = '网络异常，请稍后再试。';
  } finally {
    submitting.value = false;
  }
}
</script>

<style scoped>
.subscribe-card {
  margin: 2rem 0;
  border: 1px solid var(--c-border, #e5e7eb);
  border-radius: 10px;
  background: var(--c-bg-light, #f8f9fa);
}

.subscribe-card__inner {
  padding: 1.4rem 1.5rem;
}

.subscribe-card__desc {
  margin: 0 0 1rem;
  line-height: 1.75;
  color: var(--c-text, #2c3e50);
  font-size: 0.95rem;
}

.subscribe-card__label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.85rem;
  color: var(--c-text-lighter, #64748b);
}

.subscribe-card__row {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.subscribe-card__input {
  flex: 1 1 16rem;
  min-width: 0;
  padding: 0.55rem 0.75rem;
  border: 1px solid var(--c-border, #d0d7de);
  border-radius: 6px;
  font-size: 0.95rem;
  background: var(--c-bg, #fff);
  color: var(--c-text, #2c3e50);
}

.subscribe-card__input:focus {
  outline: none;
  border-color: var(--c-brand, #0d9488);
}

.subscribe-card__button {
  padding: 0.55rem 1.3rem;
  border: none;
  border-radius: 6px;
  background: var(--c-brand, #0d9488);
  color: #fff;
  font-size: 0.95rem;
  cursor: pointer;
}

.subscribe-card__button:disabled {
  opacity: 0.65;
  cursor: default;
}

.subscribe-card__note {
  margin: 0.7rem 0 0;
  font-size: 0.82rem;
  line-height: 1.7;
  color: var(--c-text-lighter, #64748b);
}

.subscribe-card__message {
  margin: 0.6rem 0 0;
  font-size: 0.88rem;
  line-height: 1.7;
}

.subscribe-card__message.is-done {
  color: #0f766e;
}

.subscribe-card__message.is-error {
  color: #b91c1c;
}
</style>
