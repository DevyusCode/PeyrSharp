# Cone
This page is about the `Cone` class available in `PeyrSharp.Core.Maths.Geometry`.
You can find here all of its constructors and properties.

## Compatibility

The `Cone` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Constructors
### Cone(radius, height)
#### Definition
Initializes a `Cone` class from a specific radius and height.

#### Arguments

| Type     	| Name     	| Meaning                 	|
|----------	|----------	|-------------------------	|
| `double` 	| `radius` 	| The radius of the cone. 	|
| `double` 	| `height` 	| The height of the cone. 	|

::: warning
If `radius` or `height` ≤ 0, a `DivideByZeroException` will be thrown.
:::

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Cone cone = new(10, 20); // Creates a cone with a radius of 10, and a height of 20
~~~
## Properties
### Volume
#### Definition
~~~ c#
public double Volume { get; }
~~~

The `Volume` property is a `double` which returns the volume of the cone. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Cone cone = new(10, 20);

var volume = cone.Volume;
// volume = 2094.3951023931954
~~~

### Radius
#### Definition
~~~ c#
public double Radius { get; init; }
~~~

The `Radius` property is a `double` which returns the radius of the cone, which was defined when initializing it. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Cone cone = new(15, 20);

var radius = cone.Radius;
// radius = 15
~~~

### Height
#### Definition
~~~ c#
public double Height { get; init; }
~~~

The `Height` property is a `double` which returns the height of the cone, which was defined when initializing it. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Circle cone = new(10, 40);

var height = cone.Height;
// height = 40
~~~