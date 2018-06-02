import React from 'react';
import YouTube from 'react-youtube';
import './InfluencerVideo.css';

const InfluencerVideo = (props) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: -1
        }
    };

    return (
        <div className="youtube-video">
            <YouTube
                videoId={props.videoUrl}
                opts={opts}
          />
        </div>
    )
}

export default InfluencerVideo;