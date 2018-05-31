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
            influencers = this.state.influencers.map(influencer => 
                <InfluencerCard 
                    influencer={influencer}
                />
            )
        }

        return (
            <div className="card-wrapper">
                {influencers}
            </div>
        )
    }
}

export default HomePage;