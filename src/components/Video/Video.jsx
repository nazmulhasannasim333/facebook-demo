import React from "react";

const Video = ({ video }) => {
  console.log(video);
  return (
    <div className="my-5 ">
      <iframe
            src={video.video.replace("watch?v=", "embed/")}
            width="760"
            height="515"
            allowfullscreen
          ></iframe>
    </div>
  );
};

export default Video;
