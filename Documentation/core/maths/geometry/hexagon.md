# Hexagon
This page is about the `Hexagon` class available in [`PeyrSharp.Core.Maths.Geometry`](/core/maths/geometry).
You can find here all of its constructors and properties.

## Compatibility

The `Hexagon` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Constructors
### Hexagon(side)
#### Definition
Initializes a `Hexagon` class from the length of its side.

#### Arguments

| Type     	| Name         	| Meaning                             	|
|----------	|--------------	|-------------------------------------	|
| `double` 	| `side`       	| The length of the side of the hexagon. 	|

::: warning
If `side` ≤ 0, a `DivideByZeroException` will be thrown.
:::

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Hexagon hexagon = new(12); // Creates a hexagon with a length of 12
~~~

## Properties
### Area
#### Definition

~~~ c#
public double Area { get; }
~~~

The `Area` property is a `double` which returns the area of the hexagon. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Hexagon hexagon = new(12);

var area = hexagon.Area;
// area = 374.1229744348775
~~~

### Perimeter
#### Definition

~~~ c#
public double Perimeter { get; }
~~~

The `Perimeter` property is a `double` which returns the perimeter of the hexagon. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Hexagon hexagon = new(12);

var perimeter = hexagon.Perimeter;
// perimeter = 72
~~~
### Side
#### Definition

~~~ c#
public double Side { get; init; }
~~~

The `Side` property is a `double` which returns the length of the side of the hexagon. You can only `get` this property

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Hexagon hexagon = new(10);

var side = hexagon.Side; // side = 10
~~~
