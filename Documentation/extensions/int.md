# IntExtensions
This page is about the `IntExtensions` class available in [`PeyrSharp.Extensions`](/extensions.md).
You can find here all of its extension methods.

::: info
This class is `static`.
:::

## Compatibility

The `IntExtensions` class is part of the `PeyrSharp.Extensions` module, and is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Methods
### GetDivisors()
#### Definition

Gets all divisors of a specific number. Returns an array of `int[]`.

#### Arguments

This method does not have any arguments.

#### Usage

~~~ c#
using PeyrSharp.Extensions;

int[] divs = 16.GetDivisors(); // { 1, 2, 4, 8, 16 }
~~~

### IsEven()
#### Definition

Checks if the number is even. Returns a `bool`.

#### Arguments

This method does not have any arguments.

#### Usage

~~~ c#
using PeyrSharp.Extensions;

int[] divs = 16.IsEven(); // true
~~~

### ToDouble()
#### Definition

Converts an `int` to `double`.

#### Arguments

This method does not have any arguments.

#### Usage

~~~ c#
using PeyrSharp.Extensions;

double d = 16.ToDouble(); // 16.0d
~~~