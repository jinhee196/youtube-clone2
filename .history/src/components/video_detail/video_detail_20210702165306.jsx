import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = (props) => (
  <section className={styles.seletedVideo}>
    <iframe
      id={props.showVideo.snippet.title}
      type="text/html"
      width="100%"
      height="500"
      src={`https://www.youtube.com/embed/${props.showVideo.id}`}
      frameBorder="0"
      allowFullScreen
    />
    <h1>{props.showVideo.snippet.title}</h1>
  </section>
);

export default VideoDetail;
