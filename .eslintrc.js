module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'arrow-parens': [2, 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'consistent-return': 0,
    'global-require': 0,
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: false
      }
    ],
    indent: 2,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 'off',
    'implicit-arrow-linebreak': 'off',
    'jsx-a11y/anchor-has-content': 1,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'no-param-reassign': 0,
    'react/function-component-definition': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-redundant-roles': 0,
    'max-len': ['error', 130, { ignoreUrls: true }],
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1 }],
    'no-trailing-spaces': ['error', { skipBlankLines: false, ignoreComments: true }],
    'no-confusing-arrow': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': [
      0,
      {
        allowShortCircuit: true
      }
    ],
    'no-unused-vars': [
      2,
      {
        argsIgnorePattern: '_'
      }
    ],
    'no-plusplus': 0,
    'object-curly-newline': 'off',
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': 'off',
    quotes: ['error', 'single'],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'spaced-comment': 0,
    semi: [2, 'never'],
    'import/no-anonymous-default-export': ['error', {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowCallExpression: true,
      allowLiteral: false,
      allowObject: true
    }]
  }
}
