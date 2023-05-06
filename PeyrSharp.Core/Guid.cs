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

using PeyrSharp.Exceptions;
using System;
using System.Security.Cryptography;
using System.Text;

namespace PeyrSharp.Core
{
	/// <summary>
	/// A class that contains method to generate a Guid.
	/// </summary>
	public static class GuidGen
	{
		/// <summary>
		/// Generates a <see cref="Guid"/>.
		/// </summary>
		/// <returns>The generated <see cref="Guid"/> in <see cref="string"/>.</returns>
		public static string Generate() => Guid.NewGuid().ToString();

		/// <summary>
		/// Generates a <see cref="Guid"/> with a specific length.
		/// </summary>
		/// <param name="length">The length of the <see cref="Guid"/> to generate.</param>
		/// <returns>The generated <see cref="Guid"/> in <see cref="string"/>.</returns>
		/// <exception cref="InvalidGuidLengthException"></exception>
		public static string Generate(int length)
		{
			if (length <= 0 || length > 32) throw new InvalidGuidLengthException("The length of a Guid must be between 0 and 32."); // Error
			return Guid.NewGuid().ToString("N")[..length]; // Return the value
		}

		/// <summary>
		/// Generates a <see cref="Guid"/> from a <see cref="string"/>.
		/// </summary>
		/// <param name="fromString">The string which will be used to generate the Guid.</param>
		/// <returns>The generated <see cref="Guid"/> in <see cref="string"/>.</returns>
		/// <exception cref="ArgumentNullException"></exception>
		public static string Generate(string fromString)
		{
			if (string.IsNullOrEmpty(fromString)) throw new ArgumentNullException("'fromString' is null or empty.");
			MD5 mD5 = MD5.Create();
			byte[] data = mD5.ComputeHash(Encoding.Default.GetBytes(fromString)); // Get the bytes
			return new Guid(data).ToString();
		}

		/// <summary>
		/// Generates a <see cref="Guid"/> from specific options.
		/// </summary>
		/// <param name="guidOptions">The options that will be used to generate the <see cref="Guid"/>.</param>
		/// <returns>The generated <see cref="Guid"/> in <see cref="string"/>.</returns>
		/// <exception cref="InvalidGuidLengthException"></exception>
		public static string Generate(GuidOptions guidOptions)
		{
			if (guidOptions.Length <= 0 || guidOptions.Length > 32) throw new InvalidGuidLengthException("The length of a Guid must be between 0 and 32."); // Error

			var guid = Guid.NewGuid();
			string guidText = "";

			if (!guidOptions.Hyphens)
			{
				guidText = guid.ToString("N")[..guidOptions.Length];
			}
			else
			{
				guidText = guid.ToString()[..guidOptions.Length];
			}

			if (guidOptions.Braces)
			{
				guidText = $"{{{guidText}}}";
			}

			if (guidOptions.UpperCaseOnly)
			{
				guidText = guidText.ToUpper();
			}
			return guidText;
		}
	}

	/// <summary>
	/// Class that contains different parameters for <see cref="Guid"/> generaton. 
	/// </summary>
	public class GuidOptions
	{
		/// <summary>
		/// Initializes default options
		/// </summary>
		public GuidOptions()
		{
			Length = 32; // Set the default value
			Hyphens = true; // Set the default value
			Braces = false; // Set the default value
			UpperCaseOnly = false; // Set the default value
		}

		/// <summary>
		/// Intitalizes Guid options.
		/// </summary>
		/// <param name="length">The length of the <see cref="Guid"/>.</param>
		/// <param name="hyphens">Include hyphens or not.</param>
		/// <param name="braces">Include braces or not.</param>
		/// <param name="upperCaseOnly">Put the generated <see cref="Guid"/> in upper case.</param>
		public GuidOptions(int length, bool hyphens, bool braces, bool upperCaseOnly)
		{
			Length = length;
			Hyphens = hyphens;
			Braces = braces;
			UpperCaseOnly = upperCaseOnly;
		}

		/// <summary>
		/// The length of the Guid to generate.
		/// </summary>
		public int Length { get; set; }

		/// <summary>
		/// Include or not hyphens, such as: <c>00000000-0000-0000-0000-00000000</c>
		/// </summary>
		public bool Hyphens { get; set; }

		/// <summary>
		/// Include or not braces, such as: <c>{00000000-0000-0000-0000-00000000}</c>
		/// </summary>
		public bool Braces { get; set; }

		/// <summary>
		/// Use only upper case if true. Uses only lower case if false.
		/// </summary>
		public bool UpperCaseOnly { get; set; }
	}
}
