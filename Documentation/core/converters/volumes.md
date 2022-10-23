# Volumes
This page is about the `Volumes` class available in [`PeyrSharp.Core.Converters`](/core/converters.md).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Volumes` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Methods
### M3ToLitre(m3)
#### Definition
Converts Cubic Meters (m³) to Litre (L). Returns a `double` value.

#### Arguments

| Type     	| Name    	| Meaning                       	|
|----------	|---------	|-------------------------------	|
| `double` 	| `m3` | Number of cubic meters to convert. 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;

double litre = Volumes.M3ToLitre(10);
// litre = 10000
~~~

### LitreToM3(m3)
#### Definition
Converts Litre (L) to Cubic Meters (m³). Returns a `double` value.

#### Arguments

| Type     	| Name    	| Meaning                       	|
|----------	|---------	|-------------------------------	|
| `double` 	| `litre` | Number of litres to convert. 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;

double m3 = Volumes.LitreToM3(500);
// m3 = 0.5
~~~