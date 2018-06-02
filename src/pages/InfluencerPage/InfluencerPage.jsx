import React, {Component} from 'react';
import './InfluencerPage.css';
import InfluencerBanner from '../../components/InfluencerBanner/InfluencerBanner';
import InfluencerBio from '../../components/InfluencerBio/InfluencerBio';
import Favorites from '../../components/Favorites/Favorites';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import InfluencerVideo from '../../components/InfluencerVideo/InfluencerVideo';

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
            this.setState({
                influencer: influencer[0],
                videoUrl: influencer[0].video_url
            })
            console.log(this.state.videoUrl)
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
                    <InfluencerBanner 
                        influencerBanner={this.state.influencerBanner}/>
                    <InfluencerBio 
                        influencer={this.state.influencer} 
                        channelName={this.state.channelName} 
                        thumbnailUrl={this.state.thumbnailUrl}
                        channelUrl={this.state.channelUrl}
                        subCount={this.state.subCount}
                        instagram={this.state.influencer.instagram} 
                        twitter={this.state.influencer.twitter}
                    />
                    {this.props.user.followed.includes(this.state.influencer._id) || this.props.user.followed.some(f => f._id === this.state.influencer._id) ?
                    // IF THEY ARE FOLLOWED
                    <FavoriteButton 
                        influencer={this.state.influencer}
                        click={this.props.handleFollow}
                        heart="Unfollow this Influencer"
                        />
                        :
                    // IF THEY ARE NOT FOLLOWED
                        <FavoriteButton 
                            influencer={this.state.influencer}
                            click={this.props.handleFollow}
                            heart="Follow this Influencer"
                            />
                    }
                    
                    <InfluencerVideo 
                        videoUrl={this.state.videoUrl}/>
                    <Favorites
                        influencer={this.state.influencer}
                        channelName={this.state.channelName} 
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