# FileSys
This page is about the `FileSys` class available in [`PeyrSharp.Env`](/env.md).
You can find here all of its methods and properties.

::: info
This class is `static`.
:::

## Compatibility

The `FileSys` class is part of the `PeyrSharp.Env` module, and is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

::: warning
Some methods, classes or features of `PeyrSharp.Env` might not be available in all platforms.
:::

## Methods
### GetAvailableSpace(drive, unit)
#### Definition
Gets the amount of available storage on a specified drive. It returns `double`.

#### Arguments

| Type           	| Name    	| Meaning                                                        	|
|----------------	|---------	|----------------------------------------------------------------	|
| `string`       	| `drive` 	| The drive letter or name to get the amount of available space. 	|
| `StorageUnits` 	| `unit`  	| The unit of the returned result.                               	|

#### Usage

~~~ c#
using PeyrSharp.Enums;
using PeyrSharp.Env;

double space = FileSys.GetAvailableSpace("C:/", StorageUnits.Gigabyte);
~~~

### GetAvailableSpace(driveInfo, unit)
#### Definition
Gets the amount of available storage on a specified drive. It returns `double`.

#### Arguments

| Type           	| Name        	| Meaning                                                      	|
|----------------	|-------------	|--------------------------------------------------------------	|
| `DriveInfo`    	| `driveInfo` 	| The `DriveInfo` object to get the amount of available space. 	|
| `StorageUnits` 	| `unit`      	| The unit of the returned result.                             	|

#### Usage

~~~ c#
using PeyrSharp.Enums;
using PeyrSharp.Env;

double space = FileSys.GetAvailableSpace(new DriveInfo("C:/"), StorageUnits.Gigabyte);
~~~

### GetOccupiedSpace(drive, unit)
#### Definition
Gets the amount of occupied storage on a specified drive. It returns `double`.

#### Arguments

| Type           	| Name    	| Meaning                                                        	|
|----------------	|---------	|----------------------------------------------------------------	|
| `string`       	| `drive` 	| The drive letter or name to get the amount of occupied space. 	|
| `StorageUnits` 	| `unit`  	| The unit of the returned result.                               	|

#### Usage

~~~ c#
using PeyrSharp.Enums;
using PeyrSharp.Env;

double occupiedSpace = FileSys.GetOccupiedSpace("C:/", StorageUnits.Gigabyte);
~~~

### GetOccupiedSpace(driveInfo, unit)
#### Definition
Gets the amount of occupied storage on a specified drive. It returns `double`.

#### Arguments

| Type           	| Name        	| Meaning                                                      	|
|----------------	|-------------	|--------------------------------------------------------------	|
| `DriveInfo`    	| `driveInfo` 	| The `DriveInfo` object to get the amount of occupied space. 	|
| `StorageUnits` 	| `unit`      	| The unit of the returned result.                             	|

#### Usage

~~~ c#
using PeyrSharp.Enums;
using PeyrSharp.Env;

double occupiedSpace = FileSys.GetOccupiedSpace(new DriveInfo("C:/"), StorageUnits.Gigabyte);
~~~

### GetTotalSpace(drive, unit)
#### Definition
Gets the total amount of space on a specified drive. It returns `double`.

#### Arguments

| Type           	| Name    	| Meaning                                                        	|
|----------------	|---------	|----------------------------------------------------------------	|
| `string`       	| `drive` 	| The drive letter or name to get the amount of total space. 	|
| `StorageUnits` 	| `unit`  	| The unit of the returned result.                               	|

#### Usage

~~~ c#
using PeyrSharp.Enums;
using PeyrSharp.Env;

double occupiedSpace = FileSys.GetTotalSpace("C:/", StorageUnits.Gigabyte);
~~~

### GetTotalSpace(driveInfo, unit)
#### Definition
Gets the total amount of space on a specified drive. It returns `double`.

#### Arguments

| Type           	| Name        	| Meaning                                                      	|
|----------------	|-------------	|--------------------------------------------------------------	|
| `DriveInfo`    	| `driveInfo` 	| The `DriveInfo` object to get the amount of total space. 	|
| `StorageUnits` 	| `unit`      	| The unit of the returned result.                             	|

#### Usage

~~~ c#
using PeyrSharp.Enums;
using PeyrSharp.Env;

double total = FileSys.GetTotalSpace(new DriveInfo("C:/"), StorageUnits.Gigabyte);
~~~

### CountFileCharactersAsync(fileName)
#### Definition
Counts the number of characters in specified file asynchronously. It returns an `int`.

::: info
This method is asynchronous and awaitable.
:::

#### Arguments

| Type     	| Name       	| Meaning                    	|
|----------	|------------	|----------------------------	|
| `string` 	| `fileName` 	| The file path of the file. 	|

#### Usage

~~~ c#
using PeyrSharp.Env;

public static async Task ExampleAsync()
{
    // Write some text in a file
    string text = "Hello, World!";
    await File.WriteAllTextAsync("Hello.txt", text);

    // Count the number of characters
    int chars = await FileSys.CountFileCharactersAsync("Hello.txt");

    // chars = 13
}
~~~

### CanWriteFile(filePath)
#### Definition
Checks if your program has the permission to write a file in a specific directory. It returns a `bool`; `true` if you can write/edit the specified directory.

#### Arguments

| Type     	| Name       	| Meaning                    	|
|----------	|------------	|----------------------------	|
| `string` 	| `filePath` 	| The path to the directory. 	|

#### Usage

~~~ c#
using PeyrSharp.Env;

if (FileSys.CanWriteFile(@"C:\Windows"))
{
    Console.WriteLine("You have permission to edit in this folder.");
}
else
{
    Console.WriteLine("You do not have permission to edit in this folder.");
}
~~~

## Properties
### AppDataPath
#### Definition

~~~ c#
public static string AppDataPath { get; }
~~~

The `AppDataPath` property gets the `%APPDATA%` path. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Env;

string appdata = FileSys.AppDataPath;
~~~

### SystemDrive
#### Definition

~~~ c#
[SupportedOSPlatform("windows")]
public static DriveInfo SystemDrive { get; }
~~~

The `SystemDrive` property gets the system drive, where Windows is installed. You can only `get` this property.

::: danger
This property only works on Windows! It will return a default value if you run it on a different platform.
:::

#### Usage

~~~ c#
using PeyrSharp.Env;

DriveInfo sys = FileSys.SystemDrive;
~~~