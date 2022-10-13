# Circle
This page is about the `Circle` class available in [`PeyrSharp.Core.Maths.Geometry`](/core/maths/geometry).
You can find here all of its constructors and properties.

## Compatibility

The `Circle` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Constructors
### Circle(radius)
#### Definition
Initializes a `Circle` class from a specific radius.

#### Arguments

| Type     	| Name     	| Meaning                     	|
|----------	|----------	|-----------------------------	|
| `double` 	| `radius` 	| The radius of the circle.   	|

::: warning
If `radius` ≤ 0, a `DivideByZeroException` will be thrown.
:::

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Circle circle = new(10); // Creates a circle with a radius of 10
~~~
## Properties
### Area
#### Definition
~~~ c#
public double Area { get; }
~~~

The `Area` property is a `double` which returns the area of the circle. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Circle circle = new(10);

var area = circle.Area;
// area = 314.1592653589793
~~~

### Perimeter
#### Definition
~~~ c#
public double Perimeter { get; }
~~~

The `Perimeter` property is a `double` which returns the perimeter of the circle. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Circle circle = new(10);

var perimeter = circle.Perimeter;
// perimeter = 62.83185307179586
~~~

### Radius
#### Definition
~~~ c#
public double Radius { get; init; }
~~~

The `Radius` property is a `double` which returns the radius of the circle, which was defined when initializing it. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Circle circle = new(10);

var radius = circle.Radius;
// radius = 10
~~~