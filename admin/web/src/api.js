/** 与后端交互的轻量 API 封装 */

async function request(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  let data = null;
  try {
    data = await res.json();
  } catch {
    /* 非 JSON 响应 */
  }
  if (!res.ok) {
    const msg = data?.error || `HTTP ${res.status}`;
    throw new Error(msg);
  }
  return data;
}

export const api = {
  /** 列出内容：type=news|glossary|kb，q=关键词，cat=分类 */
  listContents(type, opts = {}) {
    const q = typeof opts === 'string' ? opts : (opts.q || '');
    const cat = typeof opts === 'object' ? (opts.cat || '') : '';
    const params = new URLSearchParams({ type });
    if (q) params.set('q', q);
    if (cat) params.set('cat', cat);
    return request(`/api/contents?${params.toString()}`);
  },

  /** 列出某类内容的分类及条目数 */
  categories(type) {
    return request(`/api/categories?type=${encodeURIComponent(type)}`);
  },

  /** 添加分类（glossary 可带 parent 建子分类、labelZh 注册 taxonomy 中文名） */
  addCategory(type, name, opts = {}) {
    return request('/api/categories/add', {
      method: 'POST',
      body: JSON.stringify({ type, name, ...opts }),
    });
  },

  /** 删除分类 */
  deleteCategory(type, name, opts = {}) {
    return request('/api/categories/delete', {
      method: 'POST',
      body: JSON.stringify({ type, name, ...opts }),
    });
  },

  /** 批量修改分类（news 改标签 / glossary 移目录） */
  assignCategory(type, paths, target, mode) {
    return request('/api/categories/assign', {
      method: 'POST',
      body: JSON.stringify({ type, paths, target, mode }),
    });
  },

  /** 读取单个文件（含中英镜像） */
  content(path) {
    return request(`/api/content?path=${encodeURIComponent(path)}`);
  },

  /** 保存一个或多个文件 */
  save(saves) {
    return request('/api/content', { method: 'POST', body: JSON.stringify({ saves }) });
  },

  /** 校验 frontmatter */
  validate(payload) {
    return request('/api/validate', { method: 'POST', body: JSON.stringify(payload) });
  },

  /** 预览删除范围 */
  previewDelete(paths) {
    return request('/api/delete/preview', { method: 'POST', body: JSON.stringify({ paths }) });
  },

  /** 执行删除 */
  executeDelete(paths, confirmed) {
    return request('/api/delete/execute', {
      method: 'POST',
      body: JSON.stringify({ paths, confirmed }),
    });
  },

  /** 列出回收站 */
  trash() {
    return request('/api/trash');
  },

  /** 恢复回收站文件 */
  restore(relPath, stamp) {
    return request('/api/trash/restore', {
      method: 'POST',
      body: JSON.stringify({ relPath, stamp }),
    });
  },

  /** 预览服务状态 */
  previewStatus() {
    return request('/api/preview/status');
  },

  /** 启动预览服务（等待就绪，可能耗时几十秒） */
  previewStart() {
    return request('/api/preview/start', { method: 'POST' });
  },

  /** md 路径 → 站点路由 */
  previewRoute(path) {
    return request(`/api/preview/route?path=${encodeURIComponent(path)}`);
  },

  /** 读取 AI 配置（脱敏） */
  aiConfig() {
    return request('/api/ai/config');
  },

  /** 保存 AI 配置 */
  saveAiConfig(cfg) {
    return request('/api/ai/config', { method: 'POST', body: JSON.stringify(cfg) });
  },

  /** AI 多轮对话 */
  aiChat(messages, system) {
    return request('/api/ai/chat', {
      method: 'POST',
      body: JSON.stringify({ messages, system }),
    });
  },
};
