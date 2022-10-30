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
using PeyrSharp.Enums;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Versioning;
using System.Text;
using System.Threading.Tasks;

namespace PeyrSharp.Env
{
	/// <summary>
	/// Methods related to the file system.
	/// </summary>
	public static class FileSys
	{
		private static double ConvertBytes(double b, StorageUnits unit) => unit switch
		{
			StorageUnits.Kilobyte => b / 1000,
			StorageUnits.Megabyte => b / 1000000,
			StorageUnits.Gigabyte => b / 1000000000,
			StorageUnits.Terabyte => b / 1000000000000,
			StorageUnits.Petabyte => b / 1000000000000000,
			_ => b
		};

		/// <summary>
		/// Gets the amount of available storage space on a specified drive.
		/// </summary>
		/// <param name="drive">The drive letter or name to get the amount of available space.</param>
		/// <param name="unit">The unit of the result returned.</param>
		/// <returns>The amount of free storage space.</returns>
		/// <exception cref="DriveNotFoundException"></exception>
		/// <exception cref="ArgumentException"></exception>
		/// <exception cref="ArgumentNullException"></exception>
		public static double GetAvailableSpace(string drive, StorageUnits unit) => ConvertBytes(new DriveInfo(drive).AvailableFreeSpace, unit);

		/// <summary>
		/// Gets the amount of available storage space on a specified drive.
		/// </summary>
		/// <param name="drive">The <see cref="DriveInfo"/> object to get the amount of available space.</param>
		/// <param name="unit">The unit of the result returned.</param>
		/// <returns>The amount of free storage space.</returns>
		/// <exception cref="DriveNotFoundException"></exception>
		/// <exception cref="ArgumentException"></exception>
		/// <exception cref="ArgumentNullException"></exception>		
		public static double GetAvailableSpace(DriveInfo drive, StorageUnits unit) => ConvertBytes(drive.AvailableFreeSpace, unit);

		/// <summary>
		/// Gets the amount of occupied storage space on a specified drive.
		/// </summary>
		/// <param name="drive">The drive to letter or name to get the amount of occupied space.</param>
		/// <param name="unit">The unit of the result returned.</param>
		/// <returns>The amount of occupied storage space.</returns>
		/// <exception cref="DriveNotFoundException"></exception>
		/// <exception cref="ArgumentException"></exception>
		/// <exception cref="ArgumentNullException"></exception>
		public static double GetOccupiedSpace(string drive, StorageUnits unit) => ConvertBytes(new DriveInfo(drive).TotalSize, unit) - GetAvailableSpace(drive, unit);

		/// <summary>
		/// Gets the amount of occupied storage space on a specified drive.
		/// </summary>
		/// <param name="drive">The <see cref="DriveInfo"/> object to get the amount of occupied space.</param>
		/// <param name="unit">The unit of the result returned.</param>
		/// <returns>The amount of occupied storage space.</returns>
		/// <exception cref="DriveNotFoundException"></exception>
		/// <exception cref="ArgumentException"></exception>
		/// <exception cref="ArgumentNullException"></exception>	
		public static double GetOccupiedSpace(DriveInfo drive, StorageUnits unit) => ConvertBytes(drive.TotalSize, unit) - GetAvailableSpace(drive, unit);

		/// <summary>
		/// Gets the total amount of space of a specified drive.
		/// </summary>
		/// <param name="drive">The drive to get the total space of.</param>
		/// <param name="unit">The unit of the result returned.</param>
		/// <returns>The total amount of space.</returns>
		/// <exception cref="DriveNotFoundException"></exception>
		/// <exception cref="ArgumentException"></exception>
		/// <exception cref="ArgumentNullException"></exception>
		public static double GetTotalSpace(string drive, StorageUnits unit) => ConvertBytes(new DriveInfo(drive).TotalSize, unit);

		/// <summary>
		/// Gets the total amount of space of a specified drive.
		/// </summary>
		/// <param name="drive">The <see cref="DriveInfo"/> object to get the total space of.</param>
		/// <param name="unit">The unit of the result returned.</param>
		/// <returns>The total amount of space.</returns>
		/// <exception cref="DriveNotFoundException"></exception>
		/// <exception cref="ArgumentException"></exception>
		/// <exception cref="ArgumentNullException"></exception>
		public static double GetTotalSpace(DriveInfo drive, StorageUnits unit) => ConvertBytes(drive.TotalSize, unit);

		/// <summary>
		/// Counts the number of characters in specified file asynchronously.
		/// </summary>
		/// <param name="fileName">The file path of the file.</param>
		/// <exception cref="ArgumentNullException"></exception>
		/// <exception cref="FileNotFoundException"></exception>
		/// <returns>The number of characters in the specified file.</returns>
		public static async Task<int> CountFileCharactersAsync(string fileName)
		{
			if (string.IsNullOrEmpty(fileName)) // If the specified fileName is null
			{
				throw new ArgumentNullException("The parameter 'fileName' is null or empty."); // Erreur
			}

			if (!File.Exists(fileName)) // if the file doesn't exist
			{
				throw new FileNotFoundException("The parameter 'fileName' does not lead to a specific file name."); // Erreur
			}
			return (await File.ReadAllTextAsync(fileName)).Length; // Get the length of the file text.
		}

		/// <summary>
		/// Checks if your program has the permission to write a file in a specific directory.
		/// </summary>
		/// <param name="filePath">The path to the directory.</param>
		/// <returns><see langword="true"/> if you can write a file in the specified directory.</returns>
		public static bool CanWriteFile(string filePath)
		{
			if (!Directory.Exists(filePath))
			{
				throw new DirectoryNotFoundException("The directory does not exist or is invalid.");
			}

			try
			{
				Directory.CreateDirectory($@"{filePath}\PeyrSharpTest");
				Directory.Delete($@"{filePath}\PeyrSharpTest");
			}
			catch
			{
				return false;
			}

			return true;
		}

		/// <summary>
		/// Gets the system drive, where Windows is installed.
		/// </summary>
		/// <remarks>Only works with Windows.</remarks>
		[SupportedOSPlatform("windows")]
		public static DriveInfo SystemDrive { get => (System.CurrentOperatingSystem == OperatingSystems.Windows) ? new DriveInfo(Environment.SystemDirectory) : DriveInfo.GetDrives()[0]; }

	}
}
