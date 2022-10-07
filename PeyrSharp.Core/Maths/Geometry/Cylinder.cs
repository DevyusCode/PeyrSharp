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

namespace PeyrSharp.Core.Maths.Geometry
{
	/// <summary>
	/// A class that represents a Cylinder.
	/// </summary>
	public class Cylinder
	{
		/// <summary>
		/// The radius of the <see cref="Cylinder"/>.
		/// </summary>
		public double Radius { get; init; }

		/// <summary>
		/// The height of the <see cref="Cylinder"/>.
		/// </summary>
		public double Height { get; init; }

		/// <summary>
		/// The volume of the <see cref="Cylinder"/>.
		/// </summary>
		/// <remarks>
		/// π*(r^2)*height
		/// </remarks>
		public double Volume => Math.PI * Math.Pow(Radius, 2) * Height;

		/// <summary>
		/// The area of the base circle of the <see cref="Cylinder"/>.
		/// </summary>
		/// <remarks>
		/// π*(r^2)
		/// </remarks>
		public double BaseArea => Math.PI * Math.Pow(Radius, 2);


		/// <summary>
		/// Initializes a <see cref="Cylinder"/> from a specific radius and height.
		/// </summary>
		/// <param name="radius">The radius of the <see cref="Cylinder"/>.</param>
		/// <param name="height">The height of the <see cref="Cylinder"/>.</param>
		/// <exception cref="DivideByZeroException"></exception>
		public Cylinder(double radius, double height)
		{
			if (radius <= 0 || height <= 0) throw new DivideByZeroException("Please provide a value higher than 0.");

			Radius = radius;
			Height = height;
		}
	}
}
