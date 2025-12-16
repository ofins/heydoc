#!/usr/bin/env node
import { spawn } from 'node:child_process';
import path from 'node:path';

import { fileURLToPath } from 'node:url';

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const libRoot = path.resolve(__dirname, '..'); // root
const userRoot = process.cwd(); // user running command

const command = process.argv[2] || 'dev';

const allowedCommands = ['dev', 'build', 'build:watch', 'build:help', 'preview'];

if (!allowedCommands.includes(command)) {
  console.error(`❌ Unknown command: ${command}`);
  console.log(`   Available: ${allowedCommands.join(', ')}`);
  process.exit(1);
}

let astroBin;

try {
  astroBin = require.resolve('astro/astro.js');
} catch {
  try {
    const astroPkgJson = require.resolve('astro/package.json');
    const astroRoot = path.dirname(astroPkgJson);
    astroBin = path.join(astroRoot, 'astro.js');
  } catch (error) {
    console.error('❌ Could not find Astro:', error);
    process.exit(1);
  }
}

// const astroBin = path.resolve(libRoot, "node_modules", ".bin", "astro");

const child = spawn(astroBin, [command, '--root', libRoot], {
  stdio: 'inherit',
  cwd: userRoot,
  env: {
    ...process.env,
    HEY_DOC_USER_ROOT: userRoot,
    // NODE_PATH: path.resolve(libRoot, "node_modules"),
  },
});

child.on('exit', (code) => {
  process.exit(code);
});
