# eslint-config-loris

[ESLint](http://eslint.org/) config for [Loris code style](https://github.com/ymaps/codestyle/).

## Installation

```
npm install --save-dev eslint eslint-config-loris
```

## Usage

Include config in your [.eslintrc.js](http://eslint.org/docs/user-guide/configuring#configuration-file-formats) file:

* For [ECMAScript 5](https://www.ecma-international.org/ecma-262/5.1/index.html)

```js
module.exports = {
    extends: 'loris/es5',
    root: true
};
```

* For [ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0/index.html)

```js
module.exports = {
    extends: 'loris/es6',
    root: true
};
```

Also available:

* `loris/es2017`

Note that configuration doesn't specify [environment](http://eslint.org/docs/user-guide/configuring#specifying-environments).
You can easily add it like this:

```js
module.exports = {
    extends: 'loris/es6',
    root: true,
    env: {
        browser: true
    }
};
```
