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

using System.IO;
using System.Text.Json;

namespace PeyrSharp.Core
{
	/// <summary>
	/// A helper class for working with JSON files.
	/// </summary>
	public static class JsonHelper
	{
		/// <summary>
		/// Saves an object as a JSON file.
		/// </summary>
		/// <typeparam name="T">The type of the object to save.</typeparam>
		/// <param name="obj">The object to save.</param>
		/// <param name="fileName">The name of the file to save to.</param>
		public static void SaveAsJson<T>(T obj, string fileName)
		{
			// Convert the object to a JSON string
			string json = JsonSerializer.Serialize(obj);

			// Write the JSON string to the file
			File.WriteAllText(fileName, json);
		}

		/// <summary>
		/// Loads an object from a JSON file.
		/// </summary>
		/// <typeparam name="T">The type of the object to load.</typeparam>
		/// <param name="fileName">The name of the file to load from.</param>
		/// <returns>The object loaded from the file.</returns>
		public static T LoadFromJson<T>(string fileName)
		{
			// Read the JSON string from the file
			string json = File.ReadAllText(fileName);

			// Convert the JSON string to an object of type T
			T obj = JsonSerializer.Deserialize<T>(json);

			// Return the object
			return obj;
		}
	}
}
