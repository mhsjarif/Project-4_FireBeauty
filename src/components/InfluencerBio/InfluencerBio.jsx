import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './InfluencerBio.css';

const InfluencerBio = (props) => (
    <div>
        This is influencer is: 
        {props.influencer.name}
    </div>
)

export default InfluencerBio;