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
using System;
using System.Linq;

namespace PeyrSharp.Extensions
{
	/// <summary>
	/// Methods that extend the <see cref="double"/> type.
	/// </summary>
	public static class DoubleExtensions
	{
		/// <summary>
		/// Converts to seconds a <see cref="TimeUnits"/>.
		/// </summary>
		/// <param name="d">The time unit to convert.</param>
		/// <param name="timeUnits">The unit of the time. (ex: minutes, hours...)</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double ToSeconds(this double d, TimeUnits timeUnits) => timeUnits switch
		{
			TimeUnits.Milliseconds => TimeSpan.FromMilliseconds(d).TotalSeconds,// Convert and Return the expected value
			TimeUnits.Minutes => TimeSpan.FromMinutes(d).TotalSeconds,// Convert and Return the expected value
			TimeUnits.Hours => TimeSpan.FromHours(d).TotalSeconds,// Convert and Return the expected value
			TimeUnits.Days => TimeSpan.FromDays(d).TotalSeconds,// Convert and Return the expected value
			_ => d,
		};

		/// <summary>
		/// Converts to minutes a <see cref="TimeUnits"/>.
		/// </summary>
		/// <param name="d">The time unit to convert.</param>
		/// <param name="timeUnits">The unit of the time. (ex: minutes, hours...)</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double ToMinutes(this double d, TimeUnits timeUnits) => timeUnits switch
		{
			TimeUnits.Milliseconds => TimeSpan.FromMilliseconds(d).TotalMinutes,// Convert and Return the expected value
			TimeUnits.Seconds => TimeSpan.FromSeconds(d).TotalMinutes,// Convert and Return the expected value
			TimeUnits.Hours => TimeSpan.FromHours(d).TotalMinutes,// Convert and Return the expected value
			TimeUnits.Days => TimeSpan.FromDays(d).TotalMinutes,// Convert and Return the expected value
			_ => d,
		};

		/// <summary>
		/// Converts to hours a <see cref="TimeUnits"/>.
		/// </summary>
		/// <param name="d">The time unit to convert.</param>
		/// <param name="timeUnits">The unit of the time. (ex: minutes, hours...)</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double ToHours(this double d, TimeUnits timeUnits) => timeUnits switch
		{
			TimeUnits.Milliseconds => TimeSpan.FromMilliseconds(d).TotalHours,// Convert and Return the expected value
			TimeUnits.Seconds => TimeSpan.FromSeconds(d).TotalHours,// Convert and Return the expected value
			TimeUnits.Minutes => TimeSpan.FromMinutes(d).TotalHours,// Convert and Return the expected value
			TimeUnits.Days => TimeSpan.FromDays(d).TotalHours,// Convert and Return the expected value
			_ => d,
		};

		/// <summary>
		/// Converts to days a <see cref="TimeUnits"/>.
		/// </summary>
		/// <param name="d">The time unit to convert.</param>
		/// <param name="timeUnits">The unit of the time. (ex: minutes, hours...)</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double ToDays(this double d, TimeUnits timeUnits) => timeUnits switch
		{
			TimeUnits.Milliseconds => TimeSpan.FromMilliseconds(d).TotalDays,// Convert and Return the expected value
			TimeUnits.Seconds => TimeSpan.FromSeconds(d).TotalDays,// Convert and Return the expected value
			TimeUnits.Minutes => TimeSpan.FromMinutes(d).TotalDays,// Convert and Return the expected value
			TimeUnits.Hours => TimeSpan.FromHours(d).TotalDays,// Convert and Return the expected value
			_ => d,
		};

		/// <summary>
		/// Converts a size (kb, mb, ...) to byte.
		/// </summary>
		/// <param name="value">The size to convert.</param>
		/// <param name="storageUnit">The source <see cref="StorageUnits"/> (kb, mb...).</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double ToByte(this double value, StorageUnits storageUnit) => storageUnit switch
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
		public static double ToKilobyte(this double value, StorageUnits storageUnit) => storageUnit switch
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
		public static double ToGigabyte(this double value, StorageUnits storageUnit) => storageUnit switch
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
		public static double ToTerabyte(this double value, StorageUnits storageUnit) => storageUnit switch
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
		public static double ToPetabyte(this double value, StorageUnits storageUnit) => storageUnit switch
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
		/// Converts a <see cref="double"/> value to an <see cref="int"/> value.
		/// </summary>
		/// <param name="d">The <see cref="double"/> to convert.</param>
		/// <returns>An <see cref="int"/> value.</returns>
		public static int ToInt(this double d) => (int)Math.Round(d);

		/// <summary>
		/// Calculates the mean (average) of a dataset.
		/// </summary>
		/// <param name="values">The dataset to calculate the mean of.</param>
		/// <returns>The mean of the dataset.</returns>
		/// <exception cref="ArgumentException">Thrown if the dataset is empty.</exception>
		public static double Mean(this double[] values)
		{
			// Check for empty input
			if (values.Length == 0)
			{
				throw new ArgumentException("Cannot calculate mean of empty dataset", "values");
			}

			// Calculate sum of values
			double sum = values.Sum();

			// Calculate mean
			double mean = sum / values.Length;

			return mean;
		}

		/// <summary>
		/// Calculates the median of a dataset.
		/// </summary>
		/// <param name="values">The dataset to calculate the median of.</param>
		/// <returns>The median of the dataset.</returns>
		/// <exception cref="ArgumentException">Thrown if the dataset is empty.</exception>
		public static double Median(this double[] values)
		{
			// Check for empty input
			if (values.Length == 0)
			{
				throw new ArgumentException("Cannot calculate median of empty dataset", "values");
			}

			// Sort values
			var list = values.ToList();
			list.Sort();

			// Calculate median
			double median;
			int n = list.Count;
			if (n % 2 == 1)
			{
				// Odd number of elements
				median = list[n / 2];
			}
			else
			{
				// Even number of elements
				median = (list[n / 2 - 1] + list[n / 2]) / 2;
			}

			return median;
		}

		/// <summary>
		/// Calculates the mode of a dataset.
		/// </summary>
		/// <param name="values">The dataset to calculate the mode of.</param>
		/// <returns>The mode of the dataset.</returns>
		/// <exception cref="ArgumentException">Thrown if the dataset is empty.</exception>
		public static double Mode(this double[] values)
		{
			// Check for empty input
			if (values.Length == 0)
			{
				throw new ArgumentException("Cannot calculate mode of empty dataset", "values");
			}

			// Group values by frequency
			var frequencyGroups = values.GroupBy(x => x).OrderByDescending(g => g.Count());

			// Return most common value (if more than one, return first)
			return frequencyGroups.First().Key;
		}
	}
}
