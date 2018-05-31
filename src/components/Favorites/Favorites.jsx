import React from 'react';
import './Favorites.css';

const Favorites = (props) => {
    return (
        <div className="favorite-container">
            {props.influencer.favorites.map(fav => 
            <div>
                <div className="favorite-img">
                    <img src={fav.img}/>
                </div>
                {fav.name}
            </div>)}
        </div>
    )
}

export default Favorites;