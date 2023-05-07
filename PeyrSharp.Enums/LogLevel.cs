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

namespace PeyrSharp.Enums
{
	/// <summary>
	/// Specifies the severity level of a log message.
	/// </summary>
	public enum LogLevel
	{
		/// <summary>
		/// Debug-level messages provide verbose information for debugging purposes.
		/// </summary>
		Debug,

		/// <summary>
		/// Info-level messages provide informational messages about the application's state.
		/// </summary>
		Info,

		/// <summary>
		/// Warning-level messages indicate a potential problem or non-critical issue.
		/// </summary>
		Warning,

		/// <summary>
		/// Error-level messages indicate an error has occurred in the application.
		/// </summary>
		Error,

		/// <summary>
		/// Critical-level messages indicate a critical error has occurred that requires immediate attention.
		/// </summary>
		Critical,

		/// <summary>
		/// Misc-level messages are for miscellaneous use cases and are not defined in the logging specification.
		/// </summary>
		Misc
	}
}
