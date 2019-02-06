// dependencies
import React from 'react';
import YouTube from 'react-youtube';
import { Container } from 'semantic-ui-react'

// user files
import CarbonFootprintInfo from './carbonFootprintInfo'

const YouTubePlayer = () => {

  // NOTE: this obj sets params for the YouTube Video and has autoplay turned off because I'm not a monster
  const opts = {
      height: '400',
      width: '550',
      playerVars: {
        autoplay: 0
      }
    };

  return(
    <div style={{'paddingLeft': '50px', 'paddingRight': '50px'}}>
      <h1 style={{color: 'white', backgroundColor: 'black', 'fontFamily':'Montserrat'}}>About Your <span style={{color:'red'}}>Carbon Footprint</span></h1>
      <br/>
      <YouTube
        videoId="8q7_aV8eLUE"
        opts={opts}
        onReady={_onReady}
      />
      <br /><br /><br /><br /><br />
      <CarbonFootprintInfo />
    </div>
  )

  const _onReady = (event) => {
   // access to player in all event handlers via event.target
   event.target.pauseVideo();
 }

};

export default YouTubePlayer;
