TypeScript Code Style
=====================

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

- [General](#general)
- [Naming](#naming)
- [Typing](#typing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## General

This style guide is generally the same as the one for JavaScript.

[&#8593; back to TOC](#table-of-contents)

## Naming

* `IInterfaceLikeThis` — notice `I` in the beginning.
* In generics:
  * `K` is reserved for key-like data types;
  * `T` and `U` are reserved for generic data types;
  * other generic parameters should have meaningfull names.

[&#8593; back to TOC](#table-of-contents)

## Typing

* Don't use in-place structure definitions, create interfaces instead:

  **Good**

  ```ts
  interface IPerson {
      name: string;
      age: number;
  }

  let person: IPerson;
  ```

  **Bad**

  ```ts
  let person: {name: string, age: number};
  ```

* Prefer interfaces to type aliases.
* Don't use `void` for functions returning `undefined`:

  **Good**

  ```ts
  function find(): Object | undefined {
      /* ... */
      return undefined;
  }
  ```

  **Bad**

  ```ts
  function find(): Object | void {
      /* ... */
  }
  ```

[&#8593; back to TOC](#table-of-contents)
