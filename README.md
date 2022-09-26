<br />
<p align="center">
  <a href="https://github.com/Leo-Corporation/PeyrSharp">
    <img src=".github/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">PeyrSharp</h1>

  <p align="center">
    A C# library designed to make developers' job easier.
    <br />
    <a href="https://leocorplibrary.leocorporation.dev/"><strong>View documentation »</strong></a>
    <br />
    <a href="https://github.com/Leo-Corporation/PeyrSharp/issues/new?assignees=&labels=bug&template=bug-report.yml&title=%5BBug%5D+">Report Bug</a>
    ·
    <a href="https://github.com/Leo-Corporation/PeyrSharp/issues/new?assignees=&labels=enhancement&template=feature-request.yml&title=%5BEnhancement%5D+">Request Feature</a>
    ·
    <a href="https://www.nuget.org/packages/PeyrSharp/">NuGet</a>

  </p>
</p>

## Introduction
### The roots
In March 2020, we published LeoCorpLibrary, which is also a C# library that contains useful methods. When we started the development of it, we didn't know where the project will go yet. Over the releases, we've added more and more methods and nw features. However, the meaning and the purpose of LeoCorpLibrary was becoming less clear for everyone; it was becoming a mess. This is why we decided to rather not release v5, but instead, we decided to make a brand new .NET Library, PeyrSharp.

### Our next product
PeyrSharp is a C# written library designed to make developers' life easier. We've all written code that we wish we hadn't. PeyrSharp is here to respond to this need; by implementing useful methods in various domains: Mathematics, Web/HTTP requests, unit converters, extensions, environment-related operations, and more!

## Modules
PeyrSharp is divided in multiple packages:

**PeyrSharp**, the main package, that contains all of the followings:

<details>
    <summary>
        <b>PeyrSharp.Core</b>, the basic methods and features of C#
    </summary>

- Maths
- Password
- Guid
- Converters
- Internet
- Crypt

</details>

<details>
    <summary>
        <b>PeyrSharp.Env</b>
    </summary>

- FileSys
- Logger
- Update
- System

</details>

<details>
    <summary>
        <b>PeyrSharp.Enums</b>
    </summary>

- WindowsVersion
- TimeUnits
- SystemThemes
- OperatingSystems
- StorageUnits
- ControlAlignment
- PasswordPresets
- PasswordStrength

</details>        

<details>
    <summary>
        <b>PeyrSharp.Exceptions</b>
    </summary>

- RGBInvalidValueException
- HEXInvalidValueException
- InvalidGuidLengthException

</details>

<details>
    <summary>
        <b>PeyrSharp.Extensions</b>
    </summary>

- String
- Int
- Double
- Array (`T[]`)

</details>

<details>
    <summary>
        <b>PeyrSharp.UiHelpers</b>
    </summary>

- WinForms
- Screen
- WPF

</details>