module.exports = {
    rules: {
        // http://eslint.org/docs/rules/#possible-errors
        'comma-dangle': [2, 'never'],
        'no-cond-assign': [2, 'always'],
        'no-console': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-func-assign': 2,
        'no-sparse-arrays': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,

        // http://eslint.org/docs/rules/#best-practices
        'block-scoped-var': 2,
        'curly': 2,
        'eqeqeq': 2,
        'no-extend-native': 2,
        'no-alert': 2,
        'no-caller': 2,
        'no-extra-bind': 2,
        'no-loop-func': 2,
        'no-new': 2,
        'no-throw-literal': 2,
        'no-unused-expressions': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-void': 2,
        'no-with': 2,
        'radix': 2,
        'yoda': [2, 'never'],

        // http://eslint.org/docs/rules/#strict-mode
        'strict': [2, 'safe'],

        // http://eslint.org/docs/rules/#variables
        'no-delete-var': 2,
        'no-undef': 2,
        'no-unused-vars': 2,
        'no-use-before-define': [2, 'nofunc']
    }
};
