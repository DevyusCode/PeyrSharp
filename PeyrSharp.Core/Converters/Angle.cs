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

namespace PeyrSharp.Core.Converters
{
	/// <summary>
	/// Class that contains angle converters methods.
	/// </summary>
	public static class Angle
	{
		/// <summary>
		/// Converts radians to degrees.
		/// </summary>
		/// <param name="radians">Radians to convert.</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double RadiansToDegrees(double radians) => radians * 57.2957795; // Degrees

		/// <summary>
		/// Converts degrees to radians.
		/// </summary>
		/// <param name="degrees">Degrees to convert.</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double DegreesToRadians(double degrees) => degrees / 57.2957795; // Radians
	}
}
