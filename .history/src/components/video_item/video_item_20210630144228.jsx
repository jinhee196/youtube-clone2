import React from "react";

const VideoItem = ({ video }) => {
  return (
    <li>
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      <div>
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoItem;
