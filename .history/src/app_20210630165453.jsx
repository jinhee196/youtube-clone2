import { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import Header from "./components/header/header";

function App() {
  const [videos, setVideos] = useState([]);

  const search = (param) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDLywHKXEhmr2x6ikNEUiT8UijZhU0xvdg&part=snippet&maxResults=25&q=${param}&key=AIzaSyDLywHKXEhmr2x6ikNEUiT8UijZhU0xvdg`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyDLywHKXEhmr2x6ikNEUiT8UijZhU0xvdg&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDLywHKXEhmr2x6ikNEUiT8UijZhU0xvdg",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={styles.app}>
      <Header search={search} />
      <VideoList videos={videos} />;
    </div>
  );
}

export default App;
