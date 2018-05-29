import React, {Component} from 'react';
import './HomePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    getAllInfluencers = (props) => {
        fetch('/api/influencers');
    }

    /*--- Lifecycle Methods ---*/

    componentDidMount() {
        this.getAllInfluencers();
    }

    render() {
        return (
            <div>
                this is the HomePage.
            </div>
        )
    }
}

export default HomePage;