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
using System.Collections.Generic;
using System.Linq;

namespace PeyrSharp.Core.Maths
{
	/// <summary>
	/// Class that contains methods related statistics and data analysis.
	/// </summary>
	public static class Stats
	{
		/// <summary>
		/// Calculates the mean (average) of a dataset.
		/// </summary>
		/// <param name="values">The dataset to calculate the mean of.</param>
		/// <returns>The mean of the dataset.</returns>
		/// <exception cref="ArgumentException">Thrown if the dataset is empty.</exception>
		public static double Mean(List<double> values)
		{
			// Check for empty input
			if (values.Count == 0)
			{
				throw new ArgumentException("Cannot calculate mean of empty dataset", "values");
			}

			// Calculate sum of values
			double sum = values.Sum();

			// Calculate mean
			double mean = sum / values.Count;

			return mean;
		}

		/// <summary>
		/// Calculates the median of a dataset.
		/// </summary>
		/// <param name="values">The dataset to calculate the median of.</param>
		/// <returns>The median of the dataset.</returns>
		/// <exception cref="ArgumentException">Thrown if the dataset is empty.</exception>
		public static double Median(List<double> values)
		{
			// Check for empty input
			if (values.Count == 0)
			{
				throw new ArgumentException("Cannot calculate median of empty dataset", "values");
			}

			// Sort values
			values.Sort();

			// Calculate median
			double median;
			int n = values.Count;
			if (n % 2 == 1)
			{
				// Odd number of elements
				median = values[n / 2];
			}
			else
			{
				// Even number of elements
				median = (values[n / 2 - 1] + values[n / 2]) / 2;
			}

			return median;
		}

		/// <summary>
		/// Calculates the mode of a dataset.
		/// </summary>
		/// <param name="values">The dataset to calculate the mode of.</param>
		/// <returns>The mode of the dataset.</returns>
		/// <exception cref="ArgumentException">Thrown if the dataset is empty.</exception>
		public static double Mode(List<double> values)
		{
			// Check for empty input
			if (values.Count == 0)
			{
				throw new ArgumentException("Cannot calculate mode of empty dataset", "values");
			}

			// Group values by frequency
			var frequencyGroups = values.GroupBy(x => x).OrderByDescending(g => g.Count());

			// Return most common value (if more than one, return first)
			return frequencyGroups.First().Key;
		}

		/// <summary>
		/// Calculates the range of a list of double numbers.
		/// </summary>
		/// <param name="numbers">The list of double numbers.</param>
		/// <returns>The range of the list of double numbers.</returns>
		/// <exception cref="ArgumentException">Thrown when the list is null or empty.</exception>
		public static double Range(this List<double> numbers)
		{
			if (numbers == null || numbers.Count == 0)
			{
				throw new ArgumentException("The list cannot be null or empty.");
			}

			double min = numbers[0];
			double max = numbers[0];

			for (int i = 1; i < numbers.Count; i++)
			{
				if (numbers[i] < min)
				{
					min = numbers[i];
				}

				if (numbers[i] > max)
				{
					max = numbers[i];
				}
			}

			return max - min;
		}
	}
}
