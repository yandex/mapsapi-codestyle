module.exports = {
    extends: 'loris/es5',

    env: {
        es6: true
    },

    rules: {
        // http://eslint.org/docs/rules/#best-practices
        'class-methods-use-this': 2,
        'no-empty-pattern': 2,
        'no-loop-func': 0, // This is not a problem with `let` declarations.

        // http://eslint.org/docs/rules/#ecmascript-6
        'arrow-parens': [2, 'always'],
        'arrow-spacing': [2, {before: true, after: true}],
        'constructor-super': 2,
        'no-class-assign': 2,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-new-symbol': 2,
        'no-this-before-super': 2,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-useless-rename': 2,
        'no-var': 2,
        'prefer-arrow-callback': 2,
        'prefer-const': 2,
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        'rest-spread-spacing': [2, 'never'],
        'template-curly-spacing': [2, 'never'],
        'yield-star-spacing': [2, 'after']
    }
};
