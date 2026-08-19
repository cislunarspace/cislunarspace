import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import { computed, defineComponent, nextTick, reactive, ref } from 'vue';
import { useChatSurface } from './useChatSurface';

const pagePath = ref('/zh/ai-chat');

vi.mock('vuepress/client', () => ({
  usePage: () => computed(() => ({ path: pagePath.value })),
}));

function mockGlobals() {
  const listeners: Array<{ type: string; handler: EventListener }> = [];
  vi.stubGlobal('window', {
    location: { origin: 'http://localhost' },
    addEventListener: vi.fn((type: string, handler: EventListener) =>
      listeners.push({ type, handler }),
    ),
    removeEventListener: vi.fn((type: string, handler: EventListener) => {
      const idx = listeners.findIndex((l) => l.type === type && l.handler === handler);
      if (idx !== -1) listeners.splice(idx, 1);
    }),
    matchMedia: vi.fn(() => ({ matches: false })),
  });
  vi.stubGlobal('localStorage', {
    getItem: vi.fn(() => null),
    setItem: vi.fn(),
  });
  return { listeners };
}

async function waitForMountedAsync() {
  await nextTick();
  await new Promise((resolve) => setTimeout(resolve, 0));
}

describe('useChatSurface', () => {
  beforeEach(() => {
    pagePath.value = '/zh/ai-chat';
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(JSON.stringify({}), { status: 200 })),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('exposes locale, i18n, state, theme, ui, history, and actions', async () => {
    mockGlobals();
    const TestComponent = defineComponent({
      setup() {
        const surface = useChatSurface(ref(null), ref(null));
        return { surface };
      },
      render() {
        return null;
      },
    });

    const { createApp } = await import('vue');
    const app = createApp(TestComponent);
    const vm = app.mount(document.createElement('div'));
    await waitForMountedAsync();

    expect((vm as any).surface.isEn.value).toBe(false);
    expect((vm as any).surface.t('newChat')).toBe('新对话');
    expect((vm as any).surface.state).toBeDefined();
    expect((vm as any).surface.theme).toBeDefined();
    expect((vm as any).surface.ui).toBeDefined();
    expect((vm as any).surface.chatHistory).toBeDefined();
    expect((vm as any).surface.activeChatIndex).toBeDefined();
    expect((vm as any).surface.actions).toBeDefined();
    app.unmount();
  });

  it('loads theme and config on mount', async () => {
    mockGlobals();
    const TestComponent = defineComponent({
      setup() {
        const surface = useChatSurface(ref(null), ref(null));
        return { surface };
      },
      render() {
        return null;
      },
    });

    const { createApp } = await import('vue');
    const app = createApp(TestComponent);
    const vm = app.mount(document.createElement('div'));
    await waitForMountedAsync();

    expect((vm as any).surface.theme.isDark.value).toBe(false);
    expect((vm as any).surface.state.config.value).toBeDefined();
    app.unmount();
  });

  it('updates suggested questions when locale changes', async () => {
    pagePath.value = '/zh/ai-chat';
    mockGlobals();
    const TestComponent = defineComponent({
      setup() {
        const surface = useChatSurface(ref(null), ref(null));
        return { surface };
      },
      render() {
        return null;
      },
    });

    const { createApp } = await import('vue');
    const app = createApp(TestComponent);
    const vm = app.mount(document.createElement('div'));
    await waitForMountedAsync();

    expect((vm as any).surface.ui.suggestedQuestions.value[0]).toBe('什么是地月空间？');

    pagePath.value = '/en/ai-chat';
    await waitForMountedAsync();

    expect((vm as any).surface.ui.suggestedQuestions.value[0]).toBe('What is cislunar space?');
    app.unmount();
  });

  it('registers and removes escape key handler', async () => {
    const { listeners } = mockGlobals();
    const TestComponent = defineComponent({
      setup() {
        const surface = useChatSurface(ref(null), ref(null));
        return { surface };
      },
      render() {
        return null;
      },
    });

    const { createApp } = await import('vue');
    const app = createApp(TestComponent);
    const vm = app.mount(document.createElement('div'));
    await waitForMountedAsync();

    (vm as any).surface.ui.sidebarOpen.value = true;
    const keydown = listeners.find((l) => l.type === 'keydown');
    expect(keydown).toBeDefined();
    keydown?.handler(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect((vm as any).surface.ui.sidebarOpen.value).toBe(false);

    app.unmount();
  });
});
