import React from 'react';
import './Favorites.css';

const Favorites = (props) => {
    return (
        <div>
            <div className="favorites-header">{props.channelName}'s Favorites</div>
            <div className="favorite-container">
                {props.influencer.favorites.map((fav, idx) =>
                    <a key={idx} href={fav.link} target="_blank">
                        <div className="favorite-card">
                            <img src={fav.img} alt="Favorite Product" />
                            <div className="favorite-card-text">
                                <div>{fav.category}</div>
                                <div>{fav.name}</div>
                            </div>
                            <div className="favorite-overlay">
                                <div className="favorite-overlay-text">${fav.price}</div>
                            </div>
                        </div>
                    </a>
                )}
            </div>
        </div>
    )
}
export default Favorites;