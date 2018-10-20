const GiphySearch = {
  /**
   * Request variables w/ defaults set
   */
  endpoint: "trending",
  query: "",
  offset: 0,
  limit: 24,
  renderGifs: function(resp) {
    // Grab the UL
    const gifsContainer = document.getElementById("gifs");
    // Empty out the UL if a new search
    if (resp.pagination && resp.pagination.offset === 0) {
      gifsContainer.innerHTML = "";
    }
    // Create an LI for each gif and add it to the list
    resp.data &&
      resp.data.map(gif => {
        // Create elements to inject
        let li = document.createElement("li"),
          img = document.createElement("img");
        // Set src for gif (apparently, fixed_height_small url doesn't exist for all gifs)
        img.src = gif.images.fixed_height_small.url
          ? gif.images.fixed_height_small.url
          : gif.images.fixed_height.url;
        // Set data-gif-id for use in iframe src url when embedding gif
        img.dataset.gifId = gif.id;
        // Append IMG to LI and LI to UL
        li.appendChild(img);
        gifsContainer.appendChild(li);
      });
  },
  /**
   * Returns request from GIPHY
   * @param {string} [url] - Endpoint to request. Should be empty to keep current request terms. Otherwise, must be one of 'search' or 'trending'.
   * @param {string} [query] - The search term.
   * @returns {Promise} Promise object represents the data returned from GIPHY.
   */
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
      .then(resp => this.renderGifs(resp))
      .catch(err => console.log(err));
  }
};
