import React from 'react';
// import {Link} from 'react-router-dom'
import './InfluencerBio.css';

const InfluencerBio = (props) => {
    return (
    <div>
            <div>
                {props.channelName}
            </div>
            <div>
                <img src={props.thumbnailUrl} alt={props.channelName}/>
            </div>
        
        {/* // come back to figure out how the fuck the change to a number with commas// */}
        <div className="sub-count">{props.subCount} subscribers</div>
        <a href={props.channelUrl} target="_blank">
        <img src="https://i.imgur.com/FeaE4tA.png" alt="youtube logo"/>
        </a>

        
        {/* <object className="video" data={props.influencer.video_url} /> */}
    </div>
)
}
export default InfluencerBio;