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
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PeyrSharp.Core.Converters
{
	/// <summary>
	/// Class that contains speeds converters methods.
	/// </summary>
	public static class Speeds
	{
		/// <summary>
		/// Converts knots to kilometers per hour.
		/// </summary>
		/// <param name="knots">The speed in knots.</param>
		/// <returns>The equivalent speed in kilometers per hour.</returns>
		public static double KnotsToKilometersPerHour(double knots) => knots * 1.852;

		/// <summary>
		/// Converts kilometers per hour to knots.
		/// </summary>
		/// <param name="kilometersPerHour">The speed in kilometers per hour.</param>
		/// <returns>The equivalent speed in knots.</returns>
		public static double KilometersPerHourToKnots(double kilometersPerHour) => kilometersPerHour / 1.852;

		/// <summary>
		/// Converts knots to miles per hour.
		/// </summary>
		/// <param name="knots">The speed in knots.</param>
		/// <returns>The equivalent speed in miles per hour.</returns>
		public static double KnotsToMilesPerHour(double knots) => knots * 1.15078;

		/// <summary>
		/// Converts miles per hour to knots.
		/// </summary>
		/// <param name="milesPerHour">The speed in miles per hour.</param>
		/// <returns>The equivalent speed in knots.</returns>
		public static double MilesPerHourToKnots(double milesPerHour) => milesPerHour / 1.15078;
	}
}
