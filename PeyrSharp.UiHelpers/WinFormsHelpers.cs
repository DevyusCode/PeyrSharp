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
using PeyrSharp.Enums;
using System.Windows.Forms;

namespace PeyrSharp.UiHelpers
{
	/// <summary>
	/// A class that contains method to help you manage the UI of a Windows Forms application.
	/// </summary>
	public static class WinFormsHelpers
	{
		/// <summary>
		/// Centers a specified <see cref="Control"/> in a <see cref="Form"/>.
		/// </summary>
		/// <param name="control">The <see cref="Control"/> to center.</param>
		/// <param name="form">The <see cref="Form"/> where the control is going to be centered.</param>
		public static void CenterControl(Control control, Form form)
		{
			control.Left = (form.ClientSize.Width - control.Width) / 2; // Center horizontally
			control.Top = (form.ClientSize.Height - control.Height) / 2; // Center vertically
		}

		/// <summary>
		/// Centers a specified <see cref="Control"/> in a <see cref="Form"/>.
		/// </summary>
		/// <param name="control">The <see cref="Control"/> to center.</param>
		/// <param name="form">The <see cref="Form"/> where the control is going to be centered.</param>
		/// <param name="controlAlignement">If <see cref="ControlAlignement.Vertical"/>, the <see cref="Control"/> will be centered vertically. If <see cref="ControlAlignement.Horizontal"/>, the <see cref="Control"/> will be centered horizontally.</param>
		public static void CenterControl(Control control, Form form, ControlAlignement controlAlignement)
		{
			switch (controlAlignement)
			{
				case ControlAlignement.Horizontal:
					control.Left = (form.ClientSize.Width - control.Width) / 2; // Center horizontally
					break;
				case ControlAlignement.Vertical:
					control.Top = (form.ClientSize.Height - control.Height) / 2; // Center vertically
					break;
				case ControlAlignement.Both:
					control.Left = (form.ClientSize.Width - control.Width) / 2; // Center horizontally
					control.Top = (form.ClientSize.Height - control.Height) / 2; // Center vertically
					break;
			}
		}

		/// <summary>
		/// Centers a specified <see cref="Form"/> on the <see cref="Screen"/>.
		/// </summary>
		/// <param name="form"><see cref="Form"/> to center.</param>
		public static void CenterForm(Form form)
		{
			form.Left = (Screen.PrimaryScreen.WorkingArea.Width - form.Width) / 2; // Center horizontally
			form.Top = (Screen.PrimaryScreen.WorkingArea.Height - form.Height) / 2; // Center vertically
		}
	}
}
