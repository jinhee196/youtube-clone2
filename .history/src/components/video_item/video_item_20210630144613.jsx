import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => {
  return (
    <li>
      <img src={snippet.thumbnails.medium.url} alt="" />
      <div>
        <h3>{snippet.title}</h3>
        <p>{snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoItem;
