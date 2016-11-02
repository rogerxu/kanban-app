module.exports = {
  "root": true,
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "plugins": [
    'react'
  ],
  "rules": {
    // Best Practices
    "array-callback-return": ["error"],
    "dot-notation": ["error", {"allowKeywords": false}],
    "eqeqeq": ["error", "smart"],
    "no-iterator": ["error"],
    "no-loop-func": ["error"],
    "no-new-func": ["error"],
    "no-param-reassign": ["error", {"props": true}],
    "no-useless-escape": ["error"],
    "radix": ["error"],
    "wrap-iife": ["error"],

    // Variables

    // Node.js and CommonJS

    // Stylistic Issues
    "array-bracket-spacing": ["error", "never"],
    "brace-style": ["error", "1tbs"],
    "camelcase": ["error"],
    "comma-dangle": ["error", "only-multiline"],
    "comma-style": ["error", "last"],
    "eol-last": ["error"],
    "func-style": ["error", "expression", {"allowArrowFunctions": true}],
    "id-length": ["error", {"min": 2}],
    "indent": ["error", 2],
    "keyword-spacing": ["error", {"before": true, "after": true}],
    "line-comment-position": ["error", {"position": "above"}],
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": ["error", {
      "beforeBlockComment": true,
      "afterBlockComment": false,
      "beforeLineComment": true,
      "afterLineComment": false,
      "allowBlockStart": true,
      "allowBlockEnd": true,
      "allowObjectStart": true,
      "allowObjectEnd": true,
      "allowArrayStart": true,
      "allowArrayEnd": true
    }],
    "new-cap": ["error"],
    "newline-per-chained-call": ["error", {"ignoreChainWithDepth": 2}],
    "no-array-constructor": ["error"],
    "no-nested-ternary": ["error"],
    "no-new-object": ["error"],
    "no-plusplus": ["error"],
    "no-underscore-dangle": ["error"],
    "no-unneeded-ternary": ["error", {"defaultAssignment": false}],
    "no-whitespace-before-property": ["error"],
    "max-len": ["error", {"code": 100, "tabWidth": 2}],
    "object-curly-spacing": ["error", "always"],
    "one-var": ["error", "never"],
    "padded-blocks": ["error", "never"],
    "quote-props": ["error", "as-needed"],
    "quotes": ["error", "single"],
    "semi": ["warn", "always"],
    "space-before-blocks": ["error"],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error"],

    // ECMAScript 6
    "arrow-body-style": ["error"],
    "arrow-parens": ["error", "as-needed", {"requireForBlockBody": true}],
    "arrow-spacing": ["error"],
    "generator-star-spacing": ["error", {"before": false, "after": true}],
    "no-confusing-arrow": ["error", {"allowParens": true}],
    "no-dupe-class-members": ["error"],
    "no-duplicate-imports": ["error", {"includeExports": true}],
    "no-useless-constructor": ["error"],
    "no-var": ["error"],
    "object-shorthand": ["error"],
    "prefer-arrow-callback": ["error"],
    "prefer-const": ["error"],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "prefer-template": ["error"],
    "template-curly-spacing": ["error", "never"]
  }
};
