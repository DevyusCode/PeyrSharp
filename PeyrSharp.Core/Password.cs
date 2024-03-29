﻿/*
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
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeyrSharp.Core
{
	/// <summary>
	/// A class that contains methods to generate and test passwords.
	/// </summary>
	public static class Password
	{
		/// <summary>
		/// Generates a password asynchronously.
		/// </summary>
		/// <param name="length">The length of the password.</param>
		/// <param name="chars">The characters that can be used in the generated password.</param>
		/// <param name="separator">The separator used in the chars string.</param>
		/// <returns>The generated password.</returns>
		/// <exception cref="Exception"></exception>
		public static Task<string> GenerateAsync(int length, string chars, string separator)
		{
			Task<string> task = new(() =>
			{
				// Split all chars contained in the string to an array
				string[] usableChars = { };

				if (chars.Contains(separator))
				{
					usableChars = chars.Split(new string[] { separator }, StringSplitOptions.None);
				}
				else
				{
					throw new Exception("The parameter 'chars' (string) does not contain the specified seperator.");
				}

				// Setup variables
				string finalPassword = "";
				Random random = new();
				int number = 0;

				if (length > 0) // Check if the length valid
				{
					for (int i = 1; i < length; i++) // Generate a password of a specific length
					{
						number = random.Next(0, usableChars.Length);
						finalPassword += usableChars[number]; // Append a character to the string
					}
				}
				else
				{
					throw new Exception("The parameter 'length' (int) must be higher than 0.");
				}
				return finalPassword;
			});
			task.Start();
			return task;
		}

		/// <summary>
		/// Asynchronously generates a string of a specified length using a given set of characters.
		/// </summary>
		/// <param name="length">The length of the string to generate.</param>
		/// <param name="chars">An array of characters to use for generating the string.</param>
		/// <returns>A task that represents the asynchronous operation. The task result contains the generated string.</returns>
		/// <exception cref="Exception">Throws an exception if the length parameter is not greater than 0.</exception>
		public static Task<string> GenerateAsync(int length, string[] chars)
		{
			Task<string> task = new(() =>
			{
				// Setup variables
				string finalPassword = "";
				Random random = new();
				int number = 0;

				if (length > 0) // Check if the length valid
				{
					for (int i = 1; i < length; i++) // Generate a password of a specific length
					{
						number = random.Next(0, chars.Length);
						finalPassword += chars[number]; // Append a character to the string
					}
				}
				else
				{
					throw new Exception("The parameter 'length' (int) must be higher than 0.");
				}
				return finalPassword;
			});
			task.Start();
			return task;
		}

		/// <summary>
		/// Generates a password asynchronously.
		/// </summary>
		/// <param name="length">The length of the password.</param>
		/// <param name="passwordPresets">The preset used to generate a password.</param>
		/// <returns>The generated password.</returns>
		/// <exception cref="Exception"></exception>
		public static async Task<string> GenerateAsync(int length, PasswordPresets passwordPresets)
		{
			if (length <= 0) throw new Exception("The parameter 'length' (int) must be higher than 0.");

			return passwordPresets switch // For each case
			{
				// If the preset is set to Simple
				PasswordPresets.Simple => await GenerateAsync(length, "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9", ","),// Generate password																																													// If the presete is complex
				PasswordPresets.Complex => await GenerateAsync(length, "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9,/,é,&,ç,à,@,°,{,},(,),#,&", ","),// Generate password
				_ => "", // Return a default value
			};
		}

		/// <summary>
		/// Generates a specific amount of passwords.
		/// </summary>
		/// <param name="amount">The number of passwords to generate.</param>
		/// <param name="length">The length of the password.</param>
		/// <param name="chars">The characters that can be used in the generated password.</param>
		/// <param name="separator">The separator used in the chars string.</param>
		/// <returns>The generated passwords in a <see cref="List{T}"/>.</returns>
		/// <exception cref="Exception"></exception>
		public static async Task<List<string>> GenerateAsync(int amount, int length, string chars, string separator)
		{
			if (length <= 0 || amount <= 0) throw new Exception("The parameter 'length' (int) must be higher than 0.");

			List<string> passwords = new(); // Create list where all passwords will be stored.

			for (int i = 0; i < amount; i++)
			{
				passwords.Add(await GenerateAsync(length, chars, separator)); // Generate a password
			}

			return passwords; // Return the list with all the generated passwords
		}

		/// <summary>
		/// Generates a specific amount of passwords.
		/// </summary>
		/// <param name="amount">The number of passwords to generate.</param>
		/// <param name="length">The length of the password.</param>
		/// <param name="passwordPresets">The preset used to generate a password.</param>
		/// <returns>The generated passwords in a <see cref="List{T}"/>.</returns>
		/// <exception cref="Exception"></exception>
		public static async Task<List<string>> GenerateAsync(int amount, int length, PasswordPresets passwordPresets)
		{
			if (length <= 0 || amount <= 0) throw new Exception("The parameter 'length' (int) must be higher than 0.");

			List<string> passwords = new(); // Create list where all passwords will be stored.

			for (int i = 0; i < amount; i++)
			{
				passwords.Add(await GenerateAsync(length, passwordPresets)); // Generate a password
			}

			return passwords; // Return the list with all the generated passwords
		}

		/// <summary>
		/// Numbers that can be contained in a password.
		/// </summary>
		public static string[] Numbers => new string[] { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" };

		/// <summary>
		/// Special characters that can be contained in a password.
		/// </summary>
		public static string[] SpecialCharacters => new string[] { ";", ":", "!", "/", "§", "ù", "*", "$", "%", "µ", "£", ")", "=", "+", "*", "-", "&", "é", "'", "(", "-", "è", "_", "ç", "<", ">", "?", "^", "¨" };

		/// <summary>
		/// Characters that shouldn't be included in a password
		/// </summary>
		public static string[] ForbidenCharacters => new string[] { "123", "456", "789", "password", "mdp", "pswr", "000", "admin", "111", "222", "333", "444", "555", "666", "777", "888", "999" };

		/// <summary>
		/// Lower case characters.
		/// </summary>
		public static string[] LowerCaseLetters => new string[] { "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" };

		/// <summary>
		/// Upper case characters.
		/// </summary>
		public static string[] UpperCaseLetters => new string[] { "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" };

		/// <summary>
		/// Calculates the strength of a password, which depends on its length and the characters used.
		/// </summary>
		/// <param name="password">The password to evaluate.</param>
		/// <returns>The stregth of the password</returns>
		/// <remarks>
		/// The strength returned might not reflect the actual strength and value of the password.
		/// </remarks>
		/// <exception cref="Exception"></exception>
		public static PasswordStrength GetStrength(string password)
		{
			if (password.Length <= 0) throw new Exception("The lengthof the password must be higher than 0.");

			int score = password.Length / 3; // Calculates the score from the length

			// Init variables
			bool hasNumbers = false;
			bool hasUpper = false;
			bool hasLower = false;
			bool hasSpecial = false;
			bool hasForbidden = false;

			// Check if the password contains numbers
			for (int i = 0; i < password.Length; i++)
			{
				hasUpper = Numbers.Contains(password[i].ToString());
				if (hasUpper) break;
			}

			// Check if the password contains lowercases
			for (int i = 0; i < password.Length; i++)
			{
				hasUpper = LowerCaseLetters.Contains(password[i].ToString());
				if (hasUpper) break;
			}

			// Check if the password contains uppercases
			for (int i = 0; i < password.Length; i++)
			{
				hasUpper = UpperCaseLetters.Contains(password[i].ToString());
				if (hasUpper) break;
			}

			// Check if the password contains special chars
			for (int i = 0; i < password.Length; i++)
			{
				hasUpper = SpecialCharacters.Contains(password[i].ToString());
				if (hasUpper) break;
			}

			// Check if the password contains lowercases
			for (int i = 0; i < password.Length; i++)
			{
				hasUpper = ForbidenCharacters.Contains(password[i].ToString());
				if (hasUpper) break;
			}

			score += hasLower ? 1 : 0;
			score += hasNumbers ? 1 : 0;
			score += hasUpper ? 1 : 0;
			score += hasSpecial ? 2 : 0;
			score -= hasForbidden ? 3 : 0;

			if (score <= 3)
			{
				return PasswordStrength.Low; // Return
			}
			else if (score > 3 && score <= 5)
			{
				return PasswordStrength.Medium; // Return
			}
			else if (score >= 6 && score <= 8)
			{
				return PasswordStrength.Good; // Return
			}
			else
			{
				return PasswordStrength.VeryGood; // Return
			}
		}
	}
}
