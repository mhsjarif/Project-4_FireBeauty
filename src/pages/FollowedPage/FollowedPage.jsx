import React, { Component } from 'react';
import './FollowedPage.css';
import FollowedInfluencer from '../../components/FollowedInfluencer/FollowedInfluencer';
import InfluencerCard from '../../components/InfluencerCard/InfluencerCard';

class FollowedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: null
        }
    }

    componentDidMount() {
        this.props.getFollowed()
    }

    render() {
        let userFollowed = null;
        //if there is a user AND the first followed has a name//
        if (this.props.user && this.props.user.followed[0].name) {
            userFollowed = this.props.user.followed.map(userFollowed =>
                <div>
                    {/* <SelectCategory 
                        selectedCategory={this.state.selectedCategory}/> */}
                    <InfluencerCard
                        influencer={userFollowed} />
                    <FollowedInfluencer
                        userFollowed={userFollowed}
                    />
                </div>
            )
        }

        return (
            <div>
                FollowedPage
                <select>
                    <option value="Foundation">Foundation</option>
                    <option value="Concealer">Concealer</option>
                    <option value="Setting Spray">Setting Spray</option>
                    <option value="Powder">Powder</option>
                    <option value="Contour">Contour</option>
                    <option value="Highligher">Highligher</option>
                    <option value="Blush">Blush</option>
                    <option value="Eyeliner">Eyeliner</option>
                    <option value="Lipstick">Lipstick</option>
                    <option value="Mascara">Mascara</option>
                    <option value="Brow">Brow</option>
                    <option value="Eyeshadow">Eyeshadow</option>
                </select>
                <h3>Your Followed Influencers</h3>
                <div className="followed-card">

                    {userFollowed}
                </div>
            </div>
        )
    }
}

export default FollowedPage;