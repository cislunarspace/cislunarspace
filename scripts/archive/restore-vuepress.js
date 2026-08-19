#!/usr/bin/env node
// Restore original VuePress bundler-vite rendering loop.
// Usage: node scripts/restore-vuepress.js

const fs = require('fs');
const path = require('path');

const BUNDLER = path.join(__dirname, '../web/node_modules/@vuepress/bundler-vite/dist/index.js');
let code = fs.readFileSync(BUNDLER, 'utf-8');

// Find and replace any patched version back to the original sequential loop
// Match either the batch version or any non-standard loop
const batchRe = /for\s*\(let _i = 0[\s\S]*?_batches\.length\)\s*`\s*;\s*\n\s*await Promise\.all[\s\S]*?\n\t\t\}/;

if (batchRe.test(code)) {
  const original = `for (const page of app.pages) {
\t\t\tif (spinner) spinner.text = \`Rendering pages \${colors.magenta(page.path)}\`;
\t\t\tawait renderPage({
\t\t\t\t\tapp,
\t\t\t\t\tpage,
\t\t\t\t\tvueApp,
\t\t\t\t\tvueRouter,
\t\t\t\t\tssrTemplate,
\t\t\t\t\toutput: clientOutput.output,
\t\t\t\t\toutputEntryChunk: clientEntryChunk,
\t\t\t\t\toutputCssAsset: clientCssAsset
\t\t\t\t});
\t\t}`;
  code = code.replace(batchRe, original);
  fs.writeFileSync(BUNDLER, code);
  console.log('RESTORED: original sequential loop');
} else {
  console.log('No patch found to restore');
}
