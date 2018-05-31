import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './InfluencerCard.css';

class InfluencerCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: 'https://i.imgur.com/jjD5tA4.png'
        }
    }

    getThumbnailUrl = () => {
        fetch(`/api/influencers/${this.props.influencer.youtube_id}/channel`)
        .then(res => res.json())
        .then(data => {
            this.setState({channelName: data.channelName, imageUrl: data.thumbnailUrl})
        })
    }

    componentDidMount() {
        this.getThumbnailUrl();
    }


    render() {
        return (
            <div className="influencer-card">
                <Link to={`/influencer/${this.props.influencer._id}`}>
                    <h4>{this.state.channelName}</h4>
                    <img src={this.state.imageUrl} alt="Influencer" />
                </Link>
            </div>
        )
    }
}

export default InfluencerCard;