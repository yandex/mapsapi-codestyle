JavaScript CodeStyle
====================

##General

  * Files should be encoded in UTF-8 without [BOM](http://en.wikipedia.org/wiki/Byte-order_mark).
  * The recommended line-break character is LF - `\n`.
  * Files should end with a LF character.
  * One level of indentation is achieved with 4 space characters.
  * Lines should be no longer than 120 characters.
  * Trailing whitespace at the end of lines should be removed.

##Naming
  * `variableNamesLikeThis`
  * `functionNamesLikeThis`
  * `ClassNamesLikeThis`
  * `methodNamesLikeThis`
  * `CONSTANTS_LIKE_THIS`
  * `namespacesLikeThis`
  * `events-like-this`
  * `private` or `protected` properties and methods should be prefixed with a single `_` character
  * Shortened and abbreviated names should be avoided.
  * Common abbreviations, such as `JSON` and `XML` are written in `CamelCase`. For example: `Json`, `Xml`.

##Variable declaration
Each variable should be declared:
  * in a `var` statement;
  * only once in the current scope;
  * on a new line;
  * as close as possible to the place where it's first used.

Each `var` statement should have only one variable declared in it.

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
  * There should be no whitespace characters before the closing semicolon:

```javascript
var obj = {
    prop: 0
};
```
  * Only property names should be aligned within object literals:

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
  * When enumerating elements in an array literal, spaces should be typed after the comma only:

```javascript
var fellowship = ['foo', 'bar', 'baz'];
```

###Strings
  * String literals should use single quotes:

```javascript
var lyrics = 'Never gonna give you up. Never gonna let you down. Never gonna turn around and desert you.';
```
  * If a string contains a single quote character, it should be escaped:

```javascript
var test = 'It shouldn\'t fail';
```

##Semicolons
Statements should always end with a semicolon.

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
  * The opening curly brace should be on the same line and separated with one space character:

```javascript
if (test) {
    // ...
}

function foo() {
    // ...
}
```
  * Branching and looping statements should always be surrounded with curly braces:

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
  * The `else` keyword should be on the same line as the closing brace of the if-part of the statement:

```javascript
if (test) {
    // ...
} else {
    // ...
}
```
  * Condition statements should not contain assignment operations:

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
  * Logical operators should not be used for conditional branching:

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
  * Conditions longer than the [maximum line length](#general) should be divided as in the example:

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
The switch statement should be written as in the example:

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
If possible, [Array.prototype.forEach](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) should be used instead of a `for` loop.

```javascript
[1, 2, 3].forEach(function (value) {
    console.log(value);
});
```
Performance-critical parts of the code can use a `for` statement.

###for (var i in obj)
If possible, [Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) should be used instead of a `for-in` construction.
```javascript
Object.keys(obj).forEach(function (key) {
    console.log(key);
});
```

##Operators
###'with' operator

The `with` operator should not be used.

###Comparison Operators
If there is no need for type casting, the strict equality operator `===` (or strict inequality `!==`) should be used.

###Ternary Operator
The ternary operator should be written as in the examples:

```javascript
var x = a ? b : c;

var y = a ?
    longButSimpleOperandB : longButSimpleOperandC;

var z = a ?
    moreComplicatedB :
    moreComplicatedC;
```

###Unary Operators
Unary operators should be typed without whitespace between them and their operands:
```javascript
var foo = !bar;
```
Exceptions from this rule are the unary [special JS operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Special_operators)).

##eval
The `eval` function should be avoided.
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
  * Should be used only if it is required of the expression's syntax or semantics.
  * Should not be used with the unary operators `delete`, `typeof` and `void`, or with the keywords `return`, `throw` and `new`.

##Exceptions
`throw` should be used with `new Error` or an object of a class derived from `Error`:

**Good:**
```javascript
throw new Error('msg');
```
**Bad:**
```javascript
throw 'msg';
```

##Type Casting
Type casting should be done explicitly:

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
  * If a statement is longer than the maximum [line length](#general), it is split into several lines and properly indented.
  * Operators should be placed in the end of the line:

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
  * Escaping newline literals inside strings should be avoided.

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
A single empty line can be used as a separator for grouping the code into logical blocks:

```javascript
doSomethingTo(x);
doSomethingElseTo(x);
andThen(x);

nowDoSomethingWith(y);

andNowWith(z);
```

##Function Context
* Binding the context variable for function calls should be done using [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind):

```javascript
doAsync(function () {
    this.fn();
}.bind(this));
```

* Preferably, the context argument should be used (if available):

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

* If assigning the current context to a variable, the variable should be named `_this`:

```javascript
var _this = this;
doAsync(function () {
    _this.fn();
});
```

##Comments
  * In-line comments should start with `//`. Between the `//` and the text of the comment should be one space character.
  * Comments for functions, classes, etc. should be written according to the [jsdoc](http://usejsdoc.org/) documentation syntax.

##Function
###Arguments
[Boolean Traps](http://doc.qt.digia.com/qq/qq13-apis.html#thebooleanparametertrap) should be avoided in the signatures of functions:

```javascript
/**
 * @param {Boolean} async
 */
function fetchResults(async) {}

// The boolean trap reduces the human-readability of the code.
fetchResults(false);
```
Boolean Trap can be avoided by using one of the following methods:

 * Break down the function into two functions, that are named according to the action they preform:
```javascript
function fetchResultsSync() {}
function fetchResultsAsync() {}
```
  * Use constants, enums or static class-properties as arguments:
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

[Convenience Traps](http://doc.qt.digia.com/qq/qq13-apis.html#theconveniencetrap) should be avoided in the signature of functions:

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
  * It is recommended to use the [inherit](https://github.com/dfilatov/inherit) lib for class declaration and as an inheritance mechanism.
  * Destructors should be named `destruct`.
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
  * Modules should be imported in the beginning of the file, after the description of the module (if present):

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

1. Standard node.js modules (i.e. fs, util, etc.).
2. External lib modules.
3. Modules of the current application.
