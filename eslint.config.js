import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: true,
  vue: true,
  type: "app",
  typescript: true,
  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
  },
  rules: {
    "ts/no-redeclare": "off",
    "vue/max-attributes-per-line": ["error", { singleline: { max: 2 }, multiline: { max: 1 } }],
    "vue/html-closing-bracket-newline": ["error", { singleline: "never", multiline: "never" }],
    "vue/html-indent": ["error", 2, { attribute: 1, baseIndent: 1, closeBracket: 0, alignAttributesVertically: true, ignores: [] }],
    "vue/singleline-html-element-content-newline": ["error", { ignoreWhenNoAttributes: false, ignoreWhenEmpty: true }],
    "no-console": ["warn"],
    "antfu/no-top-level-await": ["off"],
    "unicorn/filename-case": ["error", { case: "kebabCase", ignore: ["README.md", "CHANGELOG.md"] }],
  },
  ignores: ["CHANGELOG.md", ".pnpm-store/**", "**/migrations/*"],
});
