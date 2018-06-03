import React from 'react';
// import {Link} from 'react-router-dom'
import './InfluencerBio.css';

const InfluencerBio = (props) => {
    return (
    <div>
            <div className="channel-name">
                {props.channelName}
            </div>
            {/* // come back to figure out how the fuck the change to a number with commas// */}
            <div className="sub-count">{props.subCount} subscribers</div>
            <div>
                <img src={props.thumbnailUrl} alt={props.channelName}/>
            </div>
        
        <div className="social-media">
            <a href={props.channelUrl} target="_blank">
                <img src="https://i.imgur.com/FeaE4tA.png" alt="youtube logo"/>
            </a> 
            <a href={props.instagram} target="_blank">
                <img src="https://i.imgur.com/2FXIhm2.png" alt="insta logo"/>
            </a>
            <a href={props.twitter} target="_blank">
                <img src="https://i.imgur.com/dqAP8Yp.png" alt="insta logo"/>
            </a>
        </div>

        
        {/* <object className="video" data={props.influencer.video_url} /> */}
    </div>
)
}
export default InfluencerBio;