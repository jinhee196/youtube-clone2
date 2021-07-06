import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = (props) => {
  return (
    <ul className={styles.videoList}>
      {props.videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onClick={handleVideo(() => {
            console.log(video.id);
          })}
        />
      ))}
    </ul>
  );
};

export default VideoList;
