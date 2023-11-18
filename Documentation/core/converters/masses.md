# Masses

This page is about the `Masses` class available in [`PeyrSharp.Core.Converters`](/core/converters.md).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Masses` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Core             | ✅         | ✅         | ✅             |

## Methods

### PoundsToKilograms(pounds)

#### Definition

Converts pounds to kilograms. Returns a `double` value.

#### Arguments

| Type     | Name     | Meaning                      |
| -------- | -------- | ---------------------------- |
| `double` | `pounds` | Number of pounds to convert. |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double kg = Masses.PoundsToKilograms(10);
// kg = 4.535923703803784
```

### KilogramsToPounds(kilograms)

#### Definition

Converts kilograms to pounds. Returns a `double` value.

#### Arguments

| Type     | Name        | Meaning                         |
| -------- | ----------- | ------------------------------- |
| `double` | `kilograms` | Number of kilograms to convert. |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double pounds = Masses.KilogramsToPounds(25);
// pounds = 55.115565499999995
```
