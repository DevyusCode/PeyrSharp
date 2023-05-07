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
	/// A class that represents a Circle.
	/// </summary>
	public class Circle
	{
		/// <summary>
		/// The radius of the circle.
		/// </summary>
		public double Radius { get; init; }

		/// <summary>
		/// Creates a <see cref="Circle"/> from a specific radius.
		/// </summary>
		/// <param name="radius">The radius of the circle.</param>
		public Circle(double radius) // Create a circle from a specific radius
		{
			Radius = radius; // Set the radius of the circle
		}

		/// <summary>
		/// Gets the area of this <see cref="Circle"/> from its <see cref="Radius"/>.
		/// </summary>
		public double Area => Math.PI * Radius * Radius;

		/// <summary>
		/// Gets the perimeter of this <see cref="Circle"/> from its <see cref="Radius"/>.
		/// </summary>
		public double Perimeter => 2 * Math.PI * Radius;
	}
}
