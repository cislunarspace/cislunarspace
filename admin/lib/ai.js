/**
 * AI 润色模块
 *
 * 配置存 admin/ai-config.json（已 gitignore），AI 请求由本模块代理，
 * 前端不直接接触 API key，也绕开浏览器 CORS。
 * 支持两种协议：OpenAI 兼容（/chat/completions）与 Anthropic（/v1/messages）。
 */
import fs from 'node:fs';
import path from 'node:path';
import { ADMIN_ROOT, PathError } from './paths.js';

const CONFIG_FILE = path.join(ADMIN_ROOT, 'ai-config.json');
const TIMEOUT_MS = 60_000;

const PROVIDERS = ['openai', 'anthropic'];

function readConfig() {
  try {
    return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
  } catch {
    return null;
  }
}

/** 返回脱敏配置（apiKey 只保留前后各 4 位） */
export function getPublicConfig() {
  const cfg = readConfig();
  if (!cfg) return { configured: false };
  const key = cfg.apiKey || '';
  return {
    configured: !!key,
    provider: cfg.provider || 'openai',
    baseUrl: cfg.baseUrl || '',
    model: cfg.model || '',
    apiKeyMasked: key.length > 8 ? `${key.slice(0, 4)}…${key.slice(-4)}` : key ? '已设置' : '',
  };
}

/**
 * 保存配置。apiKey 传空字符串表示沿用已保存的 key（前端留空不修改）。
 */
export function saveConfig({ provider, baseUrl, apiKey, model }) {
  if (!PROVIDERS.includes(provider)) {
    throw new PathError(`不支持的 provider: ${provider}（可选 ${PROVIDERS.join(' / ')}）`);
  }
  if (!baseUrl || !/^https?:\/\//.test(baseUrl)) {
    throw new PathError('baseUrl 必须是 http(s) 地址');
  }
  const prev = readConfig() || {};
  const cfg = {
    provider,
    baseUrl: String(baseUrl).replace(/\/+$/, ''),
    apiKey: apiKey ? String(apiKey) : prev.apiKey || '',
    model: String(model || '').trim(),
  };
  if (!cfg.apiKey) throw new PathError('尚未配置 API key');
  if (!cfg.model) throw new PathError('model 不能为空');
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(cfg, null, 2), { mode: 0o600 });
  return getPublicConfig();
}

/**
 * 多轮对话。messages: [{ role: 'user'|'assistant', content }]，system 可选。
 * 返回 assistant 的文本回复。
 */
export async function chat(messages, system) {
  const cfg = readConfig();
  if (!cfg?.apiKey) throw new PathError('尚未配置 AI，请先在设置里填写 API key 与地址');
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new PathError('messages 不能为空');
  }
  return cfg.provider === 'anthropic' ? anthropicChat(cfg, messages, system) : openaiChat(cfg, messages, system);
}

async function request(url, init) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  let res;
  try {
    res = await fetch(url, { ...init, signal: ctrl.signal });
  } catch (err) {
    throw new PathError(`AI 请求失败: ${err.name === 'AbortError' ? '超时' : err.message}`);
  } finally {
    clearTimeout(timer);
  }
  if (!res.ok) {
    const body = (await res.text().catch(() => '')).slice(0, 300);
    throw new PathError(`AI 服务返回 HTTP ${res.status}: ${body}`);
  }
  return res.json();
}

async function openaiChat(cfg, messages, system) {
  const msgs = system ? [{ role: 'system', content: system }, ...messages] : messages;
  const data = await request(`${cfg.baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cfg.apiKey}`,
    },
    body: JSON.stringify({ model: cfg.model, messages: msgs }),
  });
  const reply = data?.choices?.[0]?.message?.content;
  if (typeof reply !== 'string') throw new PathError('AI 响应格式异常（缺少 choices[0].message.content）');
  return reply;
}

async function anthropicChat(cfg, messages, system) {
  // baseUrl 允许填到 /v1 或域名根，两种都兼容
  const url = cfg.baseUrl.endsWith('/v1') ? `${cfg.baseUrl}/messages` : `${cfg.baseUrl}/v1/messages`;
  const body = { model: cfg.model, max_tokens: 4096, messages };
  if (system) body.system = system;
  const data = await request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': cfg.apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(body),
  });
  const reply = data?.content?.find((b) => b.type === 'text')?.text;
  if (typeof reply !== 'string') throw new PathError('AI 响应格式异常（缺少 content[].text）');
  return reply;
}
