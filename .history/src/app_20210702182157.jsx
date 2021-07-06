import { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import Header from "./components/header/header";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);

  const search = useCallback(
    //useCallback은 메모리에 저장되기 때문에 정말 필요할 때만 써야함
    //ex) 자식 컴포넌트에 props로 전달할때 계속 새로운 콜백을 전달하면
    //자식 컴포넌트가 다시 re-render가 발생할 수 있으니, 그럴때만 사용
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

  const onVideoClick = (video) => {
    setSelected(video);
  };
  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      <section className={styles.content}>
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
