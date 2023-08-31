# WindowInfo

This page is about the `WindowInfo` class available in [`PeyrSharp.UiHelpers`](../ui-helpers.md).
It represents information about a window.

## Compatibility

The `WindowInfo` class is part of the `PeyrSharp.UiHelpers` module, and is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Env              | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 5** | **.NET 6** | **.NET 7**     |
| Env              | ✅         | ✅         | ✅             |

::: warning
Some methods, classes or features of `PeyrSharp.UiHelpers` might not be available in all platforms.
:::

## Properties

### Handle

#### Definition

```c#
public IntPtr Handle { get; set; }
```

Gets or sets the handle of the window.

#### Usage

```c#
// Create a new WindowInfo object
WindowInfo windowInfo = windowInfos[0]; // Assuming you have used the GetWindows() method.

// Get the handle of the window
Console.WriteLine(windowInfo.Handle); // Output: 123456
```

### Name

#### Definition

```c#
public string Name { get; set; }
```

Gets or sets the name of the window.

#### Usage

```c#
// Create a new WindowInfo object
WindowInfo windowInfo = new WindowInfo();

// Set the name of the window
windowInfo.Name = "MyWindow";

// Get the name of the window
Console.WriteLine(windowInfo.Name); // Output: MyWindow

```

### ClassName

#### Definition

```c#
public string ClassName { get; set; }
```

Gets or sets the class name of the window.

#### Usage

```c#
// Create a new WindowInfo object
WindowInfo windowInfo = new WindowInfo();

// Set the class name of the window
windowInfo.ClassName = "MyWindowClass";

// Get the class name of the window
Console.WriteLine(windowInfo.ClassName); // Output: MyWindowClass
```
