import React from "react";

const VideoItem = ({ video }) => {
  return (
    <li>
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      <div>
        <h1>{video.snippet.title}</h1>
      </div>
    </li>
  );
};

export default VideoItem;
