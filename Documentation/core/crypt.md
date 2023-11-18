# Crypt

This page is about the `Crypt` class available in [`PeyrSharp.Core`](/core.md).
You can find here all of its methods.

::: info
This class is `static`.
:::

## Compatibility

The `Crypt` class is part of the `PeyrSharp.Core` module, which is compatible with all of these frameworks and platforms:

| Package/Platform | Windows    | macOS      | Linux + others |
| ---------------- | ---------- | ---------- | -------------- |
| Core             | ✅         | ✅         | ✅             |
| **Framework**    | **.NET 6** | **.NET 7** | **.NET 8**     |
| Core             | ✅         | ✅         | ✅             |

## Methods

### EncryptAes(str, key)

#### Definitions

Encrypts a `string` using AES encryption. Returns the encrypted content as a `string` as well.

#### Arguments

| Type     | Name  | Meaning                                                                         |
| -------- | ----- | ------------------------------------------------------------------------------- |
| `string` | `str` | The text to encrypt.                                                            |
| `string` | `key` | The encryption key. This is the same key that will be used to decrypt the text. |

#### Usage

```c#
using PeyrSharp.Core;

string text = "Hello, world!";
string encrypted = Crypt.EncryptAes(text, "password");
// encrypted = 8U0HRr7pCIdbvBIquiJaLc00fyBjXDb9sLflk5anIi8=
```

### EncryptRsa(str, rsaParameters)

#### Definitions

Encrypts a `string` using RSA encryption. Returns the encrypted content as an array of `byte` (`byte[]`).

#### Arguments

| Type            | Name            | Meaning              |
| --------------- | --------------- | -------------------- |
| `string`        | `str`           | The text to encrypt. |
| `RSAParameters` | `rsaParameters` | The RSA key.         |

#### Usage

```c#
using PeyrSharp.Core;
using System.Security.Cryptography;

string text = "Hello, world!";

// Create the RSA key
RSACryptoServiceProvider cryptoServiceProvider = new RSACryptoServiceProvider();

// Encrypt using RSA
string encrypted = Crypt.EncryptRsa(text, cryptoServiceProvider.ExportParameters(false));
```

### Encrypt3Des(source, key)

#### Definitions

Encrypts a `string` using AES encryption. Returns the encrypted content as a `string` as well.

#### Arguments

| Type     | Name     | Meaning                                                                         |
| -------- | -------- | ------------------------------------------------------------------------------- |
| `string` | `source` | The text to encrypt.                                                            |
| `string` | `key`    | The encryption key. This is the same key that will be used to decrypt the text. |

#### Usage

```c#
using PeyrSharp.Core;

string text = "Hello, world!";
string encrypted = Crypt.Encrypt3Des(text, "password");
// encrypted = bxceEpCfRlbyYdPggAu+Cw==
```

### DecryptAes(str, key)

#### Definitions

Decrypts a `string` using AES encryption. Returns the decrypted content as a `string` as well.

#### Arguments

| Type     | Name  | Meaning                                                         |
| -------- | ----- | --------------------------------------------------------------- |
| `string` | `str` | The text to decrypt.                                            |
| `string` | `key` | The encryption key that was used during the encryption process. |

#### Usage

```c#
using PeyrSharp.Core;

string encrypted = "6NvvTBntd2PdFxXzVbccLw==";
string text = Crypt.DecryptAes(encrypted, "password");
// text = Hello!
```

### DecryptRsa(encrypted, rsaParameters)

#### Definitions

Decrypts a `string` using AES encryption. Returns the decrypted content as a `string` as well.

#### Arguments

| Type            | Name            | Meaning                                                         |
| --------------- | --------------- | --------------------------------------------------------------- |
| `byte[]`        | `encrypted`     | The text to decrypt.                                            |
| `RSAParameters` | `rsaParameters` | The encryption key that was used during the encryption process. |

#### Usage

```c#
using PeyrSharp.Core;
using System.Security.Cryptography;

RSACryptoServiceProvider cryptoServiceProvider = new RSACryptoServiceProvider();
byte[] e = Crypt.EncryptRsa("Hello", cryptoServiceProvider.ExportParameters(false));

string decrypted = Crypt.DecryptRsa(e, cryptoServiceProvider.ExportParameters(true));
// decrypted = Hello
```

### Decrypt3Des(str, key)

#### Definitions

Decrypts a `string` using 3-DES encryption. Returns the decrypted content as a `string` as well.

#### Arguments

| Type     | Name      | Meaning                                                         |
| -------- | --------- | --------------------------------------------------------------- |
| `string` | `encrypt` | The text to decrypt.                                            |
| `string` | `key`     | The encryption key that was used during the encryption process. |

#### Usage

```c#
using PeyrSharp.Core;

string encrypted = "AvuLd4LUxRU=";
string text = Crypt.Decrypt3Des(encrypted, "123");
// text = Hello
```
