import React from "react";

const VideoDetail = ({ video }) => (
  <iframe
    id="ytplayer"
    type="text/html"
    width="100%"
    height="405"
    src={`https://www.youtube.com/embed/${video.id}`}
    frameborder="0"
    allowfullscreen
  />
);

export default VideoDetail;
