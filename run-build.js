#!/usr/bin/env node
const { spawn } = require('child_process');
const env = { ...process.env, PATH: '/home/ouyangjiahong/.nvm/versions/node/v20.20.2/bin:' + process.env.PATH };
const child = spawn('npm', ['run', 'docs:build'], {
  cwd: '/home/ouyangjiahong/codes/cislunarspace/web',
  env: { ...env, NODE_OPTIONS: '--max-old-space-size=65536' },
  stdio: 'inherit'
});
child.on('exit', (code) => process.exit(code));
