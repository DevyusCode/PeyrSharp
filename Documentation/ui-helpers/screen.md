# Screen

This page is about the `ScreenHelpers` class available in [`PeyrSharp.UiHelpers`](../ui-helpers.md). This page is about all of its methods.

## Compatibility

ScreenHelpers are part of the `PeyrSharp.UiHelpers` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| UiHelpers        | ✅         | ❌         | ❌             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| UiHelpers        | ✅         | ✅         | ✅             |

## Methods

### GetDpi(form)

#### Definition

Gets the DPI of the screen where the Windows `Form` is located. It returns a `double` value.

#### Arguments

| Type   | Name   | Meaning                     |
| ------ | ------ | --------------------------- |
| `Form` | `form` | The form to get the DPI of. |

#### Usage

```c#
using PeyrSharp.UiHelpers;
using System;
using System.Windows.Forms;

public partial class MyForm : Form
{
    private void HandleButton(object sender, EventArgs e)
    {
        MessageBox.Show(ScreenHelpers.GetDpi(this));
    }
}
```

### GetDpi(window)

#### Definition

Gets the DPI of the screen where the `Window` is located. It returns a `double` value.

#### Arguments

| Type     | Name     | Meaning                       |
| -------- | -------- | ----------------------------- |
| `Window` | `window` | The Window to get the DPI of. |

#### Usage

```c#
using PeyrSharp.UiHelpers;
using System;
using System.Windows;

public partial class MyWindow : Window
{
    private void HandleButton(object sender, RoutedEventArgs e)
    {
        MessageBox.Show(ScreenHelpers.GetDpi(this));
    }
}
```

### GetScreenScaling(form)

#### Definition

Gets the scaling of the screen where the Windows `Form` is located. It returns a `double` value.

Possible values:

- 100
- 125
- 150
- 175
- 200

#### Arguments

| Type   | Name   | Meaning                       |
| ------ | ------ | ----------------------------- |
| `Form` | `form` | The form to get the scale of. |

#### Usage

```c#
using PeyrSharp.UiHelpers;
using System;
using System.Windows.Forms;

public partial class MyForm : Form
{
    private void HandleButton(object sender, EventArgs e)
    {
        MessageBox.Show(ScreenHelpers.GetScreenScaling(this));
    }
}
```

### GetScreenScaling(window)

#### Definition

Gets the scaling of the screen where the `Window` is located. It returns a `double` value.

Possible values:

- 100
- 125
- 150
- 175
- 200

#### Arguments

| Type     | Name     | Meaning                         |
| -------- | -------- | ------------------------------- |
| `Window` | `window` | The window to get the scale of. |

#### Usage

```c#
using PeyrSharp.UiHelpers;
using System;
using System.Windows;

public partial class MyWindow : Window
{
    private void HandleButton(object sender, RoutedEventArgs e)
    {
        MessageBox.Show(ScreenHelpers.GetScreenScaling(this));
    }
}
```
