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
using System.Text;

namespace PeyrSharp.Core.Maths.Geometry
{
	/// <summary>
	/// A class that represents a rectangle.
	/// </summary>
	public class Rectangle
	{
		/// <summary>
		/// The Width of the rectangle.
		/// </summary>
		public double Width { get; init; }

		/// <summary>
		/// The Height/Length of the rectangle.
		/// </summary>
		public double Height { get; init; }

		/// <summary>
		/// Creates a <see cref="Rectangle"/> from a specific width and height.
		/// </summary>
		/// <param name="width">The width of the rectangle.</param>
		/// <param name="height">The height/length of the rectangle.</param>
		public Rectangle(double width, double height)
		{
			// Assign properties to their values
			Width = width;
			Height = height;
		}

		/// <summary>
		/// Gets the area of this <see cref="Rectangle"/> from its <see cref="Width"/> and <see cref="Height"/>.
		/// </summary>
		public double Area => Width * Height;

		/// <summary>
		/// Gets the perimeter of this <see cref="Rectangle"/> from its <see cref="Width"/> and <see cref="Height"/>.
		/// </summary>
		public double Perimeter => 2 * (Width + Height);

		/// <summary>
		/// Gets the diagonal of this <see cref="Rectangle"/> from its <see cref="Width"/> and <see cref="Height"/>.
		/// </summary>
		public double Diagonal => Math.Sqrt(Math.Pow(Width, 2) + Math.Pow(Height, 2));
	}
}
