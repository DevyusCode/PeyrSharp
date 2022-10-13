# Diamond
This page is about the `Diamond` class available in [[`PeyrSharp.Core.Maths.Geometry`](/core/maths/geometry)](/core/maths/geometry).
You can find here all of its constructors and properties.

## Compatibility

The `Diamond` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Constructors
### Diamond(side)
#### Definition
Initializes a `Diamond` class from the length of its side.

#### Arguments

| Type     	| Name     	| Meaning                 	|
|----------	|----------	|-------------------------	|
| `double` 	| `side`   	| The length of the side. 	|

::: warning
If `side` ≤ 0, a `DivideByZeroException` will be thrown.
:::

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Diamond diamond = new(5); // Creates a diamond where all the sides equals to 5.
~~~

### Diamond(diagonal1, diagonal2)
#### Definition
Initializes a `Diamond` class from the length of its diagonals.

#### Arguments

| Type     	| Name        	| Meaning                            	|
|----------	|-------------	|------------------------------------	|
| `double` 	| `diagonal1` 	| The length of the first diagonal.  	|
| `double` 	| `diagonal2` 	| The side of the second diagonal. 	|

::: warning
If `diagonal1` or `diagonal2` ≤ 0, a `DivideByZeroException` will be thrown.
:::

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

// Creates a diamond where the first diagonal is equal to 5, and the second one is equal to 10.
Diamond diamond = new(5, 10); 
~~~

## Properties
### Area
#### Definition

~~~ c#
public double Area { get; }
~~~

The `Area` property is a `double` which returns the area of the diamond. You can only `get` this property.

::: warning
This property can be `null` or can return `0` if not initialized with [`Diamond(diagonal1, diagonal2)`](#diamond-diagonal1-diagonal2).
:::

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Diamond diamond = new(5, 10);

var area = diamond.Area;
// area = 100
~~~

### Perimeter
#### Definition

~~~ c#
public double Perimeter { get; }
~~~

The `Perimeter` property is a `double` which returns the perimeter of the diamond. You can only `get` this property.

::: warning
This property can be `null` or can return `0` if not initialized with [`Diamond(side)`](#diamond-side).
:::

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Diamond diamond = new(10);

var perimeter = diamond.Perimeter;
// perimeter = 40
~~~

### Side
#### Definition
~~~ c#
public double Side { get; init; }
~~~

The `Side` property is a `double` which returns the length of sides of the diamond, which was defined when initializing it. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Diamond diamond = new(10);

var side = diamond.Side;
// side = 10
~~~

### Diagonals
#### Definition
~~~ c#
public double[] Diagonals { get; init; }
~~~

The `Side` property is a `double[]` array which returns the diagonals of the diamond, which was defined when initializing it. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Diamond diamond = new(10, 14);

var side = diamond.Diagonals;
// side = { 10, 14 }
~~~