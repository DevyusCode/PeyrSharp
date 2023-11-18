# Enumerations

This page is about the enumerations available in PeyrSharp.Enums.
They are grouped by category.

## Compatibility

Enumerations are part of the `PeyrSharp.Enums` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Enums            | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Enums            | ✅         | ✅         | ✅             |

## Converters

### StorageUnits

#### Definition

The `StorageUnits` enumeration represents all possible numeric storage units. It contains the following values:

| Value | Name       | Meaning                 |
| ----- | ---------- | ----------------------- |
| 0     | `Byte`     | The byte unit. (b)      |
| 1     | `Kilobyte` | The kilobyte unit. (kb) |
| 2     | `Megabyte` | The megabyte unit. (mb) |
| 3     | `Gigabyte` | The gigabyte unit. (gb) |
| 4     | `Terabyte` | The terabyte unit. (tb) |
| 5     | `Petabyte` | The petabyte unit. (pb) |

#### Example

```c#
public static double ToPetabyte(double value, StorageUnits unit)
{
    if (unit == StorageUnits.Terabyte)
    {
        return value / 1000d;
    }
}
```

### TimeUnits

#### Definition

The `TimeUnits` enumeration represents all possible time units, such as seconds, minutes, etc. A more detailed table on all the values available:

| Value | Name           | Meaning                  |
| ----- | -------------- | ------------------------ |
| 0     | `Milliseconds` | Represents milliseconds. |
| 1     | `Seconds`      | Represents seconds.      |
| 2     | `Minutes`      | Represents minutes.      |
| 3     | `Hours`        | Represents hours.        |
| 4     | `Days`         | Represents days.         |

#### Example

```c#
public static double ToSeconds(double value, TimeUnits unit)
{
    if (unit == TimeUnits.Minutes)
    {
        return value * 60;
    }
}
```

## Environment

### LogLevel

#### Definition

The `LogLevel` enumeration specifies the severity level of a log message. It contains several values:

| Value | Name       | Meaning                                                                                               |
| ----- | ---------- | ----------------------------------------------------------------------------------------------------- |
| 0     | `Debug`    | Debug-level messages provide verbose information for debugging purposes.                              |
| 1     | `Info`     | Info-level messages provide informational messages about the application's state.                     |
| 2     | `Warning`  | Warning-level messages indicate a potential problem or non-critical issue.                            |
| 3     | `Error`    | Error-level messages indicate an error has occurred in the application.                               |
| 4     | `Critical` | Critical-level messages indicate a critical error has occurred that requires immediate attention.     |
| 5     | `Misc`     | Misc-level messages are for miscellaneous use cases and are not defined in the logging specification. |

#### Example

```c#
using PeyrSharp.Enums;
using PeyrSharp.Env;

string message = "This is a log message.";
string filePath = @"C:\Logs\log.txt";
DateTime date = DateTime.Now;
LogLevel logLevel = LogLevel.Warning;

Logger.Log(message, filePath, date, logLevel);
```

