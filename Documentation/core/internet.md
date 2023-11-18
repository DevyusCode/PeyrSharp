# Internet

This page is about the `Internet` class available in [`PeyrSharp.Core`](/core.md).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Internet` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Core             | ✅         | ✅         | ✅             |

## Methods

### IsAvailableAsync()

#### Definition

Checks if a connection to the Internet is available. Returns a `bool` value.

::: info
This method is asynchronous and awaitable.
:::

#### Arguments

This method has no arguments

#### Usage

```c#
using PeyrSharp.Core;

public static async void Main()
{
    bool isConnected = await Internet.IsAvailableAsync();
}
```

### IsAvailableAsync(url)

#### Definition

Checks if a connection to the Internet is available. Returns a `bool` value.

::: info
This method is asynchronous and awaitable.
:::

#### Arguments

| Type     | Name  | Meaning                                           |
| -------- | ----- | ------------------------------------------------- |
| `string` | `url` | The page where to check if Internet is available. |

#### Usage

```c#
using PeyrSharp.Core;

public static async void Main()
{
    bool isConnected = await Internet.IsAvailableAsync("https://google.com");
}
```

### GetStatusCodeAsync(url)

#### Definition

Gets the status code of a specific page by making a request to it. Returns the status code as an `int` value.

::: info
This method is asynchronous and awaitable.
:::

#### Arguments

| Type     | Name  | Meaning                            |
| -------- | ----- | ---------------------------------- |
| `string` | `url` | The URL where to send the request. |

#### Usage

```c#
using PeyrSharp.Core;

public static async void Main()
{
    int status = await Internet.GetStatusCodeAsync("https://google.com");
    // status should be 200 if everything is working
}
```

### GetStatusDescriptionAsync(url)

#### Definition

Gets the status description of a specific page by making a request to it. Returns the status description as a `string`.

::: info
This method is asynchronous and awaitable.
:::

#### Arguments

| Type     | Name  | Meaning                            |
| -------- | ----- | ---------------------------------- |
| `string` | `url` | The URL where to send the request. |

#### Usage

```c#
using PeyrSharp.Core;

public static async void Main()
{
    string status = await Internet.GetStatusDescriptionAsync("https://google.com");
    // status should be OK if everything is working
}
```

### GetStatusInfoAsync(url)

#### Definition

This method sends an HTTP GET request to a given URL and returns a `Task` of [`StatusInfo`](/core/statusinfo.md) object that contains the status code, description, and type of the URL. The HTTP request method used is `HttpClient.GetAsync()`.

#### Arguments

| Type     | Name  | Meaning                              |
| -------- | ----- | ------------------------------------ |
| `string` | `url` | The URL to get the status info from. |

#### Returns

A `Task` of [`StatusInfo`](/core/statusinfo.md) object containing the status code, description, and type of the URL.

#### Usage

```c#
using PeyrSharp.Core;

StatusInfo statusInfo = await Internet.GetStatusInfoAsync("https://www.google.com");
```

### GetStatusCodeType(statusCode)

#### Definition

Gets the type of the status code. Returns a [`StatusCodes`](/enumerations.md#statuscodes) value.

#### Arguments

| Type  | Name         | Meaning                     |
| ----- | ------------ | --------------------------- |
| `int` | `statusCode` | The status code to analyze. |

#### Usage

```c#
using PeyrSharp.Core;
using PeyrSharp.Enums;

public static async void Main()
{
    int status = await Internet.GetStatusCodeAsync("https://google.com");
    switch (Internet.GetStatusCodeType(status))
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
}
```

### GetUrlProtocol(url)

#### Definition

Gets the protocol of a specified URL. Returns a `string`.

#### Arguments

| Type     | Name  | Meaning                 |
| -------- | ----- | ----------------------- |
| `string` | `url` | The URL where to parse. |

::: warning
If you provide an invalid URL, the result might be wrong or be something unexpected. An `IndexOutOfRangeException` can also be thrown.
:::

#### Usage

```c#
using PeyrSharp.Core;

string protocol = Internet.GetUrlProtocol("https://leocorporation.dev");
// protocol = https
```

### IsUrlValid(url)

#### Definition

Checks if a URL is valid or not.. Returns a `bool`.

#### Arguments

| Type     | Name  | Meaning                 |
| -------- | ----- | ----------------------- |
| `string` | `url` | The URL where to check. |

::: info
If you haven't specified the protocol in the URL (ex: "https://"), the `"https://"` string will automatically be appended to the original URL. To avoid this behavior, please specify a full URL to preserve the original protocol.
:::

#### Usage

```c#
using PeyrSharp.Core;

bool valid = Internet.GetUrlProtocol("a/test");
// valid = false
```
