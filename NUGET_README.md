![Using PeyrSharp](https://img.shields.io/badge/using-PeyrSharp-DD00FF?logo=nuget)
![GitHub contributors](https://img.shields.io/github/contributors/Leo-Corporation/PeyrSharp)
![GitHub issues](https://img.shields.io/github/issues/Leo-Corporation/PeyrSharp) 
![GitHub](https://img.shields.io/github/license/Leo-Corporation/PeyrSharp)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Leo-Corporation/PeyrSharp) 
![Nuget](https://img.shields.io/nuget/dt/PeyrSharp)

# PeyrSharp
A C# library designed to make developers' job easier.

[View documentation »](https://peyrsharp.leocorporation.dev/) · [Report Bug](https://github.com/Leo-Corporation/PeyrSharp/issues/new?assignees=&labels=bug&template=bug-report.yml&title=%5BBug%5D+) · [Request Feature](https://github.com/Leo-Corporation/PeyrSharp/issues/new?assignees=&labels=enhancement&template=feature-request.yml&title=%5BEnhancement%5D+)


## Introduction
### The roots
In March 2020, we published LeoCorpLibrary, which was also a C# library that contains useful methods. When we started the development of it, we didn't know where the project will go yet. Over the releases, we've added more and more methods and new features. However, the meaning and the purpose of LeoCorpLibrary was becoming less clear for everyone; it was becoming a mess. This is why we decided to rather not release v5, but instead, we decided to make a brand new .NET Library, PeyrSharp.

### Our next product
PeyrSharp is a C# written library designed to make developers' life easier. We've all written code that we wish we hadn't. PeyrSharp is here to respond to this need; by implementing useful methods in various domains: Mathematics, Web/HTTP requests, unit converters, extensions, environment-related operations, and more!

## Modules
PeyrSharp is divided in multiple packages:

**PeyrSharp**, the main package, that contains all of the followings:

**PeyrSharp.Core**, the basic methods and features of C#

- Maths
- Password
- Guid
- Converters
- Internet
- Crypt

**PeyrSharp.Env**, methods related to the file system and to the current execution environment.
    

- FileSys
- Logger
- Update
- System   

**PeyrSharp.Enums**, all enumerations used by PeyrSharp
    

- WindowsVersion
- TimeUnits
- SystemThemes
- OperatingSystems
- StorageUnits
- ControlAlignment
- PasswordPresets
- PasswordStrength

**PeyrSharp.Exceptions**, all exceptions used by PeyrSharp
    
- RGBInvalidValueException
- HEXInvalidValueException
- InvalidGuidLengthException

**PeyrSharp.Extensions**, extension methods, that extends basic types, such as `string`, `int`, `double` or arrays (`T[]`).
    
- String
- Int
- Double
- Array (`T[]`)

**PeyrSharp.UiHelpers**, methods related to Windows Forms or to the Windows Presentation Framework (WPF).
    
- WinForms
- Screen
- WPF

## Compatibility
### Platforms
Some modules of PeyrSharp are targeting features only available in specific operating systems. Thus, some packages aren't available on all platform.

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core             	| ✅       	| ✅     	| ✅              	|
| Env              	| ✅       	| ⚠️     	| ⚠️              	|
| Enums            	| ✅       	| ✅     	| ✅              	|
| Exceptions       	| ✅       	| ✅     	| ✅              	|
| Extensions       	| ✅       	| ✅     	| ✅              	|
| UiHelpers        	| ✅       	| ❌     	| ❌              	|

Caption:
- ✅ Full Support
- ⚠️ Partial Support
- ❌ Unsupported platform

### Frameworks
PeyrSharp is available in the following frameworks
- .NET 5
- .NET 6
- .NET 7 (soon)

> Note: .NET Framework and .NET Core are not targeted by PeyrSharp, since they are no longer supported.

## Documentation
### Branches
There are two branches:

| Name | Release | Description |
| :--: | :-----: | :---------: |
| `main` | ![GitHub release (latest by date)](https://img.shields.io/github/v/release/Leo-Corporation/PeyrSharp) | Stable versions |
| `vNext` | ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/Leo-Corporation/PeyrSharp?include_prereleases) | Next version of PeyrSharp (unstable) |

> Note: Other branches can also - of course - exists.

## Contribute
Here's what you'll need to contribute to this project:
- Visual Studio 2022 with:
   - .NET Desktop Development
   - Git
- .NET
   - .NET 5 (SDK + runtime)
   - .NET 6 (SDK + runtime)
   - .NET 7 (SDK + runtime)   
- (*optional*) NuGet

## Badge
~~~ md
![Using PeyrSharp](https://img.shields.io/badge/using-PeyrSharp-DD00FF?logo=nuget)
~~~

## License
Project under the [MIT](https://github.com/Leo-Corporation/PeyrSharp/blob/main/LICENSE) license.
