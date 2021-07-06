import React from "react";

const VideoDetail = ({ videos }) => (
  <iframe
    id={videos.snippet.title}
    type="text/html"
    width="100%"
    height="405"
    src={`https://www.youtube.com/embed/${videos.id}`}
    frameborder="0"
    allowfullscreen
  />
);

export default VideoDetail;
