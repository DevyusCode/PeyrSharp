# Cube
This page is about the `Cube` class available in [`PeyrSharp.Core.Maths.Geometry`](/core/maths/geometry).
You can find here all of its constructors and properties.

## Compatibility

The `Cube` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Constructors
### Cube(side)
#### Definition
Initializes a `Cube` class from the length of the side of the cube.

#### Arguments

| Type     	| Name         	| Meaning                             	|
|----------	|--------------	|-------------------------------------	|
| `double` 	| `side`       	| The length of the side of the cube. 	|

::: warning
If `side` ≤ 0, a `DivideByZeroException` will be thrown.
:::

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Cube cube = new(10); // Creates a 10x10x10 cube
~~~

### Cube(width, length, height)
#### Definition
Initializes a `Cube` class from the width, the length and the height of the cuboidal.

#### Arguments

| Type     	| Name     	| Meaning                     	|
|----------	|----------	|-----------------------------	|
| `double` 	| `width`  	| The width of the cuboidal.  	|
| `double` 	| `length` 	| The length of the cuboidal. 	|
| `double` 	| `height` 	| The height of the cuboidal. 	|

::: warning
If `width`, `length` or `height` ≤ 0, a `DivideByZeroException` will be thrown.
:::

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Cube cube = new(10, 20, 10); // Creates a 10x20x10 cuboidal
~~~

## Properties
### Area
#### Definition

~~~ c#
public double Area { get; }
~~~

The `Area` property is a `double` which returns the area of the cube. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Cube cube = new(10);

var area = cube.Area;
// area = 100
~~~

### Edge
#### Definition

~~~ c#
public double Edge { get; }
~~~

The `Edge` property is a `double` which returns the edge of the cube. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Cube cube = new(10);

var edge = cube.Edge;
// edge = 7.0710678118654755
~~~

### Length
#### Definition

~~~ c#
public double Length { get; init; }
~~~

The `Length` property is a `double` which returns the length of the cube. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Cube cube = new(10);

var length = cube.Length;
// length = 10
~~~

### Height
#### Definition

~~~ c#
public double Height { get; init; }
~~~

The `Height` property is a `double` which returns the height of the cube. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Cube cube = new(10);

var height = cube.Height;
// height = 10
~~~

### Side
#### Definition

~~~ c#
public double? Side { get; init; }
~~~

The `Side` property is a `double?` which returns the length of the side of the cube. You can only `get` this property.

::: warning
This property can be `null` if not initialized with [`Cube(side)`](#cube-side).
:::

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Cube cube = new(10);

var side = cube.Side ?? 0;
// side = 10
~~~

### Volume
#### Definition

~~~ c#
public double Volume { get; }
~~~

The `Volume` property is a `double` which returns the volume of the cube. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Cube cube = new(10);

var volume = cube.Volume; // 10^3
// volume = 1000
~~~

### Width
#### Definition

~~~ c#
public double Width { get; init; }
~~~

The `Width` property is a `double` which returns the width of the cube. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Cube cube = new(10);

var width = cube.Width;
// width = 10
~~~