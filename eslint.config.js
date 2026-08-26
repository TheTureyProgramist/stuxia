import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";

export default [
  {
    ignores: [
      "dist/**",
      "build/**",
      "node_modules/**",
      "public/**",
      "pb_migrations/**",
      "Stuxia/**",
    ],
  },
  js.configs.recommended,
  // 1. Основний конфіг для коду в src/
  {
    files: ["src/**/*.{js,jsx,mjs,cjs}"],
    plugins: {
      react: reactPlugin,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-prototype-builtins": "off", // дозволяє .hasOwnProperty без помилок
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error",
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        process: "readonly", // Додаємо підтримку process.env для міграції з CRA
        // Глобальні змінні для тестів (Vitest)
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        vi: "readonly",
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  // 2. Конфіг для кореневих JS-скриптів
  {
    files: ["*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "commonjs",
      },
    },
  },
];
