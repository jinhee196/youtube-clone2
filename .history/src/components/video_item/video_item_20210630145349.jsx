import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => {
  return (
    <li className={styles.video}>
      <img src={snippet.thumbnails.medium.url} alt="thummbnails" />
      <div className={styles.txtbox}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.subtitle}>{snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoItem;
