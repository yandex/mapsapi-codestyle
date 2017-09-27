TypeScript Code Style
=====================

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [General](#general)
- [Compiler Options](#compiler-options)
- [Naming](#naming)
- [Typing](#typing)
- [Type assertions](#type-assertions)
- [Arrays](#arrays)
- [Classes](#classes)
- [Enums](#enums)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## General

This style guide extends existing [JavaScript style guide](javascript.md) and
defines rules for TypeScript specific features.

[&#8593; back to TOC](#table-of-contents)

## Compiler Options

`tsc` has some [options](http://www.typescriptlang.org/docs/handbook/compiler-options.html)
to make type checks stricter:

* `noImplicitAny`;
* `noImplicitReturns`;
* `noUnusedLocals`;
* `noUnusedParameters`;
* `noImplicitThis`;
* `strictNullChecks`.

It's recommended to turn them on as early as possible in development (and migration
from JS).

[&#8593; back to TOC](#table-of-contents)

## Naming

* `InterfaceLikeThis`.
* `TypeAliasLikeThis`.
* In generics:
  * `K` and `V` are reserved for key-value generic data structures, `K` for key
    types and `V` for value types;
  * `T` and `U` are reserved for generic data types;
  * other generic parameters should have meaningful names:

  **Good:**

  ```ts
  function foo<Attribute, State>(attributes: Attribute[], state: State): void {
      // ...
  }
  ```

  **Bad:**

  ```ts
  function foo<A, S>(attributes: A[], state: S): void {
      // ...
  }
  ```

[&#8593; back to TOC](#table-of-contents)

## Typing

* Prefer interfaces to in place structure definitions:

  > Explanation:
  > In place structure definitions make it unnecessary difficult to reuse a type.
  > Also meaningful type names help to document code.

  **Good:**

  ```ts
  interface Person {
      name: string;
      age: number;
  }

  let person: Person;
  ```

  **Bad:**

  ```ts
  let person: {name: string, age: number};
  ```

* Prefer interfaces to type aliases.

  > Explanation:
  > From [handbook](http://www.typescriptlang.org/docs/handbook/advanced-types.html):
  > > ...interfaces create a new name that is used everywhere... [whereas]
  > > ...type aliases don’t create a new name — for instance, error messages
  > > won’t use the alias name.
  >
  > > ...type aliases cannot be extended or implemented from.

* Don't use `void` for functions returning `undefined`:

  > Explanation:
  > * `void` means that a function doesn't return a value;
  > * `void` isn't assignable to `undefined`.

  **Good:**

  ```ts
  function find(): object | undefined {
      // ...
      return; // or `return undefined;` for the sake of being explicit.
  }
  ```

  **Bad:**

  ```ts
  function find(): object | void {
      // ...
  }
  ```

[&#8593; back to TOC](#table-of-contents)

## Type assertions

* If you don't use `JSX`, use "angle-bracket" syntax:

  **Good:**

  ```ts
  (<string>someValue).length;
  ```

  **Bad:**

  ```ts
  (someValue as string).length;
  ```

## Arrays

* For array declaration use `T[]` notation:

  **Good:**

  ```ts
  let pool: (LockableConnection | null)[];
  ```

  **Bad:**

  ```ts
  let pool: Array<LockableConnection | null>;
  ```

[&#8593; back to TOC](#table-of-contents)

## Classes

* Don't use `public` modifier for public class members:

  > Explanation: In TypeScript, each member is public by default (like in JavaScript). Explicit
  > public modifier is redundant.

  **Good:**

  ```ts
  class Foo {
      publicProp: number;

      publicMethod(): void {}
  }
  ```

  **Bad:**

  ```ts
  class Foo {
      public publicProp: number;

      public publicMethod(): void {}
  }
  ```

* Prefix `private` and `protected` fields with `_`:

  > Explanation:
  > * Underscore specifies visual difference from public fields. So, you don't need to read the
  >   field's declaration to determine its visibility.
  > * Minimizes name conflicts with other public fields: after adding public field with the same
  >   name as private field, you don't need perform renaming.
  > * Simplifies migration from JavaScript, where `_` often means that the field is "internal".
  > * Improves autocompletion by dictionary: when you type `_` the autocomplete popup shows
  >   non-public fields.

  **Good:**

  ```ts
  class Foo {
      private _prop: number;

      protected _method(): void {}
  }
  ```

  **Bad:**

  ```ts
  class Foo {
      private prop: number;

      protected method(): void {}
  }
  ```

[&#8593; back to TOC](#table-of-contents)

## Enums

* Prefer using const enums.

  > Explanation: const enums are completely removed during compilation. Const enum members are
  > inlined at places of use.

  If you need real objects in generated code, use non-const enums. E.g.:

  * enum contains computed members;
  * enum should be printed (generated object stores both forward (`name -> value`) and reverse
    (`value -> name`) mappings);
  * enum should be available from JavaScript.

[&#8593; back to TOC](#table-of-contents)
