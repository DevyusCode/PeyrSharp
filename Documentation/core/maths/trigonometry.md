# Trigonometry

This page is about the `Trigonometry` class available in [`PeyrSharp.Core.Maths`](/core/maths).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Trigonometry` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Core             | ✅         | ✅         | ✅             |

## Methods

### GetOpposedSideFrom(triangleSide, angle, value)

#### Definition

Gets the length of the opposed side of a specific angle, from the length of either the hypotenuse or the adjacent side of the angle.

#### Arguments

| Type                                              | Name           | Meaning                        |
| ------------------------------------------------- | -------------- | ------------------------------ |
| [`TriangleSides`](/enumerations.md#trianglesides) | `triangleSide` | The side of the triangle.      |
| `double`                                          | `angle`        | The value of the angle.        |
| `double`                                          | `value`        | The length of the chosen side. |

::: warning
If `triangleSide` is equal to `TriangleSides.Opposed`, an `Exception` will be thrown.
:::

#### Usage

```c#
using PeyrSharp.Core.Maths;
using PeyrSharp.Enums;

double opposed = Trigonometry.GetOpposedSideFrom(TriangleSides.Adjacent, 1.05, 5);
// opposed = 8.716576549915851
```

### GetAdjacentSideFrom(triangleSide, angle, value)

#### Definition

Gets the length of the adjacent side of a specific angle, from the length of either the hypotenuse or the opposed side of the angle.

#### Arguments

| Type                                              | Name           | Meaning                        |
| ------------------------------------------------- | -------------- | ------------------------------ |
| [`TriangleSides`](/enumerations.md#trianglesides) | `triangleSide` | The side of the triangle.      |
| `double`                                          | `angle`        | The value of the angle.        |
| `double`                                          | `value`        | The length of the chosen side. |

::: warning
If `triangleSide` is equal to `TriangleSides.Adjacent`, an `Exception` will be thrown.
:::

#### Usage

```c#
using PeyrSharp.Core.Maths;
using PeyrSharp.Enums;

double adjacent = Trigonometry.GetAdjacentSideFrom(TriangleSides.Opposed, 1.05, 8.71);
// adjacent = 4.996227561429541
```

### GetHypotenuseFrom(triangleSide, angle, value)

#### Definition

Gets the length of the hypotenuse, from the length of either the adjacent side or the opposed side of a specific angle.

#### Arguments

| Type                                              | Name           | Meaning                        |
| ------------------------------------------------- | -------------- | ------------------------------ |
| [`TriangleSides`](/enumerations.md#trianglesides) | `triangleSide` | The side of the triangle.      |
| `double`                                          | `angle`        | The value of the angle.        |
| `double`                                          | `value`        | The length of the chosen side. |

::: warning
If `triangleSide` is equal to `TriangleSides.Hypotenuse`, an `Exception` will be thrown.
:::

#### Usage

```c#
using PeyrSharp.Core.Maths;
using PeyrSharp.Enums;

double hypotenuse = Trigonometry.GetHypotenuseFrom(TriangleSides.Opposed, 1.05, 8.71);
// hypotenuse = 10.041234478169912
```
