# eslint-config-loris-react

ESLint config for [React JSX](https://facebook.github.io/react/docs/jsx-in-depth.html).

## Installation

```
npm install --save-dev eslint eslint-plugin-react eslint-config-loris-react
```

## Usage

Include config in your [.eslintrc.js](http://eslint.org/docs/user-guide/configuring#configuration-file-formats) file:

```js
module.exports = {
    extends: ['loris-react'],
    root: true
};
```

or with [eslint-config-loris](../eslint-config-loris) config:

```js
module.exports = {
    extends: ['loris/es6', 'loris-react'],
    root: true
};
```
