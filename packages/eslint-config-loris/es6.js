module.exports = {
    extends: 'loris/es5',

    env: {
        es6: true
    },

    rules: {
        // http://eslint.org/docs/rules/#best-practices
        'no-empty-pattern': 'error',
        'no-loop-func': 'off', // This is not a problem with `let` declarations.

        // http://eslint.org/docs/rules/#ecmascript-6
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': ['error', {before: true, after: true}],
        'constructor-super': 'error',
        'no-class-assign': 'error',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-new-symbol': 'error',
        'no-this-before-super': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'prefer-arrow-callback': ['error', {allowNamedFunctions: true}],
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'template-curly-spacing': ['error', 'never'],
        'yield-star-spacing': ['error', 'after']
    }
};
