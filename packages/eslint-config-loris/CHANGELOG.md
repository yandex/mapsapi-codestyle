## 8.0.0

* Support `eslint 4.x`. See migration guide http://eslint.org/docs/user-guide/migrating-to-4.0.0

## 7.0.0

* Allow named functions in [`prefer-arrow-callback`][prefer-arrow-callback] rule ([#80](https://github.com/ymaps/codestyle/pull/80)).
* Use string severity codes ([#78](https://github.com/ymaps/codestyle/pull/78)).

## 6.0.0

* Peer dependency from `eslint` was upgraded to `^3.2.0`. Please note that `eslint v3` [doesn't
  support](http://eslint.org/blog/2016/07/eslint-v3.0.0-released#requires-nodejs-4-or-higher) `Node.js < 4`.

* Add new rules ([#67](https://github.com/ymaps/codestyle/issues/67)):
  * `es5`
    * [`unicode-bom`][unicode-bom]
    * [`no-tabs`][no-tabs]
    * [`no-duplicate-case`][no-duplicate-case]
    * [`padded-blocks`][padded-blocks]
    * [`no-unsafe-finally`][no-unsafe-finally]

  * `es6`
    * [`no-useless-computed-key`][no-useless-computed-key]
    * [`prefer-rest-params`][prefer-rest-params]
    * [`prefer-spread`][prefer-spread]
    * [`rest-spread-spacing`][rest-spread-spacing]
    * [`no-useless-constructor`][no-useless-constructor]
    * [`no-useless-rename`][no-useless-rename]
    * [`no-new-symbol`][no-new-symbol]

* Move [`no-empty-pattern`][no-empty-pattern] from `es5` to `es6` config.

## 5.1.0

* Support `eslint v3`.

## 5.0.0

* Non-ASCII characters are not allowed in identifiers ([#64](https://github.com/ymaps/codestyle/pull/64)).

## 4.0.0

* Improve [`no-multiple-empty-lines`][no-multiple-empty-lines] rule ([#63](https://github.com/ymaps/codestyle/pull/63)).

## 3.0.0

* Add many new rules following style guide ([fb75835](https://github.com/ymaps/codestyle/commit/fb75835aeaaccd6951645d3754a55899fccb3ba9))

## 2.0.0

* Support `eslint 2.x` ([#55](https://github.com/ymaps/codestyle/pull/55)).
* Enable [`strict`][strict] rule for `es5`.
* Change [`strict`][strict] rule value to `safe`.

## 1.0.0

Initial release.

[unicode-bom]: http://eslint.org/docs/rules/unicode-bom
[no-tabs]: http://eslint.org/docs/rules/no-tabs
[no-duplicate-case]: http://eslint.org/docs/rules/no-duplicate-case
[padded-blocks]: http://eslint.org/docs/rules/padded-blocks
[no-unsafe-finally]: http://eslint.org/docs/rules/no-unsafe-finally
[no-useless-computed-key]: http://eslint.org/docs/rules/no-useless-computed-key
[prefer-rest-params]: http://eslint.org/docs/rules/prefer-rest-params
[prefer-spread]: http://eslint.org/docs/rules/prefer-spread
[rest-spread-spacing]: http://eslint.org/docs/rules/rest-spread-spacing
[no-useless-constructor]: http://eslint.org/docs/rules/no-useless-constructor
[no-useless-rename]: http://eslint.org/docs/rules/no-useless-rename
[no-new-symbol]: http://eslint.org/docs/rules/no-new-symbol
[no-empty-pattern]: http://eslint.org/docs/rules/no-empty-pattern
[strict]: http://eslint.org/docs/rules/strict
[no-multiple-empty-lines]: http://eslint.org/docs/rules/no-multiple-empty-lines
[prefer-arrow-callback]: http://eslint.org/docs/rules/prefer-arrow-callback
