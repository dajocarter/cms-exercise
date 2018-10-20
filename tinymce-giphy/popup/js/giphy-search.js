const GiphySearch = {
  /**
   * Request variables w/ defaults set
   */
  endpoint: "trending",
  query: "",
  offset: 0,
  limit: 24,
  search: function(endpoint, query) {
    // Configure URL to fetch
    let fetchURL = `https://api.giphy.com/v1/gifs/${
      this.endpoint
    }?api_key=2C40RpauBXJXFyrVrwNjjFSGGHlVVObw&limit=${this.limit}`;
    if (this.query !== "") fetchURL += `&q=${this.query}`;
    if (this.offset > 0) fetchURL += `&offset=${this.offset}`;
    // Fetch the results
    return fetch(fetchURL)
      .then(resp => resp.json())
      .catch(err => console.log(err));
  }
};
