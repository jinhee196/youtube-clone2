import { useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list";

function App() {
  const [videos, setVideos] = useState([]);
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyDA3xwcVmJJhhvnOlrQL-430z343M-qMhE&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDA3xwcVmJJhhvnOlrQL-430z343M-qMhE",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => setVideos(result))
    .catch((error) => console.log("error", error));

  return <VideoList />;
}

export default App;
