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

namespace PeyrSharp.Core.Converters
{
	/// <summary>
	/// Class that contains time and duration converter methods.
	/// </summary>
	public static class Time
	{
		/// <summary>
		/// Converts to seconds a <see cref="TimeUnits"/>.
		/// </summary>
		/// <param name="d">The time unit to convert.</param>
		/// <param name="timeUnits">The unit of the time. (ex: minutes, hours...)</param>
		/// <returns>The converted value in seconds.</returns>
		public static double ToSeconds(double d, TimeUnits timeUnits) => timeUnits switch
		{
			TimeUnits.Milliseconds => TimeSpan.FromMilliseconds(d).TotalSeconds,// Convert and Return the expected value
			TimeUnits.Minutes => TimeSpan.FromMinutes(d).TotalSeconds,// Convert and Return the expected value
			TimeUnits.Hours => TimeSpan.FromHours(d).TotalSeconds,// Convert and Return the expected value
			TimeUnits.Days => TimeSpan.FromDays(d).TotalSeconds,// Convert and Return the expected value
			TimeUnits.Seconds => d,// Return the expected value
			_ => d,
		};

		/// <summary>
		/// Converts to minutes a <see cref="TimeUnits"/>.
		/// </summary>
		/// <param name="d">The time unit to convert.</param>
		/// <param name="timeUnits">The unit of the time. (ex: minutes, hours...)</param>
		/// <returns>The converted value in minutes.</returns>
		public static double ToMinutes(double d, TimeUnits timeUnits) => timeUnits switch
		{
			TimeUnits.Milliseconds => TimeSpan.FromMilliseconds(d).TotalMinutes,// Convert and Return the expected value
			TimeUnits.Seconds => TimeSpan.FromSeconds(d).TotalMinutes,// Convert and Return the expected value
			TimeUnits.Hours => TimeSpan.FromHours(d).TotalMinutes,// Convert and Return the expected value
			TimeUnits.Days => TimeSpan.FromDays(d).TotalMinutes,// Convert and Return the expected value
			TimeUnits.Minutes => d,// Return the expected value
			_ => d,
		};

		/// <summary>
		/// Converts to hours a <see cref="TimeUnits"/>.
		/// </summary>
		/// <param name="d">The time unit to convert.</param>
		/// <param name="timeUnits">The unit of the time. (ex: minutes, hours...)</param>
		/// <returns>The converted value in hours.</returns>
		public static double ToHours(double d, TimeUnits timeUnits) => timeUnits switch
		{
			TimeUnits.Milliseconds => TimeSpan.FromMilliseconds(d).TotalHours,// Convert and Return the expected value
			TimeUnits.Seconds => TimeSpan.FromSeconds(d).TotalHours,// Convert and Return the expected value
			TimeUnits.Minutes => TimeSpan.FromMinutes(d).TotalHours,// Convert and Return the expected value
			TimeUnits.Days => TimeSpan.FromDays(d).TotalHours,// Convert and Return the expected value
			TimeUnits.Hours => d,// Return the expected value
			_ => d,
		};

		/// <summary>
		/// Converts to days a <see cref="TimeUnits"/>.
		/// </summary>
		/// <param name="d">The time unit to convert.</param>
		/// <param name="timeUnits">The unit of the time. (ex: minutes, hours...)</param>
		/// <returns>The converted value in days.</returns>
		public static double ToDays(double d, TimeUnits timeUnits) => timeUnits switch
		{
			TimeUnits.Milliseconds => TimeSpan.FromMilliseconds(d).TotalDays,// Convert and Return the expected value
			TimeUnits.Seconds => TimeSpan.FromSeconds(d).TotalDays,// Convert and Return the expected value
			TimeUnits.Minutes => TimeSpan.FromMinutes(d).TotalDays,// Convert and Return the expected value
			TimeUnits.Hours => TimeSpan.FromHours(d).TotalDays,// Convert and Return the expected value
			TimeUnits.Days => d,// Return the expected value
			_ => d,
		};

		/// <summary>
		/// Converts Unix Time to a <see cref="DateTime"/>.
		/// </summary>
		/// <param name="unixTime">The Unix Time.</param>
		/// <returns>The unix time converted to <see cref="DateTime"/>.</returns>
		public static DateTime UnixTimeToDateTime(int unixTime)
		{
			DateTime dtDateTime = new(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc); // Create a date
			dtDateTime = dtDateTime.AddSeconds(unixTime).ToLocalTime(); // Add the seconds
			return dtDateTime; // Return the result
		}

		/// <summary>
		/// Converts a <see cref="DateTime"/> to Unix Time.
		/// </summary>
		/// <param name="dateTime">The <see cref="DateTime"/> to convert.</param>
		/// <returns>The converted <see cref="DateTime"/> in unix time.</returns>
		public static int DateTimeToUnixTime(DateTime dateTime)
		{
			DateTime dtDateTime = new(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc); // Create a date
			return (int)dateTime.Subtract(dtDateTime).TotalSeconds; // Return the result
		}
	}
}
