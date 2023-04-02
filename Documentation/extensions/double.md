# DoubleExtensions

This page is about the `DoubleExtensions` class available in [`PeyrSharp.Extensions`](/extensions.md).
You can find here all of its extension methods.

::: info
This class is `static`.
:::

## Compatibility

The `DoubleExtensions` class is part of the `PeyrSharp.Extensions` module, and is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Extensions       | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 5** | **.NET 6** | **.NET 7**     |
| Extensions       | ✅         | ✅         | ✅             |

## Methods

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

double[] data = new double[] { 1.0, 2.0, 3.0, 4.0, 5.0 };
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

double[] data = new double[] { 1.2, 3.4, 2.5, 6.8, 5.7 };
double median = data.Median();

Console.WriteLine($"The median of the dataset is {median}"); // 3.4
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

double[] data = new double[] { 1.2, 3.4, 2.5, 6.8, 5.7 };
double mode = data.Mode();

Console.WriteLine($"The mode of the dataset is {mode}"); // 1.2
```

### ToInt()

#### Definition

Converts a `double` value to an `int`. To achieve it, it uses the `Math.Round()` method.

#### Arguments

This method has no arguments.

#### Usage

```c#
using PeyrSharp.Extensions;

int n = 45.6.ToInt();
// n = 46
```

### ToSeconds(timeUnits)

#### Definition

Converts a specified time unit value to seconds. For instance, you can convert days, hours or minutes to seconds. It returns a `double` value.

::: info
This method can also be used in [`PeyrSharp.Core.Converters`](/core/converters/time.md#toseconds-d-timeunits).
:::

#### Arguments

| Type                                      | Name        | Meaning                                       |
| ----------------------------------------- | ----------- | --------------------------------------------- |
| [`TimeUnits`](/enumerations.md#timeunits) | `timeUnits` | The unit of the time. (ex: minutes, hours...) |

#### Usage

```c#
using PeyrSharp.Enums;
using PeyrSharp.Extensions;

double seconds = 5.ToSeconds(TimeUnits.Minutes);
// seconds = 300
```

### ToMinutes(timeUnits)

#### Definition

Converts a specified time unit value to minutes. For instance, you can convert days, hours or seconds to minutes. It returns a `double` value.

::: info
This method can also be used in [`PeyrSharp.Core.Converters`](/core/converters/time.md#tominutes-d-timeunits).
:::

#### Arguments

| Type                                      | Name        | Meaning                                       |
| ----------------------------------------- | ----------- | --------------------------------------------- |
| [`TimeUnits`](/enumerations.md#timeunits) | `timeUnits` | The unit of the time. (ex: minutes, hours...) |

#### Usage

```c#
using PeyrSharp.Enums;
using PeyrSharp.Extensions;

double min = 120.ToMinutes(TimeUnits.Seconds);
// min = 2
```

### ToHours(timeUnits)

#### Definition

Converts a specified time unit value to hours. For instance, you can convert days, minutes or seconds to hours. It returns a `double` value.

::: info
This method can also be used in [`PeyrSharp.Core.Converters`](/core/converters/time.md#tohours-d-timeunits).
:::

#### Arguments

| Type                                      | Name        | Meaning                                       |
| ----------------------------------------- | ----------- | --------------------------------------------- |
| [`TimeUnits`](/enumerations.md#timeunits) | `timeUnits` | The unit of the time. (ex: minutes, hours...) |

#### Usage

```c#
using PeyrSharp.Enums;
using PeyrSharp.Extensions;

double hours = 1.ToHours(TimeUnits.Days);
// hours = 24
```

### ToDays(timeUnits)

#### Definition

Converts a specified time unit value to days. For instance, you can convert hours, minutes or seconds to days. It returns a `double` value.

::: info
This method can also be used in [`PeyrSharp.Core.Converters`](/core/converters/time.md#todays-d-timeunits).
:::

#### Arguments

| Type                                      | Name        | Meaning                                       |
| ----------------------------------------- | ----------- | --------------------------------------------- |
| [`TimeUnits`](/enumerations.md#timeunits) | `timeUnits` | The unit of the time. (ex: minutes, hours...) |

#### Usage

```c#
using PeyrSharp.Enums;
using PeyrSharp.Extensions;

