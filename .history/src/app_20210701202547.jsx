import { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import Header from "./components/header/header";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  const onVideoClick = (video) => {
    setSelected(video);
  };
  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      {selected && <VideoDetail showVideo={selected} />}
      <VideoList
        videos={videos}
        onVideoClick={onVideoClick}
        display={selected ? "list" : "grid"}
      />
      ;
    </div>
  );
}

export default App;
