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
using System.Collections.Specialized;
using System.Linq;
using System.Text;
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
	}
}
