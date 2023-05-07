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

using PeyrSharp.Enums;

namespace PeyrSharp.Core.Converters
{
	/// <summary>
	/// Storage converter methods.
	/// </summary>
	public static class Storage
	{
		/// <summary>
		/// Converts a size (kb, mb, ...) to byte.
		/// </summary>
		/// <param name="value">The size to convert.</param>
		/// <param name="storageUnit">The source <see cref="StorageUnits"/> (kb, mb...).</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double ToByte(double value, StorageUnits storageUnit) => storageUnit switch
		{
			StorageUnits.Byte => value,// Convert and return value
			StorageUnits.Kilobyte => value * 1000,// Convert and return value
			StorageUnits.Megabyte => value * 1000000,// Convert and return value
			StorageUnits.Gigabyte => value * 1000000000,// Convert and return value
			StorageUnits.Terabyte => value * 1000000000000,// Convert and return value
			StorageUnits.Petabyte => value * 1000000000000000,// Convert and return value
			_ => value,// Convert and return value
		};

		/// <summary>
		/// Converts a size (kb, mb, ...) to Kilobyte.
		/// </summary>
		/// <param name="value">The size to convert.</param>
		/// <param name="storageUnit">The source <see cref="StorageUnits"/> (kb, mb...).</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double ToKilobyte(double value, StorageUnits storageUnit) => storageUnit switch
		{
			StorageUnits.Byte => value / 1000,// Convert and return value
			StorageUnits.Kilobyte => value,// Convert and return value
			StorageUnits.Megabyte => value * 1000,// Convert and return value
			StorageUnits.Gigabyte => value * 1000000,// Convert and return value
			StorageUnits.Terabyte => value * 1000000000,// Convert and return value
			StorageUnits.Petabyte => value * 1000000000000,// Convert and return value
			_ => value,// Convert and return value
		};

		/// <summary>
		/// Converts a size (kb, mb, ...) to Megabyte.
		/// </summary>
		/// <param name="value">The size to convert.</param>
		/// <param name="storageUnit">The source <see cref="StorageUnits"/> (kb, mb...).</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double ToMegabyte(double value, StorageUnits storageUnit) => storageUnit switch
		{
			StorageUnits.Byte => value / 1000000,// Convert and return value
			StorageUnits.Kilobyte => value / 1000,// Convert and return value
			StorageUnits.Megabyte => value,// Convert and return value
			StorageUnits.Gigabyte => value * 1000,// Convert and return value
			StorageUnits.Terabyte => value * 1000000,// Convert and return value
			StorageUnits.Petabyte => value * 1000000000,// Convert and return value
			_ => value,// Convert and return value
		};

		/// <summary>
		/// Converts a size (kb, mb, ...) to Gigabyte.
		/// </summary>
		/// <param name="value">The size to convert.</param>
		/// <param name="storageUnit">The source <see cref="StorageUnits"/> (kb, mb...).</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double ToGigabyte(double value, StorageUnits storageUnit) => storageUnit switch
		{
			StorageUnits.Byte => value / 1000000000,// Convert and return value
			StorageUnits.Kilobyte => value / 1000000,// Convert and return value
			StorageUnits.Megabyte => value / 1000,// Convert and return value
			StorageUnits.Gigabyte => value,// Convert and return value
			StorageUnits.Terabyte => value * 1000,// Convert and return value
			StorageUnits.Petabyte => value * 1000000,// Convert and return value
			_ => value,// Convert and return value
		};

		/// <summary>
		/// Converts a size (kb, mb, ...) to Terabyte.
		/// </summary>
		/// <param name="value">The size to convert.</param>
		/// <param name="storageUnit">The source <see cref="StorageUnits"/> (kb, mb...).</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double ToTerabyte(double value, StorageUnits storageUnit) => storageUnit switch
		{
			StorageUnits.Byte => value / 1000000000000,// Convert and return value
			StorageUnits.Kilobyte => value / 1000000000,// Convert and return value
			StorageUnits.Megabyte => value / 1000000,// Convert and return value
			StorageUnits.Gigabyte => value / 1000,// Convert and return value
			StorageUnits.Terabyte => value,// Convert and return value
			StorageUnits.Petabyte => value * 1000,// Convert and return value
			_ => value,// Convert and return value
		};

		/// <summary>
		/// Converts a size (kb, mb, ...) to Petabyte.
		/// </summary>
		/// <param name="value">The size to convert.</param>
		/// <param name="storageUnit">The source <see cref="StorageUnits"/> (kb, mb...).</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double ToPetabyte(double value, StorageUnits storageUnit) => storageUnit switch
		{
			StorageUnits.Byte => value / 1000000000000000,// Convert and return value
			StorageUnits.Kilobyte => value / 1000000000000,// Convert and return value
			StorageUnits.Megabyte => value / 1000000000,// Convert and return value
			StorageUnits.Gigabyte => value / 1000000,// Convert and return value
			StorageUnits.Terabyte => value / 1000,// Convert and return value
			StorageUnits.Petabyte => value,// Convert and return value
			_ => value,// Convert and return value
		};

		/// <summary>
		/// Converts a number of bits to a number of bytes.
		/// </summary>
		/// <param name="n">The number of bits to convert.</param>
		/// <returns>The number of bytes equivalent to n bits.</returns>
		public static double BitsToBytes(double n) => n / 8;

		/// <summary>
		/// Converts a number of bytes to a number of bits.
		/// </summary>
		/// <param name="n">The number of bytes to convert.</param>
		/// <returns>The number of bits equivalent to n bytes.</returns>
		public static double BytesToBits(double n) => n * 8;
	}
}
