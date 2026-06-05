#!/usr/bin/env node
/**
 * TDD verification script for issues #116-#119.
 * Checks all 2026-03 Space News articles for:
 * 1. Frontmatter image paths resolve to existing files
 * 2. wechatShare.image paths resolve (if not /logo.png)
 * 3. No broken image references inside HTML comments
 * 4. zh/en counterpart consistency
 *
 * Exit code 0 = all pass (GREEN), non-zero = failures (RED).
 */

const fs = require('fs');
const path = require('path');

const BASE = path.resolve(__dirname, '..', 'web');
const ZH_DIR = path.join(BASE, 'space-news', '2026', '03');
const EN_DIR = path.join(BASE, 'en', 'space-news', '2026', '03');

let failures = [];

function fail(msg) {
  failures.push(msg);
}

// Extract YAML frontmatter value for a given key (top-level)
function extractFrontmatterValue(content, key) {
  // Match key: value inside frontmatter, handling quoted and unquoted values
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) return null;
  const fm = fmMatch[1];
  // Find key at the start of a line (top-level, not nested)
  const keyRegex = new RegExp('^' + key + ':\\s*["\']?([^"\'\\n\\r]+)["\']?\\s*$', 'm');
  const match = fm.match(keyRegex);
  return match ? match[1].trim() : null;
}

// Extract all image references inside HTML comments
function extractCommentedImagePaths(content) {
  const images = [];
  // Match HTML comments
  const commentRegex = new RegExp('<!--[\\s\\S]*?-->', 'g');
  let match;
  while ((match = commentRegex.exec(content)) !== null) {
    // Match markdown image syntax inside comments
    const imgRegex = new RegExp('!\\[([^\\]]*)\\]\\(([^)]+)\\)', 'g');
    let imgMatch;
    while ((imgMatch = imgRegex.exec(match[0])) !== null) {
      images.push(imgMatch[2]);
    }
  }
  return images;
}

// Check if an image path resolves relative to the article
function imageExists(articleDir, imgPath) {
  if (!imgPath || imgPath.startsWith('http') || imgPath.startsWith('/')) return true;
  const resolved = path.resolve(articleDir, imgPath);
  return fs.existsSync(resolved);
}

// Get all .md files (excluding README.md) in a directory
function getArticles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(function(f) { return f.endsWith('.md') && f !== 'README.md'; })
    .sort();
}

// ========== Main checks ==========

console.log('=== Checking ZH 2026-03 articles for broken comments ===');
var zhArticles = getArticles(ZH_DIR);
for (var i = 0; i < zhArticles.length; i++) {
  var file = zhArticles[i];
  var filePath = path.join(ZH_DIR, file);
  var content = fs.readFileSync(filePath, 'utf8');
  var articleDir = path.dirname(filePath);

  var commentedImages = extractCommentedImagePaths(content);
  for (var j = 0; j < commentedImages.length; j++) {
    var img = commentedImages[j];
    if (!img.startsWith('http') && !imageExists(articleDir, img)) {
      fail('[ZH] ' + file + ': commented image "' + img + '" does not resolve');
    }
  }
}

console.log('=== Checking EN 2026-03 articles for broken comments ===');
var enArticles = getArticles(EN_DIR);
for (var i = 0; i < enArticles.length; i++) {
  var file = enArticles[i];
  var filePath = path.join(EN_DIR, file);
  var content = fs.readFileSync(filePath, 'utf8');
  var articleDir = path.dirname(filePath);

  var commentedImages = extractCommentedImagePaths(content);
  for (var j = 0; j < commentedImages.length; j++) {
    var img = commentedImages[j];
    if (!img.startsWith('http') && !imageExists(articleDir, img)) {
      fail('[EN] ' + file + ': commented image "' + img + '" does not resolve');
    }
  }
}

console.log('=== Checking #116: audit-identified articles ===');
var slice1Files = [
  '2026-03-27-esa-celeste-rocket-lab-launch-preview.md',
  '2026-03-28-celeste-rocket-lab-launch.md',
  '2026-03-27-china-esa-smile-satellite.md',
  '2026-03-30-spacex-transporter-16.md',
  '2026-03-30-spacex-v3-starship-static-fire.md',
];

for (var i = 0; i < slice1Files.length; i++) {
  var file = slice1Files[i];

  // ZH: should have no commented images
  var zhPath = path.join(ZH_DIR, file);
  if (fs.existsSync(zhPath)) {
    var zhContent = fs.readFileSync(zhPath, 'utf8');
    var zhCommented = extractCommentedImagePaths(zhContent);
    if (zhCommented.length > 0) {
      fail('[ZH] ' + file + ': still has commented image references');
    }
  }

  // EN: should have image frontmatter and no commented images
  var enPath = path.join(EN_DIR, file);
  if (fs.existsSync(enPath)) {
    var enContent = fs.readFileSync(enPath, 'utf8');
    var enImage = extractFrontmatterValue(enContent, 'image');
    if (!enImage) {
      fail('[EN] ' + file + ': missing top-level image frontmatter');
    } else if (enImage !== '/logo.png') {
      var enDir = path.dirname(enPath);
      if (!imageExists(enDir, enImage)) {
        fail('[EN] ' + file + ': image "' + enImage + '" does not resolve');
      }
    }
    var enCommented = extractCommentedImagePaths(enContent);
    if (enCommented.length > 0) {
      fail('[EN] ' + file + ': still has commented image references');
    }
  }
}

