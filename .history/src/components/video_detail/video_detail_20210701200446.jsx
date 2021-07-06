import React from "react";

const VideoDetail = ({ showVideo }) => (
  <iframe
    id={video.snippet.title}
    type="text/html"
    width="100%"
    height="405"
    src={`https://www.youtube.com/embed/${video.id}`}
    frameborder="0"
    allowfullscreen
  />
);

export default VideoDetail;
