import React from 'react';
import './Favorites.css';

const Favorites = (props) => {
    return (
        <div className="favorite-container">
            {props.influencer.favorites.map((fav, idx) => 
            <a key={idx} href={fav.link}  target="_blank">
                <div className="favorite-card">
                        <img src={fav.img} alt="Favorite Product"/>
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
    )
}

{/* <div className="card-container">
                <Link to={`/influencer/${this.props.influencer._id}`}>
                <div className="card-image"><img src={this.state.imageUrl}  alt="Influencer"/></div>
                <div className="card-overlay">
                    <div className="overlay-text">{this.state.channelName}</div>
                </div>
                </Link>
            </div> */}

export default Favorites;