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
using System.Collections.Generic;
using System.Linq;

namespace PeyrSharp.Extensions
{
	/// <summary>
	/// Methods that extend the <see cref="int"/> type.
	/// </summary>
	public static class IntExtensions
	{
		/// <summary>
		/// Determines if the <see cref="int"/> value is even.
		/// </summary>
		/// <param name="value">The <see cref="int"/> to check.</param>
		/// <returns>A <see cref="bool"/> value.</returns>
		public static bool IsEven(this int value) => value % 2 == 0;

		/// <summary>
		/// Converts an <see cref="int"/> value to a <see cref="double"/> value.
		/// </summary>
		/// <param name="value">The <see cref="int"/> value to convert.</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double ToDouble(this int value) => Convert.ToDouble(value);

		/// <summary>
		/// Gets all divisors of a specific number.
		/// </summary>
		/// <param name="number">The number.</param>
		/// <returns>Returns an <see cref="int"/>[] array.</returns>
		public static int[] GetDivisors(this int number)
		{
			List<int> ds = new(); // Create a list

			for (int i = 1; i <= number; i++)
			{
				if (number % i == 0) // Check if the number is a divisor
				{
					ds.Add(i); // Add divisor
				}
			}

			return ds.ToArray();
		}

		/// <summary>
		/// Calculates the mean (average) of a dataset.
		/// </summary>
		/// <param name="values">The dataset to calculate the mean of.</param>
		/// <returns>The mean of the dataset.</returns>
		/// <exception cref="ArgumentException">Thrown if the dataset is empty.</exception>
		public static double Mean(this int[] values)
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
		public static double Median(this int[] values)
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

	}
}
