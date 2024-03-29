﻿/*
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
	/// A class that represents a Sphere.
	/// </summary>
	public class Sphere
	{
		/// <summary>
		/// The radius of the <see cref="Sphere"/>.
		/// </summary>
		public double Radius { get; init; }

		/// <summary>
		/// The area of the <see cref="Sphere"/>.
		/// </summary>
		public double Area => 4 * Math.PI * Math.Pow(Radius, 2);

		/// <summary>
		/// The volume of the <see cref="Sphere"/>.
		/// </summary>
		public double Volume => 3d / 4d * Math.PI * Math.Pow(Radius, 3);

		/// <summary>
		/// Initializes a <see cref="Sphere"/> from its radius.
		/// </summary>
		/// <param name="radius">The radius of the sphere.</param>
		/// <exception cref="DivideByZeroException"></exception>
		public Sphere(double radius)
		{
			if (radius <= 0) throw new DivideByZeroException("Please provide a value higher than 0.");
			Radius = radius;
		}
	}
}
