# GuidGen
This page is about the `GuidGen` class available in PeyrSharp.Core.
You can find here all of its methods and properties.

::: info
This class is `static`.
:::

## Compatibility

The `GuidGen` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Methods
### Generate()
#### Definition
The `Generate()` method generates a Guid and will return it as a `string`.

::: info
This method has different overloads.
:::

#### Arguments
This method has no arguments.

#### Usage

~~~ c#
using PeyrSharp.Core;

string guid = GuidGen.Generate();
// guid = 7992acdd-1c9a-4985-92df-04599d560bbc (example)
~~~

### Generate(length)
#### Definition
The `Generate()` method generates a Guid with a specific length and will return it as a `string`.

::: info
This method is an overload of [`Generate()`](#generate)
:::

#### Arguments
This method has one argument:

| Type  	| Name     	| Meaning                 	|
|-------	|----------	|-------------------------	|
| `int` 	| `length` 	| The length of the Guid. 	|

::: warning
The `length` must be a number, otherwise, it will thrown a [`InvalidGuidLengthException`](../exceptions#invalidguidlengthexception).
:::

#### Usage

~~~ c#
using PeyrSharp.Core;

string guid = GuidGen.Generate(15);
// guid = 5693ad99881e4f9 (example)
~~~

### Generate(fromString)
#### Definition
The `Generate()` method generates a Guid from a specific `string` and will return it as a `string`.

::: info
This method is an overload of [`Generate()`](#generate)
:::

#### Arguments
This method has one argument:

| Type  	| Name     	| Meaning                 	|
|-------	|----------	|-------------------------	|
| `string` 	| `fromString` 	| The string which will be used to generate the Guid. 	|

#### Usage

~~~ c#
using PeyrSharp.Core;

string guid = GuidGen.Generate("Hello");
// guid = 53991a8b-61c4-9612-a827-abf8c47804d7
~~~

### Generate(guidOptions)
#### Definition
The `Generate()` method generates a Guid with specific [`GuidOptions`](/core/guid-options) and will return it as a `string`.

::: info
This method is an overload of [`Generate()`](#generate)
:::

#### Arguments
This method has one argument:

| Type  	| Name     	| Meaning                 	|
|-------	|----------	|-------------------------	|
| [`GuidOptions`](/core/guid-options) 	| `guidOptions` 	| The options of the Guid to generate. 	|

#### Usage

~~~ c#
using PeyrSharp.Core;

string guid = Guid.Generate(new GuidOptions(32, true, true, false));
// guid = {35c3ab90-7636-4d34-a439-bc65eb3c} (example)
~~~