# Pyramid
This page is about the `Pyramid` class available in [`PeyrSharp.Core.Maths.Geometry`](/core/maths/geometry).
You can find here all of its constructors, methods and properties.

## Compatibility

The `Pyramid` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Constructors
### Pyramid(width, length, height)
#### Definition
Initializes a `Pyramid` class from a specific width, length, and height.

#### Arguments

| Type     	| Name     	| Meaning                    	|
|----------	|----------	|----------------------------	|
| `double` 	| `width`  	| The width of the pyramid.  	|
| `double` 	| `length` 	| The length of the pyramid. 	|
| `double` 	| `height` 	| The height of the pyramid. 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Pyramid pyramid = new(12, 10, 15); // Creates a pyramid with a width of 12, a length of 10, and a height of 15
~~~

## Methods
### FromVolumeAndSize(volume, width, length)
#### Definition
Initializes a `Pyramid` class from a specific volume, width, and length.

#### Arguments

| Type     	| Name     	| Meaning                    	|
|----------	|----------	|----------------------------	|
| `double` 	| `volume` 	| The volume of the pyramid. 	|
| `double` 	| `width`  	| The width of the pyramid.  	|
| `double` 	| `length` 	| The length of the pyramid. 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Pyramid pyramid = Pyramid.FromVolumeAndSize(100, 10, 10);
~~~

### FromAreaAndLength(area, length, height)
#### Definition
Initializes a `Pyramid` class from a specific area, length, and height.

#### Arguments

| Type     	| Name     	| Meaning                    	|
|----------	|----------	|----------------------------	|
| `double` 	| `area` 	| The area of the pyramid.   	|
| `double` 	| `length` 	| The length of the pyramid. 	|
| `double` 	| `height`  | The height of the pyramid.  	|

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Pyramid pyramid = Pyramid.FromAreaAndLength(100, 10, 15);
~~~

### FromAreaAndWidth(area, width, height)
#### Definition
Initializes a `Pyramid` class from a specific volume, width, and length.

#### Arguments

| Type     	| Name     	| Meaning                    	|
|----------	|----------	|----------------------------	|
| `double` 	| `area` 	| The area of the pyramid. 	|
| `double` 	| `width`  	| The width of the pyramid.  	|
| `double` 	| `height` 	| The height of the pyramid. 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Pyramid pyramid = Pyramid.FromVolumeAndSize(100, 10, 10);
~~~

## Properties
### AreaBase
#### Definition

~~~ c#
public double AreaBase { get; }
~~~

The `AreaBase` property is a `double` which returns the area of the pyramid. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Pyramid pyramid = new(12, 10, 15);

var area = pyramid.AreaBase;
// area = 120
~~~

### Volume
#### Definition

~~~ c#
public double AreaBase { get; }
~~~

The `Volume` property is a `double` which returns the volume of the pyramid. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Pyramid pyramid = new(12, 10, 15);

var volume = pyramid.Volume;
// volume = 600
~~~

### LengthBase
#### Definition

~~~ c#
public double LengthBase { get; }
~~~

The `LengthBase` property is a `double` which returns the length of the base of pyramid. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Pyramid pyramid = new(12, 10, 15);

var length = pyramid.LengthBase;
// length = 10
~~~

### WidthBase
#### Definition

~~~ c#
public double WidthBase { get; }
~~~

The `WidthBase` property is a `double` which returns the width of the base of pyramid. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Pyramid pyramid = new(12, 10, 15);

var width = pyramid.WidthBase;
// width = 12
~~~

### Width
#### Definition
~~~ c#
public double Width { get; init; }
~~~

The `Width` property is a `double` which returns the width of the pyramid, which was defined when initializing it. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Pyramid pyramid = new(10, 20, 30);

var width = pyramid.Width;
// width = 10
~~~

### Length
#### Definition
~~~ c#
public double Length { get; init; }
~~~

The `Length` property is a `double` which returns the length of the pyramid, which was defined when initializing it. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Pyramid pyramid = new(10, 20, 30);

var length = pyramid.Length;
// length = 20
~~~

### Height
#### Definition
~~~ c#
public double Height { get; init; }
~~~

The `Height` property is a `double` which returns the height of the pyramid, which was defined when initializing it. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths.Geometry;

Pyramid pyramid = new(10, 20, 30);

var height = pyramid.Height;
// height = 30
~~~