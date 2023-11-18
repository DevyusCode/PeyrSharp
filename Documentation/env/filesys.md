# FileSys

This page is about the `FileSys` class available in [`PeyrSharp.Env`](/env.md).
You can find here all of its methods and properties.

::: info
This class is `static`.
:::

## Compatibility

The `FileSys` class is part of the `PeyrSharp.Env` module, and is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Env              | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Env              | ✅         | ✅         | ✅             |

::: warning
Some methods, classes or features of `PeyrSharp.Env` might not be available in all platforms.
:::

## Methods

### GetAvailableSpace(drive, unit)

#### Definition

Gets the amount of available storage on a specified drive. It returns `double`.

#### Arguments

| Type           | Name    | Meaning                                                        |
| -------------- | ------- | -------------------------------------------------------------- |
| `string`       | `drive` | The drive letter or name to get the amount of available space. |
| `StorageUnits` | `unit`  | The unit of the returned result.                               |

#### Usage

```c#
using PeyrSharp.Enums;
using PeyrSharp.Env;

double space = FileSys.GetAvailableSpace("C:/", StorageUnits.Gigabyte);
```

### GetAvailableSpace(driveInfo, unit)

#### Definition

Gets the amount of available storage on a specified drive. It returns `double`.

#### Arguments

| Type           | Name        | Meaning                                                      |
| -------------- | ----------- | ------------------------------------------------------------ |
| `DriveInfo`    | `driveInfo` | The `DriveInfo` object to get the amount of available space. |
| `StorageUnits` | `unit`      | The unit of the returned result.                             |

#### Usage

```c#
using PeyrSharp.Enums;
using PeyrSharp.Env;

double space = FileSys.GetAvailableSpace(new DriveInfo("C:/"), StorageUnits.Gigabyte);
```

### GetOccupiedSpace(drive, unit)

#### Definition

Gets the amount of occupied storage on a specified drive. It returns `double`.

#### Arguments

| Type           | Name    | Meaning                                                       |
| -------------- | ------- | ------------------------------------------------------------- |
| `string`       | `drive` | The drive letter or name to get the amount of occupied space. |
| `StorageUnits` | `unit`  | The unit of the returned result.                              |

#### Usage

```c#
using PeyrSharp.Enums;
using PeyrSharp.Env;

double occupiedSpace = FileSys.GetOccupiedSpace("C:/", StorageUnits.Gigabyte);
```

### GetOccupiedSpace(driveInfo, unit)

#### Definition

Gets the amount of occupied storage on a specified drive. It returns `double`.

#### Arguments

| Type           | Name        | Meaning                                                     |
| -------------- | ----------- | ----------------------------------------------------------- |
| `DriveInfo`    | `driveInfo` | The `DriveInfo` object to get the amount of occupied space. |
| `StorageUnits` | `unit`      | The unit of the returned result.                            |

#### Usage

```c#
using PeyrSharp.Enums;
using PeyrSharp.Env;

double occupiedSpace = FileSys.GetOccupiedSpace(new DriveInfo("C:/"), StorageUnits.Gigabyte);
```

### GetTotalSpace(drive, unit)

#### Definition

Gets the total amount of space on a specified drive. It returns `double`.

#### Arguments

| Type           | Name    | Meaning                                                    |
| -------------- | ------- | ---------------------------------------------------------- |
| `string`       | `drive` | The drive letter or name to get the amount of total space. |
| `StorageUnits` | `unit`  | The unit of the returned result.                           |

#### Usage

```c#
using PeyrSharp.Enums;
using PeyrSharp.Env;

double occupiedSpace = FileSys.GetTotalSpace("C:/", StorageUnits.Gigabyte);
```

### GetTotalSpace(driveInfo, unit)

#### Definition

Gets the total amount of space on a specified drive. It returns `double`.

#### Arguments

| Type           | Name        | Meaning                                                  |
| -------------- | ----------- | -------------------------------------------------------- |
| `DriveInfo`    | `driveInfo` | The `DriveInfo` object to get the amount of total space. |
| `StorageUnits` | `unit`      | The unit of the returned result.                         |

#### Usage

```c#
using PeyrSharp.Enums;
using PeyrSharp.Env;

double total = FileSys.GetTotalSpace(new DriveInfo("C:/"), StorageUnits.Gigabyte);
```

### CountFileCharactersAsync(fileName)

#### Definition

Counts the number of characters in specified file asynchronously. It returns an `int`.

::: info
This method is asynchronous and awaitable.
:::

#### Arguments

