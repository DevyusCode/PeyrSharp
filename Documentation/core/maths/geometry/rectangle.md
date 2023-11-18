# Rectangle

This page is about the `Rectangle` class available in [`PeyrSharp.Core.Maths.Geometry`](/core/maths/geometry).
You can find here all of its constructors and properties.

## Compatibility

The `Rectangle` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Core             | ✅         | ✅         | ✅             |

## Constructors

### Rectangle(width, length)

#### Definition

Initializes a `Rectangle` class from a specific length and width.

#### Arguments

| Type     | Name     | Meaning                      |
| -------- | -------- | ---------------------------- |
| `double` | `width`  | The width of the rectangle.  |
| `double` | `length` | The length of the rectangle. |

::: warning
If `width` or `length` ≤ 0, a `DivideByZeroException` will be thrown.
:::

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Rectangle rectangle = new(10, 20); // Creates a 10x20 rectangle
```

## Properties

### Area

#### Definition

```c#
public double Area { get; }
```

The `Area` property is a `double` which returns the area of the rectangle. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Rectangle rectangle = new(10, 15);

var area = rectangle.Area;
// area = 150
```

### Perimeter

#### Definition

```c#
public double Perimeter { get; }
```

The `Perimeter` property is a `double` which returns the perimeter of the rectangle. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Rectangle rectangle = new(10, 15);

var perimeter = rectangle.Perimeter;
// perimeter = 50
```

### Diagonal

#### Definition

```c#
public double Diagonal { get; }
```

The `Diagonal` property is a `double` which returns the length of the diagonal of the rectangle. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Rectangle rectangle = new(10, 15);

var diagonal = rectangle.Diagonal;
// diagonal = 18.027756377319946
```

### Width

#### Definition

```c#
public double Width { get; init; }
```

The `Width` property is a `double` which returns the width of the rectangle, which was defined when initializing it. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Rectangle rectangle = new(10, 20);

var width = rectangle.Width;
// width = 10
```

### Length

#### Definition

```c#
public double Length { get; init; }
```

The `Length` property is a `double` which returns the length of the rectangle, which was defined when initializing it. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Rectangle rectangle = new(10, 20);

var length = rectangle.Length;
// length = 20
```
