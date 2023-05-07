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

namespace PeyrSharp.Core.Maths.Geometry
{
	/// <summary>
	/// A class that represents a Diamond.
	/// </summary>
	public class Diamond
	{
		/// <summary>
		/// The length of the side of the <see cref="Diamond"/>.
		/// </summary>
		public double Side { get; init; }

		/// <summary>
		/// The perimeter of the <see cref="Diamond"/>.
		/// </summary>
		public double Perimeter => 4 * Side;

		/// <summary>
		/// An array containing the values of the diagonals of the <see cref="Diamond"/> if initialized with the corresponding constructor.
		/// </summary>
		public double[] Diagonals { get; init; }

		/// <summary>
		/// The area of the <see cref="Diamond"/>.
		/// </summary>
		public double Area => Diagonals[0] * (Diagonals[1] / 2);

		/// <summary>
		/// Initializes a <see cref="Diamond"/> from the length of its side.
		/// </summary>
		/// <param name="side">The length of the side.</param>
		/// <exception cref="DivideByZeroException"></exception>
		public Diamond(double side)
		{
			if (side <= 0) throw new DivideByZeroException("Please provide a value higher than 0.");
			Side = side;
		}

		/// <summary>
		/// Initializes a <see cref="Diamond"/> from its diagonals.
		/// </summary>
		/// <param name="diagonal1">The length of the first diagonal.</param>
		/// <param name="diagonal2">The length of the second diagonal.</param>
		/// <exception cref="DivideByZeroException"></exception>
		public Diamond(double diagonal1, double diagonal2)
		{
			if (diagonal1 <= 0 || diagonal2 <= 0) throw new DivideByZeroException("Please provide a value higher than 0.");
			Diagonals = new double[2] { diagonal1, diagonal2 };
		}
	}
}
