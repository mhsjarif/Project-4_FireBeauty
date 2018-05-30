import React, {Component} from 'react';
import './InfluencerPage.css';
import InfluencerBanner from '../../components/InfluencerBanner/InfluencerBanner';
import InfluencerBio from '../../components/InfluencerBio/InfluencerBio';
import Favorites from '../../components/Favorites/Favorites';

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

    // render() {
    //     console.log(influencer);
    //     let influencer = null;

    //     if (this.state.influencers) {
    //         influencer = this.state.influencer
    //     }

    //     return (
    //         <div>
    //             this is the InfluencerPage.
    //             <InfluencerBanner />
    //             <InfluencerBio 
    //                 influencer={influencer}/>
    //             <Favorites 
    //                 influencer={influencer}/>
    //         </div>
    //     )
    // }

    render() {
        let influencer = null;

        if (this.state.influencer) {
            influencer = (
                <div>
                    <Favorites
                        influencer={this.state.influencer[0]}
                    />
                    <InfluencerBio 
                        influencer={this.state.influencer[0]}
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