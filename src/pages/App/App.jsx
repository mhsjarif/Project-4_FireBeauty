import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import './App.css';
import FollowedPage from '../FollowedPage/FollowedPage';
import HomePage from '../HomePage/HomePage';
import InfluencerPage from '../InfluencerPage/InfluencerPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: userService.getUser()
        }
    }

    handleLogout = (props) => {
        userService.logout();
        this.setState({ user: null });
    }

    handleSignup = () => {
        this.setState({ user: userService.getUser() });
    }

    handleLogin = () => {
        this.setState({ user: userService.getUser() });
    }

    handleFollow = (influencer) => {
        fetch(`/api/users/followInfluencer/${influencer}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tokenService.getToken()
            }
        })
        .then(res => res.json())
        .then(user => {
            this.setState({user})
        });
    }

    getFollowed = () => {
        return fetch('/api/users/followed', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tokenService.getToken()
            }
        })
        .then(res => res.json())
        .then(user => {
            this.setState({user})
        });
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <NavBar
                            user={this.state.user}
                            handleLogout={this.handleLogout}
                        />
                        <Switch>
                            <Route exact path='/' render={(props) =>
                                <HomePage
                                    {...props}
                                />
                            } />
                            <Route exact path='/influencer/:id' render={(props) =>
                                <InfluencerPage
                                    {...props}
                                    handleFollow={this.handleFollow}
                                    user={this.state.user}
                                />
                            } />
                            <Route exact path='/followed' render={(props) =>
                                <FollowedPage
                                    {...props}
                                    user={this.state.user}
                                    getFollowed={this.getFollowed}
                                />
                            } />
                            <Route exact path='/login' render={(props) =>
                                <LoginPage
                                    {...props}
                                    handleLogin={this.handleLogin}
                                />
                            } />
                            <Route exact path='/signup' render={(props) =>
                                <SignupPage
                                    {...props}
                                    handleSignup={this.handleSignup}
                                />
                            } />
                        </Switch>
                        <Footer/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;