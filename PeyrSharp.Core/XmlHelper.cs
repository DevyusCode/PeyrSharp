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
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace PeyrSharp.Core
{
	public static class XmlHelper
	{
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
