# IntExtensions

This page is about the `IntExtensions` class available in [`PeyrSharp.Extensions`](/extensions.md).
You can find here all of its extension methods.

::: info
This class is `static`.
:::

## Compatibility

The `IntExtensions` class is part of the `PeyrSharp.Extensions` module, and is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Extensions       | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 5** | **.NET 6** | **.NET 7**     |
| Extensions       | ✅         | ✅         | ✅             |

## Methods

### GetDivisors()

#### Definition

Gets all divisors of a specific number. Returns an array of `int[]`.

#### Arguments

This method does not have any arguments.

#### Usage

```c#
using PeyrSharp.Extensions;

int[] divs = 16.GetDivisors(); // { 1, 2, 4, 8, 16 }
```

### IsEven()

#### Definition

Checks if the number is even. Returns a `bool`.

#### Arguments

This method does not have any arguments.

#### Usage

```c#
using PeyrSharp.Extensions;

int[] divs = 16.IsEven(); // true
```

### Mean(values)

#### Definition

Calculates the mean (average) of a dataset. Returns the mean of the dataset as `double`.

#### Exceptions

| Type                       | Condition                       |
| -------------------------- | ------------------------------- |
| `System.ArgumentException` | Thrown if the dataset is empty. |

#### Usage

```c#
using PeyrSharp.Extensions;

int[] data = new int[] { 1, 2, 3, 4, 5 };
double mean = data.Mean(); // 5
```

### Median(values)

#### Definition

Calculates the median of a dataset. Returns the median of the dataset as `double`.

#### Exceptions

| Type                | Condition                       |
| ------------------- | ------------------------------- |
| `ArgumentException` | Thrown if the dataset is empty. |

#### Usage

```c#
using PeyrSharp.Extensions;

int[] data = new int[] { 1, 2, 3, 5 };
double median = data.Median();

Console.WriteLine($"The median of the dataset is {median}"); // 2
```

### Mode(values)

#### Definition

Calculates the mode of a dataset. Returns the mode of the dataset as `double`.

#### Exceptions

| Type                | Condition                       |
| ------------------- | ------------------------------- |
| `ArgumentException` | Thrown if the dataset is empty. |

#### Usage

```c#
using PeyrSharp.Extensions;

int[] data = new int[] { 1, 2, 3, 5 };
double mode = data.Mode();

Console.WriteLine($"The mode of the dataset is {mode}"); // 1
```

### ToDouble()

#### Definition

Converts an `int` to `double`.

#### Arguments

This method does not have any arguments.

#### Usage

```c#
using PeyrSharp.Extensions;

double d = 16.ToDouble(); // 16.0d
```
