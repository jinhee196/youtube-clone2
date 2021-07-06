import { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import Header from "./components/header/header";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube.search(query).then(console.log);
  };

  useEffect(() => {
    youtube.mostPopular().then(console.log);
  }, []);

  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      <VideoList videos={videos} />;
    </div>
  );
}

export default App;
