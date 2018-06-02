import React from 'react';
import YouTube from 'react-youtube';
import './InfluencerVideo.css';

const InfluencerVideo = (props) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1
        }
    };

    return (
        <div>
            <YouTube
                videoId={props.videoUrl}
                opts={opts}
            // onReady={this._onReady}
          />
        </div>
    )
}

export default InfluencerVideo;