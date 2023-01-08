# Stats
This page is about the `Stats` class available in [`PeyrSharp.Core.Maths`](/core/maths).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Stats` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Methods
### Mean(values)
#### Definition
Returns the mean of a dataset as a `double`.

#### Arguments

| Type     	| Name     	| Meaning                   	|
|----------	|----------	|---------------------------	|
| `List<double>`   	| `values` 	| The dataset to calculate. 	|

#### Exceptions

| Type                    	| Meaning                             	|
|-------------------------	|-------------------------------------	|
| `ArgumentException`     	| Thrown if the dataset is empty.     	|

#### Usage

~~~ c#
using PeyrSharp.Core.Maths;

List<double> dataset = new List<double> { 1, 2, 3, 4, 5 };
double mean = Stats.Mean(dataset); // Calculate the mean of the dataset
// mean = 3
~~~

### Median(values)
#### Definition
Returns the median of a dataset as a `double`.

#### Arguments

| Type     	| Name     	| Meaning                   	|
|----------	|----------	|---------------------------	|
| `List<double>`   	| `values` 	| The dataset to calculate. 	|

#### Exceptions

| Type                    	| Meaning                             	|
|-------------------------	|-------------------------------------	|
| `ArgumentException`     	| Thrown if the dataset is empty.     	|

#### Usage

~~~ c#
using PeyrSharp.Core.Maths;

List<double> dataset = new List<double> { 1, 2, 3, 4, 5 };
double median = Stats.Median(dataset); // Calculate the median of the dataset
// median = 3
~~~

### Mode(values)
#### Definition
Returns the mode of a dataset as a `double`.

#### Arguments

| Type     	| Name     	| Meaning                   	|
|----------	|----------	|---------------------------	|
| `List<double>`   	| `values` 	| The dataset to calculate. 	|

#### Exceptions

| Type                    	| Meaning                             	|
|-------------------------	|-------------------------------------	|
| `ArgumentException`     	| Thrown if the dataset is empty.     	|

#### Usage

~~~ c#
using PeyrSharp.Core.Maths;

List<double> dataset = new List<double> { 1, 2, 3, 3, 3, 4, 5 };
double mode = Stats.Mode(dataset); // Calculate the mode of the dataset
// mode = 3
~~~
