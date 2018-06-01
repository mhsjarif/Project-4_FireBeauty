import React from 'react';
import './InfluencerVideo.css';

const InfluencerVideo = (props) => (
    <div>
        <iframe className="player" type="text/html" width="100%" height="100%"
  src={props.videoUrl}
  frameborder="0"/>
        {/* <iframe width="854" height="480" src={props.videoUrl} frameborder="0" gesture="media" allowfullscreen></iframe> */}
        {/* <iframe title="this is a title" width="560" height="315" src={props.videoUrl} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
    </div>
)

export default InfluencerVideo;