import { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import Header from "./components/header/header";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube.search(query).then(setVideos);
  };

  useEffect(() => {
    youtube.mostPopular().then(setVideos);
  }, []);

  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      <VideoList videos={videos} />;
    </div>
  );
}

export default App;
