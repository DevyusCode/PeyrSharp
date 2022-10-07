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

namespace PeyrSharp.Core.Maths
{
	/// <summary>
	/// A class that contains useful methods to increase or decrease a value by a specific percentage.
	/// </summary>
	public static class Percentages
	{
		/// <summary>
		/// Increases a value by a specific percentage.
		/// </summary>
		/// <param name="value">The value to increase.</param>
		/// <param name="increaseRate">The evolution rate, in the following format: <c>x/100d</c></param>
		/// <returns>The value after the increase.</returns>
		public static double IncreaseBy(double value, double increaseRate) => (1 + increaseRate) * value;

		/// <summary>
		/// Decreases a value by a specific percentage.
		/// </summary>
		/// <param name="value">The value to decrease.</param>
		/// <param name="decreaseRate">The evolution rate, in the following format: <c>x/100d</c></param>
		/// <returns>The value after the decrease.</returns>
		public static double DecreaseBy(double value, double decreaseRate) => (decreaseRate >= 0)
			? (1 - decreaseRate) * value
			: IncreaseBy(value, decreaseRate);

		/// <summary>
		/// Gets the coefficient to get back to the original value after a percentage increase/decrease.
		/// </summary>
		/// <param name="evolutionRate">The evolution rate to get the inverse of.</param>
		/// <returns>The reversed evolution rate.</returns>
		public static double GetInvertedEvolutionRate(double evolutionRate) => 1 / (1 + evolutionRate) - 1;

		/// <summary>
		/// Formats a proportion to a string.
		/// </summary>
		/// <param name="proportion">The proportion to get the percentage of.</param>
		/// <returns>A formatted <see cref="string"/> in the following format: x%.</returns>
		public static string ProportionToPercentageString(double proportion) => $"{proportion * 100}%";
	}
}
