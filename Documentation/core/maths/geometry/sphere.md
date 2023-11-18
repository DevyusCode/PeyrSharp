# Sphere

This page is about the `Sphere` class available in [`PeyrSharp.Core.Maths.Geometry`](/core/maths/geometry).
You can find here all of its constructors and properties.

## Compatibility

The `Sphere` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Core             | ✅         | ✅         | ✅             |

## Constructors

### Sphere(radius)

#### Definition

Initializes a `Sphere` class from a specific radius.

#### Arguments

| Type     | Name     | Meaning                   |
| -------- | -------- | ------------------------- |
| `double` | `radius` | The radius of the sphere. |

::: warning
If `radius` ≤ 0, a `DivideByZeroException` will be thrown.
:::

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Sphere sphere = new(10); // Creates a sphere with a radius of 10
```

## Properties

### Area

#### Definition

```c#
public double Area { get; }
```

The `Area` property is a `double` which returns the area of the sphere. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Sphere sphere = new(10);

var area = sphere.Area;
// area = 1256.6370614359173
```

### Volume

#### Definition

```c#
public double Volume { get; }
```

The `Volume` property is a `double` which returns the volume of the sphere. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Sphere sphere = new(10);

var volume = sphere.Volume;
// volume = 2356.194490192345
```

### Radius

#### Definition

```c#
public double Radius { get; init; }
```

The `Radius` property is a `double` which returns the radius of the sphere, which was defined when initializing it. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Core.Maths.Geometry;

Sphere sphere = new(10);

var radius = sphere.Radius;
// radius = 10
```
