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
using System.IO;

namespace PeyrSharp.Env
{
	/// <summary>
	/// Class that contains methods to log information to a file.
	/// </summary>
	public static class Logger
	{
		/// <summary>
		/// Logs a message to a file.
		/// </summary>
		/// <param name="message">The log message to be written.</param>
		/// <param name="filePath">The path to the log file. Must contain an extension.</param>
		/// <param name="dateTime">The date time of the log.</param>
		public static void Log(string message, string filePath, DateTime dateTime)
		{
			if (!Directory.Exists(filePath))
			{
				Directory.CreateDirectory(Path.GetDirectoryName(filePath));
			}

			if (!File.Exists(filePath))
			{
				File.Create(filePath); // Create file
			}

			File.AppendAllText(filePath, $"[{dateTime}] {message}"); // Log
		}

		/// <summary>
		/// Logs a formatted message to a file.
		/// </summary>
		/// <param name="message">The log message to be written.</param>
		/// <param name="filePath">The path to the log file. Must contain an extension.</param>
		/// <param name="formatString">An object array that contains zero or more objects to format.</param>
		public static void Log(string message, string filePath, params object[] formatString)
		{
			if (!Directory.Exists(filePath))
			{
				Directory.CreateDirectory(Path.GetDirectoryName(filePath));
			}

			if (!File.Exists(filePath))
			{
				File.Create(filePath); // Create file
			}

			File.AppendAllText(filePath, string.Format(message, formatString)); // Log
		}

		/// <summary>
		/// Logs a message with the specified severity level, file path, and timestamp.
		/// </summary>
		/// <param name="message">The message to log.</param>
		/// <param name="filePath">The path to the file where the message was logged.</param>
		/// <param name="dateTime">The timestamp for the log message.</param>
		/// <param name="logLevel">The severity level for the log message.</param>
		public static void Log(string message, string filePath, DateTime dateTime, LogLevel logLevel) => Log($"[{LogLevelToString(logLevel)}] {message}", filePath, dateTime);

		private static string LogLevelToString(LogLevel level) => level switch
		{
			LogLevel.Error => "Error",
			LogLevel.Warning => "Warning",
			LogLevel.Info => "Info",
			LogLevel.Critical => "Critical",
			LogLevel.Debug => "Debug",
			_ => "Misc"
		};
	}
}
