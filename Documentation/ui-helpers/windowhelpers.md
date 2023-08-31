# WindowHelpers

This page is about the `WindowHelpers` class available in [`PeyrSharp.UiHelpers`](../ui-helpers.md). This page is about all of its methods.

## Compatibility

WindowHelpers are part of the `PeyrSharp.UiHelpers` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| UiHelpers        | ✅         | ❌         | ❌             |
| **Framework**    | **.NET 5** | **.NET 6** | **.NET 7**     |
| UiHelpers        | ✅         | ✅         | ✅             |

## Methods

### GetWindows()

#### Definition

Retrieves a list of currently visible windows.

#### Returns

A list of `WindowInfo` objects representing the visible windows.

#### Usage

```c#
using PeyrSharp.UiHelpers;
using System.Collections.Generic;

public class MyWindowManager
{
    public void PrintOpenedWindows() {
        List<WindowInfo> windows = WinFormsHelpers.GetWindows();
        foreach (WindowInfo window in windows)
        {
            Console.WriteLine(window.Name);
        }
    }
}
```
