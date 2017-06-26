# eslint-config-loris-react

ESLint config for [React JSX](https://facebook.github.io/react/docs/jsx-in-depth.html).

## Installation

First install [eslint-config-loris](../eslint-config-loris). Then

```
npm install --save-dev eslint-plugin-react eslint-config-loris-react
```

## Usage

Include config in your [.eslintrc.js](http://eslint.org/docs/user-guide/configuring#configuration-file-formats) file:

```js
module.exports = {
    extends: ['loris/es6', 'loris-react'],
    root: true
};
```
