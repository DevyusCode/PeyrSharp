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
	/// A class that represents a Cube.
	/// </summary>
	public class Cube
	{
		private readonly double[] _sides; // An double array that contains 3 items : width, length, height

		/// <summary>
		/// The length of a size. Can be null if defined with a specific width and length.
		/// </summary>
		public double? Side { get; init; }

		/// <summary>
		/// The width of the cube.
		/// </summary>
		public double Width { get; init; }

		/// <summary>
		/// The length of the cube.
		/// </summary>
		public double Length { get; init; }

		/// <summary>
		/// The height of the cube.
		/// </summary>
		public double Height { get; init; }

		/// <summary>
		/// The volume of the cube.
		/// </summary>
		/// <remarks>
		/// Either equal to side^3 or width*length*height.
		/// </remarks>
		public double Volume => _sides[0] * _sides[1] * _sides[2];

		/// <summary>
		/// The area of the cube.
		/// </summary>
		/// <remarks>
		/// Either equal to side^2 or width*length.
		/// </remarks>
		public double Area => _sides[0] * _sides[1];

		/// <summary>
		/// Gets the edge of the cube from its area.
		/// </summary>
		public double Edge => Math.Sqrt(Area / 2);

		/// <summary>
		/// Initalizes a <see cref="Cube"/> from the length of its side.
		/// </summary>
		/// <param name="side">The length of the side of the cube.</param>
		/// <exception cref="DivideByZeroException"></exception>
		public Cube(double side)
		{
			if (side <= 0) throw new DivideByZeroException("Please provide a value higher than 0.");

			Side = side;
			_sides = new double[] { side, side, side };

			Width = side;
			Length = side;
			Height = side;
		}

		/// <summary>
		/// Initalizes a <see cref="Cube"/> from its width, length and height.
		/// </summary>
		/// <param name="width">The width of the cube.</param>
		/// <param name="length">The length of the cube.</param>
		/// <param name="height">The height of the cube.</param>
		/// <exception cref="DivideByZeroException"></exception>
		public Cube(double width, double length, double height)
		{
			if (width <= 0 || length <= 0 || height <= 0) throw new DivideByZeroException("Please provide a value higher than 0.");

			_sides = new double[] { width, length, height };

			Width = width;
			Length = length;
			Height = height;
		}
	}
}
