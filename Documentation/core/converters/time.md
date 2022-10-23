# Time
This page is about the `Time` class available in [`PeyrSharp.Core.Converters`](/core/converters.md).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Time` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Core            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Core            	| ✅       	| ✅     	| ✅              	|

## Methods
### ToSeconds(d, timeUnits)
#### Definition
Converts a specified time unit value to seconds. For instance, you can convert days, hours or minutes to seconds. It returns a `double` value.

#### Arguments

| Type        	| Name        	| Meaning                                       	|
|-------------	|-------------	|-----------------------------------------------	|
| `double`    	| `d`         	| The time unit to convert.                     	|
| [`TimeUnits`](/enumerations.md#timeunits) 	| `timeUnits` 	| The unit of the time. (ex: minutes, hours...) 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;
using PeyrSharp.Enums;

double seconds = Time.ToSeconds(5, TimeUnits.Minutes);
// seconds = 300
~~~

### ToMinutes(d, timeUnits)
#### Definition
Converts a specified time unit value to minutes. For instance, you can convert days, hours or seconds to minutes. It returns a `double` value.

#### Arguments

| Type        	| Name        	| Meaning                                       	|
|-------------	|-------------	|-----------------------------------------------	|
| `double`    	| `d`         	| The time unit to convert.                     	|
| [`TimeUnits`](/enumerations.md#timeunits) 	| `timeUnits` 	| The unit of the time. (ex: minutes, hours...) 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;
using PeyrSharp.Enums;

double min = Time.ToMinutes(120, TimeUnits.Seconds);
// min = 2
~~~

### ToHours(d, timeUnits)
#### Definition
Converts a specified time unit value to hours. For instance, you can convert days, minutes or seconds to hours. It returns a `double` value.

#### Arguments

| Type        	| Name        	| Meaning                                       	|
|-------------	|-------------	|-----------------------------------------------	|
| `double`    	| `d`         	| The time unit to convert.                     	|
| [`TimeUnits`](/enumerations.md#timeunits) 	| `timeUnits` 	| The unit of the time. (ex: minutes, hours...) 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;
using PeyrSharp.Enums;

double hours = Time.ToHours(1, TimeUnits.Days);
// hours = 24
~~~

### ToDays(d, timeUnits)
#### Definition
Converts a specified time unit value to days. For instance, you can convert hours, minutes or seconds to days. It returns a `double` value.

#### Arguments

| Type        	| Name        	| Meaning                                       	|
|-------------	|-------------	|-----------------------------------------------	|
| `double`    	| `d`         	| The time unit to convert.                     	|
| [`TimeUnits`](/enumerations.md#timeunits) 	| `timeUnits` 	| The unit of the time. (ex: minutes, hours...) 	|

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;
using PeyrSharp.Enums;

double days = Time.ToDays(72, TimeUnits.Hours);
// days = 3
~~~