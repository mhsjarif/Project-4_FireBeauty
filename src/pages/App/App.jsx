import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import './App.css';
import FollowedPage from '../FollowedPage/FollowedPage';
import HomePage from '../HomePage/HomePage';
import InfluencerPage from '../InfluencerPage/InfluencerPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' render={() =>
                            <HomePage />
                        }/>
                        <Route exact path='/influencer/:id' render={() =>
                            <InfluencerPage />
                        }/>
                        <Route exact path='/followed' render={() =>
                            <FollowedPage />
                        }/>
                        <Route exact path='/login' render={() =>
                            <HomePage />
                        }/>
                        <Route exact path='/signup' render={() =>
                            <HomePage />
                        }/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;