| Type     | Name       | Meaning                    |
| -------- | ---------- | -------------------------- |
| `string` | `fileName` | The file path of the file. |

#### Usage

```c#
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
```

### CanWriteFile(filePath)

#### Definition

Checks if your program has the permission to write a file in a specific directory. It returns a `bool`; `true` if you can write/edit the specified directory.

#### Arguments

| Type     | Name       | Meaning                    |
| -------- | ---------- | -------------------------- |
| `string` | `filePath` | The path to the directory. |

#### Usage

```c#
using PeyrSharp.Env;

if (FileSys.CanWriteFile(@"C:\Windows"))
{
    Console.WriteLine("You have permission to edit in this folder.");
}
else
{
    Console.WriteLine("You do not have permission to edit in this folder.");
}
```

### IsDriveOpticalDrive(driveInfo)

_Available in version 1.1 and higher._

#### Definition

Checks if the specified drive is an optical drive, such as CD-ROM or DVD. It returns a `bool`; `true` if the drive is an optical drive.

#### Arguments

| Type     | Name        | Meaning             |
| -------- | ----------- | ------------------- |
| `string` | `driveInfo` | The drive to check. |

#### Usage

```c#
using PeyrSharp.Env;

if (FileSys.IsOpticalDrive(new(@"E:\")))
{
    Console.WriteLine("Drive E:/ is an optical drive")
}
```

### GetDriveStorageUnit(driveInfo)

_Available in version 1.1 and higher._

#### Definition

Gets the appropriate [`StorageUnits`](/enumerations.md#storageunits) to use depending of the total size of the drive. It returns a `StorageUnits` value.

#### Arguments

| Type     | Name        | Meaning                       |
| -------- | ----------- | ----------------------------- |
| `string` | `driveInfo` | The drive to get the unit of. |

#### Usage

```c#
using PeyrSharp.Env;

var unit = FileSys.GetDriveStorageUnit(@"C:\");

string message = unit switch
{
    StorageUnits.Gigabyte => "The drive unit is in gigabytes",
    StorageUnits.Terabyte => "The drive unit is in terabytes",
    StorageUnits.Petabyte => "The drive unit is in petabytes",
    _ => "Unknown size unit"
}

Console.WriteLine(message);
```

## Properties

### AppDataPath

#### Definition

```c#
public static string AppDataPath { get; }
```

The `AppDataPath` property gets the `%APPDATA%` path. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Env;

string appdata = FileSys.AppDataPath;
```

### CurrentAppDirectory

_Available in version 1.1 and higher._

#### Definition

```c#
public static string CurrentAppDirectory { get; }
```

The `CurrentAppDirectory` property gets the path where is located the executable file that is currently running. You can only `get` this property.

#### Usage

```c#
using PeyrSharp.Env;

string dir = FileSys.CurrentAppDirectory;
```

### DriveWithHighestFreeSpace

_Available in version 1.1 and higher._

#### Definition

```c#
public static DriveInfo DriveWithHighestFreeSpace { get; }
```

The `DriveWithHighestFreeSpace` property gets the drive with the highest free space available. You can only `get` this property.

#### Usage

```c#
using System.IO;
using PeyrSharp.Env;

DriveInfo highest = FileSys.DriveWithHighestFreeSpace;
```

### DriveWithLowestFreeSpace

_Available in version 1.1 and higher._

#### Definition

```c#
public static DriveInfo DriveWithLowestFreeSpace { get; }
```

The `DriveWithLowestFreeSpace` property gets the drive with the lowest free space available. You can only `get` this property.

#### Usage

```c#
using System.IO;
using PeyrSharp.Env;

DriveInfo lowest = FileSys.DriveWithLowestFreeSpace;
```

### SystemDrive

#### Definition

```c#
[SupportedOSPlatform("windows")]
public static DriveInfo SystemDrive { get; }
```

The `SystemDrive` property gets the system drive, where Windows is installed. You can only `get` this property.

::: danger
This property only works on Windows! It will return a default value if you run it on a different platform.
:::

#### Usage

```c#
using PeyrSharp.Env;

DriveInfo sys = FileSys.SystemDrive;
```

### CurrentDirectory

#### Definition

Gets the current directory of the application. Returns a string representing the full path of the current directory.

#### Usage

```c#
using PeyrSharp.Env;

string currentDirectory = FileSys.CurrentDirectory;
```

### ComputerName

#### Definition

Returns the name of the current computer as a `string`.

#### Usage

```c#
using PeyrSharp.Env;

string computerName = FileSys.ComputerName;
```
