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
using System.Linq;

namespace PeyrSharp.Extensions
{
	/// <summary>
	/// Methods that extend arrays.
	/// </summary>
	public static class ArrayExtensions
	{
		/// <summary>
		/// Adds an item to an existing array.
		/// </summary>
		/// <typeparam name="T">The type of the array.</typeparam>
		/// <param name="array">The array where the item is going to be append.</param>
		/// <param name="item">The item which is going to be append in the array.</param>
		/// <returns>An <see cref="Array"/>.</returns>
		public static T[] Append<T>(this T[] array, T item)
		{
			if (array.Length == 0) // If the array is empty
			{
				return new T[] { item }; // Return a new array with the item
			}

			T[] items = { item }; // Create an array with the items
			return new List<T>(array.Concat(items)).ToArray(); // Return the final array
		}

		/// <summary>
		/// Adds items to an existing array.
		/// </summary>
		/// <typeparam name="T">The type of the array.</typeparam>
		/// <param name="array">The array where the items are going to be append.</param>
		/// <param name="items">The items which are going to be append in the array.</param>
		/// <exception cref="ArgumentNullException"></exception>
		/// <returns>An <see cref="Array"/>.</returns>
		public static T[] Append<T>(this T[] array, params T[] items)
		{
			if (items.Length <= 0) // If there is no items
			{
				throw new ArgumentNullException($"The '{nameof(items)}' parameter cannot be null or empty."); // Error
			}

			if (array.Length == 0) // If the array is empty
			{
				T[] finalArrayEmpty = new T[items.Length]; // Final array

				for (int i = 0; i < items.Length; i++) // For each item
				{
					finalArrayEmpty[i] = items[i]; // Add each item to the array
				}

				return finalArrayEmpty; // Return final array
			}

			T[] finalArray = new T[items.Length]; // Create an array

			for (int i = 0; i < items.Length; i++) // For each item
			{
				finalArray[i] = items[i]; // Add each item to the array
			}

			return new List<T>(array.Concat(finalArray)).ToArray(); // Return the final array
		}

		/// <summary>
		/// Removes a specific item from an array.
		/// </summary>
		/// <typeparam name="T">The type of the array.</typeparam>
		/// <param name="array">The array where the item is going to be removed.</param>
		/// <param name="item">The item to remove.</param>
		/// <returns>An <see cref="Array"/>.</returns>
		public static T[] RemoveElement<T>(this T[] array, T item)
		{
			if (array.Length <= 0) // If the array is null or empty
			{
				throw new ArgumentNullException($"The '{nameof(array)}' parameter cannot be null or empty."); // Error
			}

			List<T> list = new(array); // Create list from the array
			list.Remove(item); // Remove the item
			return list.ToArray(); // Return the new array
		}

		/// <summary>
		/// Removes a specific item from an array.
		/// </summary>
		/// <typeparam name="T">The type of the array.</typeparam>
		/// <param name="array">The array where the items are going to be removed.</param>
		/// <param name="items">The items to remove.</param>
		/// <returns>An <see cref="Array"/>.</returns>
		public static T[] RemoveElement<T>(this T[] array, params T[] items)
		{
			if (array.Length <= 0) // If the array is null or empty
			{
				throw new ArgumentNullException($"The '{nameof(array)}' parameter cannot be null or empty."); // Error
			}

			List<T> list = new(array); // Create list from array

			foreach (T item in items) // For each item
			{
				if (list.Contains(item)) // If the mist contains the item
				{
					list.Remove(item); // Remove the item
				}
			}

			return list.ToArray(); // Return the new array
		}

		/// <summary>
		/// Concatenates the elements of a string array, using the specified separator between each element.
		/// </summary>
		/// <param name="array">The array of strings to concatenate.</param>
		/// <param name="separator">The string to use as a separator.</param>
		/// <returns>A string that consists of the elements of <paramref name="array"/> delimited by the <paramref name="separator"/> string. If <paramref name="array"/> has no elements, the method returns an empty string.</returns>
		public static string UnSplit(this string[] array, string separator)
		{
			string final = "";
			for (int i = 0; i < array.Length; i++)
			{
				final += array[i] + ((i < array.Length) ? separator : "");
			}
			return final;
		}
	}
}
