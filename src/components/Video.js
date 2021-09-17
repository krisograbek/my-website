import React from 'react'
import ReactPlayer from 'react-player';
import vid from "./videos/shorter_take.mp4"

function Video(props) {
  const { myUrl } = props;
  return (
    <div>
      <ReactPlayer
        url={myUrl}
        playing={true}
        loop={true}
      />
    </div>
  )
}

export default Video;
