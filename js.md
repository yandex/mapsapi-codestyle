JavaScript CodeStyle
====================

##General

  * Files should be encoded in UTF-8 without [BOM](http://en.wikipedia.org/wiki/Byte-order_mark).
  * The recommended line-break character is LF (\n).
  * Files should end with LF character.
  * One level of indention is achieved with 4 space characters.
  * The maximum line length is 120 characters.
  * No additional white-space is allowed in the end of the line.

##Naming
  * `variableNamesLikeThis`
  * `functionNamesLikeThis`
  * `ClassNamesLikeThis`
  * `methodNamesLikeThis`
  * `CONSTANTS_LIKE_THIS`
  * `namespacesLikeThis`
  * `events-like-this`
  * `private` or `protected` properties and methods should be prepended with a single `_` character
  * Shortened and abbreviated names should be avoided.
  * Common abbreviations, such as `JSON` and `XML` are written in `CamelCase`. For example: `Json`, `Xml`.

##Variable declaration
  * A variable should be declared in a `var` statement.
  * A variable should be declared only once in the current scope.
  * A variable should be declared on a new line.
  * A variable should be declared as close as possible to the place where it's first used.

**Good:**
```javascript
var keys = ['foo', 'bar'];
var values = [23, 42];

var object = {};
while (items.length) {
    var key = keys.pop();
    object[key] = values.pop();
}
```

**Bad:**
```javascript
var keys = ['foo', 'bar'],
    values = [23, 42],
    object = {},
    key;

while (items.length) {
    key = keys.pop();
    object[key] = values.pop();
}
```

##Literals

###Objects
  * There should be no whitespace after the opening and before the closing curly braces:

```javascript
var obj = {a: 1, b: 2, c: 3};

this.method({a:1, b:2});
```
  * There should no whitespace characters before the closing semicolon:

```javascript
var obj = {
    prop: 0
};
```
  * Value-aligning in literal objects should be avoided:

**Good:**

```javascript
var obj = {
    a: 0,
    b: 1,
    lengthyName: 2
};
```
**Bad:**

```javascript
var obj = {
    a          : 0,
    b          : 1,
    lengthyName: 2
};
```
  * Quotes around property names should be typed only if needed:

**Good:**

```javascript
var obj = {
    key: 0,
    'key-key': 1
};
```

**Bad:**

```javascript
var obj = {
    'key': 0,
    'key-key': 1
};
```

###Arrays
  * When enumerating elements of a literal array, spaces should be typed after the coma only:

```javascript
var fellowship = ['foo', 'bar', 'baz'];
```

###Strings
  * String literals should use single quotes:


```javascript
var lyrics = 'Never gonna give you up. Never gonna let you down. Never gonna turn around and desert you.';
```

  * If the string's text contains a single quote, it should be escaped, rather than using double quotes:

```javascript
var test = 'It shouldn\'t fail';
```

##Semicolons
Statements should end with semicolon.

##Keywords
  * Keywords are always followed by a single space character:

```javascript
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

```javascript
return;
```

##Block Statements
  * The opening curly brace should be on the same line as the end of the previous construction, and separated with a single space:

```javascript
if (test) {
    // ...
}

function foo() {
    // ...
}
```
  * Branching and looping statements should always be enclosed in curly braces:

**Good:**

```javascript
if (test) {
    return;
}
```
**Bad:**

```javascript
if (test)
    return;

if (test) return;

if (test) { return; }
```

##Conditional Statements
###if
  * `else` should be written on the same line as the closing brace of the if-part of the statement:

```javascript
if (test) {
    // ...
} else {
    // ...
}
```
  * Condition statements should not contain value assignment:

**Good:**

```javascript
var foo = bar();
if (foo > 0) {
    // ...
}
```

**Bad:**
```javascript
var foo;
if ((foo = bar()) > 0) {
    // ...
}
```
  * Logical operator statements should not be used for conditional branching:

**Good:**

```javascript
if (condition) {
    actionIfTrue();
} else {
    actionIfFalse();
}
```

**Bad:**
```javascript
condition && actionIfTrue() || actionIfFalse();
```
  * Conditions longer than the maximum number of characters per line should be divided as follows:
      * Lines should be terminated after a conditional operator;
      * New lines should have the same indentation as the beginning character of the first condition;
      * The closing parenthesis of the condition and the opening bracket of the block statement should be written on a new line.

```javascript
if (longCondition ||
    anotherLongCondition &&
    yetAnotherLongCondition
) {
    // ...
}
```

 * [Yoda conditions](http://en.wikipedia.org/wiki/Yoda_conditions) should not be used:

**Good:**
```javascript
if (getType() === 'driving') {

}
```

**Bad:**
```javascript
if ('driving' === getType()) {

}
```

###switch

```javascript
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

##Loops
###for
If possible instead of a `for` loop, [Array.prototype.forEach](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) should be used:

```javascript
[1, 2, 3].forEach(function (value) {
    console.log(value);
});
```
Performance-critical parts of the code can use a `for` statement.

###for (var i in obj)
If possible instead of the `for-in` construction [Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) should be used:
```javascript
Object.keys(obj).forEach(function (key) {
    console.log(key);
});
```

##Operators
###with

The `with` operator should not be used.

###Comparison Operators
If there is no need for type casting, the strict equality operator `===` (or strict inequality `!==`) should be used.

###Ternary Operator

```javascript
var x = a ? b : c;

var y = a ?
    longButSimpleOperandB : longButSimpleOperandC;

var z = a ?
    moreComplicatedB :
    moreComplicatedC;
```

###Unary Operators
Unary operators should be prepended to their operands with no whitespace:

```javascript
var foo = !bar;
```

##eval
The use of the `eval` function should be avoided.
`json` serialized data should be parsed with [JSON.parse](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON/parse).

##undefined
Checking for `undefined` values should be done using the strict equality operator.

**Good:**
```javascript
x === undefined;
```

**Bad:**
```javascript
typeof x === 'undefined'

x === void 0
```

##Parentheses
  * Should be used only, if it required of the expression's syntax or semantics.
  * Should not be used with the unary operators `delete`, `typeof` and `void`, or with the keywords `return`, `throw` and `new`.

##Exceptions
`throw` should be used with `new Error` or an object of a class that inherits from `Error`:

**Good:**
```javascript
throw new Error('msg');
```
**Bad:**
```javascript
throw 'msg';
```

##Type Casting
Types should be cast explicitly:

**Good:**
```javascript
Boolean(foo)
Number(bar)
String(baz)
[].indexOf(qux) === -1 or [].indexOf(qux) < 0
```
**Bad:**
```javascript
!!foo
+bar
baz + ''
~[].indexOf(qux)
```

##Multi-Line Statements
  * If a statement is longer than the maximum line length, it is split into several lines with proper indentation.
  * Operators are placed on the previous line:

```javascript
var debt = this.calculateBaseDebt() + this.calculateSharedDebt() + this.calculateDebtPayments() +
    this.calculateDebtFine();
```
  * Closing parentheses should be on a new line with the indentation of the current block statement:

**Good:**
```javascript
DoSomethingThatRequiresALongFunctionName(
    very_long_argument1,
    argument2,
    argument3,
    argument4
);
anotherStatement;
```
**Bad:**
```javascript
DoSomethingThatRequiresALongFunctionName(
    very_long_argument1,
    argument2,
    argument3,
    argument4);
anotherStatement;
```

##String concatenation
  * Strings should be concatenated with the `+` operator.
  * The `[].join('')` should be avoided.
  * Escaping the new line character with `\\` should be avoided.

**Good:**
```javascript
var foo = 'A rather long string of English text, an error message ' +
    'actually that just keeps going and going -- an error ' +
    'message to make the Energizer bunny blush (right through ' +
    'those Schwarzenegger shades)! Where was I? Oh yes, ' +
    'you\'ve got an error and all the extraneous whitespace is ' +
    'just gravy.  Have a nice day.';
```
**Bad:**
```javascript
var foo = 'A rather long string of English text, an error message \
          actually that just keeps going and going -- an error \
          message to make the Energizer bunny blush (right through \
          those Schwarzenegger shades)! Where was I? Oh yes, \
          you\'ve got an error and all the extraneous whitespace is \
          just gravy.  Have a nice day.';
```

##Empty Lines
A single empty line can be used for grouping the code into logical sections:

```javascript
doSomethingTo(x);
doSomethingElseTo(x);
andThen(x);

nowDoSomethingWith(y);

andNowWith(z);
```

##`this` In Closures

* Binding the context variable for function calls should be done using [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind):

```javascript
doAsync(function () {
    this.fn();
}.bind(this));
```

* Preferably the context argument of methods should be used (if available):

**Good:**

```javascript
[1, 2, 3].forEach(function (n) {
    this.fn(n);
}, this);
```

**Bad:**

```javascript
[1, 2, 3].forEach(function (n) {
    this.fn(n);
}.bind(this));
```

* If assigning the current context to a variable, the name `_this` should be used:

```javascript
var _this = this;
doAsync(function () {
    _this.fn();
});
```

##Comments
  * In-line comments should be prepend with `//`. Between the `//` and the text of the comment should be one space character.
  * Comments for functions, classes, etc. should be written according to [jsdoc](http://usejsdoc.org/).

##Function
###Arguments
  * When choosing the function's signature, [Boolean Traps](http://doc.qt.digia.com/qq/qq13-apis.html#thebooleanparametertrap) should be avoided:

```javascript
/**
 * @param {Boolean} async
 */
function fetchResults(async) {}

// The boolean trap reduces the human-readability of the code.
fetchResults(false);
```

  * Boolean Trap can be avoided by using one of the following methods:

    * Break down the function into two functions, that are named according to the action they preform:

```javascript
function fetchResultsSync() {}
function fetchResultsAsync() {}
```
    * Use constants, enums or static class-properties for the values of the parameter:

```javascript
/**
 * @enum {Boolean}
 */
var FetchMethod = {
    SYNC: false,
    ASYNC: true
};

/**
 * @param {FetchMethod} method
 */
function fetchResults(method) {}

fetchResults(FetchMethod.SYNC);
```

[Convenience Traps](http://doc.qt.digia.com/qq/qq13-apis.html#theconveniencetrap) should be avoided in the signature of your functions:

```javascript
// A WebGL method call (without documentation, it will be hard to comprehend the meaning of the arguments)
glCtx.vertexAttribPointer(this._glHandler, 4, glCtx.FLOAT, false, 0, 0);
```
Convenience and boolean traps can be avoided using named parameters:

```javascript
/**
 * @param {Object} params
 * @param {Boolean} params.async
 */
function fetchResults(params) {}

fetchResults({async: false});

glCtx.vertexAttribPointer(this._glHandler, {
    size: 4,
    type: glCtx.FLOAT,
    normalizeData: false,
    stride: 0,
    offset: 0
});
```

##Classes
  * For class declaration and inheritance should be used the [inherit](https://github.com/dfilatov/inherit) lib.
  * Destructors should be named `destruct()`.
  * "Symmetrical" methods should be declared one after the other. For example:

```javascript
var FooClass = inherit({
    __constructor: function () {},

    // destructors are placed right after the constructor
    destruct: function () {},

    someMethod: function() {}
});
```

##jQuery
  * `jQuery` should be used only for interacting with the `DOM`.
  * It is recommended to use third-party `extend` implementations, instead of `jQuery.extend`.
  * It is recommended to use [vow](https://github.com/dfilatov/vow) for Promise and Deferred implementation, instead for `jQuery.Deferred`.

##node.js

###Importing Modules

  * CommonJS modules should be imported in the beginning of the file, after the description of the module (if present):

**Good:**

```javascript
var http = require('http');
var fs = require('fs');

// code here
```
**Bad:**

```javascript
var http = require('http');

// code here

var fs = require('fs');

// code here
```

This rule does not apply to modules that are imported "on demand".

  * Module import calls should be grouped according to the following order:

1. Standard node.js modules (i.e. fs, utils, etc.).
2. External lib modules.
3. Modules of the current application.
