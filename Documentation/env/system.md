# System
This page is about the `System` class available in [`PeyrSharp.Env`](/env.md).
You can find here all of its methods and properties.

::: info
This class is `static`.
:::

## Compatibility

The `System` class is part of the `PeyrSharp.Env` module, and is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

::: warning
Some methods, classes or features of `PeyrSharp.Env` might not be available in all platforms.
:::

## Methods
### ExecuteAsAdmin(process)
#### Definition

Executes a program in administrator mode.

::: warning
This method only works on Windows.
:::

#### Arguments

| Type      	| Name      	| Meaning                         	|
|-----------	|-----------	|---------------------------------	|
| `Process` 	| `process` 	| The process to launch as admin. 	|

#### Usage

~~~ c#
using PeyrSharp.Env;

// Define a process
Process p = new();
p.StartInfo.FileName = "notepad.exe";

System.ExecuteAsAdmin(p);
~~~

### ExecuteAsAdmin(fileName)
#### Definition

Executes a program in administrator mode.

::: warning
This method only works on Windows.
:::

#### Arguments

| Type      	| Name      	| Meaning                         	|
|-----------	|-----------	|---------------------------------	|
| `string`   	| `fileName` 	| The path to the program to launch in admin mode. 	|

#### Usage

~~~ c#
using PeyrSharp.Env;

System.ExecuteAsAdmin("notepad.exe");
~~~

### LaunchUWPApp(packageFamilyName, applicationID)
#### Definition
This method allows you to launch an UWP app from its `PackageFamilyName` and its `Application Id`. You can find this information by running in Windows Powershell (admin) the following command:

~~~ powershell
Get-AppxPackage | Select PackageFamilyName, InstallLocation
~~~

You can find the Application Id in the AppxManifest.xml file in

~~~ txt
InstallLocation\AppxManifest.xml
~~~

::: warning
This method only works on Windows.
:::

#### Arguments

| Type     	| Name                	| Meaning                                                           	|
|----------	|---------------------	|-------------------------------------------------------------------	|
| `string` 	| `packageFamilyName` 	| The `PackageFamilyName` property.                                 	|
| `string` 	| `applicationID`     	| The `Application Id` property in the UWP `AppxManifest.xml` file. 	|

#### Usage

~~~ c#
using PeyrSharp.Env;

System.LaunchUWPApp("Microsoft.MinecraftUWP_8wekyb3d8bbwe", "App"); // Launch Minecraft UWP
~~~

## Properties
### CurrentOperatingSystem
#### Definition

~~~ c#
public static OperatingSystems CurrentOperatingSystem { get; }
~~~

Gets the current Operating system. Returns a [`OperatingSystems`](/enumerations.md#operatingsystems) value. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Env;

if (System.CurrentOperatingSystem == OperatingSystems.Windows)
{
    Console.WriteLine("You are on Windows");
}
~~~

### CurrentWindowsVersion
#### Definition

~~~ c#
public static WindowsVersion CurrentWindowsVersion { get; }
~~~

Gets the current Windows version. Returns a [`WindowsVersion`](/enumerations.md#windowsversion) value. You can only `get` this property.

::: warning
This property only works on Windows.
:::

#### Usage

~~~ c#
using PeyrSharp.Env;

if (System.CurrentWindowsVersion == WindowsVersion.Windows11)
{
    Console.WriteLine("You are on Windows 11");
}
~~~

### IsDarkThemeSupported
#### Definition

~~~ c#
public static bool IsDarkThemeSupported { get; }
~~~

Gets if the current Windows version supports dark theme. Returns a `bool` value. You can only `get` this property.

::: warning
This property only works on Windows.
:::

#### Usage

~~~ c#
using PeyrSharp.Env;

if (System.IsDarkThemeSupported)
{
    Console.WriteLine("You are running Windows 10 or higher.");
}
~~~

### RunningProcesses 
#### Definition

~~~ c#
public static Process[] RunningProcesses { get; }
~~~

Gets the processes that are currently running. Returns a `Process[]` array. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Env;

Process[] procs = System.RunningProcesses;

for (int i = 0; i < procs.Length; i++)
{
    Console.WriteLine(procs[i].ProcessName); // Print the name of all running processes
}
~~~

### RunningProcessesNames
#### Definition

~~~ c#
public static string[] RunningProcessesNames { get; }
~~~

Gets the names of the processes that are currently running. Returns a `string[]` array. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Env;

string[] procs = System.RunningProcessesNames;

for (int i = 0; i < procs.Length; i++)
{
    Console.WriteLine(procs[i]); // Print the name of all running processes
}
~~~

### UnixTime
#### Definition

~~~ c#
public static int Unix { get; }
~~~

Gets the current UnixTime. Returns an `int`. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Env;

int unixTime = System.UnixTime;
~~~