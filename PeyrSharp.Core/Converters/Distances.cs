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
	/// Class that contains distances converters methods.
	/// </summary>
	public static class Distances
	{
		/// <summary>
		/// Converts miles to kilometers.
		/// </summary>
		/// <param name="miles">Number of mile(s) to convert.</param>
		/// <returns>The original value converted in kilometers.</returns>
		public static double MilesToKm(double miles) => miles * 1.609344; // Convert

		/// <summary>
		/// Converts kilometers to miles.
		/// </summary>
		/// <param name="kilometers">Number of kilometer(s) to convert.</param>
		/// <returns>The original value converted in miles.</returns>
		public static double KmToMiles(double kilometers) => kilometers / 1.609344; // Convert

		/// <summary>
		/// Converts Feet to Meters.
		/// </summary>
		/// <param name="feet">Number of feet to convert.</param>
		/// <returns>The original value converted in meters.</returns>
		public static double FeetToMeters(double feet) => feet / 3.2808399; // Convert

		/// <summary>
		/// Converts Meters to Feet.
		/// </summary>
		/// <param name="meters">Number of meters to convert.</param>
		/// <returns>The original value converted in feet.</returns>
		public static double MetersToFeet(double meters) => meters * 3.2808399; // Convert
	}
}
