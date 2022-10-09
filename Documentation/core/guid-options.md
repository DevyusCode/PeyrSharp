# GuidOptions
This page is about the `GuidOptions` class available in PeyrSharp.Core.
You can find here all of its properties.

## Compatibility

The `GuidOptions` class is part of the `PeyrSharp.Core` module, which is compatible in all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Constructors
### GuidOptions()
#### Definition
Initializes `GuidOptions` with default values for its properties.

#### Usage

~~~ c#
using PeyrSharp.Core;

var options = new GuidOptions();
/*
    options:
        - Length = 32
        - Hyphens = true
        - Braces = false
        - UpperCaseOnly = false
*/
~~~

### GuidOptions(length, hyphens, braces, upperCaseOnly)
#### Definition
Initializes `GuidOptions` with specific values for its properties.

#### Usage

~~~ c#
using PeyrSharp.Core;

var options = new GuidOptions(32, true, true, true);
/*
    options:
        - Length = 32
        - Hyphens = true
        - Braces = true
        - UpperCaseOnly = true
*/
~~~

## Properties
### Length
#### Definition

~~~ c#
public int Length { get; set; }
~~~

The `Length` property is an `int` representing the length of the Guid that will be generated if used with `GuidGen.Generate()`.

::: info
This property can be initialized when using the [`GuidOptions(length, hyphens, braces, upperCaseOnly)`](#guidoptions-length-hyphens-braces-uppercaseonly) constructor.
:::

You can `get` and `set` this property after initializing the class.

### Hyphens
#### Definition

~~~ c#
public bool Hyphens { get; set; }
~~~

The `Hyphens` property is an `bool`, which will determine if you want hyphens in the Guid that will be generated if used with `GuidGen.Generate()`.

::: info
This property can be initialized when using the [`GuidOptions(length, hyphens, braces, upperCaseOnly)`](#guidoptions-length-hyphens-braces-uppercaseonly) constructor.
:::

You can `get` and `set` this property after initializing the class.

### Braces
#### Definition

~~~ c#
public bool Braces { get; set; }
~~~

The `Braces` property is an `bool`, which will determine if you want braces in the Guid that will be generated if used with `GuidGen.Generate()`.

::: info
This property can be initialized when using the [`GuidOptions(length, hyphens, braces, upperCaseOnly)`](#guidoptions-length-hyphens-braces-uppercaseonly) constructor.
:::

You can `get` and `set` this property after initializing the class.

### UpperCaseOnly
#### Definition

~~~ c#
public bool UpperCaseOnly { get; set; }
~~~

The `UpperCaseOnly` property is an `bool`, which will determine if you want to only have upper cases in the Guid that will be generated if used with `GuidGen.Generate()`.

::: info
This property can be initialized when using the [`GuidOptions(length, hyphens, braces, upperCaseOnly)`](#guidoptions-length-hyphens-braces-uppercaseonly) constructor.
:::

You can `get` and `set` this property after initializing the class.