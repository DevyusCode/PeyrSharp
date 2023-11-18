# UwpApp

This page is about the `UwpApp` class available in [`PeyrSharp.Env`](/env.md).
It Represents a simplified version of a UWP app object.

## Compatibility

The `UwpApp` class is part of the `PeyrSharp.Env` module, and is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Env              | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Env              | ✅         | ✅         | ✅             |

::: warning
Some methods, classes or features of `PeyrSharp.Env` might not be available in all platforms.
:::

## Properties

### Name

#### Definition

```c#
public static string Name { get; init; }
```

The name of the UWP app.

#### Usage

```c#
// Create a UwpApp object
UwpApp uwpApp = new UwpApp("MyApp", "com.example.myapp");

// Access the properties of the UwpApp object
Console.WriteLine(uwpApp.Name); // Output: MyApp
```

### AppID

#### Definition

```c#
public static string Name { get; init; }
```

The App ID in the Package Family Name property.

#### Usage

```c#
// Create a UwpApp object
UwpApp uwpApp = new UwpApp("MyApp", "com.example.myapp");

// Access the properties of the UwpApp object
Console.WriteLine(uwpApp.AppID); // Output: com.example.myapp
```
