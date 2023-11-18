# Triangle

This page is about the `Triangle` class available in [`PeyrSharp.Core.Maths.Geometry`](/core/maths/geometry).
You can find here all of its constructors and properties.

## Compatibility

The `Triangle` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Core             | ✅         | ✅         | ✅             |

## Constructors

### Triangle(side1, side2, side3)

#### Definition

Initializes a `Triangle` class from the length of its sides.

#### Arguments

| Type     | Name    | Meaning                                        |
| -------- | ------- | ---------------------------------------------- |
| `double` | `side1` | The length of the first side of the triangle.  |
| `double` | `side2` | The length of the second side of the triangle. |
| `double` | `side3` | The length of the third side of the triangle.  |

::: warning
If `side1`, `side2`, or `side3` ≤ 0, a `DivideByZeroException` will be thrown.
:::

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Triangle triangle = new(10, 20, 10); // Creates a triangle
```

### Triangle(width, height)

#### Definition

Initializes a `Triangle` class from a width and height.

#### Arguments

| Type     | Name     | Meaning                     |
| -------- | -------- | --------------------------- |
| `double` | `width`  | The width of the triangle.  |
| `double` | `height` | The height of the triangle. |

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Triangle triangle = new(10, 20); // Creates a triangle with a width of 10 and a height of 20
```

## Properties

### Area

#### Definition

```c#
public double Area { get; }
```

The `Area` property is a `double` which returns the area of the triangle. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Triangle triangle = new(10, 20);

var area = triangle.Area;
// area = 100
```

### Perimeter

#### Definition

```c#
public double Perimeter { get; }
```

The `Perimeter` property is a `double` which returns the perimeter of the triangle. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Triangle triangle = new(10, 10, 20);

var perimeter = triangle.Perimeter;
// perimeter = 40
```

### Hypotenuse

#### Definition

```c#
public double Hypotenuse { get; }
```

The `Hypotenuse` property is a `double` which returns the hypotenuse of the triangle. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

// Assuming the triangle is right
Triangle triangle = new(3, 4, 5);

var hypotenuse = triangle.Hypotenuse;
// hypotenuse = 5
```

### IsRight

#### Definition

```c#
public bool IsRight { get; }
```

The `IsRight` property is a `bool` which returns `true` if the triangle is right. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Triangle triangle = new(3, 4, 5);

var right = triangle.IsRight;
// right = true
```

### CanBeBuilt

#### Definition

```c#
public bool CanBeBuilt { get; }
```

The `CanBeBuilt` property is a `bool` which returns `true` if the triangle can be built. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Triangle triangle = new(3, 4, 10);

var canBeBuilt = triangle.CanBeBuilt;
// canBeBuilt = false
```

### Width

#### Definition

```c#
public double Width { get; init; }
```

The `Width` property is a `double` which returns the width of the triangle, which was defined when initializing it. You can only `get` this property.

::: warning
This property can be equal to `double.NaN` if the class was not initialized with the [`Triangle(width, height)`](#triangle-width-height) constructor.
:::

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Triangle triangle = new(10, 20);

var width = triangle.Width;
// width = 10
```

### Height

#### Definition

```c#
public double Height { get; init; }
```

The `Height` property is a `double` which returns the height of the triangle, which was defined when initializing it. You can only `get` this property.

::: warning
This property can be equal to `double.NaN` if the class was not initialized with the [`Triangle(width, height)`](#triangle-width-height) constructor.
:::

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Triangle triangle = new(10, 20);

var height = triangle.Height;
// height = 20
```

### Side1

#### Definition

```c#
public double Side1 { get; init; }
```

The `Side1` property is a `double` which returns the length of the first side of the triangle, which was defined when initializing it. You can only `get` this property.

::: warning
This property can be equal to `double.NaN` if the class was not initialized with the [`Triangle(side1, side2, side3)`](#triangle-side1-side2-side3) constructor.
:::

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Triangle triangle = new(10, 20, 15);

var side1 = triangle.Side1;
// side1 = 10
```

### Side2

#### Definition

```c#
public double Side2 { get; init; }
```

The `Side2` property is a `double` which returns the length of the second side of the triangle, which was defined when initializing it. You can only `get` this property.

::: warning
This property can be equal to `double.NaN` if the class was not initialized with the [`Triangle(side1, side2, side3)`](#triangle-side1-side2-side3) constructor.
:::

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Triangle triangle = new(10, 20, 15);

var side2 = triangle.Side2;
// side2 = 20
```

### Side3

#### Definition

```c#
public double Side3 { get; init; }
```

The `Side3` property is a `double` which returns the length of the third side of the triangle, which was defined when initializing it. You can only `get` this property.

::: warning
This property can be equal to `double.NaN` if the class was not initialized with the [`Triangle(side1, side2, side3)`](#triangle-side1-side2-side3) constructor.
:::

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Triangle triangle = new(10, 20, 15);

var side3 = triangle.Side3;
// side3 = 15
```
