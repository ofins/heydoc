// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

import tailwindcss from '@tailwindcss/vite';
import pagefind from 'astro-pagefind';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const userRoot = process.env.HEY_DOC_USER_ROOT || process.cwd();
const isDev = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  outDir: path.resolve(userRoot, 'dist-docs/docs/'),
  vite: {
    server: {
      fs: {
        allow: [userRoot, process.cwd(), __dirname],
      },
    },

    ssr: {
      ...(isDev
        ? {
            noExternal: true,
            // * Exclude this in dev since VITE tries to convert everything to ESM.
            external: ['globby', 'fast-glob', 'fs-extra', 'gray-matter', 'marked'],
          }
        : {
            // * In PROD, need this so build script can find it
            noExternal: true,
          }),
    },

    plugins: [tailwindcss()],
  },
  integrations: [pagefind()],
});
