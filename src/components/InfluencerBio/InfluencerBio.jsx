import React from 'react';
// import {Link} from 'react-router-dom'
import './InfluencerBio.css';

const InfluencerBio = (props) => {
    return (
    <div>
        <a href={props.channelUrl} target="_blank">
            <div>
                {props.channelName}
            </div>
            <div>
                <img src={props.thumbnailUrl} alt={props.channelName}/>
            </div>
        </a>
        {/* // come back to figure out how the fuck the change to a number with commas// */}
        <div className="sub-count">{props.subCount} subscribers</div>
        
        
        {/* <object className="video" data={props.influencer.video_url} /> */}
    </div>
)
}
export default InfluencerBio;