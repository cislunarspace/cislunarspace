#!/usr/bin/env node
/**
 * Patch @vuepress/bundler-vite to use concurrent page rendering.
 *
 * The original VuePress renders pages sequentially:
 *   for (const page of app.pages) { await renderPage({...}) }
 *
 * This patch replaces it with batched concurrent rendering:
 *   for (const batch of batches) { await Promise.all(batch.map(...)) }
 *
 * Usage: node scripts/patch-vuepress-concurrent.js [concurrency]
 */
const fs = require('fs');
const path = require('path');

const CONCURRENCY = parseInt(process.argv[2] || '8', 10);
const BUNDLER = path.join(__dirname, '../web/node_modules/@vuepress/bundler-vite/dist/index.js');
let code = fs.readFileSync(BUNDLER, 'utf-8');

// Skip if already patched
if (code.includes('/* [concurrent-patch] */')) {
  console.log('Already patched');
  process.exit(0);
}

// Find the sequential for loop
const loopRe = /for\s*\(const page of app\.pages\)\s*\{([\s\S]*?)\n\t\t\}/;
const match = code.match(loopRe);
if (!match) {
  console.error('PATCH FAILED: sequential loop not found');
  process.exit(1);
}

// Build replacement — use plain string concatenation to avoid template literal issues
const replacement = [
  '/* [concurrent-patch] concurrency=' + CONCURRENCY + ' */',
  'for (let _i = 0; _i < app.pages.length; _i += ' + CONCURRENCY + ') {',
  '\t\t\tconst _batch = app.pages.slice(_i, _i + ' + CONCURRENCY + ');',
  '\t\t\tawait Promise.all(_batch.map(async (page) => {',
  '\t\t\t\tif (spinner) spinner.text = "Rendering " + app.pages.length + " pages [" + (_i + 1) + "-" + Math.min(_i + ' + CONCURRENCY + ', app.pages.length) + "]";',
  '\t\t\t\tawait renderPage({',
  '\t\t\t\t\tapp,',
  '\t\t\t\t\tpage,',
  '\t\t\t\t\tvueApp,',
  '\t\t\t\t\tvueRouter,',
  '\t\t\t\t\tssrTemplate,',
  '\t\t\t\t\toutput: clientOutput.output,',
  '\t\t\t\t\toutputEntryChunk: clientEntryChunk,',
  '\t\t\t\t\toutputCssAsset: clientCssAsset',
  '\t\t\t\t});',
  '\t\t\t}));',
  '\t\t}'
].join('\n');

const newCode = code.replace(loopRe, replacement);
if (newCode === code) {
  console.error('PATCH FAILED: replace returned same code');
  process.exit(1);
}

fs.writeFileSync(BUNDLER, newCode);
console.log('PATCHED: concurrency=' + CONCURRENCY);
