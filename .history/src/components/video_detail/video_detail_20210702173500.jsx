import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = (props) => (
  <section className={styles.seletedVideo}>
    <iframe
      className={styles.detail}
      id={props.showVideo.snippet.title}
      type="text/html"
      title="youtube"
      width="100%"
      height="500"
      src={`https://www.youtube.com/embed/${props.showVideo.id}`}
      frameBorder="0"
      allowFullScreen
    />
    <h2>{props.showVideo.snippet.title}</h2>
    <h3>{props.showVideo.snippet.channelTitle}</h3>
    <p>{props.showVideo.snippet.description}</p>
  </section>
);

export default VideoDetail;
