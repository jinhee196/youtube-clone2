class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular() {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyDLywHKXEhmr2x6ikNEUiT8UijZhU0xvdg&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDLywHKXEhmr2x6ikNEUiT8UijZhU0xvdg",
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items);
  }
}
