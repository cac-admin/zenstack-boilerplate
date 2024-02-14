/** @type {import("eslint").Linter.Config} */
const config = {
    root: true,
    env: {
        node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        tsConfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/stylistic-type-checked"
    ],
    rules: {
        // These opinionated rules are enabled in stylistic-type-checked above.
        // Feel free to reconfigure them to your own preference.
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-unescaped-entities": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                checksVoidReturn: { attributes: false },
            },
        ],
    },
};

module.exports = config;
