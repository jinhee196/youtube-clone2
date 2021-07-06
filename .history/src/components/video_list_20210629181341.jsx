import React from "react";
import VideoItem from "./video_item/video_item";

const VideoList = (props.videos) => {
  return (
    <ul>
      {vidoes.map((video) => (
        <VideoItem video={video} />
      ))}
      ;
    </ul>
  );
};

export default VideoList;
