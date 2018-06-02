import React, {Component} from 'react';
import InfluencerCard from '../../components/InfluencerCard/InfluencerCard';
import './HomePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    getAllInfluencers = (props) => {
        fetch('/api/influencers')
        .then(res => res.json())
        .then(influencers => {
            this.setState({influencers})
        })
    }

    /*--- Lifecycle Methods ---*/

    componentDidMount() {
        this.getAllInfluencers();
    }

    render() {
        let influencers = null;

        if (this.state.influencers) {
            influencers = this.state.influencers.map((influencer, idx) => 
                <InfluencerCard 
                    influencer={influencer}
                    key={idx}
                />
            )
        }

        return (
            <div>
                <div className="influencers-header">
                    <img src="https://i.imgur.com/Zq60YVW.png" alt="fire"/>
                        &nbsp;Fire Beauty Influencers&nbsp;
                    <img src="https://i.imgur.com/Zq60YVW.png" alt="fire"/>
                </div>
                <div className="card-wrapper">
                    {influencers}
                </div>
            </div>
        )
    }
}

export default HomePage;