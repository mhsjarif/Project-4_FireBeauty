import React from 'react';
import './Favorites.css';

const Favorites = (props) => {
    console.log(props.influencer)
    return (
        <div>
            <ul>
                {props.influencer.favorites.map(fav => <li>{fav}</li>)}
            </ul>
        </div>
    )
}

export default Favorites;