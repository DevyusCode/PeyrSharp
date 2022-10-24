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

using PeyrSharp.Exceptions;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PeyrSharp.Core.Converters
{

	/// <summary>
	/// A class that represents a Hexadecimal color.
	/// </summary>
	public class HEX
	{
		/// <summary>
		/// The hexadecimal value.
		/// </summary>
		public string Value { get; init; }

		/// <summary>
		/// Initializes a hexadecimal class from a hexadecimal value.
		/// </summary>
		/// <param name="hex">The hexadecimal value.</param>
		public HEX(string hex)
		{
			Value = hex;
		}

		/// <summary>
		/// Converts the hexadecimal color to RGB.
		/// </summary>
		/// <returns>The RGB color converted from the hexadecimal one.</returns>
		/// <exception cref="HEXInvalidValueException"></exception>
		public RGB ToRgb()
		{
			try
			{
				string newVal = Value;
				if (newVal.IndexOf('#') != -1)
					newVal = newVal.Replace("#", "");

				int r, g, b = 0;
				r = int.Parse(newVal.Substring(0, 2), NumberStyles.AllowHexSpecifier);
				g = int.Parse(newVal.Substring(2, 2), NumberStyles.AllowHexSpecifier);
				b = int.Parse(newVal.Substring(4, 2), NumberStyles.AllowHexSpecifier);
				
				return new(r, g, b);
			}
			catch
			{
				throw new HEXInvalidValueException("The specified HEX value is invalid.");
			}
		}

		/// <summary>
		/// Converts a hexadecimal color to a HSV color.
		/// </summary>
		/// <returns>The HSV Color converted from the hexadecimal one.</returns>
		public HSV ToHsv() => ToRgb().ToHsv();
	}
}
