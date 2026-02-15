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
    "no-console": ["warn"],
    "antfu/no-top-level-await": ["off"],
    "unicorn/filename-case": ["error", { case: "kebabCase", ignore: ["README.md", "CHANGELOG.md"] }],
  },
  ignores: ["CHANGELOG.md", ".pnpm-store/**", "**/migrations/*"],
});
