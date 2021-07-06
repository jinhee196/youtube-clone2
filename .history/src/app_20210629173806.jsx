import { useState } from "react";
import styles from "./app.module.css";

function App() {
  const [video, setVideo] = useState([]);
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyDA3xwcVmJJhhvnOlrQL-430z343M-qMhE&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDA3xwcVmJJhhvnOlrQL-430z343M-qMhE",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return <h1 className={styles.app}>Hello :)</h1>;
}

export default App;
