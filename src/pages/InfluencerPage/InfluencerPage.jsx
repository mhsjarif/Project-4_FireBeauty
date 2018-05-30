import React, {Component} from 'react';
import './InfluencerPage.css';
import InfluencerBanner from '../../components/InfluencerBanner/InfluencerBanner';

class InfluencerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    getInfluencer = (props) => {
        fetch(`/api/influencers/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(influencer => {
            this.setState({influencer})
        })
    }

    /*--- Lifecycle Methods ---*/

    componentDidMount(props) {
        this.getInfluencer(props);
    }

    render() {
        return (
            <div>
                this is the InfluencerPage.
                <InfluencerBanner />
            </div>
        )
    }
}

export default InfluencerPage;