# Update
This page is about the `Update` class available in [`PeyrSharp.Env`](/env.md).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Update` class is part of the `PeyrSharp.Env` module, and is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

::: warning
Some methods, classes or features of `PeyrSharp.Env` might not be available in all platforms.
:::

## Methods
### GetLastVersionAsync(url)
#### Definition
Downloads the content of remote file as `string`. The remote file should contain the last version text. Do not provide the URL of an HTML page.

::: info
This method is asynchronous and awaitable.
:::

#### Arguments

| Type       	| Name       	| Meaning                                                   	|
|------------	|------------	|-----------------------------------------------------------	|
| `string`   	| `url`       	| Link of the file where the latest version is stored.              	|

#### Usage

~~~ c#
using PeyrSharp.Env;

private async void Main()
{
    string lastVersion = await Update.GetLastVersionAsync("https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Liens/Update%20System/LABS%20Experimental%20Console/version.txt");
    // lastVersion would be equal to the content of this text files
}
~~~

### IsAvailable(currentVersion, remoteVersion)
#### Definition
Compares two versions. Returns a `bool`.

::: info
It is recommended to use this method with the [`GetLastVersionAsync()`](#getlastversionasyncurl) one.
:::

#### Arguments

| Type       	| Name       	| Meaning                                                   	|
|------------	|------------	|-----------------------------------------------------------	|
| `string`   	| `currentVersion` | The current version of the app.              	|
| `string`   	| `removeVersion` | The latest version, stored remotely.            |

#### Usage

~~~ c#
using PeyrSharp.Env;

private async void Main()
{
    string current = "1.0";
    string last = await Update.GetLastVersionAsync("https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Liens/Update%20System/LABS%20Experimental%20Console/version.txt");

    Console.WriteLine(Update.IsAvailable(current, last)
        ? "Updates are available."
        : "You are up-to-date.");
}
~~~