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
using System.Drawing;

namespace PeyrSharp.Core.Converters
{
	/// <summary>
	/// Class that represent a RGB color.
	/// </summary>
	public class RGB
	{
		/// <summary>
		/// The RGB color.
		/// </summary>
		public Color Color { get; init; }

		/// <summary>
		/// Initializes a RGB class from a <see cref="System.Drawing.Color"/>.
		/// </summary>
		/// <param name="color">The RGB Color.</param>
		public RGB(Color color)
		{
			Color = color;
		}

		/// <summary>
		/// Initializes a RGB class from red, green, and blue values.
		/// </summary>
		/// <param name="r">Red.</param>
		/// <param name="g">Green.</param>
		/// <param name="b">Blue.</param>
		public RGB(int r, int g, int b)
		{
			Color = Color.FromArgb(r, g, b);
		}

		/// <summary>
		/// Converts the RGB color to hexadecimal.
		/// </summary>
		/// <returns>The hexadecimal representation of the RGB color.</returns>
		public HEX ToHex() => new(ColorTranslator.FromHtml(string.Format("#{0:X2}{1:X2}{2:X2}", Color.R, Color.G, Color.B)).Name.Remove(0, 2));

		/// <summary>
		/// Converts the RGB color to HSV.
		/// </summary>
		/// <returns>The HSV color converted from the RGB one.</returns>
		/// <exception cref="RGBInvalidValueException"></exception>
		public HSV ToHsv()
		{
			if (!(Color.R >= 0 && Color.R <= 255 && Color.G >= 0 && Color.G <= 255 && Color.B >= 0 && Color.B <= 255)) // Si pas valide
			{
				throw new RGBInvalidValueException("The specified argmuents aren't RGB valid."); // Erreur
			}
			int max = Math.Max(Color.R, Math.Max(Color.G, Color.B));
			int min = Math.Min(Color.R, Math.Min(Color.G, Color.B));

			var hue = (int)Math.Round(Color.GetHue());
			var saturation = (int)((max == 0) ? 0 : 1d - (1d * min / max)) * 100;
			saturation = (int)Math.Round((float)saturation);
			var value = (int)Math.Round(((max / 255d) * 100));

			return new(hue, saturation, value);
		}
	}
}
