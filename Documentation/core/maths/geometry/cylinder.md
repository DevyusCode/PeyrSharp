# Cylinder

This page is about the `Cylinder` class available in [`PeyrSharp.Core.Maths.Geometry`](/core/maths/geometry).
You can find here all of its constructors and properties.

## Compatibility

The `Cylinder` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Core             | ✅         | ✅         | ✅             |

## Constructors

### Cylinder(radius, height)

#### Definition

Initializes a `Cylinder` class from a specific radius and height.

#### Arguments

| Type     | Name     | Meaning                     |
| -------- | -------- | --------------------------- |
| `double` | `radius` | The radius of the cylinder. |
| `double` | `height` | The height of the cylinder. |

::: warning
If `radius` or `height` ≤ 0, a `DivideByZeroException` will be thrown.
:::

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Cylinder cylinder = new(20, 10); // Creates a cylinder with a radius of 20, and a height of 10
```

## Properties

### Volume

#### Definition

```c#
public double Volume { get; }
```

The `Volume` property is a `double` which returns the volume of the cylinder. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Cylinder cylinder = new(10, 20);

var volume = cylinder.Volume;
// volume = 6283.185307179587
```

### BaseArea

#### Definition

```c#
public double BaseArea { get; }
```

The `BaseArea` property is a `double` which returns the area of the circle, which is the base of the cylinder. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Cylinder cylinder = new(10, 20);

var baseArea = cylinder.BaseArea;
// baseArea = 314.1592653589793
```

### Radius

#### Definition

```c#
public double Radius { get; init; }
```

The `Radius` property is a `double` which returns the radius of the cylinder, which was defined when initializing it. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Cylinder cylinder = new(15, 20);

var radius = cylinder.Radius;
// radius = 15
```

### Height

#### Definition

```c#
public double Height { get; init; }
```

The `Height` property is a `double` which returns the height of the cylinder, which was defined when initializing it. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Cylinder cylinder = new(10, 40);

var height = cylinder.Height;
// height = 40
```
