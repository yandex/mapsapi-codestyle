# eslint-config-loris

[ESLint](http://eslint.org/) config for [Loris code style](https://github.com/ymaps/codestyle/).

## Installation

```
npm install --save-dev eslint eslint-config-loris
```

## Usage

Include config in your [.eslintrc.js](https://eslint.org/docs/user-guide/configuring#configuration-file-formats) file:

* For [ECMAScript 5](https://www.ecma-international.org/ecma-262/5.1/index.html)

```js
module.exports = {
    extends: 'loris/es5',
    root: true
};
```

* For [ECMAScript 6](https://www.ecma-international.org/ecma-262/6.0/index.html)

```js
module.exports = {
    extends: 'loris/es6',
    root: true
};
```

* For [React JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)

> Don't forget install [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react).
>
> ```sh
> npm install --save-dev eslint-plugin-react
> ```

You can use this with one of main configurations, e.g. `loris/es5` or `loris/es6`.

```js
module.exports = {
    extends: ['loris/es6', 'loris/react'],
    root: true
};
```

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
