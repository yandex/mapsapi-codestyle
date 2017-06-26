module.exports = {
    plugins: ['react'],

    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },

    rules: {
        // http://eslint.org/docs/rules/#stylistic-issues
        'jsx-quotes': ['error', 'prefer-double'],

        // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
        'react/default-props-match-prop-types': 'off',
        'react/display-name': 'off',
        'react/forbid-component-props': 'off',
        'react/forbid-elements': 'off',
        'react/forbid-prop-types': 'off',
        'react/forbid-foreign-prop-types': 'off',
        'react/no-array-index-key': 'off',
        'react/no-children-prop': 'off',
        'react/no-danger': 'off',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'off',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': 'off',
        'react/no-redundant-should-component-update': 'off',
        'react/no-render-return-value': 'error',
        'react/no-set-state': 'off',
        'react/no-string-refs': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unused-prop-types': 'error',
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': ['error', 'always'],
        'react/prefer-stateless-function': ['error', {ignorePureComponents: true}],
        'react/prop-types': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/require-optimization': 'off',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': 'off',
        'react/sort-prop-types': 'off',
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',

        // https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-spacing': ['error', 'never', {'allowMultiline': true}],
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-filename-extension': 'error',
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-handler-names': 'off',
        'react/jsx-indent': 'error',
        'react/jsx-indent-props': 'error',
        'react/jsx-key': 'error',
        'react/jsx-max-props-per-line': 'off',
        'react/jsx-no-bind': 'off',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-literals': 'off',
        'react/jsx-no-target-blank': 'off',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-sort-props': 'off',
        'react/jsx-tag-spacing': ['error', {closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never'}],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': 'error'
    }
};
