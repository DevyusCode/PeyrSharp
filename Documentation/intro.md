# Introduction

## The roots

In March 2020, we published LeoCorpLibrary, which was also a C# library that contains useful methods. When we started the development of it, we didn't know where the project will go yet. Over the releases, we've added more and more methods and new features. However, the meaning and the purpose of LeoCorpLibrary was becoming less clear for everyone; it was becoming a mess. This is why we decided to rather not release v5, but instead, we decided to make a brand new .NET Library, PeyrSharp.

## Our next product

PeyrSharp is a C# written library designed to make developers' life easier. We've all written code that we wish we hadn't. PeyrSharp is here to respond to this need; by implementing useful methods in various domains: Mathematics, Web/HTTP requests, unit converters, extensions, environment-related operations, and more!

# Modules

PeyrSharp is divided in multiple packages:

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

# Compatibility

## Platforms

Some modules of PeyrSharp are targeting features only available in specific operating systems. Thus, some packages aren't available on all platform.

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

## Frameworks

PeyrSharp is available in the following frameworks

- .NET 5
- .NET 6
- .NET 7

::: info NOTE
.NET Framework and .NET Core are not targeted by PeyrSharp, since they are no longer supported.
:::
