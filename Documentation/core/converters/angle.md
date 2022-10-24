# Angle
This page is about the `Angle` class available in [`PeyrSharp.Core.Converters`](/core/converters.md).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Angle` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Methods
### DegreesToRadians(degrees)
#### Definition
Converts degrees to radians. Returns a `double` value.

#### Arguments

| Type     	| Name    	| Meaning                       	|
|----------	|---------	|-------------------------------	|
| `double` 	| `degrees` 	| Number of degrees to convert. 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;

double radians = Angle.DegreesToRadians(90);
// radians = 1.5707963271535559
~~~

### RadiansToDegrees(radians)
#### Definition
Converts radians to degrees. Returns a `double` value.

#### Arguments

| Type     	| Name    	| Meaning                       	|
|----------	|---------	|-------------------------------	|
| `double` 	| `radians` 	| Number of radians to convert. 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;

double deg = Angle.RadiansToDegrees(1.2);
// deg = 68.7549354
~~~