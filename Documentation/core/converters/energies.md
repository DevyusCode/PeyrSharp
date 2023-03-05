# Energies
This page is about the `Energies` class available in [`PeyrSharp.Core.Converters`](/core/converters.md).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Energies` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Methods
### CaloriesToJoules(calories)
#### Definition

Converts calories to joules.

#### Arguments

| Type     | Name       | Meaning                                            |
|----------|------------|-----------------------------------------------------|
| `double` | `calories` | The amount of energy in calories to be converted.   |

#### Returns

The equivalent amount of energy in joules.

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;

double calories = 100.0;
double joules = Energies.CaloriesToJoules(calories);
~~~

### JoulesToCalories(joules)
#### Definition

Converts joules to calories.

#### Arguments

| Type     | Name     | Meaning                      |
| -------- | -------- | ---------------------------- |
| `double` | `joules` | The amount of energy in joules. |

#### Returns

The equivalent amount of energy in calories.

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;

double joules = 1000.0;
double calories = Energies.JoulesToCalories(joules);
~~~
