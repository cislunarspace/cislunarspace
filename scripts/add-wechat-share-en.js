#!/usr/bin/env node

/**
 * 批量添加 wechatShare 到英文文件
 * Issue #44: docs: add wechatShare to en/* locale mirrors (~90 files)
 */

const fs = require('fs');
const path = require('path');

const DIRS = [
  'web/en/glossary',
  'web/en/cislunar-orbits',
  'web/en/research-frontiers',
  'web/en/resources-tools',
  'web/en/background',
];

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // 跳过已有 wechatShare 的文件
  if (content.includes('wechatShare:')) {
    return false;
  }

  // 提取 frontmatter
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    console.log(`SKIP (no frontmatter): ${filePath}`);
    return false;
  }

  const [, frontmatterStr, body] = match;

  // 提取 title
  const titleMatch = frontmatterStr.match(/^title:\s*(.+)$/m);
  if (!titleMatch) {
    console.log(`SKIP (no title): ${filePath}`);
    return false;
  }

  // 提取 description
  const descMatch = frontmatterStr.match(/^description:\s*(.+)$/m);
  const title = titleMatch[1].replace(/^["']|["']$/g, ''); // 移除引号
  const desc = descMatch ? descMatch[1].replace(/^["']|["']$/g, '') : title;

  // 构造 wechatShare 块
  const wechatBlock = `wechatShare:
  title: "Cislunar Space Guide | ${title}"
  desc: "${desc}"
  image: "/logo.png"`;

  // 在 frontmatter 末尾添加 wechatShare
  const newFrontmatter = frontmatterStr + '\n' + wechatBlock;
  const newContent = `---\n${newFrontmatter}\n---\n${body}`;

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`OK: ${filePath}`);
  return true;
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let count = 0;

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      count += walkDir(fullPath);
    } else if (entry.name.endsWith('.md')) {
      if (processFile(fullPath)) {
        count++;
      }
    }
  }

  return count;
}

// 主逻辑
let total = 0;
for (const dir of DIRS) {
  if (fs.existsSync(dir)) {
    total += walkDir(dir);
  }
}

console.log(`\nTotal files updated: ${total}`);
