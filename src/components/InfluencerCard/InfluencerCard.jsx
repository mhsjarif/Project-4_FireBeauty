import React, {Component} from 'react';
import './InfluencerCard.css';

class InfluencerCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image_url: 'https://i.imgur.com/PRnHIJw.png'
        }
    }

    getThumbnailUrl = () => {
        fetch(`/api/influencers/${this.props.influencer.youtube_id}/img`)
        .then(res => res.json())
        .then(data => {
            this.setState({image_url: data.url})
        })
    }

    componentDidMount() {
        this.getThumbnailUrl();
    }


    render() {
        return (
            <div>
                <img src={this.state.image_url}/>
            </div>
        )
    }
}

export default InfluencerCard;