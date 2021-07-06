import React from "react";

const VideoDetail = (props) => (
  <section>
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