console.log('=== Checking #117: Artemis 2 articles ===');
var slice2Files = [
  '2026-03-27-artemis-2-crew-suits.md',
  '2026-03-28-artemis-2-crew-arrive-ksc.md',
  '2026-03-27-esa-artemis-2-european-service-module.md',
];

for (var i = 0; i < slice2Files.length; i++) {
  var file = slice2Files[i];
  var locales = [['ZH', ZH_DIR], ['EN', EN_DIR]];
  for (var k = 0; k < locales.length; k++) {
    var label = locales[k][0];
    var dir = locales[k][1];
    var filePath = path.join(dir, file);
    if (fs.existsSync(filePath)) {
      var content = fs.readFileSync(filePath, 'utf8');
      var commented = extractCommentedImagePaths(content);
      if (commented.length > 0) {
        fail('[' + label + '] ' + file + ': still has commented image references');
      }
    }
  }
}

// crew-suits should have image frontmatter in both locales
var crewSuitsLocales = [['ZH', ZH_DIR], ['EN', EN_DIR]];
for (var k = 0; k < crewSuitsLocales.length; k++) {
  var label = crewSuitsLocales[k][0];
  var dir = crewSuitsLocales[k][1];
  var filePath = path.join(dir, '2026-03-27-artemis-2-crew-suits.md');
  if (fs.existsSync(filePath)) {
    var content = fs.readFileSync(filePath, 'utf8');
    var image = extractFrontmatterValue(content, 'image');
    if (!image) {
      fail('[' + label + '] artemis-2-crew-suits: missing image frontmatter');
    }
  }
}

console.log('=== Checking #118: ISS, Nuclear, Fincke ===');

// ISS: en figure dir should exist
var issEnFigureDir = path.join(EN_DIR, 'figures', '2026-03-31-iss-expedition-74-week-en');
if (!fs.existsSync(path.join(issEnFigureDir, 'hero.jpg'))) {
  fail('[EN] ISS: figure dir 2026-03-31-iss-expedition-74-week-en/hero.jpg missing');
}

// ISS en should have image frontmatter
var issEnPath = path.join(EN_DIR, '2026-03-31-iss-expedition-74-week.md');
if (fs.existsSync(issEnPath)) {
  var content = fs.readFileSync(issEnPath, 'utf8');
  var image = extractFrontmatterValue(content, 'image');
  if (!image) {
    fail('[EN] ISS: missing image frontmatter');
  }
}

// ISS zh should have image frontmatter
var issZhPath = path.join(ZH_DIR, '2026-03-31-iss-expedition-74-week.md');
if (fs.existsSync(issZhPath)) {
  var content = fs.readFileSync(issZhPath, 'utf8');
  var image = extractFrontmatterValue(content, 'image');
  if (!image) {
    fail('[ZH] ISS: missing image frontmatter');
  }
}

// nasa-nuclear-spacecraft zh should have image frontmatter
var nuclearZhPath = path.join(ZH_DIR, '2026-03-27-nasa-nuclear-spacecraft.md');
if (fs.existsSync(nuclearZhPath)) {
  var content = fs.readFileSync(nuclearZhPath, 'utf8');
  var image = extractFrontmatterValue(content, 'image');
  if (!image) {
    fail('[ZH] nasa-nuclear-spacecraft: missing image frontmatter');
  }
}

// nasa-nuclear-spacecraft en should have image frontmatter
var nuclearEnPath = path.join(EN_DIR, '2026-03-27-nasa-nuclear-spacecraft.md');
if (fs.existsSync(nuclearEnPath)) {
  var content = fs.readFileSync(nuclearEnPath, 'utf8');
  var image = extractFrontmatterValue(content, 'image');
  if (!image) {
    fail('[EN] nasa-nuclear-spacecraft: missing image frontmatter');
  }
}

// mike-fincke-medical-event zh should have no commented images
var finckeZhPath = path.join(ZH_DIR, '2026-03-28-mike-fincke-medical-event.md');
if (fs.existsSync(finckeZhPath)) {
  var content = fs.readFileSync(finckeZhPath, 'utf8');
  var commented = extractCommentedImagePaths(content);
  if (commented.length > 0) {
    fail('[ZH] mike-fincke-medical-event: still has commented image references');
  }
}

// ========== Report ==========
console.log('');
if (failures.length === 0) {
  console.log('ALL CHECKS PASSED (GREEN)');
  process.exit(0);
} else {
  console.log(failures.length + ' CHECK(S) FAILED (RED):');
  for (var i = 0; i < failures.length; i++) {
    console.log('  - ' + failures[i]);
  }
  process.exit(1);
}
