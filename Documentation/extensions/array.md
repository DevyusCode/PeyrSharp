# ArrayExtensions
This page is about the `ArrayExtensions` class available in [`PeyrSharp.Extensions`](/extensions.md).
You can find here all of its extension methods.

::: info
This class is `static`.
:::

## Compatibility

The `ArrayExtensions` class is part of the `PeyrSharp.Extensions` module, and is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Methods
### Append(item)
#### Definition
The `Append<T>()` method adds an item to an existing array of any type. It returns an array of the chosen type (`T[]`).

#### Arguments

| Type     	| Name   	| Meaning                          	|
|----------	|--------	|----------------------------------	|
| `T` 	    | `item` 	| The item to append in the array. 	|

#### Usage

~~~ c#
using PeyrSharp.Extensions;

int[] numbers = { 1, 2, 3, 4 };
int[] appendNumbers = numbers.Append(5);
// appendNumbers: { 1, 2, 3, 4, 5 }
~~~

### Append(items)
#### Definition
The `Append<T>()` method adds multiple items to an existing array of any type. It returns an array of the chosen type (`T[]`).

#### Arguments

| Type     	    | Name   	| Meaning                          	    |
|-----------	|--------	|----------------------------------	    |
| `params T[]` 	| `items` 	| The items to append in the array. 	|

#### Usage

~~~ c#
using PeyrSharp.Extensions;

int[] numbers = { 1, 2, 3, 4 };
int[] appendNumbers = numbers.Append(5, 6);
// appendNumbers: { 1, 2, 3, 4, 5, 6 }
~~~

### RemoveElement(item)
#### Definition
The `RemoveElement<T>()` method removes an item from an array. It returns an array of the chosen type (`T[]`).

#### Arguments

| Type     	| Name   	| Meaning                          	    |
|----------	|--------	|----------------------------------	    |
| `T` 	    | `item` 	| The item to remove from the array. 	|

#### Usage

~~~ c#
using PeyrSharp.Extensions;

int[] numbers = { 1, 2, 3, 4, 5 };
int[] remove = numbers.RemoveItem(5);
// remove: { 1, 2, 3, 4 }
~~~

### RemoveElement(items)
#### Definition
The `RemoveElement<T>()` method removes multiple items from an array. It returns an array of the chosen type (`T[]`).

#### Arguments

| Type          	| Name   	| Meaning                          	    |
|---------------	|--------	|----------------------------------	    |
| `params T[]` 	    | `items` 	| The items to remove from the array. 	|

#### Usage

~~~ c#
using PeyrSharp.Extensions;

int[] numbers = { 1, 2, 3, 4, 5 };
int[] remove = numbers.RemoveItem(5);
// remove: { 1, 2, 3, 4 }
~~~