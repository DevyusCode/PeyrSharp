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

namespace PeyrSharp.Core.Converters
{
	/// <summary>
	/// Class that contains temperatures converters methods.
	/// </summary>
	public static class Temperatures
	{
		/// <summary>
		/// Converts Celsius (°C) to Fahrenheit (°F).
		/// </summary>
		/// <param name="celsius">Number of Celsius to convert.</param>
		/// <returns>The original value converted in Fahrenheit.</returns>
		public static double CelsiusToFahrenheit(double celsius) => celsius * 1.8 + 32; // Convert

		/// <summary>
		/// Converts Fahrenheit (°F) to Celcius (°C).
		/// </summary>
		/// <param name="fahrenheit">Number of Fahrenheit to convert.</param>
		/// <returns>The original value converted in Celsius.</returns>
		public static double FahrenheitToCelsius(double fahrenheit) => (fahrenheit - 32) / 1.8; // Convert

		/// <summary>
		/// Converts a temperature value from Celsius to Kelvin.
		/// </summary>
		/// <param name="celsius">Temperature value in Celsius.</param>
		/// <returns>Temperature value in Kelvin.</returns>
		public static double CelsiusToKelvin(double celsius) => celsius + 273.15;

		/// <summary>
		/// Converts a temperature value from Fahrenheit to Kelvin.
		/// </summary>
		/// <param name="fahrenheit">Temperature value in Fahrenheit.</param>
		/// <returns>Temperature value in Kelvin.</returns>
		public static double FahrenheitToKelvin(double fahrenheit) => (fahrenheit + 459.67) * 5 / 9;
	}
}
