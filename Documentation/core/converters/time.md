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

::: info
This method can also be used in [`PeyrSharp.Extensions`](/extensions/double.md#toseconds-timeunits).
:::

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

::: info
This method can also be used in [`PeyrSharp.Extensions`](/extensions/double.md#tominutes-timeunits).
:::

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

::: info
This method can also be used in [`PeyrSharp.Extensions`](/extensions/double.md#tohours-timeunits).
:::

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

::: info
This method can also be used in [`PeyrSharp.Extensions`](/extensions/double.md#todays-timeunits).
:::

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

### UnixTimeToDateTime(unixTime)
#### Definition
Converts Unix Time to [`DateTime`](https://learn.microsoft.com/en-us/dotnet/api/system.datetime). It returns a `DateTime` value.

#### Arguments

| Type     	| Name          	| Meaning                                       	|
|----------	|---------------	|-----------------------------------------------	|
| `int`    	| `unixTime`    	| The Unix Time to convert.                    	|

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;

var date = Time.UnixTimeToDateTime(1670144268); // 12/04/2022 08:57:48
~~~

### DateTimeToUnixTime(dateTime)
#### Definition
Converts [`DateTime`](https://learn.microsoft.com/en-us/dotnet/api/system.datetime) to Unix Time. It returns an `int` value.

#### Arguments

| Type     	        | Name        	    | Meaning                                       	|
|---------------	|-------------	    |-----------------------------------------------	|
| `DateTime`    	| `dateTime`    	| The converted DateTime in Unix Time.             	|

#### Usage

~~~ c#
using PeyrSharp.Core.Converters;

int unix = Time.DateTimeToUnixTime(new(2022, 12, 4, 8, 57, 48, DateTimeKind.Utc)); 
// unix = 1670144268
~~~