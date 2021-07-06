import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = (props) => (
  <section className={styles.seletedVideo}>
    <iframe
      id={props.video.snippet.title}
      type="text/html"
      width="100%"
      height="405"
      src={`https://www.youtube.com/embed/${props.video.id}`}
      frameBorder="0"
      allowFullScreen
    />
  </section>
);

export default VideoDetail;
