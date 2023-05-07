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

namespace PeyrSharp.Core.Maths
{
	/// <summary>
	/// Class that contaains trigonometry-related methods and functions.
	/// </summary>
	public static class Trigonometry
	{
		/// <summary>
		/// Calculates the opposed side of an angle from another side of a triangle.
		/// </summary>
		/// <param name="triangleSide">The side of triangle.</param>
		/// <param name="angle">The angle of the triangle.</param>
		/// <param name="value">The length of the triangle side.</param>
		/// <returns>The opposed side of a specific angle.</returns>
		/// <exception cref="Exception"></exception>
		public static double GetOpposedSideFrom(TriangleSides triangleSide, double angle, double value)
		{
			if (triangleSide == TriangleSides.Opposed) throw new Exception("Please provide another value for triangleSide");

			return triangleSide switch
			{
				TriangleSides.Hypotenuse => Math.Sin(angle) * value,
				TriangleSides.Adjacent => Math.Tan(angle) * value,
				_ => double.NaN
			};
		}

		/// <summary>
		/// Calculates the adjacent side of an angle from another side of a triangle.
		/// </summary>
		/// <param name="triangleSide">The side of triangle.</param>
		/// <param name="angle">The angle of the triangle.</param>
		/// <param name="value">The length of the triangle side.</param>
		/// <returns>The adjacent side of a specific angle.</returns>
		/// <exception cref="Exception"></exception>
		public static double GetAdjacentSideFrom(TriangleSides triangleSide, double angle, double value)
		{
			if (triangleSide == TriangleSides.Adjacent) throw new Exception("Please provide another value for triangleSide");

			return triangleSide switch
			{
				TriangleSides.Hypotenuse => Math.Cos(angle) * value,
				TriangleSides.Opposed => value / Math.Tan(angle),
				_ => double.NaN
			};
		}

		/// <summary>
		/// Calculates the hypotenuse of an angle from another side of a triangle.
		/// </summary>
		/// <param name="triangleSide">The side of triangle.</param>
		/// <param name="angle">The angle of the triangle.</param>
		/// <param name="value">The length of the triangle side.</param>
		/// <returns>The hypotenuse of the triangle.</returns>
		/// <exception cref="Exception"></exception>
		public static double GetHypotenuseFrom(TriangleSides triangleSide, double angle, double value)
		{
			if (triangleSide == TriangleSides.Hypotenuse) throw new Exception("Please provide another value for triangleSide");

			return triangleSide switch
			{
				TriangleSides.Adjacent => value / Math.Cos(angle),
				TriangleSides.Opposed => value / Math.Sin(angle),
				_ => double.NaN
			};
		}
	}
}
