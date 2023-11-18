# Algebra

This page is about the `Algebra` class available in [`PeyrSharp.Core.Maths`](/core/maths).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Algebra` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Core             | ✅         | ✅         | ✅             |

## Methods

### Sum(numbers) (double)

#### Definition

Returns the sum of specified `double` numbers. It returns a `double` value.

#### Arguments

| Type              | Name      | Meaning                       |
| ----------------- | --------- | ----------------------------- |
| `params double[]` | `numbers` | The numbers to do the sum of. |

#### Usage

```c#
using PeyrSharp.Core.Maths;

// Usage 1
double sum = Algebra.Sum(12, 1.5, 45, 2.2);
// sum = 60.7

// Usage 2
double[] numbers = new double[] { 1, 2, 3 };

double sum2 = Algebra.Sum(numbers);
// sum = 6
```

### Sum(numbers) (int)

#### Definition

Returns the sum of specified `int` numbers. It returns a `int` value.

#### Arguments

| Type           | Name      | Meaning                       |
| -------------- | --------- | ----------------------------- |
| `params int[]` | `numbers` | The numbers to do the sum of. |

#### Usage

```c#
using PeyrSharp.Core.Maths;

// Usage 1
int sum = Algebra.Sum(12, 15, 45, 2);
// sum = 74

// Usage 2
int[] numbers = new int[] { 1, 2, 3 };

int sum2 = Algebra.Sum(numbers);
// sum = 6
```

### IsInt(number)

#### Definition

Returns `true` if a specified `double` is an integer. It returns a `bool` value.

#### Arguments

| Type     | Name     | Meaning              |
| -------- | -------- | -------------------- |
| `double` | `number` | The number to check. |

#### Usage

```c#
using PeyrSharp.Core.Maths;

bool isInt = Algebra.IsInt(12.0);
// isInt = true
```

### GetOpposite(number)

#### Definition

Gets the opposite of a `double` number. It returns a `double` value.

#### Arguments

| Type     | Name     | Meaning                            |
| -------- | -------- | ---------------------------------- |
| `double` | `number` | The number to get the opposite of. |

#### Usage

```c#
using PeyrSharp.Core.Maths;

double opposite = Algebra.Opposite(7);
// opposite = -7
```

### Factorial(number)

#### Definition

Gets the factorial of an `int` number. It returns an `int`.

#### Arguments

| Type  | Name     | Meaning                             |
| ----- | -------- | ----------------------------------- |
| `int` | `number` | The number to get the factorial of. |

#### Usage

```c#
using PeyrSharp.Core.Maths;

int factorial = Algebra.Factorial(5);
// factorial = 120
```

### PositiveOf(number)

#### Definition

Gets the positive of a `double` number. It returns a `double` value.

#### Arguments

| Type     | Name     | Meaning                            |
| -------- | -------- | ---------------------------------- |
| `double` | `number` | The number to get the positive of. |

#### Usage

```c#
using PeyrSharp.Core.Maths;

double pos = Algebra.PositiveOf(-7);
// pos = 7
```

### NegativeOf(number)

#### Definition

Gets the negative of a `double` number. It returns a `double` value.

#### Arguments

| Type     | Name     | Meaning                            |
| -------- | -------- | ---------------------------------- |
| `double` | `number` | The number to get the negative of. |

#### Usage

```c#
using PeyrSharp.Core.Maths;

double negative = Algebra.NegativeOf(7);
// negative = -7
```

### GetResultsOf(function, numbers)

#### Definition

Gets the results of a function applied to specific `double` numbers. It returns an array of `double[]`.

#### Arguments

| Type                   | Name       | Meaning                                                                                         |
| ---------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| `Func<double, double>` | `function` | The function to apply to all numbers. It must return a double and take a double as an argument. |
| `params double[]`      | `numbers`  | The numbers to get the results of.                                                              |

#### Usage

```c#
using PeyrSharp.Core.Maths;

double res = Algebra.GetResultsOf(x => x * x, 1, 2, 3, 4);
// res = double[] { 1, 4, 9, 16 }
```
