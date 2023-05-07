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

using PeyrSharp.Enums;

namespace PeyrSharp.Core
{
	/// <summary>
	/// Represents a class that can contain some basic info of a status code.
	/// </summary>
	public class StatusInfo
	{
		/// <summary>
		/// Gets or sets the status code that indicates the outcome of the request.
		/// </summary>
		public int StatusCode { get; set; }

		/// <summary>
		/// Gets or sets the status description that provides a human-readable message of the status code.
		/// </summary>
		public string StatusDescription { get; set; }

		/// <summary>
		/// Gets or sets the status type that categorizes the status code into informational, success, redirection, client error, or server error.
		/// </summary>
		public StatusCodes StatusType { get; set; }
	}
}
