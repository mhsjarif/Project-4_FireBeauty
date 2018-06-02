import React from 'react';
import './FavoriteButton.css';

const FavoriteButton = (props) => {
    return (
        <button className="button fav-button" onClick={() => props.click(props.influencer._id)}>{props.heart}</button>
    )
}

export default FavoriteButton;