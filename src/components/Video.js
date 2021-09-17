import React from 'react';
import ReactPlayer from 'react-player';

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
