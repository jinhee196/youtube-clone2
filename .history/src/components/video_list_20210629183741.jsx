import React from "react";
import VideoItem from "./video_item/video_item";

const VideoList = ({ vidoes }) => (
  <ul>
    {vidoes.map((video) => (
      <VideoItem video={video} />
    ))}
  </ul>
);

export default VideoList;
