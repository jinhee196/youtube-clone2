import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <li
      className={`{styles.video} ${displayType}`}
      onClick={() => {
        onVideoClick(video);
      }}
    >
      <div className={styles.content}>
        <img src={snippet.thumbnails.medium.url} alt="thummbnails" />
        <div className={styles.txtbox}>
          <h3 className={styles.title}>{snippet.title}</h3>
          <p className={styles.subtitle}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
