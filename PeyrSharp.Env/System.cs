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
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Runtime.Versioning;

namespace PeyrSharp.Env
{
	/// <summary>
	/// Class containing methods related to the system environment.
	/// </summary>
	public static class System
	{
		/// <summary>
		/// Gets the current Operating system.
		/// </summary>
		public static OperatingSystems CurrentOperatingSystem
		{
			get
			{
				if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows)) // If the OS is Windows
				{
					return OperatingSystems.Windows; // Return Windows
				}
				else if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX)) // If the OS is macOS
				{
					return OperatingSystems.macOS; // Return macOS
				}
				else if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
				{
					return OperatingSystems.Linux; // Return Linux
				}
				else
				{
					return OperatingSystems.Unknown; // Return unknown
				}
			}
		}

		/// <summary>
		/// Gets the current Windows Version.
		/// </summary>
		/// <remarks>You can execute this method on other platforms than Windows, but it will return <see cref="WindowsVersion.Unknown"/>.</remarks>
		[SupportedOSPlatform("windows")]
		public static WindowsVersion CurrentWindowsVersion
		{
			get
			{
				switch (Environment.OSVersion.Version.Major)
				{
					case 6: // If major version is 6
						return Environment.OSVersion.Version.Minor switch
						{
							// If Windows 7 (6.1)
							1 => WindowsVersion.Windows7,// Windows 7
														 // If Windows 8 (6.2)
							2 => WindowsVersion.Windows8,// Windows 8
														 // If Windows 8.1 (6.3)
							3 => WindowsVersion.Windows81,// Windows 8.1
							_ => WindowsVersion.Unknown,
						};
					case 10: // If Windows 10/11 (NT 10.0)
						if (Environment.OSVersion.Version.Build >= 22000)
						{
							return WindowsVersion.Windows11; // Windows 11
						}
						return WindowsVersion.Windows10; // Windows 10
					default:
						return WindowsVersion.Unknown;
				}
			}
		}

		/// <summary>
		/// Gets all running processes.
		/// </summary>
		public static Process[] RunningProcesses => Process.GetProcesses();

		/// <summary>
		/// Gets the names of currently running processes.
		/// </summary>
		public static string[] RunningProcessesNames
		{
			get
			{
				static IEnumerable<string> GetProcs()
				{
					var procs = Process.GetProcesses();
					for (int i = 0; i < procs.Length; i++)
					{
						yield return procs[i].ProcessName;
					}
				}

				return GetProcs().ToArray();
			}
		}

		/// <summary>
		/// Launches an UWP application.
		/// </summary>
		/// <param name="packageFamilyName">The <c>PackageFamilyName</c> property.</param>
		/// <param name="applicationID">The <c>Application Id</c> property in the UWP <c>AppxManifest.xml</c> file.</param>
		public static void LaunchUWPApp(string packageFamilyName, string applicationID)
		{
			Process.Start("explorer.exe", $@"shell:appsFolder\{packageFamilyName}!{applicationID}"); // Synthax to launch UWP apps
		}

		/// <summary>
		/// Executes a program in administrator mode.
		/// </summary>
		/// <param name="process">The process to launch as admin.</param>
		/// <exception cref="ArgumentNullException"></exception>
		/// <exception cref="FileNotFoundException"></exception>
		/// <remarks>The 'process' parameter must have a valid path to the programm to launch in admin mode in <see cref="Process.StartInfo"/>.</remarks>
		public static void ExecuteAsAdmin(Process process)
		{
			// Checks if 'fileName' is valid or not
			if (string.IsNullOrEmpty(process.StartInfo.FileName))
			{
				throw new ArgumentNullException("The parameter 'process' has a 'FileName' that is null or empty."); // Message d'erreur
			}

			if (!File.Exists(process.StartInfo.FileName))
			{
				throw new FileNotFoundException("The parameter 'process' has a 'FileName' that does not lead to an existing file."); // Message d'erreur
			}

			process.StartInfo.UseShellExecute = true;
			process.StartInfo.Verb = "runas";
			process.Start(); // Start
		}

		/// <summary>
		/// Executes a program in administrator mode.
		/// </summary>
		/// <param name="filename">The path to the program to launch in admin mode.</param>
		/// <exception cref="ArgumentNullException"></exception>
		/// <exception cref="FileNotFoundException"></exception>
		public static void ExecuteAsAdmin(string filename)
		{
			// Checks if 'fileName' is valid or not
			if (string.IsNullOrEmpty(filename))
			{
				throw new ArgumentNullException("The parameter 'filename' is null or empty."); // Message d'erreur
			}

			if (!File.Exists(filename))
			{
				throw new FileNotFoundException("The parameter 'filename' does not lead to an existing file."); // Message d'erreur
			}
			ProcessStartInfo processStartInfo = new()
			{
				FileName = filename, // Set the file name of the process
				UseShellExecute = true,
				Verb = "runas"
			};
			Process process = new()
			{
				StartInfo = processStartInfo
			};
			process.Start(); // Start
		}

		/// <summary>
		/// Checks if the <see cref="CurrentWindowsVersion"/> supports dark theme.
		/// </summary>
		[SupportedOSPlatform("windows")]
		public static bool IsDarkThemeSupported => CurrentWindowsVersion == WindowsVersion.Windows10 || CurrentWindowsVersion == WindowsVersion.Windows11;

		/// <summary>
		/// Gets the current UnixTime.
		/// </summary>
		/// <returns>The current unix time.</returns>
		public static int UnixTime => (int)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1)).TotalSeconds; // Get Unix Time
	}
}
