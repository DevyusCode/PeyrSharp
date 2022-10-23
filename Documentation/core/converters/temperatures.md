# Temperatures
This page is about the `Temperatures` class available in [`PeyrSharp.Core.Converters`](/core/converters.md).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Temperatures` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Methods
### CelsiusToFahrenheit(celsius)
#### Definition
Converts Celsius (°C) to Fahrenheit (°F). Returns a `double` value.

#### Arguments

| Type     	| Name    	| Meaning                       	|
|----------	|---------	|-------------------------------	|
| `double` 	| `celsius` | Number of Celsius to convert. 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;

double f = Temperatures.CelsiusToFahrenheit(22);
// f = 71.6
~~~

### FahrenheitToCelsius(fahrenheit)
#### Definition
Converts Fahrenheit (°F) to Celsius (°C). Returns a `double` value.

#### Arguments

| Type     	| Name    	| Meaning                       	|
|----------	|---------	|-------------------------------	|
| `double` 	| `fahrenheit` | Number of Fahrenheit to convert. 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;

double c = Temperatures.FahrenheitToCelsius(75);
// c = 23.88888888888889
~~~