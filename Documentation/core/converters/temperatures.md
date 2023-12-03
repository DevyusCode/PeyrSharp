# Temperatures

This page is about the `Temperatures` class available in [`PeyrSharp.Core.Converters`](/core/converters.md).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Temperatures` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Core             | ✅         | ✅         | ✅             |

## Methods

### CelsiusToFahrenheit(celsius)

#### Definition

Converts Celsius (°C) to Fahrenheit (°F). Returns a `double` value.

#### Arguments

| Type     | Name      | Meaning                       |
| -------- | --------- | ----------------------------- |
| `double` | `celsius` | Number of Celsius to convert. |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double f = Temperatures.CelsiusToFahrenheit(22);
// f = 71.6
```

### FahrenheitToCelsius(fahrenheit)

#### Definition

Converts Fahrenheit (°F) to Celsius (°C). Returns a `double` value.

#### Arguments

| Type     | Name         | Meaning                          |
| -------- | ------------ | -------------------------------- |
| `double` | `fahrenheit` | Number of Fahrenheit to convert. |

#### Usage

```c#
using PeyrSharp.Core.Converters;

double c = Temperatures.FahrenheitToCelsius(75);
// c = 23.88888888888889
```

### CelsiusToKelvin(celsius)

#### Definition

Converts a temperature value from Celsius to Kelvin.

#### Arguments

| Type     | Name      | Meaning                                      |
| -------- | --------- | -------------------------------------------- |
| `double` | `celsius` | The temperature value in Celsius to convert. |

#### Returns

The temperature value in Kelvin.

#### Usage

```c#
double celsius = 25.0;
double kelvin = Temperature.CelsiusToKelvin(celsius);
```

### FahrenheitToKelvin(fahrenheit)

#### Definition

Converts a temperature value from Fahrenheit to Kelvin.

#### Arguments

| Type     | Name         | Meaning                                         |
| -------- | ------------ | ----------------------------------------------- |
| `double` | `fahrenheit` | The temperature value in Fahrenheit to convert. |

#### Returns

The temperature value in Kelvin.

#### Usage

```c#
double fahrenheit = 77.0;
double kelvin = Temperature.FahrenheitToKelvin(fahrenheit);
```

### KelvinToCelsius(kelvin)

#### Definition

Converts a temperature value from Kelvin to Celsius.

#### Arguments

| Type     | Name     | Meaning                                     |
| -------- | -------- | ------------------------------------------- |
| `double` | `kelvin` | The temperature value in Kelvin to convert. |

#### Returns

The temperature value in Celsius.

#### Usage

```c#
double kelvin = 298.15;
double celsius = Temperature.KelvinToCelsius(kelvin);
```

### KelvinToFahrenheit(kelvin)

#### Definition

Converts a temperature value from Kelvin to Fahrenheit.

#### Arguments

| Type     | Name     | Meaning                                     |
| -------- | -------- | ------------------------------------------- |
| `double` | `kelvin` | The temperature value in Kelvin to convert. |

#### Returns

The temperature value in Fahrenheit.

#### Usage

```c#
double kelvin = 298.15;
double fahrenheit = Temperature.KelvinToFahrenheit(kelvin);
```
