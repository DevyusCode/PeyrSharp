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
using System.Text;
using System.Threading.Tasks;

namespace PeyrSharp.Core.Maths
{
	/// <summary>
	/// A class that contains useful algebraic methods.
	/// </summary>
	public static class Algebra
	{
		/// <summary>
		/// Makes the sum of specified <see cref="double"/> numbers.
		/// </summary>
		/// <param name="numbers">The numbers to make the sum of.</param>
		/// <returns>The sum of specifed numbers.</returns>
		public static double Sum(params double[] numbers)
		{
			double sum = 0;
			for (int i = 0; i < numbers.Length; i++)
			{
				sum += numbers[i];
			}
			return sum;
		}

		/// <summary>
		/// Makes the sum of specified <see cref="int"/> numbers.
		/// </summary>
		/// <param name="numbers">The numbers to make the sum of.</param>
		/// <returns>The sum of specifed numbers.</returns>
		public static int Sum(params int[] numbers)
		{
			int sum = 0;
			for (int i = 0; i < numbers.Length; i++)
			{
				sum += numbers[i];
			}
			return sum;
		}

		/// <summary>
		/// Checks if a number (<see cref="double"/>) can be an integer 
		/// </summary>
		/// <param name="number">The number to check.</param>
		/// <returns><see langword="true"/> if the number is an integer.</returns>
		public static bool IsInt(double number) => (int)number == number;
	}
}
