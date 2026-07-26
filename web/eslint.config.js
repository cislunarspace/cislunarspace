import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import vuePlugin from 'eslint-plugin-vue';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...vuePlugin.configs['flat/recommended'],
  prettierConfig,
  {
    files: ['**/*.vue'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    files: ['.vuepress/**/*.ts', '.vuepress/**/*.mjs', '.vuepress/**/*.js', 'vitest.config.ts'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['.vuepress/theme2/**/*.ts'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.vuepress/dist/**',
      '.vuepress/internal-docs/**',
      '*.auto.json',
    ],
  },
  {
    rules: {
      'no-console': 'off',
      'no-irregular-whitespace': 'warn',
      'no-control-regex': 'warn',
      'no-useless-escape': 'warn',
      'no-useless-assignment': 'warn',
      'no-empty': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'warn',
    },
  },
);
