import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@stylistic": stylistic,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.strict,
      tseslint.configs.stylistic,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@stylistic/indent": ["error", 2],
      "@stylistic/jsx-quotes": ["error", "prefer-single"],
      "@stylistic/quotes": ["error", "single"],
      "@stylistic/array-bracket-newline": ["error", { multiline: true }],
      "@stylistic/arrow-spacing": "error",
      "@stylistic/block-spacing": "error",
      "@stylistic/brace-style": "error",
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/multiline-ternary": ["error", "always"],
      "@stylistic/no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
