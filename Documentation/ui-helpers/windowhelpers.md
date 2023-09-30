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

### CloseWindow(windowInfo)

#### Definition

Closes a window.

#### Arguments

| Type         | Name         | Meaning              |
| ------------ | ------------ | -------------------- |
| `WindowInfo` | `windowInfo` | The window to close. |

#### Usage

```c#
using PeyrSharp.UiHelpers;
using System.Linq;

var ws = WindowHelpers.GetWindows();
var w = ws.Where(x => x.ClassName == "Notepad").First();
WindowHelpers.CloseWindow(w)
```

### MaximizeWindow(windowInfo)

#### Definition

Maximizes a window.

#### Arguments

| Type         | Name         | Meaning                 |
| ------------ | ------------ | ----------------------- |
| `WindowInfo` | `windowInfo` | The window to maximize. |

#### Usage

```c#
using PeyrSharp.UiHelpers;
using System.Linq;

var ws = WindowHelpers.GetWindows();
var w = ws.Where(x => x.ClassName == "Notepad").First();
WindowHelpers.MaximizeWindow(w)
```

### RestoreWindow(windowInfo)

#### Definition

Restores a window.

#### Arguments

| Type         | Name         | Meaning                |
| ------------ | ------------ | ---------------------- |
| `WindowInfo` | `windowInfo` | The window to restore. |

#### Usage

```c#
using PeyrSharp.UiHelpers;
using System.Linq;

var ws = WindowHelpers.GetWindows();
var w = ws.Where(x => x.ClassName == "Notepad").First();
WindowHelpers.RestoreWindow(w)
```

### MinimizeWindow(windowInfo)

#### Definition

Minimizes a window.

#### Arguments

| Type         | Name         | Meaning                 |
| ------------ | ------------ | ----------------------- |
| `WindowInfo` | `windowInfo` | The window to minimize. |

#### Usage

```c#
using PeyrSharp.UiHelpers;
using System.Linq;

var ws = WindowHelpers.GetWindows();
var w = ws.Where(x => x.ClassName == "Notepad").First();
WindowHelpers.MinimizeWindow(w)
```

### MoveWindow(windowInfo, x, y)

#### Definition

Moves a window to specified coordinates.

#### Arguments

| Type         | Name         | Meaning                 |
| ------------ | ------------ | ----------------------- |
| `WindowInfo` | `windowInfo` | The window to move.     |
| `int`        | `x`          | The X-axis coordinates. |
| `int`        | `y`          | The Y-axis coordinates. |

#### Usage

```c#
using PeyrSharp.UiHelpers;

WindowHelpers.MoveWindow(w, 100, 200); // w is a WindowInfo object, see previous examples.
```

### SetTopMost(windowInfo, isTopMost)

#### Definition

Sets the Topmost property of a window.

#### Arguments

| Type         | Name         | Meaning                            |
| ------------ | ------------ | ---------------------------------- |
| `WindowInfo` | `windowInfo` | The window to target.              |
| `bool`       | `isTopMost`  | The value of the TopMost property. |

::: info Note
The `isTopMost` parameter can be set to `true` if the window should always stay on top; `false` otherwise.
:::

#### Usage

```c#
using PeyrSharp.UiHelpers;
WindowHelpers.SetTopMost(w, true)
```

### GetWindowSize(windowInfo)

#### Definition

Gets the width and height of a window. It returns a tuple of integers representing the width and height of the window.

#### Arguments

| Type         | Name         | Meaning                        |
| ------------ | ------------ | ------------------------------ |
| `WindowInfo` | `windowInfo` | The window to get the size of. |

#### Exceptions

| Type                        | Description                               |
| --------------------------- | ----------------------------------------- |
| `InvalidOperationException` | Thrown if failed to retrieve window size. |

#### Usage

```c#
using PeyrSharp.UiHelpers;

var size = WindowHelpers.GetWindowSize(w); // w is a WindowInfo object, see previous examples.
Console.WriteLine($"Width: {size.Item1}, Height: {size.Item2}");
```
