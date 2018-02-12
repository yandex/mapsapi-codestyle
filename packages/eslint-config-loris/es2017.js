module.exports = {
    extends: 'loris/es6',

    parserOptions: {
        ecmaVersion: 2017
    },

    rules: {
        // http://eslint.org/docs/rules/#best-practices
        'no-return-await': 'error'
    }
};
