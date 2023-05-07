# Speeds

This page is about the `Speeds` class available in [`PeyrSharp.Core.Converters`](/core/converters.md).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Speeds` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 5** | **.NET 6** | **.NET 7**     |
| Core             | ✅         | ✅         | ✅             |

## Methods

### KnotsToKilometersPerHour(knots)

#### Definition

Converts knots to kilometers per hour.

#### Arguments

| Type     | Name    | Meaning             |
| -------- | ------- | ------------------- |
| `double` | `knots` | The speed in knots. |

#### Returns

The equivalent speed in kilometers per hour.

#### Usage

```c#
using PeyrSharp.Core.Converters;

double speedInKnots = 20.0;
double speedInKilometersPerHour = Speeds.KnotsToKilometersPerHour(speedInKnots);
Console.WriteLine($"{speedInKnots} knots is equivalent to {speedInKilometersPerHour} km/h");
```

### KilometersPerHourToKnots(kilometersPerHour)

#### Definition

Converts kilometers per hour to knots.

#### Arguments

| Type     | Name                | Description                       |
| -------- | ------------------- | --------------------------------- |
| `double` | `kilometersPerHour` | The speed in kilometers per hour. |

#### Returns

The equivalent speed in knots.

#### Usage

```c#
using PeyrSharp.Core.Converters;

double speedInKilometersPerHour = 40.0;
double speedInKnots = Speeds.KilometersPerHourToKnots(speedInKilometersPerHour);
Console.WriteLine($"{speedInKilometersPerHour} km/h is equivalent to {speedInKnots} knots");
```

### KnotsToMilesPerHour(knots)

#### Definition

Converts knots to miles per hour.

#### Arguments

| Type     | Name    | Description         |
| -------- | ------- | ------------------- |
| `double` | `knots` | The speed in knots. |

#### Returns

The equivalent speed in miles per hour.

#### Usage

```c#
using PeyrSharp.Core.Converters;

double speedInKnots = 20.0;
double speedInMilesPerHour = Speeds.KnotsToMilesPerHour(speedInKnots);
Console.WriteLine($"{speedInKnots} knots is equivalent to {speedInMilesPerHour} mph");
```

### MilesPerHourToKnots(milesPerHour)

#### Definition

Converts miles per hour to knots.

#### Arguments

| Type     | Name           | Description                  |
| -------- | -------------- | ---------------------------- |
| `double` | `milesPerHour` | The speed in miles per hour. |

#### Returns

The equivalent speed in knots.

#### Usage

```c#
using PeyrSharp.Core.Converters;

double speedInMilesPerHour = 60.0;
double speedInKnots = Speeds.MilesPerHourToKnots(speedInMilesPerHour);
Console.WriteLine($"{speedInMilesPerHour} miles/hour is equivalent to {speedInKnots} knots");
```

### KilometersPerHourToMetersPerSecond(kilometersPerHour)

#### Definition

Converts kilometers per hour to meters per second.

#### Arguments

| Type     | Name                | Description                       |
| -------- | ------------------- | --------------------------------- |
| `double` | `kilometersPerHour` | The speed in kilometers per hour. |

#### Returns

The equivalent speed in meters per second.

#### Usage

```c#
using PeyrSharp.Core.Converters;

double speedInKilometersPerHour = 100.0;
double speedInMetersPerSecond = Speeds.KilometersPerHourToMetersPerSecond(speedInKilometersPerHour);
Console.WriteLine($"{speedInKilometersPerHour} km/h is equivalent to {speedInMetersPerSecond} m/s");
```

### MetersPerSecondToKilometersPerHour(metersPerSecond)

#### Definition

Converts meters per second to kilometers per hour.

#### Arguments

| Type     | Name              | Meaning                         |
| -------- | ----------------- | ------------------------------- |
| `double` | `metersPerSecond` | The speed in meters per second. |

#### Returns

The equivalent speed in kilometers per hour.

#### Usage

```c#
using PeyrSharp.Core.Converters;

double speedInMetersPerSecond = 10.0;
double speedInKilometersPerHour = Speeds.MetersPerSecondToKilometersPerHour(speedInMetersPerSecond);
Console.WriteLine($"{speedInMetersPerSecond} m/s is equivalent to {speedInKilometersPerHour} km/h");
```

### MilesPerHourToKilometersPerHour(milesPerHour)

#### Definition

Converts miles per hour to kilometers per hour.

#### Arguments

| Type     | Name           | Description                  |
| -------- | -------------- | ---------------------------- |
| `double` | `milesPerHour` | The speed in miles per hour. |

#### Returns

The equivalent speed in kilometers per hour.

#### Usage

```c#
using PeyrSharp.Core.Converters;

double speedInMilesPerHour = 60.0;
double speedInKilometersPerHour = Speeds.MilesPerHourToKilometersPerHour(speedInMilesPerHour);
Console.WriteLine($"{speedInMilesPerHour} mph is equivalent to {speedInKilometersPerHour} km/h");
```

### KilometersPerHourToMilesPerHour(kilometersPerHour)

#### Definition

Converts kilometers per hour to miles per hour.

#### Arguments

| Type     | Name                | Description                       |
| -------- | ------------------- | --------------------------------- |
| `double` | `kilometersPerHour` | The speed in kilometers per hour. |

#### Returns

The equivalent speed in miles per hour.

#### Usage

```c#
using PeyrSharp.Core.Converters;

double speedInKilometersPerHour = 50.0;
double speedInMilesPerHour = Speeds.KilometersPerHourToMilesPerHour(speedInKilometersPerHour);
Console.WriteLine($"{speedInKilometersPerHour} km/h is equivalent to {speedInMilesPerHour} mph");
```

### MachToKilometersPerHour(n)

#### Definition

Converts a speed in mach to a speed in kilometers per hour. Returns a `double` value.

#### Arguments

| Type     | Name | Meaning                       |
| -------- | ---- | ----------------------------- |
| `double` | `n`  | The speed in mach to convert. |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double kmPerHour = Speeds.MachToKilometersPerHour(1);
// kmPerHour = 1234.8
```

### MachToMilesPerHour(mach)

#### Definition

Converts a speed in mach to miles per hour. Returns a `double` value.

#### Arguments

| Type     | Name   | Meaning            |
| -------- | ------ | ------------------ |
| `double` | `mach` | The speed in mach. |

#### Returns

A `double` representing the speed in miles per hour.

#### Usage

```c#
using PeyrSharp.Core.Converters;

double mph = Speeds.MachToMilesPerHour(0.8);
// mph = 613.8153184
```
