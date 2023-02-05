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

namespace PeyrSharp.Core.Maths
{
	/// <summary>
	/// Provides methods for working with probabilities.
	/// </summary>
	public static class Proba
	{
		/// <summary>
		/// Gets a random value based on the specified probabilities.
		/// </summary>
		/// <typeparam name="T">The type of the values to select from.</typeparam>
		/// <param name="probabilities">A dictionary containing the probability of getting each value.</param>
		/// <returns>
		/// A randomly selected value.
		/// </returns>
		/// <exception cref="ArgumentException">
		/// Thrown if the sum of probabilities is not equal to 1.
		/// </exception>
		/// <exception cref="Exception">
		/// Thrown if an unexpected error occurs while selecting a random value.
		/// </exception>
		public static T GetRandomValue<T>(Dictionary<T, double> probabilities)
		{
			double totalProbability = 0.0;
			foreach (double probability in probabilities.Values)
			{
				totalProbability += probability;
			}

			if (totalProbability != 1.0)
			{
				throw new ArgumentException("The sum of probabilities must be 1.");
			}

			double randomValue = new Random().NextDouble();
			double cumulativeProbability = 0.0;
			foreach (T value in probabilities.Keys)
			{
				cumulativeProbability += probabilities[value];
				if (randomValue < cumulativeProbability)
				{
					return value;
				}
			}

			throw new Exception("An unexpected error occurred while selecting a random value.");
		}
	}
}
