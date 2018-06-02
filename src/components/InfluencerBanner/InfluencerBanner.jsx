import React from 'react';
import './InfluencerBanner.css';

const InfluencerBanner = (props) => (
    <div className="influencer-banner">
        <img src={props.influencerBanner} alt="influencer banner"/>
    </div>
)

export default InfluencerBanner;