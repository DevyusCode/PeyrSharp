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

		/// <summary>
		/// Checks if a connection to the Internet is available.
		/// </summary>
		/// <param name="url">The page where to check if Internet is available.</param>
		/// <returns><see langword="true"/> if the Internet can be reach.</returns>
		public static async Task<bool> IsAvailableAsync(string url) => await GetStatusCodeAsync(url) != 400;

		/// <summary>
		/// Checks if a connection to the Internet is available.
		/// </summary>
		/// <returns><see langword="true"/> if the Internet can be reach.</returns>
		public static async Task<bool> IsAvailableAsync() => await GetStatusCodeAsync("https://www.bing.com") != 400;

