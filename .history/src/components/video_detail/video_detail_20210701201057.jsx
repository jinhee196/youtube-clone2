import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = (props) => (
  <section className={styles.seletVideo}>
    <iframe
      id={props.video.snippet.title}
      type="text/html"
      width="100%"
      height="405"
      src={`https://www.youtube.com/embed/${props.video.id}`}
      frameborder="0"
      allowfullscreen
    />
  </section>
);

export default VideoDetail;
