# Percentages
This page is about the `Percentages` class available in [`PeyrSharp.Core.Maths`](/core/maths).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Percentages` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Methods
### IncreaseBy(value, increaseRate)
#### Definition
Returns the value after an increase of x% as a `double`.

#### Arguments

| Type     	| Name           	| Meaning                                	|
|----------	|----------------	|----------------------------------------	|
| `double` 	| `value`        	| The original value.                    	|
| `double` 	| `increaseRate` 	| The increase percentage (as `x/100d`). 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Maths;

double price = Percentages.IncreaseBy(100, 10/100d); // Increase the price by 10%
// price = 110
~~~

### DecreaseBy(value, decreaseRate)
#### Definition
Returns the value after a decrease of x% as a `double`.

#### Arguments

| Type     	| Name           	| Meaning                                	|
|----------	|----------------	|----------------------------------------	|
| `double` 	| `value`        	| The original value.                    	|
| `double` 	| `decreaseRate` 	| The decrease percentage (as `x/100d`). 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Maths;

double price = Percentages.DecreaseBy(100, 10/100d); // Decrease the price by 10%
// price = 90
~~~

### GetInvertedEvolutionRate(evolutionRate)
#### Definition
Gets the coefficient to get back to the original value after a percentage increase/decrease. It returns a `double`.

#### Arguments

| Type     	| Name           	| Meaning                                	|
|----------	|----------------	|----------------------------------------	|
| `double` 	| `evolutionRate` 	| The evolution rate to get the inverse of. 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Maths;

double ev = Percentages.GetInvertedEvolutionRate(1.1);
// ev = -0.09090909090909094
~~~

### ProportionToPercentageString(proportion)
#### Definition
Formats a proportion to a `string`.

#### Arguments

| Type     	| Name           	| Meaning                                	|
|----------	|----------------	|----------------------------------------	|
| `double` 	| `proportion` 	| The proportion to get the percentage of. 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Maths;

double proportion = Percentages.ProportionToPercentageString(0.5);
// proportion = 50%
~~~