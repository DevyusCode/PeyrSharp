# RGB

This page is about the `RGB` class available in [`PeyrSharp.Core.Converters`](/core/converters.md).
You can find here all of its methods and properties.

## Compatibility

The `RGB` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Core             | ✅         | ✅         | ✅             |

## Constructors

### RGB(color)

#### Definition

Initializes a RGB class from a [`System.Drawing.Color`](https://learn.microsoft.com/en-us/dotnet/api/system.drawing.color?view=net-7.0). Returns a `RGB` class.

#### Arguments

| Type    | Name    | Meaning        |
| ------- | ------- | -------------- |
| `Color` | `color` | The RGB color. |

#### Usage

```c#
using PeyrSharp.Core.Converters;
using System.Drawing;

RGB rgb = new(Color.FromArgb(255, 150, 120));
```

### RGB(r, g, b)

#### Definition

Initializes a RGB class from its `r`, `g` and `b` values. Returns a `RGB` class.

#### Arguments

| Type  | Name | Meaning |
| ----- | ---- | ------- |
| `int` | `r`  | Red.    |
| `int` | `g`  | Green.  |
| `int` | `b`  | Blue.   |

::: warning
If you specify a value that is not between 0 and 255, a [`RGBInvalidValueException`](/exceptions.md#rgbinvalidvalueexception) will be thrown.
:::

#### Usage

```c#
using PeyrSharp.Core.Converters;

RGB rgb = new(255, 150, 120);
```

## Methods

### ToHex()

#### Definition

Converts the RGB color to hexadecimal ([`HEX`](/core/converters/colors/hex.md)). Returns a [`HEX`](/core/converters/colors/hex.md) class.

#### Arguments

This method has no arguments.

#### Usage

```c#
using PeyrSharp.Core.Converters;

HEX hex = new RGB(255, 0, 0).ToHex();
```

### ToHsv()

#### Definition

Converts the RGB color to [`HSV`](/core/converters/colors/hsv.md). Returns a [`HSV`](/core/converters/colors/hsv.md) class.

#### Arguments

This method has no arguments.

#### Usage

```c#
using PeyrSharp.Core.Converters;

HSV hsv = new RGB(255, 0, 0).ToHsv();
```

## Properties

### Color

#### Definition

```c#
public Color Color { get; init; }
```

The `Color` property contains the RGB color as a [`System.Drawing.Color`](https://learn.microsoft.com/en-us/dotnet/api/system.drawing.color?view=net-7.0). You can only `get` this property.
