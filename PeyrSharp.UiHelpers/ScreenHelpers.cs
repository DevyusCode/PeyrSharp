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

namespace PeyrSharp.UiHelpers
{
	/// <summary>
	/// Class that contains methods related to screens.
	/// </summary>
	public static class ScreenHelpers
	{
		/// <summary>
		/// Gets the current screen's DPI.
		/// </summary>
		/// <param name="form">The window to get the DPI.</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double GetScreenDPIFromWinForm(System.Windows.Forms.Form form)
		{
			System.Drawing.Graphics graphics = System.Drawing.Graphics.FromHwnd(form.Handle);
			return graphics.DpiX;
		}

		/// <summary>
		/// Gets the current screen's DPI.
		/// </summary>
		/// <param name="window">The window to get the DPI.</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double GetScreenDPIFromWPFWindow(System.Windows.Window window)
		{
			System.Drawing.Graphics graphics = System.Drawing.Graphics.FromHwnd(new System.Windows.Interop.WindowInteropHelper(window).Handle);
			return graphics.DpiX;
		}

		/// <summary>
		/// Gets the scaling of a screen.
		/// </summary>
		/// <param name="form">The window to get the scaling.</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double GetScreenScalingFromWinForm(System.Windows.Forms.Form form)
		{
			double dpiX;
			using System.Drawing.Graphics graphics = System.Drawing.Graphics.FromHwnd(form.Handle);
			dpiX = graphics.DpiX; // Get the DPI

			return dpiX switch
			{
				96 => 100,// Get the %
				120 => 125,// Get the %
				144 => 150,// Get the %
				168 => 175,// Get the %
				200 => 200,// Get the %
				_ => (double)-100,// Get the %
			};
		}

		/// <summary>
		/// Gets the scaling of a screen.
		/// </summary>
		/// <param name="window">The window to get the scaling.</param>
		/// <returns>A <see cref="double"/> value.</returns>
		public static double GetScreenScalingFromWPFWindow(System.Windows.Window window)
		{
			double dpiX;
			using System.Drawing.Graphics graphics = System.Drawing.Graphics.FromHwnd(new System.Windows.Interop.WindowInteropHelper(window).Handle);
			dpiX = graphics.DpiX; // Get the DPI

			return dpiX switch
			{
				96 => 100,// Get the %
				120 => 125,// Get the %
				144 => 150,// Get the %
				168 => 175,// Get the %
				200 => 200,// Get the %
				_ => (double)-100,// Get the %
			};
		}
	}
}
