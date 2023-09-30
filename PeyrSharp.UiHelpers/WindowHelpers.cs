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

		/// <summary>
		/// Closes a window.
		/// </summary>
		/// <param name="windowInfo">The window to close.</param>
		public static void CloseWindow(WindowInfo windowInfo)
		{
			SendMessage(windowInfo.Handle, WM_SYSCOMMAND, (IntPtr)SC_CLOSE, IntPtr.Zero);
		}

		/// <summary>
		/// Maximizes a window.
		/// </summary>
		/// <param name="windowInfo">The window to maximize.</param>
		public static void MaximizeWindow(WindowInfo windowInfo)
		{
			SendMessage(windowInfo.Handle, WM_SYSCOMMAND, (IntPtr)SC_MAXIMIZE, IntPtr.Zero);
		}

		/// <summary>
		/// Restores a window.
		/// </summary>
		/// <param name="windowInfo">The window to restore.</param>
		public static void RestoreWindow(WindowInfo windowInfo)
		{
			SendMessage(windowInfo.Handle, WM_SYSCOMMAND, (IntPtr)SC_RESTORE, IntPtr.Zero);
		}

		/// <summary>
		/// Minimizes a window.
		/// </summary>
		/// <param name="windowInfo">The window to minimize.</param>
		public static void MinimizeWindow(WindowInfo windowInfo)
		{
			SendMessage(windowInfo.Handle, WM_SYSCOMMAND, (IntPtr)SC_MINIMIZE, IntPtr.Zero);
		}

		/// <summary>
		/// Moves a window to specified coordinates.
		/// </summary>
		/// <param name="windowInfo">The window to move.</param>
		/// <param name="x">The X-axis coordinates.</param>
		/// <param name="y">The Y-axis coordinates.</param>
		public static void MoveWindow(WindowInfo windowInfo, int x, int y)
		{
			SetWindowPos(windowInfo.Handle, IntPtr.Zero, x, y, 0, 0, SWP_NOSIZE | SWP_NOZORDER);
		}

		/// <summary>
		/// Sets the Topmost property of a window.
		/// </summary>
		/// <param name="windowInfo">The window to target.</param>
		/// <param name="isTopMost">The value of the TopMost property. <see langword="true"/> if the window should always stay on top; <see langword="false"/> otherwise.</param>
		public static void SetTopMost(WindowInfo windowInfo, bool isTopMost)
		{
			SetWindowPos(windowInfo.Handle, isTopMost ? HWND_TOPMOST : HWND_NOTOPMOST, 0, 0, 0, 0, SWP_NOMOVE | SWP_NOSIZE);
		}

		/// <summary>
		/// Gets the width and height of a window.
		/// </summary>
		/// <param name="windowInfo">The window to get the size of.</param>
		/// <returns>A tuple of integers; the first one represents the width of the window, the second one represents the height.</returns>
		/// <exception cref="InvalidOperationException"></exception>
		public static (int, int) GetWindowSize(WindowInfo windowInfo)
		{
			if (GetWindowRect(windowInfo.Handle, out RECT rect))
			{
				int width = rect.Right - rect.Left;
				int height = rect.Bottom - rect.Top;
				return (width, height);
			}
			else
			{
				throw new InvalidOperationException("Failed to retrieve window size.");
			}
		}

		[DllImport("user32.dll")]
		private static extern bool IsWindowVisible(IntPtr hWnd);

		private const int WM_SYSCOMMAND = 0x0112;

		private const int SC_CLOSE = 0xF060;
		private const int SC_MAXIMIZE = 0xF030;
		private const int SC_RESTORE = 0xF120;
		private const int SC_MINIMIZE = 0xF020;

		private const uint SWP_NOSIZE = 0x0001;
		private const uint SWP_NOZORDER = 0x0004;
		internal const uint SWP_NOMOVE = 0x0002;

		internal const int HWND_TOPMOST = -1;
		internal const int HWND_NOTOPMOST = -2;

		[DllImport("user32.dll")]
		private static extern IntPtr SendMessage(IntPtr hWnd, uint Msg, IntPtr wParam, IntPtr lParam);

		[DllImport("user32.dll")]
		private static extern bool SetWindowPos(IntPtr hWnd, IntPtr hWndInsertAfter, int x, int y, int cx, int cy, uint uFlags);

		[DllImport("user32.dll")]
		static extern bool SetWindowPos(IntPtr hWnd, int hWndInsertAfter, int X, int Y, int cx, int cy, uint uFlags);

		[DllImport("user32.dll")]
		[return: MarshalAs(UnmanagedType.Bool)]
		private static extern bool EnumWindows(EnumWindowsProc enumProc, IntPtr lParam);
		private delegate bool EnumWindowsProc(IntPtr hWnd, IntPtr lParam);

		[DllImport("user32.dll")]
		private static extern int GetWindowText(IntPtr hWnd, StringBuilder text, int count);

		[DllImport("user32.dll")]
		private static extern int GetClassName(IntPtr hWnd, StringBuilder className, int count);

		[DllImport("user32.dll")]
		[return: MarshalAs(UnmanagedType.Bool)]
		private static extern bool GetWindowRect(IntPtr hWnd, out RECT lpRect);

		[Serializable]
		[StructLayout(LayoutKind.Sequential)]
		private struct RECT
		{
			public int Left;
			public int Top;
			public int Right;
			public int Bottom;
		}
	}
}
