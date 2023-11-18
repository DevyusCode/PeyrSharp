# StatusInfo

This page is about the `StatusInfo` class available in [`PeyrSharp.Core`](/core.md).
You can find here all of its methods.

## Compatibility

The `StatusInfo` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Core             | ✅         | ✅         | ✅             |

## Properties

### StatusCode

#### Definition

```c#
public int StatusCode { get; set; }
```

Gets or sets the status code that indicates the outcome of the request.

### StatusDescription

#### Definition

```c#
public string StatusDescription { get; set; }
```

Gets or sets the status description that provides a human-readable message of the status code.

### StatusType

#### Definition

```c#
public StatusCodes StatusType { get; set; }
```

Gets or sets the status type that categorizes the status code into informational, success, redirection, client error, or server error. The [`StatusCodes`](/enumerations.md#statuscodes) is an enumeration representing the type of HTTP status codes that can be returned.
