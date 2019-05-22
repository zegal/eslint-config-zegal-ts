module.exports = {
  "extends": "react-app",
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "react-hooks",
    "@typescript-eslint"
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2018,
    "useJSXTextNode": true,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "arrow-parens": 1,
    "arrow-spacing": 1,
    "key-spacing": [
      1,
      {
        "mode": "strict"
      }
    ],
    "keyword-spacing": [
      1,
      {}
    ],
    "no-multi-spaces": 1,
    "no-irregular-whitespace": 1,
    "no-mixed-spaces-and-tabs": 1,
    "quotes": [
      1,
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "object-curly-spacing": [
      "error",
      "never"
    ],
    "no-duplicate-imports": [
      "error"
    ],
    "space-infix-ops": [
      "error"
    ],
    "jsx-quotes": [
      "error",
      "prefer-single"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "indent": [
      "error",
      "tab"
    ],
    "eol-last": [
      1,
      "always"
    ],
    "no-multiple-empty-lines": "error",
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-equals-spacing": 1,
    "react/jsx-no-undef": 1,
    "react/jsx-indent": [
      1,
      "tab"
    ],
    "react/jsx-indent-props": [
      1,
      "tab"
    ],
    "react/jsx-tag-spacing": [
      1,
      {
        "beforeSelfClosing": "always"
      }
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".tsx"
        ]
      }
    ],
    "react/destructuring-assignment": 0,
    "react/button-has-type": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/click-events-have-key-events": 0,
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/__tests__/**/*.js",
          "**/__tests__/**/*.ts",
          "**/__tests__/**/*.tsx"
        ],
        "peerDependencies": true
      }
    ],
    "import/prefer-default-export": false
  }
}
