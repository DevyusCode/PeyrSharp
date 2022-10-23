# Distances
This page is about the `Distances` class available in [`PeyrSharp.Core.Converters`](/core/converters.md).
You can find here all of its methods and properties.

::: info
This class is `static`.
:::

## Compatibility

The `Distances` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Methods
### MilesToKm(miles)
#### Definition
Converts miles to kilometers. Returns a `double` value.

#### Arguments

| Type     	| Name    	| Meaning                       	|
|----------	|---------	|-------------------------------	|
| `double` 	| `miles` 	| Number of mile(s) to convert. 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;

double km = Distances.MilesToKm(10);
// km = 16.09344
~~~

### KmToMiles(km)
#### Definition
Converts kilometers to miles. Returns a `double` value.

#### Arguments

| Type     	| Name    	| Meaning                       	|
|----------	|---------	|-------------------------------	|
| `double` 	| `kilometers` 	| Number of kilometers(s) to convert. 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;

double miles = Distances.KmToMiles(5);
// miles = 3.1068559611866697
~~~

### FeetToMeters(feet)
#### Definition
Converts feet to meters. Returns a `double` value.

#### Arguments

| Type     	| Name    	| Meaning                       	|
|----------	|---------	|-------------------------------	|
| `double` 	| `feet` 	| Number of feet to convert. 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;

double meters = Distances.FeetToMeters(12);
// meters = 3.657599994440448
~~~

### MetersToFeet(meters)
#### Definition
Converts meters to feet. Returns a `double` value.

#### Arguments

| Type     	| Name    	| Meaning                       	|
|----------	|---------	|-------------------------------	|
| `double` 	| `meters` 	| Number of meters to convert. 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;

double feet = Distances.MetersToFeet(3.657599994440448);
// feet = 12
~~~