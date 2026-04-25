import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import antfu from "@antfu/eslint-config";
import format from "eslint-plugin-format";
import tailwindcss from "eslint-plugin-tailwindcss";

export default antfu(
  {
    root: true,
    formatters: true,
    vue: {
      a11y: true,
    },
    type: "app",
    typescript: true,
    stylistic: {
      indent: 2,
      quotes: "double",
      semi: true,
    },
    ignores: ["CHANGELOG.md", ".pnpm-store/**", "**/migrations/*", ".github/ISSUE_TEMPLATE/**"],
  },
  {
    rules: {
      "ts/no-redeclare": "off",
      "no-console": ["warn"],
      "antfu/no-top-level-await": ["off"],
      "unicorn/filename-case": ["error", { case: "kebabCase", ignore: ["README.md", "CHANGELOG.md"] }],
    },
  },
  {
    files: ["app/**/*.vue"],
    name: "VUE-FILES",
    rules: {
      "vue/max-attributes-per-line": ["error", { singleline: { max: 3 }, multiline: { max: 1 } }],
      "vue/html-closing-bracket-newline": ["error", { singleline: "never", multiline: "never" }],
      "vue/html-indent": ["error", 2, { attribute: 1, baseIndent: 1, closeBracket: 0, alignAttributesVertically: true, ignores: [] }],
      // "vue/singleline-html-element-content-newline": ["error", { ignoreWhenNoAttributes: false, ignoreWhenEmpty: true }],
      "vue/singleline-html-element-content-newline": "off",
    },
  },
  {
    files: ["app/**/*.css"],
    languageOptions: {
      parser: format.parserPlain,
    },
    plugins: {
      format,
    },
    rules: {
      "format/prettier": ["error", { parser: "css", tabWidth: 2 }],
    },
  },
  {
    files: ["app/**/*.vue"],
    name: "tailwindcss",
    plugins: { tailwindcss },
    settings: {
      tailwindcss: {
        config: `${dirname(fileURLToPath(import.meta.url))}/app/assets/style/main.css`,
        whitelist: ["tab-active", "swap-off", "swap-on", "tooltip-content", "footer-center", "dropdown-content", "dropdown-hover", "layout-enter-active", "layout-enter-from"],
        tags: ["tw"],
      },
    },
    rules: tailwindcss.configs["flat/recommended"][1].rules,
  },
  {
    files: ["content/**/*.md"],
    rules: {
      "markdown/no-missing-atx-heading-space": "off", // Some MDC may have slots addressed by name like "#title" and would break this rule
    },
  },
);
