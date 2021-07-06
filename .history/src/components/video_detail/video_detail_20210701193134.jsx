import React from "react";

const VideoDetail = (props) => (
  <iframe
    id="ytplayer"
    type="text/html"
    width="100%"
    height="405"
    src={`https://www.youtube.com/${props.video.id}`}
    frameborder="0"
    allowfullscreen
  />
);

export default VideoDetail;
