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
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Text;

namespace PeyrSharp.UiHelpers
{
	/// <summary>
	/// Provides utility methods for working with windows.
	/// </summary>
	public static class WindowHelpers
	{
		/// <summary>
		/// Retrieves a list of currently visible windows.
		/// </summary>
		/// <returns>A list of <see cref="WindowInfo"/> objects representing the visible windows.</returns>
		public static List<WindowInfo> GetWindows()
		{
			List<WindowInfo> windowList = new();
			EnumWindows((hWnd, lParam) =>
			{
				if (IsWindowVisible(hWnd))
				{
					StringBuilder titleBuilder = new(256);
					StringBuilder classNameBuilder = new(256);

					GetWindowText(hWnd, titleBuilder, titleBuilder.Capacity);
					GetClassName(hWnd, classNameBuilder, classNameBuilder.Capacity);

					string title = titleBuilder.ToString();
					string className = classNameBuilder.ToString();

					windowList.Add(new WindowInfo
					{
						Handle = hWnd,
						Name = title,
						ClassName = className
					});
				}

				return true;
			}, IntPtr.Zero);

			return windowList;
		}

		// ... (rest of the code)

		private static bool IsWindowVisible(IntPtr hWnd)
		{
			return IsWindowVisibleCore(hWnd) && !IsIconic(hWnd);
		}

		[DllImport("user32.dll")]
		[return: MarshalAs(UnmanagedType.Bool)]
		private static extern bool IsWindowVisibleCore(IntPtr hWnd);

		[DllImport("user32.dll")]
		[return: MarshalAs(UnmanagedType.Bool)]
		private static extern bool IsIconic(IntPtr hWnd);

		[DllImport("user32.dll")]
		[return: MarshalAs(UnmanagedType.Bool)]
		private static extern bool EnumWindows(EnumWindowsProc enumProc, IntPtr lParam);
		private delegate bool EnumWindowsProc(IntPtr hWnd, IntPtr lParam);

		[DllImport("user32.dll")]
		private static extern int GetWindowText(IntPtr hWnd, StringBuilder text, int count);

		[DllImport("user32.dll")]
		private static extern int GetClassName(IntPtr hWnd, StringBuilder className, int count);
	}
}
