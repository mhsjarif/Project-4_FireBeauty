import React, {Component} from 'react';
import './InfluencerCard.css';

class InfluencerCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image_url: 'https://i.imgur.com/jjD5tA4.png'
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
                <a href='/influencer/:id'>
                    <img src={this.state.image_url}/>
                </a>
            </div>
        )
    }
}

export default InfluencerCard;