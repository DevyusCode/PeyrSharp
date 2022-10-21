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
	/// Class that contains masses converter methods
	/// </summary>
	public static class Masses
	{
		/// <summary>
		/// Converts Pound(s) to Kilogram(s).
		/// </summary>
		/// <param name="pounds">Number of pounds to convert.</param>
		/// <returns>The original value converted in Kilograms.</returns>
		public static double PoundsToKilograms(double pounds) => pounds / 2.20462262; // Convert

		/// <summary>
		/// Converts Kilogram(s) to Pound(s).
		/// </summary>
		/// <param name="kg">Number of kilograms to convert.</param>
		/// <returns>The original value converted in Pounds.</returns>
		public static double KilogramsToPounds(double kg) => kg * 2.20462262; // Convert
	}
}
