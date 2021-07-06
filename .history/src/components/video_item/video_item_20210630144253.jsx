import React from "react";

const VideoItem = ({ video: snippet }) => {
  return (
    <li>
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      <div>
        <h3>{snippet.title}</h3>
        <p>{snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoItem;
