module.exports = {
    extends: 'loris/es5',

    env: {
        es6: true
    },

    rules: {
        // http://eslint.org/docs/rules/#best-practices
        'no-loop-func': 0, // This is not a problem with `let` declarations.

        // http://eslint.org/docs/rules/#ecmascript-6
        'arrow-parens': [2, 'always'],
        'arrow-spacing': [2, {before: true, after: true}],
        'constructor-super': 2,
        'no-class-assign': 2,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-this-before-super': 2,
        'no-var': 2,
        'prefer-arrow-callback': 2,
        'prefer-const': 2,
        'template-curly-spacing': [2, 'never'],
        'yield-star-spacing': [2, 'after']
    }
};
