# HEX

This page is about the `HEX` class available in [`PeyrSharp.Core.Converters`](/core/converters.md).
You can find here all of its methods and properties.

## Compatibility

The `HEX` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Core             | ✅         | ✅         | ✅             |

## Constructors

### HEX(hex)

Initializes a hexadecimal class from a hexadecimal value.

#### Arguments

| Type     | Name  | Meaning                                      |
| -------- | ----- | -------------------------------------------- |
| `string` | `hex` | The hexadecimal value (with or without `#`). |

::: warning
If you specify a non-hexadecimal value, a [`HEXInvalidValueException`](/exceptions.md#hexinvalidvalueexception) will be thrown.
:::

#### Usage

```c#
using PeyrSharp.Core.Converters;

HEX hex = new("#FF0A17");
```

## Methods

### ToRgb()

#### Definition

Converts the HEX color to [`RGB`](/core/converters/colors/rgb.md). Returns a [`RGB`](/core/converters/colors/rgb.md) class.

#### Arguments

This method has no arguments.

#### Usage

```c#
using PeyrSharp.Core.Converters;

RGB rgb = new HEX("#FFFFFF").ToRgb();
```

### ToHsv()

#### Definition

Converts the HEX color to [`HSV`](/core/converters/colors/hsv.md). Returns a [`HSV`](/core/converters/colors/hsv.md) class.

#### Arguments

This method has no arguments.

#### Usage

```c#
using PeyrSharp.Core.Converters;

HSV hsv = new HEX("#E1077B").ToHsv();
```

## Properties

### Value

#### Definition

```c#
public string Value { get; init; }
```

The `Value` property contains the hexadecimal value of the HEX color. You can only `get` this property.
