/*
MIT License

Copyright (c) Devyus

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 
*/

using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;

namespace PeyrSharp.Core
{
	/// <summary>
	/// Methods to encrypt/decrypt <see cref="string"/>.
	/// </summary>
	public static class Crypt
	{
		/// <summary>
		/// Encrypts a <see cref="string"/> using 3-DES encryption algorithm.
		/// </summary>
		/// <param name="source">The <see cref="string"/> to encrypt.</param>
		/// <param name="key">The key that will be used to encrypt and decrypt the string.</param>
		/// <exception cref="ArgumentNullException"></exception>
		/// <returns>The encrypted content, as a <see cref="string"/>.</returns>
		public static string Encrypt3Des(string source, string key)
		{
			if (string.IsNullOrEmpty(source))
			{
				throw new ArgumentNullException(nameof(source), "The string cannot be null.");
			}

			using var tripleDESCryptoService = TripleDES.Create();
			using var hashMD5Provider = MD5.Create(); // Create MD5CryptoServiceProvider
			byte[] byteHash = hashMD5Provider.ComputeHash(Encoding.UTF8.GetBytes(key));
			tripleDESCryptoService.Key = byteHash;
			tripleDESCryptoService.Mode = CipherMode.ECB;
			byte[] data = Encoding.UTF8.GetBytes(source); // Encrypt
			return Convert.ToBase64String(tripleDESCryptoService.CreateEncryptor().TransformFinalBlock(data, 0, data.Length)); // Return the encrypted string
		}

		/// <summary>
		/// Decrypts an encrypted <see cref="string"/> using 3-DES encryption algorithm.
		/// </summary>
		/// <param name="encrypt">The encrypted <see cref="string"/>.</param>
		/// <param name="key">The key that will be used to encrypt and decrypt the string.</param>
		/// <exception cref="ArgumentNullException"></exception>
		/// <returns>The decrypted string.</returns>
		public static string Decrypt3Des(string encrypt, string key)
		{
			if (string.IsNullOrEmpty(encrypt))
			{
				throw new ArgumentNullException(nameof(encrypt), "The string cannot be null.");
			}

			using var tripleDESCryptoService = TripleDES.Create();
			using var hashMD5Provider = MD5.Create(); // Create MD5CryptoServiceProvider
			byte[] byteHash = hashMD5Provider.ComputeHash(Encoding.UTF8.GetBytes(key));
			tripleDESCryptoService.Key = byteHash;
			tripleDESCryptoService.Mode = CipherMode.ECB;
			byte[] data = Convert.FromBase64String(encrypt); // Decrypt
			return Encoding.UTF8.GetString(tripleDESCryptoService.CreateDecryptor().TransformFinalBlock(data, 0, data.Length)); // Return the decrypted string
		}

		/// <summary>
		/// Encrypts a <see cref="string"/> using RSA encryption.
		/// </summary>
		/// <param name="str">The <see cref="string"/> to encrypt.</param>
		/// <param name="rsaParameters">The RSA Key.</param>
		/// <exception cref="ArgumentNullException"></exception>
		/// <returns>The encrypted content stored inside a <see langword="byte[]"/></returns>
		public static byte[] EncryptRsa(string str, RSAParameters rsaParameters)
		{
			if (string.IsNullOrEmpty(str))
			{
				throw new ArgumentNullException(nameof(str), "The string cannot be null.");
			}

			UnicodeEncoding unicodeEncoding = new(); // Create a new UnicodeEncoding

			byte[] encryptedData;
			using (RSACryptoServiceProvider rSACryptoServiceProvider = new())
			{
				rSACryptoServiceProvider.ImportParameters(rsaParameters);
				encryptedData = rSACryptoServiceProvider.Encrypt(unicodeEncoding.GetBytes(str), false); // Encrypt
			}
			return encryptedData; // Return byte[]
		}

		/// <summary>
		/// Decrypts a <see cref="string"/> using RSA encryption.
		/// </summary>
		/// <param name="encrypted">The encrypted <see cref="string"/>.</param>
		/// <param name="rsaParameters">The RSA Key.</param>
		/// <returns>The decrypted content stored inside a <see langword="byte[]"/>.</returns>
		public static string DecryptRsa(byte[] encrypted, RSAParameters rsaParameters)
		{
			byte[] decryptedData;
			using (RSACryptoServiceProvider rSACryptoServiceProvider = new())
			{
				rSACryptoServiceProvider.ImportParameters(rsaParameters);
				decryptedData = rSACryptoServiceProvider.Decrypt(encrypted, false); // Decrypt
			}
			return Encoding.Unicode.GetString(decryptedData); // Return the content as plaintext
		}

		/// <summary>
		/// Encrypt a <see cref="string"/> using AES encryption.
		/// </summary>
		/// <param name="str">The <see cref="string"/> to encrypt.</param>
		/// <param name="key">The key.</param>
		/// <exception cref="ArgumentNullException"></exception>
		/// <returns>The encrypted content.</returns>
		public static string EncryptAes(string str, string key)
		{
			if (string.IsNullOrEmpty(str))
			{
				throw new ArgumentNullException(nameof(str), "The string cannot be null.");
			}

			byte[] IV = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 };
			int BlockSize = 128;

			byte[] bytes = Encoding.Unicode.GetBytes(str); // Convert


			SymmetricAlgorithm crypt = Aes.Create(); // Create AES
			HashAlgorithm hash = MD5.Create(); // Create MD5

			crypt.BlockSize = BlockSize; // Define block size
			crypt.Key = hash.ComputeHash(Encoding.Unicode.GetBytes(key)); // Create key
			crypt.IV = IV; // IV

			using MemoryStream memoryStream = new();
			using (CryptoStream cryptoStream = new(memoryStream, crypt.CreateEncryptor(), CryptoStreamMode.Write))
			{
				cryptoStream.Write(bytes, 0, bytes.Length);
			}

			return Convert.ToBase64String(memoryStream.ToArray()); // Convert and return
		}

		/// <summary>
		/// Decrypts a <see cref="string"/> using AES encryption.
		/// </summary>
		/// <param name="encrypted">The <see cref="string"/> to decrypt.</param>
		/// <param name="key">The key.</param>
		/// <exception cref="ArgumentNullException"></exception>
		/// <returns>The decrypted content.</returns>
		public static string DecryptAes(string encrypted, string key)
		{
			if (string.IsNullOrEmpty(encrypted))
			{
				throw new ArgumentNullException(nameof(encrypted), "The string cannot be null.");
			}

			byte[] IV = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 };

			byte[] bytes = Convert.FromBase64String(encrypted); // Convert string to byte[]

			SymmetricAlgorithm crypt = Aes.Create(); // Create AES
			HashAlgorithm hash = MD5.Create(); // Create MD5

			crypt.Key = hash.ComputeHash(Encoding.Unicode.GetBytes(key)); // Key
			crypt.IV = IV;

			using MemoryStream memoryStream = new(bytes);
			using CryptoStream cryptoStream =
			   new(memoryStream, crypt.CreateDecryptor(), CryptoStreamMode.Read);
			byte[] decryptedBytes = new byte[bytes.Length];
			cryptoStream.Read(decryptedBytes, 0, decryptedBytes.Length);

			return Encoding.Unicode.GetString(decryptedBytes); // Return
		}
	}
}
