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
	/// A class that represents a HSV color.
	/// </summary>
	public class HSV
	{
		/// <summary>
		/// The hue of the color.
		/// </summary>
		public int Hue { get; init; }

		/// <summary>
		/// The saturation of the color.
		/// </summary>
		public int Saturation { get; init; }

		/// <summary>
		/// The value of the color.
		/// </summary>
		public int Value { get; init; }

		/// <summary>
		/// Initializes a HSV color from its hue, saturation, and value.
		/// </summary>
		/// <param name="hue">The Hue (H).</param>
		/// <param name="saturation">The Saturation (S).</param>
		/// <param name="value">The Value (V).</param>
		public HSV(int hue, int saturation, int value)
		{
			Hue = hue;
			Saturation = saturation;
			Value = value;
		}
	}
}
