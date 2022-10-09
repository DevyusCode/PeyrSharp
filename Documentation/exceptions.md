# Exceptions
This page is about the exceptions available in PeyrSharp.Exceptions.
They are grouped by category.

## Compatibility

Exceptions are part of the `PeyrSharp.Exceptions` module, which is compatible in all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Exceptions            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Exceptions            	| ✅       	| ✅     	| ✅              	|

## Converters
### RGBInvalidValueException
#### Definition

The `RGBInvalidValueException` is an exception used in the `Converters` class when you provide an invalid value for a RGB color.

#### Usage

~~~ c#
using PeyrSharp.Exceptions;

throw new RGBInvalidValueException("Please provide correct RGB values.");
~~~

### HEXInvalidValueException
#### Definition

The `HEXInvalidValueException` is an exception used in the `Converters` class when you provide an invalid value for a HEX color.

#### Usage

~~~ c#
using PeyrSharp.Exceptions;

throw new HEXInvalidValueException("Please provide a correct HEX value.");
~~~

## Guid
### InvalidGuidLengthException
#### Definition

The `InvalidGuidLengthException` is an exception used in the `Guid` class when you provide an invalid value for the length of the Guid. You should provide a length between 1-32.

#### Usage

~~~ c#
using PeyrSharp.Exceptions;

// Guid length
int length = 45; // Will throw an error

if (length <= 0 || length > 32)
{
    throw new InvalidGuidLengthException("The length of a Guid must be between 1 and 32.");
}
~~~