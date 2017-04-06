TypeScript Code Style
=====================

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [General](#general)
- [Compiler Options](#compiler-options)
- [Naming](#naming)
- [Typing](#typing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## General

This style guide extends existing [JavaScript style guide](javascript.md) and
defines rules for TypeScript specific features.

[&#8593; back to TOC](#table-of-contents)

## Compiler Options

`tsc` has some (options)[http://www.typescriptlang.org/docs/handbook/compiler-options.html]
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

  **Good**

  ```ts
  function foo<Attribute, State>(attributes: Attribute[], state: State): void {
      /* ... */
  }
  ```

  **Bad**

  ```ts
  function foo<A, S>(attributes: A[], state: S): void {
      /* ... */
  }
  ```

[&#8593; back to TOC](#table-of-contents)

## Typing

* Prefer interfaces to in place structure definitions:

  > Explanation:
  > In place structure definitions make it unnecessary difficult to reuse a type.
  > Also meaningful type names help to document code.

  **Good**

  ```ts
  interface Person {
      name: string;
      age: number;
  }

  let person: Person;
  ```

  **Bad**

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

  **Good**

  ```ts
  function find(): Object | undefined {
      /* ... */
      return; // or `return undefined;` for the sake of being explicit.
  }
  ```

  **Bad**

  ```ts
  function find(): Object | void {
      /* ... */
  }
  ```

[&#8593; back to TOC](#table-of-contents)
