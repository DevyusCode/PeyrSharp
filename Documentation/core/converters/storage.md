# Storage

This page is about the `Storage` class available in [`PeyrSharp.Core.Converters`](/core/converters.md).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Storage` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Core             | ✅         | ✅         | ✅             |

## Methods

### ToByte(value, storageUnit)

#### Definition

Converts a size (kb, mb, ...) to byte. Returns a `double` value.

::: info
This method can also be used in [`PeyrSharp.Extensions`](/extensions/double.md#tobyte-storageunit).
:::

#### Arguments

| Type                                            | Name          | Meaning                                            |
| ----------------------------------------------- | ------------- | -------------------------------------------------- |
| `double`                                        | `value`       | The value to convert.                              |
| [`StorageUnits`](/enumerations.md#storageunits) | `storageUnit` | The unit of the value. (ex: kilobyte, gigabyte...) |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double byte = Storage.ToByte(1, StorageUnits.Kilobyte);
// byte = 1000
```

### ToKilobyte(value, storageUnit)

#### Definition

Converts a size (kb, mb, ...) to kilobyte. Returns a `double` value.

::: info
This method can also be used in [`PeyrSharp.Extensions`](/extensions/double.md#tokilobyte-storageunit).
:::

#### Arguments

| Type                                            | Name          | Meaning                                        |
| ----------------------------------------------- | ------------- | ---------------------------------------------- |
| `double`                                        | `value`       | The value to convert.                          |
| [`StorageUnits`](/enumerations.md#storageunits) | `storageUnit` | The unit of the value. (ex: byte, gigabyte...) |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double kilobyte = Storage.ToKilobyte(2000, StorageUnits.Byte);
// kilobyte = 2
```

### ToMegabyte(value, storageUnit)

#### Definition

Converts a size (kb, mb, ...) to megabyte. Returns a `double` value.

::: info
This method can also be used in [`PeyrSharp.Extensions`](/extensions/double.md#tomegabyte-storageunit).
:::

#### Arguments

| Type                                            | Name          | Meaning                                            |
| ----------------------------------------------- | ------------- | -------------------------------------------------- |
| `double`                                        | `value`       | The value to convert.                              |
| [`StorageUnits`](/enumerations.md#storageunits) | `storageUnit` | The unit of the value. (ex: kilobyte, gigabyte...) |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double megabyte = Storage.ToMegabyte(1500, StorageUnits.Kilobyte);
// megabyte = 1.5
```

### ToGigabyte(value, storageUnit)

#### Definition

Converts a size (kb, mb, ...) to gigabyte. Returns a `double` value.

::: info
This method can also be used in [`PeyrSharp.Extensions`](/extensions/double.md#togigabyte-storageunit).
:::

#### Arguments

| Type                                            | Name          | Meaning                                            |
| ----------------------------------------------- | ------------- | -------------------------------------------------- |
| `double`                                        | `value`       | The value to convert.                              |
| [`StorageUnits`](/enumerations.md#storageunits) | `storageUnit` | The unit of the value. (ex: kilobyte, megabyte...) |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double gigabyte = Storage.ToGigabyte(1000, StorageUnits.Megabyte);
// gigabyte = 1
```

### ToTerabyte(value, storageUnit)

#### Definition

Converts a size (kb, mb, ...) to terabyte. Returns a `double` value.

::: info
This method can also be used in [`PeyrSharp.Extensions`](/extensions/double.md#toterabyte-storageunit).
:::

#### Arguments

| Type                                            | Name          | Meaning                                            |
| ----------------------------------------------- | ------------- | -------------------------------------------------- |
| `double`                                        | `value`       | The value to convert.                              |
| [`StorageUnits`](/enumerations.md#storageunits) | `storageUnit` | The unit of the value. (ex: kilobyte, gigabyte...) |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double terabyte = Storage.ToTerabyte(1, StorageUnits.Petabyte);
// terabyte = 1000
```

### ToPetabyte(value, storageUnit)

#### Definition

Converts a size (kb, mb, ...) to petabyte. Returns a `double` value.

::: info
This method can also be used in [`PeyrSharp.Extensions`](/extensions/double.md#topetabyte-storageunit).
:::

#### Arguments

| Type                                            | Name          | Meaning                                            |
| ----------------------------------------------- | ------------- | -------------------------------------------------- |
| `double`                                        | `value`       | The value to convert.                              |
| [`StorageUnits`](/enumerations.md#storageunits) | `storageUnit` | The unit of the value. (ex: kilobyte, gigabyte...) |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double petabyte = Storage.ToPetabyte(1000, StorageUnits.Terabyte);
// petabyte = 1
```

### BitsToBytes(n)

#### Definition

Converts a number of bits to a number of bytes. Returns a `double` value.

#### Arguments

| Type     | Name | Meaning                        |
| -------- | ---- | ------------------------------ |
| `double` | `n`  | The number of bits to convert. |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double bytes = Storage.BitsToBytes(64);
// bytes = 8
```

### BytesToBits(n)

#### Definition

Converts a number of bytes to a number of bits. Returns a `double` value.

#### Arguments

| Type     | Name | Meaning                                 |
| -------- | ---- | --------------------------------------- |
| `double` | `n`  | The number of bytes to convert to bits. |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double bits = Storage.BytesToBits(1024);
// bits = 8192
```
