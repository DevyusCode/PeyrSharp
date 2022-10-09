# Password
This page is about the `Password` class available in PeyrSharp.Core.
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Password` class is part of the `PeyrSharp.Core` module, which is compatible in all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Methods
### GenerateAsync(length, chars, separator)
#### Definition
The `GenerateAsync()` method generates a password of a specific length, with specific characters asynchronously.

#### Arguments

| Type     	| Name         	| Meaning                                                                                 	|
|----------	|--------------	|-----------------------------------------------------------------------------------------	|
| `int`    	| `length`     	| The length of the password.                                                             	|
| `string` 	| `characters` 	| The characters that can be included in the password. Separated with a unique separator. 	|
| `string` 	| `separator`  	| The separator used to separate the specified characters.                                	|

#### Usage

~~~ c#
using PeyrSharp.Core;

private async void Main()
{
    // Generate a password with 10 characters
    string password = await Password.GenerateAsync(10, "a,b,c,d,e,f,1,2,3,4,5", ",");
}
~~~

### GenerateAsync(length, passwordPresets)
#### Definition
The `GenerateAsync()` method generates a password of a specific length, with a specific [`PasswordPresets`](../enumerations#passwordpresets) asynchronously.

#### Arguments

| Type     	| Name         	| Meaning                                                                                 	|
|----------	|--------------	|-----------------------------------------------------------------------------------------	|
| `int`    	| `length`     	| The length of the password.                                                             	|
| [`PasswordPresets`](../enumerations#passwordpresets) 	| `passwordPresets` 	| The password preset used when generating the password 	|

#### Usage

~~~ c#
using PeyrSharp.Core;
using PeyrSharp.Enums;

private async void Main()
{
    // Generate a password with 10 characters, using the Complex preset
    string password = await Password.GenerateAsync(10, PasswordPresets.Complex);
}
~~~

### GenerateAsync(amount, length, chars, separator)
#### Definition
The `GenerateAsync()` method generates a specific amount of passwords with specific lengths and characters asynchronously.

#### Arguments

| Type     	| Name         	| Meaning                                                                                 	|
|----------	|--------------	|-----------------------------------------------------------------------------------------	|
| `int`    	| `amount`     	| The amount of passwords to generate.                                                             	|
| `int`    	| `length`     	| The length of the password.                                                             	|
| `string` 	| `characters` 	| The characters that can be included in the password. Separated with a unique separator. 	|
| `string` 	| `separator`  	| The separator used to separate the specified characters.                                	|

#### Usage

~~~ c#
using System.Collections.Generic;
using PeyrSharp.Core;

private async void Main()
{
    // Generate 10 passwords with 10 characters
    List<string> passwords = await Password.GenerateAsync(10, 10, "a,b,c,d,e,f,1,2,3,4,5", ",");
}
~~~

### GenerateAsync(amount, length, passwordPresets)
#### Definition
The `GenerateAsync()` method generates a specific amount of passwords with specific lengths and [`PasswordPresets`](../enumerations#passwordpresets) asynchronously.

#### Arguments

| Type     	| Name         	| Meaning                                                                                 	|
|----------	|--------------	|-----------------------------------------------------------------------------------------	|
| `int`    	| `amount`     	| The amount of passwords to generate.                                                             	|
| `int`    	| `length`     	| The length of the password.                                                             	|
| [`PasswordPresets`](../enumerations#passwordpresets) 	| `passwordPresets` 	| The password preset used when generating the password 	|                           	|

#### Usage

~~~ c#
using System.Collections.Generic;
using PeyrSharp.Core;
using PeyrSharp.Enums;

private async void Main()
{
    // Generate 10 passwords with 10 characters with the simple preset
    List<string> passwords = await Password.GenerateAsync(10, 10, PasswordPresets.Simple);
}
~~~