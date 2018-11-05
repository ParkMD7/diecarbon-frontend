// dependencies
import React from 'react';
import YouTube from 'react-youtube';
import { Container } from 'semantic-ui-react'

// user files
import FootprintInfo from './footprintInfo'

const YouTubePlayer = () => {

  const opts = {
      height: '350',
      width: '590',
      playerVars: {
        autoplay: 0
      }
    };

  return(
    <div>
      <h1>About Your Carbon Footprint</h1>
      <YouTube
        videoId="8q7_aV8eLUE"
        opts={opts}
        onReady={_onReady}
      />
      <br /><br /><br />
      <FootprintInfo />
    </div>
  )

  const _onReady = (event) => {
   // access to player in all event handlers via event.target
   event.target.pauseVideo();
 }

};

export default YouTubePlayer;
