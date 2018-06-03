import React from 'react';
import YouTube from 'react-youtube';
import './InfluencerVideo.css';

const InfluencerVideo = (props) => {
    const opts = {
        height: '350',
        width: '600',
        playerVars: {
            autoplay: 1
        }
    };

    return (
        <div>
            <YouTube
                videoId={props.videoUrl}
                opts={opts}
                className={"youtube-video"}
          />
        </div>
    )
}

export default InfluencerVideo;