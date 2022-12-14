module.exports = {
    "env": {
        "node": true,
        "es2021": true,
        jest: true,
        "jasmine": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",'prettier'
    ],
    "overrides": [{
        "files": [
          "**/*.spec.js",
          "**/*.spec.jsx"
        ],
        "env": {
          "jest": true
        }
      }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",'prettier'
    ],
    "rules": {'prettier/prettier': 2,
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'prettier/prettier': 2, // Means error
    'no-console': 1, // Means warning
    'no-var': 'error',
    'prefer-const': 'error'
    },
    rules: {
        'no-console': 'off',
        
    '@typescript-eslint/no-var-requires': 0
    }
    
}
