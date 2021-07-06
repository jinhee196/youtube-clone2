class Youtube {
  constructor(key) {
    this.key = key;
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
}
