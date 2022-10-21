# WinForms
This page is about the `ScreenHelpers` class available in [`PeyrSharp.UiHelpers`](../ui-helpers.md). This page is about all of its methods.

## Compatibility

WinFormsHelpers are part of the `PeyrSharp.UiHelpers` module, which is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| UiHelpers            	| ✅       	| ❌     	| ❌              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| UiHelpers            	| ✅       	| ❌     	| ❌              	|

## Methods
### CenterControl(control, form)
#### Definition
Centers horizontally and vertically a `Control` on a `Form`.

#### Arguments

| Type      	| Name      	| Meaning                                          	|
|-----------	|-----------	|--------------------------------------------------	|
| `Control` 	| `control` 	| The control to center.                           	|
| `Form`    	| `form`    	| The form where the control needs to be centered. 	|

#### Usage

~~~ c#
using PeyrSharp.UiHelpers;
using System;
using System.Windows.Forms;

public partial class MyForm : Form
{
    private void HandleButton(object sender, EventArgs e)
    {
        Button button = (Button)sender;
        WinFormsHelpers.CenterControl(button, this);
    }
}
~~~

### CenterControl(control, form, controlAlignment)
#### Definition
Centers a `Control` on a `Form`, with a specific [`ControlAlignment`](/enumerations.md#controlalignment).

#### Arguments

| Type               	| Name               	| Meaning                                          	|
|--------------------	|--------------------	|--------------------------------------------------	|
| `Control`          	| `control`          	| The control to center.                           	|
| `Form`             	| `form`             	| The form where the control needs to be centered. 	|
| `ControlAlignment` 	| `controlAlignment` 	| The alignment of the control.                    	|

#### Usage

~~~ c#
using PeyrSharp.Enums;
using PeyrSharp.UiHelpers;
using System;
using System.Windows.Forms;

public partial class MyForm : Form
{
    private void HandleButton(object sender, EventArgs e)
    {
        Button button = (Button)sender;

        // Center the button vertically
        WinFormsHelpers.CenterControl(button, this, ControlAlignment.Vertical);
    }
}
~~~

### CenterForm(form)
#### Definition
Centers horizontally and vertically a `Form` on the screen.

#### Arguments

| Type      	| Name      	| Meaning                                          	|
|-----------	|-----------	|--------------------------------------------------	|
| `Form`    	| `form`    	| The form to center. 	|

#### Usage

~~~ c#
using PeyrSharp.UiHelpers;
using System;
using System.Windows.Forms;

public partial class MyForm : Form
{
    private void HandleButton(object sender, EventArgs e)
    {
        // Put the current form in the middle of the screen
        WinFormsHelpers.CenterForm(this); 
    }
}
~~~