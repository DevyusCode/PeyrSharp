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
	/// Class that contains volumes converter methods.
	/// </summary>
	public static class Volumes
	{
		/// <summary>
		/// Converts Cubic Meters (m³) to Litre (L).
		/// </summary>
		/// <param name="m3">Number of Cubic meter(s) to convert.</param>
		/// <returns>The original value converted in Litre.</returns>
		public static double M3ToLitre(double m3) => m3 * 1000; // Convert

		/// <summary>
		/// Converts Litre (L) to Cubic meters (m³).
		/// </summary>
		/// <param name="litre">Number of Litre(s) to convert.</param>
		/// <returns>The original value converted in m³.</returns>
		public static double LitreToM3(double litre) => litre / 1000; // Convert
	}
}
