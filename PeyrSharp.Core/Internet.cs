		/// <summary>
		/// Gets the status code of a specific page by making a request to it.
		/// </summary>
		/// <param name="url">The URL where to send the request.</param>
		/// <returns>The status code of the specified URL.</returns>
		public static async Task<int> GetStatusCodeAsync(string url) => (int)(await new HttpClient().GetAsync(url)).StatusCode;

		/// <summary>
		/// Gets the status description of a specific page by making a request to it.
		/// </summary>
		/// <param name="url">The URL where to send the request.</param>
		/// <returns>The status description of the specified URL.</returns>
		public static async Task<string> GetStatusDescriptionAsync(string url) => (await new HttpClient().GetAsync(url)).ReasonPhrase;

