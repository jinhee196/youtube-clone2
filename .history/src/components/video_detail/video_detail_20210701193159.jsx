import React from "react";

const VideoDetail = (props) => (
  <iframe
    id="ytplayer"
    type="text/html"
    width="100%"
    height="405"
    src={`https://www.youtube.com/embed/${props.video.snippet.title}`}
    frameborder="0"
    allowfullscreen
  />
);

export default VideoDetail;
