# Get Started

## Packages and modules

Before installing PeyrSharp, you may want to consider what features you will actually need to use in your project. Indeed, PeyrSharp is divided in multiple modules and packages.

If you think you need all the features of PeyrSharp, you can directly install the PeyrSharp NuGet package. However, you can also install the packages that you only need in your project. Here's a list of all the packages and their features:

**PeyrSharp**, the main package, that contains all of the followings:

::: details **PeyrSharp.Core**, the basic methods and features of C#

- Maths
- Password
- Guid
- Converters
- Internet
- Crypt

:::

::: details **PeyrSharp.Env**, methods related to the file system and to the current execution environment.

- FileSys
- Logger
- Update
- System

:::

::: details **PeyrSharp.Enums**, all enumerations used by PeyrSharp

- LogLevel
- WindowsVersion
- TimeUnits
- SystemThemes
- OperatingSystems
- StorageUnits
- ControlAlignment
- PasswordPresets
- PasswordStrength

:::

::: details **PeyrSharp.Exceptions**, all exceptions used by PeyrSharp

- RGBInvalidValueException
- HEXInvalidValueException
- InvalidGuidLengthException

:::

::: details **PeyrSharp.Extensions**, extension methods, that extends basic types, such as <code>string</code>, <code>int</code>, <code>double</code> or arrays (<code>T[]</code>).

- String
- Int
- Double
- Array (`T[]`)

:::

::: details **PeyrSharp.UiHelpers**, methods related to Windows Forms or to the Windows Presentation Framework (WPF).

- WinForms
- Screen
- WPF

:::

## Compatibility

### Platforms

Some modules of PeyrSharp are targeting features only available in specific operating systems. Thus, some packages aren't available on all platforms.

| Package/Platform | Windows | macOS | Linux + others |
| ---------------- | ------- | ----- | -------------- |
| Core             | ✅      | ✅    | ✅             |
| Env              | ✅      | ⚠️    | ⚠️             |
| Enums            | ✅      | ✅    | ✅             |
| Exceptions       | ✅      | ✅    | ✅             |
| Extensions       | ✅      | ✅    | ✅             |
| UiHelpers        | ✅      | ❌    | ❌             |

Caption:

- ✅ Full Support
- ⚠️ Partial Support
- ❌ Unsupported platform

### Frameworks

PeyrSharp is available in the following frameworks

- .NET 5
- .NET 6
- .NET 7

::: info
.NET Framework and .NET Core are not targeted by PeyrSharp, since they are no longer supported.
:::

## Installation methods

PeyrShall is available on NuGet, you can install it by running the following command:

### .NET CLI

You can add PeyrSharp to your project the .NET CLI.

```powershell
dotnet add package PeyrSharp --version 1.0.0.2211
```

### Package Manager

```sh
NuGet\Install-Package PeyrSharp -Version 1.0.0.2211
```

### Package Reference

You can specify in your project file that it is dependent on PeyrSharp.

```xml
<PackageReference Include="PeyrSharp" Version="1.0.0.2211" />
```

## Start coding

To call methods and classes included in PeyrSharp, you will need to add the corresponding using directives in your code file.

```c#
using PeyrSharp.Core;
using PeyrSharp.Env;
using PeyrSharp.Enums;
using PeyrSharp.Exceptions;
using PeyrSharp.Extensions;
using PeyrSharp.UiHelpers; // Windows only
```

For more information, you can check the [reference](/reference)
