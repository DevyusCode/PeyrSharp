# ArrayExtensions

This page is about the `ArrayExtensions` class available in [`PeyrSharp.Extensions`](/extensions.md).
You can find here all of its extension methods.

::: info
This class is `static`.
:::

## Compatibility

The `ArrayExtensions` class is part of the `PeyrSharp.Extensions` module, and is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Extensions       | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Extensions       | ✅         | ✅         | ✅             |

## Methods

### Append(item)

#### Definition

The `Append<T>()` method adds an item to an existing array of any type. It returns an array of the chosen type (`T[]`).

#### Arguments

| Type | Name   | Meaning                          |
| ---- | ------ | -------------------------------- |
| `T`  | `item` | The item to append in the array. |

#### Usage

```c#
using PeyrSharp.Extensions;

int[] numbers = { 1, 2, 3, 4 };
int[] appendNumbers = numbers.Append(5);
// appendNumbers: { 1, 2, 3, 4, 5 }
```

### Append(items)

#### Definition

The `Append<T>()` method adds multiple items to an existing array of any type. It returns an array of the chosen type (`T[]`).

#### Arguments

| Type         | Name    | Meaning                           |
| ------------ | ------- | --------------------------------- |
| `params T[]` | `items` | The items to append in the array. |

#### Usage

```c#
using PeyrSharp.Extensions;

int[] numbers = { 1, 2, 3, 4 };
int[] appendNumbers = numbers.Append(5, 6);
// appendNumbers: { 1, 2, 3, 4, 5, 6 }
```

### RemoveElement(item)

#### Definition

The `RemoveElement<T>()` method removes an item from an array. It returns an array of the chosen type (`T[]`).

#### Arguments

| Type | Name   | Meaning                            |
| ---- | ------ | ---------------------------------- |
| `T`  | `item` | The item to remove from the array. |

#### Usage

```c#
using PeyrSharp.Extensions;

int[] numbers = { 1, 2, 3, 4, 5 };
int[] remove = numbers.RemoveItem(5);
// remove: { 1, 2, 3, 4 }
```

### RemoveElement(items)

#### Definition

The `RemoveElement<T>()` method removes multiple items from an array. It returns an array of the chosen type (`T[]`).

#### Arguments

| Type         | Name    | Meaning                             |
| ------------ | ------- | ----------------------------------- |
| `params T[]` | `items` | The items to remove from the array. |

#### Usage

```c#
using PeyrSharp.Extensions;

int[] numbers = { 1, 2, 3, 4, 5 };
int[] remove = numbers.RemoveItem(5);
// remove: { 1, 2, 3, 4 }
```

### UnSplit(array, separator)

#### Definition

Concatenates the elements of a `string` array, using the specified `separator` between each element. Return a `string` that consists of the elements of `array` delimited by the `separator` `string`. If `array` has no elements, the method returns an empty `string`.

#### Arguments

| Type     | Name        | Meaning                                |
| -------- | ----------- | -------------------------------------- |
| `string` | `array`     | The array of `string`s to concatenate. |
| `string` | `separator` | The `string` to use as a separator.    |

#### Usage

```c#
using PeyrSharp.Extensions;

string[] array = { "a", "b", "c", "d" };
string final = array.UnSplit(", "); // Concatenate the elements of the array with a comma and a space as a separator
// final = "a, b, c, d"
```
