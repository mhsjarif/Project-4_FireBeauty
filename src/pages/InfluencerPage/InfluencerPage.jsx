import React, {Component} from 'react';
import './InfluencerPage.css';
import InfluencerBanner from '../../components/InfluencerBanner/InfluencerBanner';
import InfluencerBio from '../../components/InfluencerBio/InfluencerBio';
import Favorites from '../../components/Favorites/Favorites';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';

class InfluencerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    getInfluencer = (props) => {
        return fetch(`/api/influencers/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(influencer => {
            this.setState({influencer: influencer[0]})
        });
    }

    getYouTubeInfo = (influencer) => {
        return fetch(`/api/influencers/${influencer.youtube_id}/channel`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                channelName: data.channelName, 
                thumbnailUrl: data.thumbnailUrl,
                channelUrl: data.channelUrl,
                subCount: data.subCount,
                influencerBanner: data.influencerBanner
            })
        })
    }


    /*--- Lifecycle Methods ---*/

    componentDidMount(props) {
        this.getInfluencer(props)
        .then(() => {
            this.getYouTubeInfo(this.state.influencer);
        });
    }

    render() {
        let influencer = null;

        if (this.state.influencer) {
            influencer = (
                <div>
                    <InfluencerBanner />
                    <InfluencerBio 
                        influencer={this.state.influencer}
                    />
                    <FavoriteButton 
                        influencer={this.state.influencer}/>
                    <Favorites
                        influencer={this.state.influencer}
                    />
                </div>
            )
            
        }

        return (
            <div>
                {influencer}
            </div>
        )
    }
}

export default InfluencerPage;