[More info here about the example](/env/logger.html#log-message-filepath-datetime-loglevel)

### OperatingSystems

#### Definition

The `OperatingSystems` enumerations represents all possible operating systems that a .NET program could run on. It contains several values:

| Value | Name      | Meaning                                 |
| ----- | --------- | --------------------------------------- |
| 0     | `Windows` | The Microsoft Windows Operating System. |
| 1     | `macOS`   | The Apple macOS Operating System.       |
| 2     | `Linux`   | A Linux-based Operating System.         |
| 3     | `Unknown` | An unknown Operating System.            |

#### Example

```c#
if (Env.CurrentOs == OperatingSystems.Windows)
{
    //Do something if the OS is Windows
}
```

### SystemThemes

#### Definition

The `SystemThemes` enumerations represents all themes available on a Windows device. It contains several values:

| Value | Name      | Meaning                        |
| ----- | --------- | ------------------------------ |
| 0     | `Dark`    | The user is using dark theme.  |
| 1     | `Light`   | The user is using light theme. |
| 2     | `Unknown` | The current theme is unknown.  |

#### Example

```c#
if (GetCurrentTheme() == SystemThemes.Dark)
{
    Console.WriteLine("You have dark theme enabled!");
}
```

### WindowsVersion

#### Definition

The `WindowsVersion` enumerations represents all possible Windows versions supported by .NET, which means all version from Windows 7 to 11. It contains several values:

| Value | Name        | Meaning                                                  |
| ----- | ----------- | -------------------------------------------------------- |
| 0     | `Windows7`  | The Windows 7 (NT 6.1) Operating System.                 |
| 1     | `Windows8`  | The Windows 8 (NT 6.2) Operating System.                 |
| 2     | `Windows81` | The Windows 8.1 (NT 6.3) Operating System.               |
| 3     | `Windows10` | The Windows 10 (NT 10.0) Operating System.               |
| 4     | `Windows11` | The Windows 11 (NT 10.0, Build 22000+) Operating System. |

#### Example

```c#
public bool DarkThemeAvailable => Env.CurrentWindowsVersion == WindowsVersion.Windows10 || Env.CurrentWindowsVersion == WindowsVersion.Windows11;
```

## Geometry

### TriangleSides

#### Definition

The `TriangleSides` enumeration represents the different sides of a triangle: hypotenuse, adjacent, and opposite. It contains these values:

| Value | Name       | Meaning                                              |
| ----- | ---------- | ---------------------------------------------------- |
| 0     | Opposed    | The opposed side of a specific angle of a triangle.  |
| 1     | Hypotenuse | The hypotenuse of a triangle.                        |
| 2     | Adjacent   | The adjacent side of a specific angle of a triangle. |

#### Example

```c#
// Get the adjacent side from the opposed side of a specific angle.
Trigonometry.GetAdjacentSideFrom(TriangleSides.Opposed, 20);
```

## Internet

### StatusCodes

#### Definition

The `StatusCodes` enumeration represents the different kinds of status codes returned by a server after a request is made to it. The following status codes are available in this enumeration:

| Value | Name            | Meaning                           |
| ----- | --------------- | --------------------------------- |
| 0     | `Informational` | Informational responses (100-199) |
| 1     | `Success`       | Successful responses (200-299)    |
| 2     | `Redirection`   | Redirection messages (300-399)    |
| 3     | `ClientError`   | Client error responses (400-499)  |
| 4     | `ServerError`   | Server error responses (500-599)  |

#### Example

```c#
status = GetRequestStatus();

switch (status)
{
    case StatusCodes.Informational:
        Console.WriteLine("An information status code has been returned.");
        break;
    case StatusCodes.Success:
        Console.WriteLine("An successful status code has been returned.");
        break;
    case StatusCodes.Redirection:
        Console.WriteLine("An redirection status code has been returned.");
        break;
    case StatusCodes.ClientError:
        Console.WriteLine("An client error status code has been returned.");
        break;
    case StatusCodes.ServerError:
        Console.WriteLine("An server error status code has been returned.");
        break;
}
```

## Password

### PasswordPresets

#### Definition

The `PasswordPresets` enumeration represents all the of the presets available when generating a password using the `Password` class of `PeyrSharp.Core`. It has two values:

| Value | Name      | Meaning                                                                            |
| ----- | --------- | ---------------------------------------------------------------------------------- |
| 0     | `Simple`  | The Simple preset generates a password with simple characters.                     |
| 1     | `Complex` | The Complex preset generates a password with unusual, hard and complex characters. |

#### Example

```c#
private async void Main()
{
    string password = Password.GenerateAsync(10, PasswordPresets.Simple); // Generate a simple password
}
```

### PasswordStrength

#### Definition

The `PasswordStrength` enumeration represents different strength levels of a password; if it's a strong or weak password. It contains these values:

| Value | Name       | Meaning                                                                                 |
| ----- | ---------- | --------------------------------------------------------------------------------------- |
| 0     | `Low`      | The password has a low strength; you shouldn't use it.                                  |
| 1     | `Medium`   | The password has a medium strength; don't use it on important websites.                 |
| 2     | `Good`     | The password has a good strength; you can safely use it.                                |
| 3     | `VeryGood` | The password has an excellent strength, meaning it will be hard for hackers to hack it. |

#### Example

```c#
internal async void Main()
{
    // Check if the generated password is complex
    if (Password.GetStrength(await Password.GenerateAsync(15, PasswordPresets.Complex)) == PasswordStrength.Medium)
    {
        Console.WriteLine("The password isn't complex enough.");
    }
}
```

## UserInterface

### ControlAlignment

#### Definition

The `ControlAlignment` enumeration is here to help align a control when calling methods from the `UiHelpers` namespace. It has the following values:

| Value | Name         | Meaning                                                           |
| ----- | ------------ | ----------------------------------------------------------------- |
| 0     | `Horizontal` | The control will be aligned/centered horizontally.                |
| 1     | `Vertical`   | The control will be aligned/centered vertically.                  |
| 2     | `Both`       | The control will be aligned/centered horizontally and vertically. |

#### Example

```c#
using PeyrSharp.UiHelpers;

namespace App
{
    public partial class MyForm : Form
    {
        private void button1_Click(object sender, EventArgs e)
        {
            WinFormsHelpers.CenterControl(button1, this, ControlAlignment.Horizontal);
        }
    }
}
```
