#!/usr/bin/env node
import fs from 'node:fs';

const source = process.argv[2];
if (!source) {
  console.error('用法：node scripts/check-glossary-artifact.mjs <词典 JSON 路径，或 - 从标准输入读取>');
  process.exit(2);
}

const text = source === '-' ? fs.readFileSync(0, 'utf8') : fs.readFileSync(source, 'utf8');
const dictionary = JSON.parse(text);
if (!Array.isArray(dictionary.categories) || dictionary.categories.length === 0) {
  throw new Error('词典 categories 必须是非空数组');
}

const identities = new Set();
let count = 0;
for (const category of dictionary.categories) {
  if (typeof category.slug !== 'string' || !Array.isArray(category.entries)) {
    throw new Error('分类必须携带 slug 与 entries 数组');
  }
  for (const entry of category.entries) {
    count += 1;
    const identity = `${category.slug}/${entry.slug}`;
    if (identities.has(identity)) throw new Error(`词条身份重复：${identity}`);
    identities.add(identity);

    if (typeof entry.url !== 'string' || !entry.url.startsWith('/glossary/')) {
      throw new Error(`${identity} 缺少有效的 url`);
    }
    if (!Array.isArray(entry.keywords) || entry.keywords.length === 0) {
      throw new Error(`${identity} 缺少 keywords`);
    }
    if (typeof entry.definition !== 'string' || entry.definition.trim() === '') {
      throw new Error(`${identity} 的定义为空`);
    }
    if (entry.definition.includes('\\cite{')) {
      throw new Error(`${identity} 的定义仍含引用标记`);
    }
  }
}

console.log(`词典工件校验通过：${dictionary.categories.length} 个分类，${count} 条词条`);
