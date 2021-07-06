class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular() {
    return fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyDLywHKXEhmr2x6ikNEUiT8UijZhU0xvdg&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDLywHKXEhmr2x6ikNEUiT8UijZhU0xvdg",
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items);
  }

  search(query) {
    return fetch(
      //채널말고 비디오만 나오게 하려면 type=video 추가!
      `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDLywHKXEhmr2x6ikNEUiT8UijZhU0xvdg&part=snippet&maxResults=25&q=${param}&type=video&key=AIzaSyDLywHKXEhmr2x6ikNEUiT8UijZhU0xvdg`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
}
