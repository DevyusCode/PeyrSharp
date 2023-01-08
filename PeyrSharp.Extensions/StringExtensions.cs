/*
MIT License

Copyright (c) Léo Corporation

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
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace PeyrSharp.Extensions
{
	/// <summary>
	/// Methods that extend the <see cref="string"/> type.
	/// </summary>
	public static class StringExtensions
	{
		/// <summary>
		/// Counts the number of words in a <see cref="string"/>.
		/// </summary>
		/// <param name="value">The <see cref="string"/> where the words should be counted.</param>
		/// <returns>A <see cref="int"/> value.</returns>
		/// <exception cref="ArgumentNullException"></exception>
		public static int CountWords(this string value)
		{
			if (value.Length <= 0) // If the length of the string is less or equal to 0
			{
				throw new ArgumentNullException("The 'value' argument cannot be null or empty"); // Error
			}

			string[] words = value.Split(new string[] { " ", ",", ";", ".", ":", "!", "?" }, StringSplitOptions.RemoveEmptyEntries); // Get all the words
			return words.Length; // Number of words
		}

		/// <summary>
		/// Counts the number of words in a <see cref="string"/>.
		/// </summary>
		/// <param name="value">The <see cref="string"/> where the words should be counted.</param>
		/// <param name="wordSeparator">The separator of the words. Example: ", ; : ! ? .  ".</param>
		/// <returns>A <see cref="int"/> value.</returns>
		/// <exception cref="ArgumentNullException"></exception>
		public static int CountWords(this string value, string[] wordSeparator)
		{
			if (value.Length <= 0) // If the length of the string is less or equal to 0
			{
				throw new ArgumentNullException("The 'value' argument cannot be null or empty"); // Error
			}

			string[] words = value.Split(wordSeparator, StringSplitOptions.RemoveEmptyEntries); // Get all the words
			return words.Length; // Number of words
		}

		/// <summary>
		/// Checks if a <see cref="string"/> is ending with the same punctuation than an other one.
		/// </summary>
		/// <param name="s">The <see cref="string"/> to check.</param>
		/// <param name="stringToCheck">The <see cref="string"/> to compare.</param>
		/// <returns>A <see cref="bool"/> value.</returns>
		public static bool EndsWithSamePunctuation(this string s, string stringToCheck) => s[^1].ToString() == stringToCheck[^1].ToString(); // Return true or false

		/// <summary>
		/// Checks if a <see cref="string"/> is ending with the same punctuation than an other one.
		/// </summary>
		/// <param name="s">The <see cref="string"/> to check.</param>
		/// <param name="stringToCheck">The <see cref="string"/> to compare.</param>
		/// <param name="punctuationToCheck">The punctuation sign to check for.</param>
		/// <returns>A <see cref="bool"/> value.</returns>
		public static bool EndsWithSamePunctuation(this string s, string stringToCheck, string punctuationToCheck) => s.EndsWith(punctuationToCheck) && stringToCheck.EndsWith(punctuationToCheck); // Return true or false

		/// <summary>
		/// Splits a <see cref="string"/> lines to an array.
		/// </summary>
		/// <param name="s">The<see cref="string"/>.</param>
		/// <returns>A <see cref="string"/>[] value.</returns>
		public static string[] SplitLines(this string s) => s.Split(new string[] { "\n", "\r", "\r\n" }, StringSplitOptions.None);

		/// <summary>
		/// Checks if a letter is being repeated in a <see cref="string"/>.
		/// </summary>
		/// <param name="s"></param>
		/// <returns>A <see cref="bool"/> value.</returns>
		public static bool HasRepeatedCharacters(this string s) => s.Where((c, i) => i >= 2 && s[i - 1] == c && s[i - 2] == c).Any();

		/// <summary>
		/// Encrypt a <see cref="string"/> using AES encryption.
		/// </summary>
		/// <param name="str">The <see cref="string"/> to encrypt.</param>
		/// <param name="key">The key.</param>
		/// <exception cref="ArgumentNullException"></exception>
		/// <returns>The encrypted content.</returns>
		public static string EncryptAes(this string str, string key)
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
		public static string DecryptAes(this string encrypted, string key)
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

		/// <summary>
		/// Returns a new <see cref="string"/> in which the characters in a specified range of the current <see cref="string"/> are converted to uppercase.
		/// </summary>
		/// <param name="str">The <see cref="string"/> to modify.</param>
		/// <param name="r">The range of characters to convert to uppercase.</param>
		/// <returns>A <see cref="string"/> that is equivalent to the current <see cref="string"/>, but with the characters in the specified range converted to uppercase.</returns>
		public static string ToUpperAt(this string str, Range r) => str[..r.Start.Value] + str.Substring(r.Start.Value, r.End.Value - r.Start.Value + 1).ToUpper() + str[(r.End.Value + 1)..];

		/// <summary>
		/// Uppercases the first letter of a string.
		/// </summary>
		/// <param name="s">The string to capitalize.</param>
		/// <returns>The input string with the first letter uppercased.</returns>
		public static string ToUpperAt(this string s) => string.IsNullOrEmpty(s) ? s : char.ToUpper(s[0]) + s[1..];

	}
}
