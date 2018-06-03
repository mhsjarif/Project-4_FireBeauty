import React, { Component } from 'react';
import './FollowedPage.css';
import InfluencerCard from '../../components/InfluencerCard/InfluencerCard';

class FollowedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: null
        }
    }

    selectCategory = (e) => {
        this.setState({ selectedCategory: e.target.value })
    }

    componentDidMount() {
        this.props.getFollowed()
    }

    render() {
        let categoryFavorite = null;

        //if there is a user AND the first followed has a name//
        if (this.props.user && this.props.user.followed.length && this.props.user.followed[0].name) {
            categoryFavorite = this.props.user.followed.map((userFollowed, idx) =>
                <div className="followed-wrapper" style={this.state.selectedCategory ? { width: "50%", margin: "0 auto" } : null} key={idx}>
                    <InfluencerCard
                        influencer={userFollowed} />
                    {userFollowed.favorites.filter(fav => fav.category === this.state.selectedCategory).map((catFav, idx) =>
                        // <div key={idx}>
                        //     <div>{catFav.name}</div>
                        //     <img src={catFav.img} alt="category fav" />
                        // </div>
                        <a key={idx} href={catFav.link} target="_blank">
                            <div className="favorite-card">
                                <img src={catFav.img} alt="Favorite Product" />
                                <div className="favorite-card-text">
                                    <div>{catFav.category}</div>
                                    <div>{catFav.name}</div>
                                </div>
                                <div className="favorite-overlay">
                                    <div className="favorite-overlay-text">${catFav.price}</div>
                                </div>
                            </div>
                        </a>
                    )}
                </div>
            )
        } else {
            categoryFavorite =
                <div>Start following influencers to discover some fire beauty!</div>
        }

        return (
            <div>
                <div className="category-selector">
                    <div className="custom-select">
                        <select onChange={this.selectCategory}>
                            <option value="" disabled selected>I'm looking for a fire...</option>
                            <option value="Foundation">Foundation</option>
                            <option value="Concealer">Concealer</option>
                            <option value="Setting Spray">Setting Spray</option>
                            <option value="Powder">Powder</option>
                            <option value="Contour">Contour</option>
                            <option value="Highlighter">Highlighter</option>
                            <option value="Blush">Blush</option>
                            <option value="Eyeliner">Eyeliner</option>
                            <option value="Lipstick">Lipstick</option>
                            <option value="Mascara">Mascara</option>
                            <option value="Brow">Brow</option>
                            <option value="Eyeshadow">Eyeshadow</option>
                        </select>
                    </div>
                </div>
                <div className="fire-header">
                    <img src="https://i.imgur.com/Zq60YVW.png" alt="fire" />
                    &nbsp;Your Followed Influencers&nbsp;
                    <img src="https://i.imgur.com/Zq60YVW.png" alt="fire" />
                </div>
                <div className={this.state.selectedCategory ? null : "card-wrapper"}>
                    {categoryFavorite}
                </div>
                <div className="followed-card">
                </div>
            </div>
        )
    }
}

export default FollowedPage;