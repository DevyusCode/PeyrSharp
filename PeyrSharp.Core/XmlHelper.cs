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
using System.IO;
using System.Xml.Serialization;

namespace PeyrSharp.Core
{
	/// <summary>
	/// Provides helper methods for loading and saving objects to/from XML files.
	/// </summary>
	public static class XmlHelper
	{
		/// <summary>
		/// Loads an object of type T from an XML file at the specified path.
		/// If the file does not exist, a new instance of type T will be created
		/// and saved to the file using the SaveToXml method before returning it.
		/// </summary>
		/// <typeparam name="T">The type of object to be loaded.</typeparam>
		/// <param name="path">The path of the XML file to load or create.</param>
		/// <returns>
		/// The loaded object of type T if the file exists and can be deserialized successfully,
		/// or a new instance of type T if the file does not exist and can be created and saved successfully.
		/// If an exception occurs during loading or saving, the method returns <see langword="null"/>.
		/// </returns>
		public static T? LoadFromXml<T>(string path) where T : new()
		{
			try
			{
				// Check if the file exists
				if (File.Exists(path))
				{
					// Create an XmlSerializer for type T
					XmlSerializer serializer = new(typeof(T));

					// Create a StreamReader to read from the file
					using StreamReader reader = new(path);

					// Deserialize the object from the file
					T obj = (T)serializer.Deserialize(reader);

					// Return the object
					return obj;
				}
				else
				{
					Directory.CreateDirectory(Path.GetDirectoryName(path));
					// Create a new instance of type T
					T obj = new();

					// Save the object to the file using the SaveToXml method
					SaveToXml(obj, path);

					// Return the object
					return obj;
				}
			}
			catch (Exception ex)
			{
				// Handle the exception
				Console.WriteLine("An error occurred: " + ex.Message);

				// Return null if an exception is thrown
				return default;
			}
		}

		/// <summary>
		/// Saves the specified object of type T to an XML file at the specified path.
		/// </summary>
		/// <typeparam name="T">The type of object to be saved.</typeparam>
		/// <param name="obj">The object to be saved.</param>
		/// <param name="path">The path of the XML file to save the object.</param>
		/// <returns><see langword="true"/> if the object is successfully serialized and saved to the file; otherwise, <see langword="false"/>.</returns>
		public static bool SaveToXml<T>(T obj, string path)
		{
			// Create an XmlSerializer for type T
			XmlSerializer serializer = new(typeof(T));

			// Create a StreamWriter to write to the file
			StreamWriter writer = new(path);

			// Serialize the object to the file
			serializer.Serialize(writer, obj);

			writer.Dispose();
			// Return true if no exception is thrown
			return true;
		}
	}
}
