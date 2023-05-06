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
	/// A class that represents a triangle.
	/// </summary>
	public class Triangle
	{
		/// <summary>
		/// The width of the <see cref="Triangle"/>.
		/// </summary>
		/// <remarks>
		/// This property can be set if you initialized the class with each side values.
		/// </remarks>
		public double Width { get; set; } = double.NaN;

		/// <summary>
		/// The height of the <see cref="Triangle"/>.
		/// </summary>
		/// <remarks>
		/// This property can be set if you initialized the class with each side values.
		/// </remarks>
		public double Height { get; set; } = double.NaN;

		/// <summary>
		/// The length of the first side of the <see cref="Triangle"/>.
		/// </summary>
		public double Side1 { get; init; } = double.NaN;

		/// <summary>
		/// The length of the second side if the <see cref="Triangle"/>.
		/// </summary>
		public double Side2 { get; init; } = double.NaN;

		/// <summary>
		/// The length of the third side if the <see cref="Triangle"/>.
		/// </summary>
		public double Side3 { get; init; } = double.NaN;

		private double[] _sides;

		/// <summary>
		/// Creates a <see cref="Triangle"/> class from a width and height. Useful if you want to know the area of it.
		/// </summary>
		/// <param name="width">The width of the <see cref="Triangle"/>.</param>
		/// <param name="height">The height of the <see cref="Triangle"/>.</param>
		public Triangle(double width, double height)
		{
			// Assign properties to their values
			Width = width;
			Height = height;
		}

		/// <summary>
		/// Creates a <see cref="Triangle"/> class from the length of its sides.
		/// </summary>
		/// <param name="side1">The length of the first side of the <see cref="Triangle"/>.</param>
		/// <param name="side2">The length of the second side of the <see cref="Triangle"/>.</param>
		/// <param name="side3">The length of the third side of the <see cref="Triangle"/>.</param>
		public Triangle(double side1, double side2, double side3)
		{
			// Assign properties to their values
			Side1 = side1;
			Side2 = side2;
			Side3 = side3;

			// Get ordered sides
			_sides = GetOrderedSides(side1, side2, side3);
		}

		private double[] GetOrderedSides(double s1, double s2, double s3)
		{
			double[] numbers = new double[3];
			if (s1 == Math.Min(s1, Math.Min(s2, s3))) // If s1 is smallest side
			{
				numbers[0] = s1;
				numbers[1] = Math.Min(s2, s3);
				numbers[2] = Math.Max(s2, s3);
			}
			else if (s2 == Math.Min(s1, Math.Min(s2, s3))) // If s2 is smallest side
			{
				numbers[0] = s2;
				numbers[1] = Math.Min(s1, s3);
				numbers[2] = Math.Max(s1, s3);
			}
			else // If s2 is smallest side
			{
				numbers[0] = s3;
				numbers[1] = Math.Min(s1, s2);
				numbers[2] = Math.Max(s1, s2);
			}
			return numbers;
		}

		/// <summary>
		/// Gets the area of a triangle.
		/// </summary>
		/// <remarks>
		/// Use this method if you initialized the <see cref="Triangle"/> class with the <c>Triangle(width, height) constructor.</c> />
		/// You can also define the <see cref="Width"/> and <see cref="Height"/> manually.
		/// </remarks>
		public double Area => double.IsNaN(Width) ? _sides[0] * _sides[1] / 2 : Width * Height / 2;

		/// <summary>
		/// Gets the perimeter of a triangle.
		/// </summary>
		/// <remarks>
		/// Use this method if you initialized the <see cref="Triangle"/> class with the <c>Triangle(side1, side2, side3) constructor.</c> />
		/// </remarks>
		public double Perimeter => double.IsNaN(Width) ? Side1 + Side2 + Side3 : Width + Height + Hypotenuse;

		/// <summary>
		/// Gets the hypotenuse of the triangle (assuming it's a right one).
		/// </summary>
		public double Hypotenuse => double.IsNaN(Side1)
			? Math.Sqrt(Math.Pow(Width, 2) + Math.Pow(Height, 2))
			: Math.Max(Side1, Math.Max(Side2, Side3));

		/// <summary>
		/// Checks if the triangle is a right triangle.
		/// </summary>
		public bool IsRight
		{
			get
			{
				if (!double.IsNaN(Width))
				{
					return Math.Pow(Hypotenuse, 2) == Math.Pow(Width, 2) + Math.Pow(Height, 2); // Pythagorus
				}

				if (Hypotenuse == Side1)
				{
					return Math.Pow(Side1, 2) == Math.Pow(Side2, 2) + Math.Pow(Side3, 2); // Pythagorus
				}
				else if (Hypotenuse == Side2)
				{
					return Math.Pow(Side2, 2) == Math.Pow(Side1, 2) + Math.Pow(Side3, 2); // Pythagorus
				}
				else
				{
					return Math.Pow(Side3, 2) == Math.Pow(Side2, 2) + Math.Pow(Side1, 2); // Pythagorus
				}
			}
		}

		/// <summary>
		/// Checks if the triangle can be built.
		/// </summary>
		public bool CanBeBuilt => _sides[2] < _sides[0] + _sides[1];
	}
}
