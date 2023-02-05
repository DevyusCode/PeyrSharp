# Proba
This page is about the `Proba` class available in [`PeyrSharp.Core.Maths`](/core/maths).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Proba` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Methods
### GetRandomValue(probabilities)
#### Definition

Gets a random value based on the specified probabilities. Returns a randomly selected value.

#### Type parameters

| Type      	| Name      	| Meaning                       	|
|-----------	|-----------	|----------------------------------	|
| `T`       	| -         	| The type of the values to select from. |

#### Parameters

| Type      	| Name               	| Meaning                                	|
|-----------	|-------------------	|------------------------------------------------	|
| `Dictionary<T, double>` 	| `probabilities` 	| A dictionary containing the probability of getting each value. 	|

#### Exceptions

- `ArgumentException`: Thrown if the sum of probabilities is not equal to 1.
- `Exception`: Thrown if an unexpected error occurs while selecting a random value.

#### Usage

~~~ c#
using PeyrSharp.Core.Maths;

Dictionary<string, double> probabilities = new Dictionary<string, double>
{
    { "Heads", 0.5 },
    { "Tails", 0.5 }
};

string result = Proba.GetRandomValue(probabilities);
~~~