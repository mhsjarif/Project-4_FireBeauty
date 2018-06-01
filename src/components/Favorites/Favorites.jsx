import React from 'react';
import './Favorites.css';

const Favorites = (props) => {
    return (
        <div className="favorite-container">
            {props.influencer.favorites.map((fav, idx) => 
            <a key={idx} href={fav.link}  target="_blank">
                <div>
                    <div className="favorite-img">
                        <img src={fav.img} alt="Favorite Product"/>
                    </div>
                    {fav.name}
                </div>
            </a>
            )}
        </div>
    )
}

export default Favorites;