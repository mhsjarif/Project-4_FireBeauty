import React from 'react';
import './FollowedInfluencer.css';

const FollowedInfluencer = (props) => (
    <div>
        {props.userFollowed.favorites.map((fav, idx) => <div key={idx}>{fav.name}</div>)}
    </div>
)

export default FollowedInfluencer;