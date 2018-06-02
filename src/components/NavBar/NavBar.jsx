import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';

const NavBar = (props) => (
    <div className="nav-bar-container">
        <div className="banner-image">
            <img src='https://i.imgur.com/F4SXnYh.png' alt="Fire Beauty Banner"/>
        </div>
        {props.user ? 
            <div className="nav-bar">
                <div className="logo">
                    <Link to='/'><img src='https://i.imgur.com/JCOOFsB.png?1' alt="Fire Beauty Logo"/></Link>
                </div>
                <div className="home-link">
                    <Link to='/'>&nbsp;&nbsp;Home&nbsp;&nbsp;</Link>
                </div>
                <div className="followed-link">
                    <Link to='/followed'>&nbsp;&nbsp;Followed&nbsp;&nbsp;</Link>
                </div>
                <div className="logout"onClick={props.handleLogout}>&nbsp;&nbsp;Log Out&nbsp;&nbsp;</div>
            </div>
            : 
            <div className="nav-bar">
                <div className="logo">
                    <Link to='/'><img src='https://i.imgur.com/JCOOFsB.png?1' alt="Fire Beauty Logo"/></Link>
                </div>
                <div className="home-link">
                    <Link to='/'>&nbsp;&nbsp;Home&nbsp;&nbsp;</Link>
                </div>
                {/* <Link className="nav-item" to='/followed'>Followed</Link> */}
                <div className="login">
                    <Link className="nav-item" to='/login'>&nbsp;&nbsp;Log In&nbsp;&nbsp;</Link>
                </div>
                <div className="signup">
                    <Link className="nav-item" to='/signup'>&nbsp;&nbsp;Sign Up&nbsp;&nbsp;</Link>
                </div>
            </div>
        }
    </div>
)

export default NavBar;
