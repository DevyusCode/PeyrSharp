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
using System;

namespace PeyrSharp.Exceptions
{
	/// <summary>
	/// Is thrown when an HEX color is invalid.
	/// </summary>
	public class HEXInvalidValueException : Exception
	{
		/// <summary>
		/// Initialize a new instance of the <see cref="HEXInvalidValueException"/> class.
		/// </summary>
		public HEXInvalidValueException()
		{

		}

		/// <summary>
		/// Initialize a new instance of the <see cref="HEXInvalidValueException"/> class with a specified error message.
		/// </summary>
		/// <param name="message">Message of the error</param>
		public HEXInvalidValueException(string message) : base(message)
		{

		}

		/// <summary>
		/// Initialize a new instance of the <see cref="HEXInvalidValueException"/> class with a specified error message.
		/// </summary>
		/// <param name="message">Message of the error.</param>
		/// <param name="innerException">The inner exception that cause this exception.</param>
		public HEXInvalidValueException(string message, Exception innerException) : base(message, innerException)
		{

		}
	}
}
