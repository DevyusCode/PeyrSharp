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
	/// A class that represents a Pyramid.
	/// </summary>
	public class Pyramid
	{
		/// <summary>
		/// The width of the <see cref="Pyramid"/>.
		/// </summary>
		public double Width { get; init; }

		/// <summary>
		/// The length of the <see cref="Pyramid"/>.
		/// </summary>
		public double Length { get; init; }

		/// <summary>
		/// The height of the <see cref="Pyramid"/>.
		/// </summary>
		public double Height { get; init; }

		/// <summary>
		/// The area of the base of the <see cref="Pyramid"/>.
		/// </summary>
		public double AreaBase => Width * Length;

		/// <summary>
		/// The volume of the <see cref="Pyramid"/>.
		/// </summary>
		public double Volume => Width * Length * (Height / 3);

		/// <summary>
		/// The length of the base of the <see cref="Pyramid"/>.
		/// </summary>
		public double LengthBase => AreaBase / Width;

		/// <summary>
		/// The width of the base of the <see cref="Pyramid"/>.
		/// </summary>
		public double WidthBase => AreaBase / Length;

		/// <summary>
		/// Initializes a <see cref="Pyramid"/> from its width, length and height.
		/// </summary>
		/// <param name="width">The width of the <see cref="Pyramid"/>.</param>
		/// <param name="length">The length of the <see cref="Pyramid"/>.</param>
		/// <param name="height">The height of the <see cref="Pyramid"/>.</param>
		/// <exception cref="DivideByZeroException"></exception>
		public Pyramid(double width, double length, double height)
		{
			if (width <= 0 || length <= 0 || height <= 0) throw new DivideByZeroException("Please provide a value higher than 0.");
			Width = width;
			Length = length;
			Height = height;
		}

		/// <summary>
		/// Initializes a <see cref="Pyramid"/> from its width, length and volume. 
		/// </summary>
		/// <param name="volume">The volume of the <see cref="Pyramid"/>.</param>
		/// <param name="width">The width of the <see cref="Pyramid"/>.</param>
		/// <param name="length">The length of the <see cref="Pyramid"/>.</param>
		/// <returns></returns>
		/// <exception cref="DivideByZeroException"></exception>
		public static Pyramid FromVolumeAndSize(double volume, double width, double length)
		{
			if (volume <= 0 || width <= 0 || length <= 0) throw new DivideByZeroException("Please provide a value higher than 0.");
			return new(width, length, 3 * (volume / (width * length)));
		}

		/// <summary>
		/// Initializes a <see cref="Pyramid"/> from its area, length and height. 
		/// </summary>
		/// <param name="area">The area of the <see cref="Pyramid"/>.</param>
		/// <param name="length">The length of the <see cref="Pyramid"/>.</param>
		/// <param name="height">The height of the <see cref="Pyramid"/>.</param>
		/// <returns></returns>
		/// <exception cref="DivideByZeroException"></exception>
		public static Pyramid FromAreaAndLength(double area, double length, double height)
		{
			if (area <= 0 || length <= 0 || height <= 0) throw new DivideByZeroException("Please provide a value higher than 0.");
			return new(area / length, length, height);
		}

		/// <summary>
		/// Initializes a <see cref="Pyramid"/> from its area, width and height.
		/// </summary>
		/// <param name="area">The area of the <see cref="Pyramid"/>.</param>
		/// <param name="width">The width of the <see cref="Pyramid"/>.</param>
		/// <param name="height">The height of the <see cref="Pyramid"/>.</param>
		/// <returns></returns>
		/// <exception cref="DivideByZeroException"></exception>
		public static Pyramid FromAreaAndWidth(double area, double width, double height)
		{
			if (area <= 0 || width <= 0 || height <= 0) throw new DivideByZeroException("Please provide a value higher than 0.");
			return new(width, area / width, height);
		}
	}
}