double days = 72.ToDays(TimeUnits.Hours);
// days = 3
```

### ToByte(storageUnit)

#### Definition

Converts a size (kb, mb, ...) to byte. Returns a `double` value.

::: info
This method can also be used in [`PeyrSharp.Core.Converters`](/core/converters/storage.md#tobyte-value-storageunit).
:::

#### Arguments

| Type        | Name          | Meaning                                            |
| ----------- | ------------- | -------------------------------------------------- |
| `TimeUnits` | `storageUnit` | The unit of the value. (ex: kilobyte, gigabyte...) |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double byte = Storage.1(StorageUnits.Kilobyte);
// byte = 1000
```

### ToKilobyte(storageUnit)

#### Definition

Converts a size (kb, mb, ...) to kilobyte. Returns a `double` value.

::: info
This method can also be used in [`PeyrSharp.Core.Converters`](/core/converters/storage.md#tokilobyte-value-storageunit).
:::

#### Arguments

| Type                                            | Name          | Meaning                                        |
| ----------------------------------------------- | ------------- | ---------------------------------------------- |
| [`StorageUnits`](/enumerations.md#storageunits) | `storageUnit` | The unit of the value. (ex: byte, gigabyte...) |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double kilobyte = 2000.ToKilobyte(StorageUnits.Byte);
// kilobyte = 2
```

### ToMegabyte(storageUnit)

#### Definition

Converts a size (kb, mb, ...) to megabyte. Returns a `double` value.

::: info
This method can also be used in [`PeyrSharp.Core.Converters`](/core/converters/storage.md#tomegabyte-value-storageunit).
:::

#### Arguments

| Type                                            | Name          | Meaning                                            |
| ----------------------------------------------- | ------------- | -------------------------------------------------- |
| [`StorageUnits`](/enumerations.md#storageunits) | `storageUnit` | The unit of the value. (ex: kilobyte, gigabyte...) |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double megabyte = 1500.ToMegabyte(StorageUnits.Kilobyte);
// megabyte = 1.5
```

### ToGigabyte(storageUnit)

#### Definition

Converts a size (kb, mb, ...) to gigabyte. Returns a `double` value.

::: info
This method can also be used in [`PeyrSharp.Core.Converters`](/core/converters/storage.md#togigabyte-value-storageunit).
:::

#### Arguments

| Type                                            | Name          | Meaning                                            |
| ----------------------------------------------- | ------------- | -------------------------------------------------- |
| [`StorageUnits`](/enumerations.md#storageunits) | `storageUnit` | The unit of the value. (ex: kilobyte, megabyte...) |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double gigabyte = 1000.ToGigabyte(StorageUnits.Megabyte);
// gigabyte = 1
```

### ToTerabyte(storageUnit)

#### Definition

Converts a size (kb, mb, ...) to terabyte. Returns a `double` value.

::: info
This method can also be used in [`PeyrSharp.Core.Converters`](/core/converters/storage.md#toterabyte-value-storageunit).
:::

#### Arguments

| Type                                            | Name          | Meaning                                            |
| ----------------------------------------------- | ------------- | -------------------------------------------------- |
| [`StorageUnits`](/enumerations.md#storageunits) | `storageUnit` | The unit of the value. (ex: kilobyte, gigabyte...) |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double terabyte = 1.ToTerabyte(StorageUnits.Petabyte);
// terabyte = 1000
```

### ToPetabyte(storageUnit)

#### Definition

Converts a size (kb, mb, ...) to petabyte. Returns a `double` value.

::: info
This method can also be used in [`PeyrSharp.Core.Converters`](/core/converters/storage.md#topetabyte-value-storageunit).
:::

#### Arguments

| Type                                            | Name          | Meaning                                            |
| ----------------------------------------------- | ------------- | -------------------------------------------------- |
| [`StorageUnits`](/enumerations.md#storageunits) | `storageUnit` | The unit of the value. (ex: kilobyte, gigabyte...) |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double petabyte = 1000.ToPetabyte(StorageUnits.Terabyte);
// petabyte = 1
```
