# WPF

This page is about the `WpfHelpers` class available in [`PeyrSharp.UiHelpers`](../ui-helpers.md). This page is about all of its methods.

## Compatibility

WinFormsHelpers are part of the `PeyrSharp.UiHelpers` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| UiHelpers        | ✅         | ❌         | ❌             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| UiHelpers        | ✅         | ✅         | ✅             |

## Methods

### CenterWindow(window)

#### Definition

Centers a `Window` on the primary screen.

#### Arguments

| Type     | Name     | Meaning                 |
| -------- | -------- | ----------------------- |
| `Window` | `window` | The `Window` to center. |

#### Usage

```c#
using PeyrSharp.UiHelpers;

Window window = new Window();
WpfHelpers.CenterWindow(window); // Center the window on the primary screen
```
