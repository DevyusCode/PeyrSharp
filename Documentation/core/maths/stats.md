# Stats

This page is about the `Stats` class available in [`PeyrSharp.Core.Maths`](/core/maths).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Stats` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Core             | ✅         | ✅         | ✅             |

## Methods

### Mean(values)

#### Definition

Returns the mean of a dataset as a `double`.

#### Arguments

| Type           | Name     | Meaning                   |
| -------------- | -------- | ------------------------- |
| `List<double>` | `values` | The dataset to calculate. |

#### Exceptions

| Type                | Meaning                         |
| ------------------- | ------------------------------- |
| `ArgumentException` | Thrown if the dataset is empty. |

#### Usage

```c#
using PeyrSharp.Core.Maths;

List<double> dataset = new List<double> { 1, 2, 3, 4, 5 };
double mean = Stats.Mean(dataset); // Calculate the mean of the dataset
// mean = 3
```

### Median(values)

#### Definition

Returns the median of a dataset as a `double`.

#### Arguments

| Type           | Name     | Meaning                   |
| -------------- | -------- | ------------------------- |
| `List<double>` | `values` | The dataset to calculate. |

#### Exceptions

| Type                | Meaning                         |
| ------------------- | ------------------------------- |
| `ArgumentException` | Thrown if the dataset is empty. |

#### Usage

```c#
using PeyrSharp.Core.Maths;

List<double> dataset = new List<double> { 1, 2, 3, 4, 5 };
double median = Stats.Median(dataset); // Calculate the median of the dataset
// median = 3
```

### Mode(values)

#### Definition

Returns the mode of a dataset as a `double`.

#### Arguments

| Type           | Name     | Meaning                   |
| -------------- | -------- | ------------------------- |
| `List<double>` | `values` | The dataset to calculate. |

#### Exceptions

| Type                | Meaning                         |
| ------------------- | ------------------------------- |
| `ArgumentException` | Thrown if the dataset is empty. |

#### Usage

```c#
using PeyrSharp.Core.Maths;

List<double> dataset = new List<double> { 1, 2, 3, 3, 3, 4, 5 };
double mode = Stats.Mode(dataset); // Calculate the mode of the dataset
// mode = 3
```

### Range(numbers)

#### Definition

Calculates the range of a list of `double` numbers.

#### Arguments

| Type           | Name      | Meaning                     |
| -------------- | --------- | --------------------------- |
| `List<double>` | `numbers` | The list of double numbers. |

#### Exceptions

| Type                | Meaning                                |
| ------------------- | -------------------------------------- |
| `ArgumentException` | Thrown when the list is null or empty. |

#### Returns

`double` - The range of the list of double numbers.

#### Usage

```c#
using PeyrSharp.Core.Maths;

List<double> numbers = new List<double> { 1.5, 2.6, 3.7, 4.8, 5.9 };
double range = Stats.Range(numbers); // Calculate the range of the list of numbers
// range = 4.4
```

### Variance(values)

#### Definition

Calculates the sample variance of a list of `double` values. Returns the sample variance of the list of `double` values as a `double`.

#### Arguments

| Type           | Name     | Meaning                    |
| -------------- | -------- | -------------------------- |
| `List<double>` | `values` | The list of double values. |

#### Exceptions

| Type                | Meaning                                |
| ------------------- | -------------------------------------- |
| `ArgumentException` | Thrown when the list is null or empty. |

#### Usage

```c#
using PeyrSharp.Core.Maths;

List<double> dataset = new List<double> { 1, 2, 3, 4, 5 };
double variance = Stats.Variance(dataset); // Calculate the variance of the dataset
// variance = 2.5
```

### StandardDeviation(values)

#### Definition

Calculates the standard deviation of a list of `double` numbers. Returns the standard deviation of the list of `double` numbers as a `double`.

#### Arguments

| Type           | Name     | Meaning                     |
| -------------- | -------- | --------------------------- |
| `List<double>` | `values` | The list of double numbers. |

#### Exceptions

| Type                | Meaning                                |
| ------------------- | -------------------------------------- |
| `ArgumentException` | Thrown when the list is null or empty. |

#### Usage

```c#
using PeyrSharp.Core.Maths;

List<double> dataset = new List<double> { 1, 2, 3, 4, 5 };
double sd = Stats.StandardDeviation(dataset); // Calculate the standard deviation of the dataset
// sd = 1.5811388300841898
```
