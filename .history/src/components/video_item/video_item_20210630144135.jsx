import React from "react";

const VideoItem = ({ video }) => {
  return (
    <li>
      <img src={video.snippet.thumbnails.medium.url} alt="" />
    </li>
  );
};

export default VideoItem;
