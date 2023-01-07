# StringExtensions
This page is about the `StringExtensions` class available in [`PeyrSharp.Extensions`](/extensions.md).
You can find here all of its extension methods.

::: info
This class is `static`.
:::

## Compatibility

The `StringExtensions` class is part of the `PeyrSharp.Extensions` module, and is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Extensions            	| ✅       	| ✅     	| ✅              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Extensions            	| ✅       	| ✅     	| ✅              	|

## Methods
### CountWords()
#### Definition
Counts the number of words in a `string`. Returns `int`.

#### Arguments

This method has no arguments.

#### Usage

~~~ c#
using PeyrSharp.Extensions;

int numberOfWords = "Hello, this is a test sentence!".CountWords();
// numberOfWords = 6
~~~

### CountWords(wordSeparator)
#### Definition
Counts the number of words in a `string`, with specified word separators. By default, the method uses those (if you don't pass any argument to it): ` `, `,`, `;`, `.`, `:`, `!`, `?`. Returns `int`.

#### Arguments

| Type       	| Name            	| Meaning                     	|
|------------	|-----------------	|-----------------------------	|
| `string[]` 	| `wordSeparator` 	| The separator of the words. 	|

#### Usage

~~~ c#
using PeyrSharp.Extensions;

string[] wordSeparator = { " ", ",", ":", "!", "?", ";", "." };
int numberOfWords = "Hello, this is a test sentence!".CountWords(wordSeparator);
// numberOfWords = 6
~~~

### EndsWithSamePunctuation(stringToCheck)
#### Definition
Checks if a `string` is ending with the same punctuation than an other one. Returns a `bool`; `true` if it is the case.

#### Arguments

| Type     	| Name            	| Meaning                	|
|----------	|-----------------	|------------------------	|
| `string` 	| `stringToCheck` 	| The string to compare. 	|

#### Usage

~~~ c#
using PeyrSharp.Extensions;

string a = "This is a test sentence.";
string b = "This is an another test sentence.";

a.EndsWithSamePunctuation(b); // true
~~~

### EndsWithSamePunctuation(stringToCheck, punctuationToCheck)
#### Definition
Checks if a `string` is ending with the same **specified** punctuation than an other one. Returns a `bool`; `true` if it is the case.

#### Arguments

| Type     	| Name              	| Meaning                	            |
|----------	|-------------------	|-----------------------------------	|
| `string` 	| `stringToCheck`   	| The string to compare.            	|
| `string` 	| `punctuationToCheck` 	| The punctuation sign to check for. 	|

#### Usage

~~~ c#
using PeyrSharp.Extensions;

string a = "This is a test sentence.";
string b = "This is an another test sentence.";

a.EndsWithSamePunctuation(b, "."); // true
~~~

### EncryptAes(key)
#### Definitions
Encrypts a `string` using AES encryption. Returns the encrypted content as a `string` as well.

#### Arguments

| Type     	| Name    	| Meaning                                                                         	|
|----------	|---------	|---------------------------------------------------------------------------------	|
| `string` 	| `key`   	| The encryption key. This is the same key that will be used to decrypt the text. 	|

#### Usage

~~~ c#
using PeyrSharp.Core;

string encrypted = "Hello!".EncryptAes("password");
// encrypted = 6NvvTBntd2PdFxXzVbccLw==
~~~

### DecryptAes(key)
#### Definitions
Decrypts a `string` using AES encryption. Returns the decrypted content as a `string` as well.

#### Arguments

| Type     	| Name    	| Meaning                                                                         	|
|----------	|---------	|---------------------------------------------------------------------------------	|
| `string` 	| `key`   	| The encryption key that was used during the encryption process. 	|

#### Usage

~~~ c#
using PeyrSharp.Core;

string text = "6NvvTBntd2PdFxXzVbccLw==".DecryptAes("password");
// text = Hello!
~~~

### HasRepeatedCharacters()
#### Definition
Checks if a letter or character is being repeated in a `string`. Returns `bool`.

::: info
Only returns `true` if a character is repeated more than three times. For instance, "11" will return `false`, whereas "aaaa" will return `true`.
:::

#### Arguments

This methods has no arguments.

#### Usage

~~~ c#
using PeyrSharp.Extensions;

"111".HasRepeatedCharacters(); // true
~~~

### SplitLines()
#### Definition
Splits a `string` lines to an array. Returns `string[]`.

::: info
The method uses the `string.Split()` method under the hood, which means that it is providing it the following separators: `\n`, `\r`, `\r\n`.
:::

#### Arguments

This methods has no arguments.

#### Usage

~~~ c#
using PeyrSharp.Extensions;

string[] lines = "Hello\nWorld".SplitLines();
// lines = { "Hello", "World" }
~~~