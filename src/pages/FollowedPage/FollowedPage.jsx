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
        this.setState({selectedCategory: e.target.value})
    }

    componentDidMount() {
        this.props.getFollowed()
    }

    render() {
        let categoryFavorite = null;

        //if there is a user AND the first followed has a name//
        if (this.props.user && this.props.user.followed[0].name) {
            categoryFavorite = this.props.user.followed.map((userFollowed, idx) => 
                <div key={idx}>
                    <InfluencerCard
                        influencer={userFollowed} />
                    {userFollowed.favorites.filter(fav => fav.category === this.state.selectedCategory).map( catFav =>
                        <div>
                            {catFav.name}
                            <img src={catFav.img} alt="category fav"/>
                        </div>
                    )}
                </div>
            )
        }

        return (
            <div>
                FollowedPage
                <div className="category-selector">
                    <h4>I'm looking for a fire...</h4>
                    <select  onChange={this.selectCategory}>
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
                <h3>Your Followed Influencers</h3>
                <div>{categoryFavorite}</div>
                <div className="followed-card">
                </div>
            </div>
        )
    }
}

export default FollowedPage;