import React, {Component} from 'react';
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
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleLogout = () => {
        userService.logout();
        this.setState({user: null});
      }
    
      handleSignup = () => {
        this.setState({user: userService.getUser()});
      }
    
      handleLogin = () => {
        this.setState({user: userService.getUser()});
      }

    render() {
        return (
            <div>
                <NavBar />
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
                        <Route exact path='/login' render={(props) =>
                            <LoginPage 
                                {...props}
                                handleLogin={this.handleLogin}
                            />
                        }/>
                        <Route exact path='/signup' render={(props) =>
                            <SignupPage 
                                {...props}
                                handleSignup={this.handleSignup}
                            />
                        }/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;