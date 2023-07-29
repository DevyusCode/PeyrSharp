# XmlHelper

This page is about the `XmlHelper` class available in PeyrSharp.Core.
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `XmlHelper` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 5** | **.NET 6** | **.NET 7**     |
| Core             | ✅         | ✅         | ✅             |

## Methods

### LoadFromXml\<T>(path)

#### Definition

The `LoadFromXml()` method loads an object of type T from an XML file at the specified path. If the file does not exist, a new instance of type T will be created and saved to the file using the `SaveToXml()` method before returning it.

#### Type Parameters

| Type | Description                     |
| ---- | ------------------------------- |
| `T`  | The type of object to be saved. |

#### Parameters

| Type     | Name   | Meaning                                     |
| -------- | ------ | ------------------------------------------- |
| `string` | `path` | The path of the XML file to load or create. |

#### Returns

- The loaded object of type T if the file exists and can be deserialized successfully.
- A new instance of type T if the file does not exist and can be created and saved successfully.
- `null` if an exception occurs during loading or saving.

#### Exceptions

- `Exception`: If an error occurs during the loading or saving process.

#### Usage

```csharp
using PeyrSharp.Core;
using System;
using System.IO;
using System.Xml.Serialization;

private static void Main()
{
    string path = "path/to/xml/file.xml";

    // Load an object from the XML file
    MyObject obj = XmlHelper.LoadFromXml<MyObject>(path);

    if (obj != null)
    {
        // Object loaded successfully
        Console.WriteLine("Object loaded: " + obj.ToString());
    }
    else
    {
        // Error occurred during loading or saving
        Console.WriteLine("Failed to load object.");
    }
}

// Example class for serialization
public class MyObject
{
    public string Name { get; set; }
    public int Age { get; set; }

    public override string ToString()
    {
        return $"Name: {Name}, Age: {Age}";
    }
}
```

### SaveToXml\<T>(obj, path)

#### Definition

The `SaveToXml()` method saves an object of type T to an XML file at the specified path.

#### Type Parameters

| Type | Description                     |
| ---- | ------------------------------- |
| `T`  | The type of object to be saved. |

#### Arguments

| Type     | Name   | Description                                  |
| -------- | ------ | -------------------------------------------- |
| `T`      | `obj`  | The object to be saved.                      |
| `string` | `path` | The path of the XML file to save the object. |

#### Returns

- `bool`: `true` if the object is successfully serialized and saved to the file; otherwise, `false`.

#### Usage

```csharp
using PeyrSharp.Core;
using System.Xml.Serialization;
using System.IO;

public class MyClass
{
    public int MyProperty { get; set; }
}

public class Program
{
    private static void Main()
    {
        MyClass myObject = new MyClass { MyProperty = 123 };

        // Save the object to an XML file
        bool success = XmlHelper.SaveToXml(myObject, "path/to/file.xml");
    }
}
```
