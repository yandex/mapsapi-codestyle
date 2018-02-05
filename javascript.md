JavaScript Code Style
====================

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [General](#general)
- [Naming](#naming)
- [Variable declaration](#variable-declaration)
- [Literals](#literals)
  - [Objects](#objects)
  - [Arrays](#arrays)
  - [Strings](#strings)
- [Semicolons](#semicolons)
- [Keywords](#keywords)
- [Block statements](#block-statements)
- [Conditional statements](#conditional-statements)
  - [if](#if)
  - [switch](#switch)
- [Loop statements](#loop-statements)
  - [for](#for)
  - [do...while](#dowhile)
- [Operators](#operators)
  - ['with' operator](#with-operator)
  - [Comparison operators](#comparison-operators)
  - [Ternary operator](#ternary-operator)
  - [Unary operators](#unary-operators)
- [eval](#eval)
- [undefined](#undefined)
- [Parentheses](#parentheses)
- [Exceptions](#exceptions)
- [Type casting](#type-casting)
- [Multi-line statements](#multi-line-statements)
- [Method chaining](#method-chaining)
- [String concatenation](#string-concatenation)
- [Empty lines](#empty-lines)
- [Comments](#comments)
- [Functions](#functions)
  - [this](#this)
  - [Return statement](#return-statement)
- [Classes](#classes)
- [Enums](#enums)
- [ECMAScript 2015](#ecmascript-2015)
  - [Strict mode](#strict-mode)
  - [Variable declaration](#variable-declaration-1)
  - [Classes](#classes-1)
  - [Arrow functions](#arrow-functions)
  - [Template strings](#template-strings)
  - [Default parameters](#default-parameters)
  - [Destructuring assignment](#destructuring-assignment)
  - [Rest parameters and spread operator](#rest-parameters-and-spread-operator)
  - [Generators](#generators)
  - [Modules](#modules)
- [ECMAScript 2017](#ecmascript-2017)
  - [async-await](#async-await)
- [Node.js](#nodejs)
  - [Importing modules](#importing-modules)
- [Licence](#licence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## General

* Files should be encoded in UTF-8 without [BOM](http://en.wikipedia.org/wiki/Byte-order_mark).
* The recommended line-break character is LF - `\n`.
* Files should end with a LF character.
* One level of indentation is achieved with 4 space characters.
* Lines should be no longer than 120 characters.
* Trailing whitespace at the end of lines should be removed.

[&#8593; back to TOC](#table-of-contents)

## Naming

* `variableNamesLikeThis`
* `functionNamesLikeThis`
* `functionArgumentsLikeThis`
* `ClassNamesLikeThis`
* `EnumNamesLikeThis`
* `methodNamesLikeThis`
* `CONSTANTS_LIKE_THIS`
* `namespacesLikeThis`
* `private` or `protected` properties and methods should be prefixed with a single `_` character
* Shortened and abbreviated names should be avoided.
* Common abbreviations, such as `JSON` and `XML` are written in `CamelCase`. For example: `Json`, `Xml`.

[&#8593; back to TOC](#table-of-contents)

## Variable declaration

* Each variable should be declared:
  * using a `var` statement;
  * only once in the current scope;
  * on a new line;
  * as close as possible to the place where it's first used.

* Each `var` statement should have only one variable declared in it.

**Good:**

```js
var keys = ['foo', 'bar'];
var values = [23, 42];

var object = {};
while (items.length) {
    var key = keys.pop();
    object[key] = values.pop();
}
```

**Bad:**

```js
var keys = ['foo', 'bar'],
    values = [23, 42],
    object = {},
    key;

while (items.length) {
    key = keys.pop();
    object[key] = values.pop();
}
```

[&#8593; back to TOC](#table-of-contents)

## Literals

### Objects

* There should be no whitespace after the opening and before the closing curly braces:

  ```js
  var obj = {a: 1, b: 2, c: 3};

  this.method({a: 1, b: 2});
  ```

* There should be no whitespace characters before the colon:

  ```js
  var obj = {
      prop: 0
  };
  ```

* Only property names should be aligned within object literals:

  **Good:**

  ```js
  var obj = {
      a: 0,
      b: 1,
      lengthyName: 2
  };
  ```

  **Bad:**

  ```js
  var obj = {
      a          : 0,
      b          : 1,
      lengthyName: 2
  };
  ```

* Quotes around property names should be typed only if needed:

  **Good:**

  ```js
  var obj = {
      key: 0,
      'key-key': 1
  };
  ```

  **Bad:**

  ```js
  var obj = {
      'key': 0,
      'key-key': 1
  };
  ```

* Spaces inside computed property brackets should not be used:

  **Good:**

  ```js
  var value = obj[key];
  ```

  **Bad:**

  ```js
  var value = obj[ key ];
  ```

[&#8593; back to TOC](#table-of-contents)

### Arrays

* When enumerating elements in an array literal, spaces should be typed after the comma only:

  ```js
  var fellowship = ['foo', 'bar', 'baz'];
  ```

[&#8593; back to TOC](#table-of-contents)

### Strings

* String literals should use single quotes:

  ```js
  var lyrics = 'Never gonna give you up. Never gonna let you down. Never gonna turn around and desert you.';
  ```

* If a string contains a single quote character, it should be escaped:

  ```js
  var test = 'It shouldn\'t fail';
  ```

[&#8593; back to TOC](#table-of-contents)

## Semicolons

Statements should always end with a semicolon.

[&#8593; back to TOC](#table-of-contents)

## Keywords

* Keywords are always followed by a single space character:

  ```js
  if (test) {
      // ...
  }

  function foo() {
      // ...
  }

  var bar = function () {
      // ...
  };
  ```

* If the keyword is followed by a semicolon, there should be no space between them:

  ```js
  return;
  ```

[&#8593; back to TOC](#table-of-contents)

## Block statements

* The opening curly brace should be on the same line and separated with one space character:

  ```js
  if (test) {
      // ...
  }

  function foo() {
      // ...
  }
  ```
* Branching and looping statements should always be surrounded with curly braces:

  **Good:**

  ```js
  if (test) {
      return;
  }
  ```
  **Bad:**

  ```js
  if (test)
      return;

  if (test) return;

  if (test) { return; }
  ```

[&#8593; back to TOC](#table-of-contents)

## Conditional statements

### if

* The `else` keyword should be on the same line as the closing brace of the if-part of the statement:

  ```js
  if (test) {
      // ...
  } else {
      // ...
  }
  ```

* Condition statements should not contain assignment operations:

  **Good:**

  ```js
  var foo = bar();
  if (foo > 0) {
      // ...
  }
  ```

  **Bad:**

  ```js
  var foo;
  if ((foo = bar()) > 0) {
      // ...
  }
  ```

* Logical operators should not be used for conditional branching:

  **Good:**

  ```js
  if (condition) {
      actionIfTrue();
  } else {
      actionIfFalse();
  }
  ```

  **Bad:**

  ```js
  condition && actionIfTrue() || actionIfFalse();
  ```

* Conditions longer than the [maximum line length](#general) should be divided as in the example:

  ```js
  if (longCondition ||
      anotherLongCondition &&
      yetAnotherLongCondition
  ) {
      // ...
  }
  ```

* [Yoda conditions](http://en.wikipedia.org/wiki/Yoda_conditions) should not be used:

  **Good:**
  ```js
  if (getType() === 'driving') {

  }
  ```

  **Bad:**
  ```js
  if ('driving' === getType()) {

  }
  ```

[&#8593; back to TOC](#table-of-contents)

### switch

The `switch` statement should be written as in the example:

```js
switch (value) {
    case 1:
        // ...
        break;

    case 2:
        // ...
        break;

    default:
        // ...
        // no break keyword on the last case
}
```

[&#8593; back to TOC](#table-of-contents)

## Loop statements

### for

* Expressions, enclosed in round parentheses, should be separated by space after semicolon:

  **Good:**

  ```js
  for (var i = 0; i < 10; i++) {
      doSomething();
  }
  ```

  **Bad:**

  ```js
  for (var i = 0 ; i < 10 ; i++) {
      doSomething();
  }
  ```

* Complicated expressions in round parentheses should be avoided.

[&#8593; back to TOC](#table-of-contents)

### do...while

* `while` keyword should be on the same line as the closing brace (like in [conditional statements](#conditional-statements)):

  ```js
  do {
      statements;
  } while (condition);
  ```

[&#8593; back to TOC](#table-of-contents)

## Operators

### 'with' operator

The `with` operator should not be used.

[&#8593; back to TOC](#table-of-contents)

### Comparison operators

If there is no need for type casting, the strict equality operator `===` (or strict inequality `!==`) should be used.

[&#8593; back to TOC](#table-of-contents)

### Ternary operator

The ternary operator should be written as in the examples:

```js
var x = a ? b : c;

var y = a ?
    longButSimpleOperandB : longButSimpleOperandC;

var z = a ?
    moreComplicatedB :
    moreComplicatedC;
```

[&#8593; back to TOC](#table-of-contents)

### Unary operators

Unary operators should be typed without whitespace between them and their operands:

```js
var foo = !bar;
```

Exceptions from this rule are the unary [special JS operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Special_operators)).

[&#8593; back to TOC](#table-of-contents)

## eval

The `eval` function should be avoided.
`json` serialized data should be parsed with [JSON.parse](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON/parse).

[&#8593; back to TOC](#table-of-contents)

## undefined

* Checking for `undefined` value of declared variable (e.g. function argument) should be done by using the strict equality operator:

  > Explanation:
  > * In modern browsers (`IE9+`, `Opera 12.16+`, `Firefox 4+`) [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
  >   is immutable (a non-configurable, non-writable property of the global object).
  > * It prevents undeclared variables usage.

  **Good:**

  ```js
  x === undefined
  ```

  **Bad:**

  ```js
  typeof x === 'undefined'
  x === void 0
  ```

  **Exceptions:**

  * `typeof` should be used if you need to support old browsers (like `IE8`) where `window.undefined` property is mutable.
  * `typeof` may be used in place where `string` type is expected:

    ```js
    switch (typeof x) {
        case 'number':
            // ...
        case 'undefined':
            // ...
    }
    ```

* Checking for existence of a global variable should be done by using `typeof` operator or by checking existence of a property of the global object:

  > Explanation: An attempt to access to undeclared variable will result an error.

  ```js
  if (typeof Foo !== 'undefined') {
      // ...
  }

  // Also okay for browser only code (`window` is unavailable in Node.js)
  if (window.Foo !== undefined) {
      // ...
  }
  ```

[&#8593; back to TOC](#table-of-contents)

## Parentheses

* Should not be used with the unary operators `delete`, `typeof` and `void`, or with the keywords `return`, `throw` and `new`:

  **Good**:

  ```js
  delete obj.key;
  typeof x === 'number';
  new Type();
  throw new Error();
  ```

  **Bad**:

  ```js
  delete(obj.key);
  typeof(x) === 'number';
  new(Type)();
  throw(new Error());
  ```

* Explicit parentheses in logical or mathematical expressions can be used to increase readability:

  ```js
  ((a - b > c) && c) || (c + d && d + 1) || e; // equivalent to a - b > c && c || c + d && d + 1 || e
  ```

[&#8593; back to TOC](#table-of-contents)

## Exceptions

`throw` should be used with `new Error` or an object of a class derived from `Error`:

**Good:**

```js
throw new Error('msg');
```

**Bad:**

```js
throw 'msg';
```

[&#8593; back to TOC](#table-of-contents)

## Type casting

Type casting should be done explicitly:

**Good:**

```js
Boolean(foo)
Number(bar)
String(baz)
[].indexOf(qux) === -1 or [].indexOf(qux) < 0
```

**Bad:**

```js
!!foo
+bar
baz + ''
~[].indexOf(qux)
```

[&#8593; back to TOC](#table-of-contents)

## Multi-line statements

* If a statement is longer than the maximum [line length](#general), it is split into several lines and properly indented.
* Lines of the statement should be split after an operator:

  ```js
  var debt = this.calculateBaseDebt() + this.calculateSharedDebt() + this.calculateDebtPayments() +
      this.calculateDebtFine();
  ```

* Closing parentheses should be on a new line with the indentation of the current block statement:

  **Good:**

  ```js
  DoSomethingThatRequiresALongFunctionName(
      veryLongArgument1,
      argument2,
      argument3,
      argument4
  );
  anotherStatement;
  ```

  **Bad:**

  ```js
  DoSomethingThatRequiresALongFunctionName(
      veryLongArgument1,
      argument2,
      argument3,
      argument4);
  anotherStatement;
  ```

[&#8593; back to TOC](#table-of-contents)

## Method chaining

When a method is called on a new line, it should:
  * Be one indentation level deeper than the target object.
  * Begin with the property access operator `.`.

**Good**:

```js
someObject
    .operation()
    .operationWithCallback(function (obj) {
        obj.processed = true;
    })
   .end();
```

**Bad**:

```js
someObject.
   start().
   end();

someObject
.start()
.end();
```

[&#8593; back to TOC](#table-of-contents)

## String concatenation

* Strings should be concatenated with the `+` operator.
* The `[].join('')` should be avoided.
* Escaping newline literals inside strings should be avoided.

**Good:**

```js
var foo = 'A rather long string of English text, an error message ' +
    'actually that just keeps going and going -- an error ' +
    'message to make the Energizer bunny blush (right through ' +
    'those Schwarzenegger shades)! Where was I? Oh yes, ' +
    'you\'ve got an error and all the extraneous whitespace is ' +
    'just gravy.  Have a nice day.';
```

**Bad:**

```js
var foo = 'A rather long string of English text, an error message \
          actually that just keeps going and going -- an error \
          message to make the Energizer bunny blush (right through \
          those Schwarzenegger shades)! Where was I? Oh yes, \
          you\'ve got an error and all the extraneous whitespace is \
          just gravy.  Have a nice day.';
```

[&#8593; back to TOC](#table-of-contents)

## Empty lines

A single empty line can be used as a separator for grouping the code into logical blocks:

```js
doSomethingTo(x);
doSomethingElseTo(x);
andThen(x);

nowDoSomethingWith(y);

andNowWith(z);
```

[&#8593; back to TOC](#table-of-contents)

## Comments

* In-line comments should start with `//`. Between the `//` and the text of the comment should be one space character.
* Comments for functions, classes, etc. should be written according to the [jsdoc](http://usejsdoc.org/) documentation syntax.

[&#8593; back to TOC](#table-of-contents)

## Functions

### this

* Binding the `this` value for function calls should be done using [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind):

  ```js
  doAsync(function () {
      this.fn();
  }.bind(this));
  ```

  **Note:** in ECMAScript 6 [arrow functions](#arrow-functions) are preferred.

* Preferably, the argument for `this` value should be used (if available):

  **Good:**

  ```js
  [1, 2, 3].forEach(function (n) {
      this.fn(n);
  }, this);
  ```

  **Bad:**

  ```js
  [1, 2, 3].forEach(function (n) {
      this.fn(n);
  }.bind(this));
  ```

* If assigning the `this` value to a variable, the variable should be named `_this`:

  ```js
  var _this = this;
  doAsync(function () {
      _this.fn();
  });
  ```

[&#8593; back to TOC](#table-of-contents)

### Return statement

Assignment in return statement should be avoided:

**Good:**

```js
var lazyCompute = (function () {
    var result;
    return function () {
        if (!result) {
            result = compute();
        }
        return result;
    }
}());
```

**Bad:**

```js
var lazyCompute = (function () {
    var result;
    return function () {
        return result || (result = compute());
    }
}());
```

[&#8593; back to TOC](#table-of-contents)

## Classes

* "Symmetrical" methods should be declared one after the other. For example:

  ```js
  function Foo() {}

  // Destructors are placed right after the constructor.
  Foo.prototype.destruct = function () {};

  Foo.prototype.someMethod = function () {};
  ```

* Constructor should not be used as a factory function:

  > Explanation:
  > * It makes code explicit.
  > * It simplifies migration to [ES6 classes](#classes-1), because class constructors cannot be
  >   invoked without `new`.

  **Bad:**

  ```js
  function Foo(bar) {
      if (!(this instanceof Foo)) {
          return new Foo(bar);
      }
      // ...
  }

  var foo = Foo();
  ```

[&#8593; back to TOC](#table-of-contents)

## Enums

* Enum names should be in `UpperCamelCase`.
* Enum members should be in `ALL_CAPS`.

```js
var Color = {
    BLUE: '#0000dd',
    RED: '#dd0000'
};
```

[&#8593; back to TOC](#table-of-contents)

## ECMAScript 2015

This section describes code style for [ECMAScript 2015 Language Specification](http://www.ecma-international.org/publications/standards/Ecma-262.htm).

### Strict mode

* [Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) should be used.

  > Explanation:
  > * It prevents nasty [bugs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#Changes_in_strict_mode).
  > * Many useful features of language (e.g. [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), [let declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), block scopes) are available only in strict mode.
  > * It simplifies migration to [ES6 modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/),
  because they are executed in strict mode.

* Strict mode should be enabled explicity using the `'use strict'` pragma.

  > Explanation:
  > * Dependencies of your code may not work in strict mode.
  > * Your code can be used in non-strict mode.

[&#8593; back to TOC](#table-of-contents)

### Variable declaration

* Avoid using `var`.
* All immutable references should be declared using a [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const).
* [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) should be used only for mutable references
(i.e. when variable will be (re)assigned different value later in the code).

  **Good:**

  ```js
  const count = observers.length;
  let index = 0;
  while (index < count) {
      const observer = observers[index];
      observer(...args);
      index = index + 1;
  }
  ```

  **Bad:**

  ```js
  // Reader expects count to change!
  let count = observers.length;
  let index = 0;
  while (index < count) {
      const observer = observers[index];
      observer(...args);
      index = index + 1;
  }

  const count = observers.length;
  let index = 0;
  while (index < count) {
      // Reader expects observer to change within the block!
      let observer = observers[index];
      observer(...args);
      index = index + 1;
  }

  const count = observers.length;
  // Do not use `var`
  var index = 0;
  while (index < count) {
      observers[index](...args);
      index = index + 1;
  }
  ```

* If the reference is immutable, but the value is mutable, `const` decalaration should be used:

  **Good:**

  ```js
  const query = {};
  query.param = 'value';
  ```

  **Bad:**

  ```js
  let query = {};
  query.param = 'value';
  ```

[&#8593; back to TOC](#table-of-contents)

### Classes

* For class definition the `class` keyword should be used:

  **Good:**

  ```js
  class Circle {
      constructor(x, y, radius) {
          this.x = x;
          this.y = y;
          this.radius = radius;
      }

      area() {
          return Math.PI * this.radius * this.radius;
      }
  }
  ```

  **Bad:**

  ```js
  function Circle(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
  }

  Circle.prototype.area = function () {
      return Math.PI * this.radius * this.radius;
  };
  ```

* There should be one whitespace after the class name:

  **Good:**

  ```js
  class Circle {}
  ```

  **Bad:**

  ```js
  class Circle{}
  ```

* There should be no whitespace after method name:

  **Good:**

  ```js
  class Circle {
      area() {}
  }
  ```

  **Bad:**

  ```js
  class Circle {
      area () {}
  }
  ```

* There should be one whitespace before the opening curly brace of method's body:

  **Bad:**

  ```js
  class Circle {
      area(){}
  }
  ```

* The constructor (if exists) should be the first method in a class definition:

  **Good:**

  ```js
  class Circle {
      constructor() {}

      area() {}
  }
  ```

  **Bad:**

  ```js
  class Circle {
      area() {}

      constructor() {}
  }
  ```

* For inheritance the `extends` keyword should be used:

  **Good:**

  ```js
  class Stream extends EventEmitter {}
  ```

  **Bad:**

  ```js
  var util = require('util');

  class Stream() {
      constructor() {
          EventEmitter.call(this);
      }
  }

  util.inherits(Stream, EventEmitter);
  ```

[&#8593; back to TOC](#table-of-contents)

### Arrow functions

* [Arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
  should be used where an anonymous function is expected (when you need function and you don't want bind it to an
  identifier):

  > Explanation: Arrow functions capture the `this` value of the enclosing context. That prevents run-time errors with
  > unexpected values of `this`. Also it's a more efficient method than binding `this` value using
  > `Function.prototype.bind`.

  ```js
  [1, 2, 3].map((x) => {
      // ...
  });

  // Use `function` here, because pass `someObj` as `this` argument.
  [1, 2, 3].map(function (x) {
      // ...
  }, someObj);

  // Use `function` here, because specify name.
  decorate(function createSomething() {
      // ...
  });
  ```

* Always add parentheses around arrow function parameters:

  > Explanation:
  > * This style is consistent with cases when function takes zero or more than one parameters.
  > * You need to alter the code less, if the number of parameters changes.

  **Good:**

  ```js
  [1, 2, 3].map((x) => x * 2);
  [1, 2, 3].reduce((acc, n) => acc + n);
  ```

  **Bad:**

  ```js
  [1, 2, 3].map(x => x * 2);
  ```

* Before and after an arrow function's arrow (`=>`) whitespace is required:

  ```js
  [1, 2, 3].map((x) => x * 2);
  ```

* If the function body consists of a single expression, braces should be omitted:

  **Good:**

  ```js
  [1, 2, 3].map((x) => x * 2);
  ```

  **Bad:**

  ```js
  [1, 2, 3].map((x) => { return x * 2; });
  ```

[&#8593; back to TOC](#table-of-contents)

### Template strings

* Spaces in placeholders (after `${` and before `}`) should not be used:

  **Good:**

  ```js
  `Hello ${name}`
  ```

  **Bad:**

  ```js
  `Hello ${ name }`
  ```

[&#8593; back to TOC](#table-of-contents)

### Default parameters

* Spaces around the `=` sign should be used:

  **Good:**

  ```js
  function project(point, zoom = 23) {}
  ```

  **Bad:**

  ```js
  function project(point, zoom=23) {}
  ```

[&#8593; back to TOC](#table-of-contents)

### Destructuring assignment

* In [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  rules for [Objects](#objects) and [Arrays](#arrays) should be used:

  **Good:**

  ```js
  const [a, b] = someArray;
  const {a, b} = someObject;
  ```

  **Bad:**

  ```js
  const [ a, b ] = someArray;
  const { a, b } = someObject;
  ```

* If some value in `array destructuring` is ignored, it should not be marked with space:

  **Good:**

  ```js
  const [first,, third] = ['foo', 'bar', 'baz'];
  const [,, third] = ['foo', 'bar', 'baz'];
  ```

  **Bad:**

  ```js
  const [first, , third] = ['foo', 'bar', 'baz'];
  const [ , , third] = ['foo', 'bar', 'baz'];
  ```

* For default values spaces around `=` should be used:

  **Good:**

  ```js
  function sendRequest({cache = true, timeout = 200}) {}
  ```

  **Bad:**

  ```js
  function sendRequest({cache=true, timeout=200}) {}
  ```

* Long destructuring patterns should be written as in the example:

  ```js
  const {
      protocol,
      hostname,
      port,
      pathname,
      query
  } = url.parse(urlString);

  function formatUrl({
      protocol,
      hostname,
      port,
      pathname,
      query
  }) {
      // ...
  }
  ```

[&#8593; back to TOC](#table-of-contents)

### Rest parameters and spread operator

* [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
  should be preferred instead [arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).

* [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
  should be preferred instead [Function.prototype.apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply).

* The space between `rest` or `spread` operator and their expressions should not be used:

  **Good:**

  ```js
  let [head, ...tail] = someArray;
  function foo(...args) {}
  ```

  **Bad:**

  ```js
  let [head, ... tail] = someArray;
  function foo(... args) {}
  ```

[&#8593; back to TOC](#table-of-contents)

### Generators

* The asterisk `*` in a [generator declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
should be sticked to the `function` keyword:

  **Good:**

  ```js
  function* createIterator() {
      yield 1;
  }

  const createIterator = function* () {
      yield 1;
  };
  ```

  **Bad:**

  ```js
  function *createIterator() {
      yield 1;
  }

  const createIterator = function * () {
      yield 1;
  };
  ```

* In a [shorthand method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
the asterisk should be sticked to the `method name`:

  **Good:**

  ```js
  class Graph {
      *edges() {}
  }
  ```

  **Bad:**

  ```js
  class Graph {
      * edges() {}
  }
  ```

* In an [yield* expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*)
the asterisk should be sticked to the `yield` keyword:

  **Good:**

  ```js
  function* gen() {
      yield* anotherGen();
  }
  ```

  **Bad:**

  ```js
  function* gen() {
      yield *anotherGen();
  }
  ```

[&#8593; back to TOC](#table-of-contents)

### Modules

* Long named [imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
  and [exports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
  should be written as in the examples:

  ```js
  import {
      name1 as localName1,
      name2,
      name3,
      name4
  } from 'src/foo';

  export {
      name1 as exportName1,
      name2,
      name3,
      name4
  };
  ```

[&#8593; back to TOC](#table-of-contents)

## ECMAScript 2017

### async-await

* Avoid unnecessary `return await`.

  > Explanation: An async function always wraps the return value in a `Promise`. Using `return await`
  > just adds extra time before the resulting promise is resolved without changing the semantics.

  **Good:**

  ```js
  async function foo() {
      return bar();
  }
  ```

  **Bad:**

  ```js
  async function foo() {
      return await bar();
  }
  ```

## Node.js

### Importing modules

* Modules should be imported in the beginning of the file, after the description of the module (if present):

  **Good:**

  ```js
  var http = require('http');
  var fs = require('fs');

  // code here
  ```
  **Bad:**

  ```js
  var http = require('http');

  // code here

  var fs = require('fs');

  // code here
  ```

  **Exception:** This rule does not apply to modules that are imported "on demand".

* Module import calls should be grouped according to the following order:

  1. Standard node.js modules (i.e. fs, util, etc.).
  2. External lib modules.
  3. Modules of the current application.

[&#8593; back to TOC](#table-of-contents)

## Licence

[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)

[&#8593; back to TOC](#table-of-contents)
