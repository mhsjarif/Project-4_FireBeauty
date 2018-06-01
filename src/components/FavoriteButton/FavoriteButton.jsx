import React from 'react';
import './FavoriteButton.css';

const FavoriteButton = (props) => {
    return (
        <button className="button fav-button" onClick={() => props.handleFollow(props.influencer._id)}>♥</button>
    )
}

export default FavoriteButton;