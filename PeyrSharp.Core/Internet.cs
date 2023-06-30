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
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace PeyrSharp.Core
{
	/// <summary>
	/// Internet-related methods.
	/// </summary>
	public static class Internet
	{
		/// <summary>
		/// Gets the status code of a specific page by making a request to it.
		/// </summary>
		/// <param name="url">The URL where to send the request.</param>
		/// <returns>The status code of the specified URL.</returns>
		public static async Task<int> GetStatusCodeAsync(string url) => (int)(await new HttpClient().GetAsync(url)).StatusCode;

		/// <summary>
		/// Gets the status description of a specific page by making a request to it.
		/// </summary>
		/// <param name="url">The URL where to send the request.</param>
		/// <returns>The status description of the specified URL.</returns>
		public static async Task<string> GetStatusDescriptionAsync(string url) => (await new HttpClient().GetAsync(url)).ReasonPhrase;

		/// <summary>
		/// Gets the status info of a URL by sending an HTTP GET request and returning a <see cref="StatusInfo"/> object.
		/// </summary>
		/// <param name="url">The URL to get the status info from.</param>
		/// <returns>A <see cref="StatusInfo"/> object that contains the status code, description, and type of the URL.</returns>
		public static async Task<StatusInfo> GetStatusInfoAsync(string url)
		{
			var response = await new HttpClient().GetAsync(url);
			return new StatusInfo() { StatusCode = (int)response.StatusCode, StatusDescription = response.ReasonPhrase, StatusType = GetStatusCodeType((int)response.StatusCode) };
		}

		/// <summary>
		/// Checks if a connection to the Internet is available.
		/// </summary>
		/// <param name="url">The page where to check if Internet is available.</param>
		/// <returns><see langword="true"/> if the Internet can be reach.</returns>
		public static async Task<bool> IsAvailableAsync(string url)
		{
			try
			{
				return await GetStatusCodeAsync(url) != 400;
			}
			catch
			{
				return false; // An excpetion has been thrown likely because the client couldn't resolve the host.
			}
		}

		/// <summary>
		/// Checks if a connection to the Internet is available.
		/// </summary>
		/// <returns><see langword="true"/> if the Internet can be reach.</returns>
		public static async Task<bool> IsAvailableAsync()
		{
			try
			{
				return await GetStatusCodeAsync("https://www.bing.com") != 400;
			}
			catch
			{
				return false; // An excpetion has been thrown likely because the client couldn't resolve the host.
			}
		}

		/// <summary>
		/// Gets the kind of the status code.
		/// </summary>
		/// <param name="statusCode">The status code to analyze.</param>
		/// <returns>The type of the status code.</returns>
		public static StatusCodes GetStatusCodeType(int statusCode) => statusCode switch
		{
			>= 100 and <= 199 => StatusCodes.Informational,
			>= 200 and <= 299 => StatusCodes.Success,
			>= 300 and <= 399 => StatusCodes.Redirection,
			>= 400 and <= 499 => StatusCodes.ClientError,
			>= 500 and <= 599 => StatusCodes.ServerError,
			_ => StatusCodes.ClientError
		};

		/// <summary>
		/// Gets the protocol of a URL as <see langword="string"/>.
		/// </summary>
		/// <param name="url">The URL to parse.</param>
		/// <returns>The protocol of the URL.</returns>
		/// <remarks>If the URL is not valid, the value returned might be false.</remarks>
		/// <exception cref="IndexOutOfRangeException"></exception>
		public static string GetUrlProtocol(string url) => url.Split("://")[0];

		/// <summary>
		/// Checks if a URL is valid or not.
		/// </summary>
		/// <param name="url">The URL to check.</param>
		/// <returns><see langword="true"/> if the URL is valid.</returns>
		public static bool IsUrlValid(string url)
		{
			if (!url.StartsWith("http://") || !url.StartsWith("https://"))
			{
				url = "https://" + url;
			}
			return Uri.TryCreate(url, UriKind.Absolute, out Uri? uriResult)
				&& (uriResult.Scheme == Uri.UriSchemeHttp || uriResult.Scheme == Uri.UriSchemeHttps);
		}
	}
}
