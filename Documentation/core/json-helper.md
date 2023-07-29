# JsonHelper

This page is about the `JsonHelper` class available in PeyrSharp.Core.
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `JsonHelper` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 5** | **.NET 6** | **.NET 7**     |
| Core             | ✅         | ✅         | ✅             |

## Methods

### LoadFromJson\<T>(fileName)

#### Definition

The `LoadFromJson<T>()` method loads an object from a JSON file.

#### Type Parameters

| Type | Meaning                         |
| ---- | ------------------------------- |
| `T`  | The type of the object to save. |

#### Arguments

| Type     | Name       | Meaning                            |
| -------- | ---------- | ---------------------------------- |
| `string` | `fileName` | The name of the file to load from. |

#### Returns

The object loaded from the file.

#### Usage

```c#
using PeyrSharp.Core;
using System.IO;
using System.Text.Json;

// Load the person from the JSON file
Person person = JsonHelper.LoadFromJson<Person>("person.json");

// Print the person's name and age
Console.WriteLine($"Name: {person.Name}, Age: {person.Age}");
```

### SaveAsJson\<T>(obj, fileName)

#### Definition

The `SaveAsJson()` method saves an object as a JSON file.

#### Type Parameters

| Type | Meaning                         |
| ---- | ------------------------------- |
| `T`  | The type of the object to save. |

#### Arguments

| Type     | Name       | Meaning                          |
| -------- | ---------- | -------------------------------- |
| `T`      | `obj`      | The object to save.              |
| `string` | `fileName` | The name of the file to save to. |

#### Usage

```c#
using PeyrSharp.Core;
using System.IO;
using System.Text.Json;

public static void Main()
{
    // Create an object to save
    MyObject obj = new MyObject();

    // Save the object as a JSON file
    JsonHelper.SaveAsJson(obj, "output.json");
}

public class MyObject
{
    public string Name { get; set; }
    public int Age { get; set; }
}
```
