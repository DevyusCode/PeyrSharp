# HSV

This page is about the `HSV` class available in [`PeyrSharp.Core.Converters`](/core/converters.md).
You can find here all of its methods and properties.

## Compatibility

The `HSV` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Core             | ✅         | ✅         | ✅             |

## Constructors

### HSV(hue, saturation, value)

#### Definition

Initializes a `HSV` color from its hue, saturation, and value.

#### Arguments

| Type  | Name         | Meaning                          |
| ----- | ------------ | -------------------------------- |
| `int` | `hue`        | The Hue of the color.            |
| `int` | `saturation` | The saturation percentage.       |
| `int` | `value`      | The value/brightness percentage. |

#### Usage

```c#
using PeyrSharp.Core.Converters;

HSV hsv = new(50, 75, 100);
```

## Properties

### Hue

#### Definition

```c#
public int Hue { get; init; }
```

The `Hue` property contains the hue of the HSV color. You can only `get` this property.

### Saturation

#### Definition

```c#
public int Saturation { get; init; }
```

The `Value` property contains the saturation percentage of the HSV color. You can only `get` this property.

### Value

#### Definition

```c#
public int Value { get; init; }
```

The `Value` property contains the value/brightness percentage of the HSV color. You can only `get` this property.
