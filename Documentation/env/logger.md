# Logger
This page is about the `Logger` class available in [`PeyrSharp.Env`](/env.md).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Logger` class is part of the `PeyrSharp.Env` module, and is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

::: warning
Some methods, classes or features of `PeyrSharp.Env` might not be available in all platforms.
:::

## Methods
### Log(message, filePath, dateTime)
#### Definition
The `Log()` method logs a specific message alongside a timestamp into a file. This method does not return a value (`void`).

::: info
You can call this method multiple times on the same file and it will append the message to it.
:::

#### Arguments

| Type       	| Name       	| Meaning                                                   	|
|------------	|------------	|-----------------------------------------------------------	|
| `string`   	| `message`  	| The message or text that needs to be logged.              	|
| `string`   	| `filePath` 	| The path where the file should be written.                	|
| `DateTime` 	| `dateTime` 	| The timestamp of the log, the time when the log was made. 	|

#### Usage

~~~ c#
using PeyrSharp.Env;

Logger.Log("Hello", @"C:\Logs\log1.txt", DateTime.Now)
// The line above will generate a file with the following content:
// [10/31/2022 09:23:18] Hello
~~~