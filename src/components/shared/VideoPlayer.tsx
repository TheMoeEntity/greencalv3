import React from "react";
import ReactPlayer from "react-player";
import logo from "../../../public/images/greencal_logo.png";

const VideoPlayer: React.FC<{ media: string; thumbnail?: string }> = ({
  media,
  thumbnail,
}) => {
  return (
    <div className="relative overflow-hidden border-[1px] rounded-2xl border-[var(--greencal-primary)] pb-[56.25%] h-0">
      <ReactPlayer
        url={media}
        controls
        light={thumbnail}
        playing={false}
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
      />
    </div>
  );
};

export default VideoPlayer;
