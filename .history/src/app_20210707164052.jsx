import { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import Header from "./components/header/header";
import VideoDetail from "./components/video_detail/video_detail";
import Nav from "./components/nav/nav";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);

  const onVideoClick = useCallback((video) => {
    setSelected(video);
  });
  const search = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((videos) => setVideos(videos));
      setSelected(null); //grid(50%)
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <Header onSearch={search} />

      <section className={styles.content}>
        <Nav />
        {selected && (
          <div className={styles.detail}>
            <VideoDetail showVideo={selected} />
          </div>
        )}

        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={onVideoClick}
            display={selected ? "list" : "grid"} //selected면 list고 아니면 grid
          />
        </div>
      </section>
    </div>
  );
}

export default App;
