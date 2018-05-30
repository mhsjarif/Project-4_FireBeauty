import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';

const NavBar = (props) => (
    <div className="nav-bar-container">
        <div className="banner-logo">
            <img src="https://i.imgur.com/JqNo9lO.png?1"/>
        </div>
        <div className="banner-image">
            <img src='https://i.imgur.com/aE3LXuv.png?1'/>
        </div>
        {props.user ? 
            <div className="nav-bar">
                <div className="logo">
                    <Link to='/'><img src='https://i.imgur.com/JCOOFsB.png?1'/></Link>
                </div>
                <Link to='/followed'>Followed</Link>-|-
                <div onClick={props.handleLogout}>Log Out</div>
            </div>
            : 
            <div className="nav-bar">
                <div className="logo">
                    <Link to='/'><img src='https://i.imgur.com/JCOOFsB.png?1'/></Link>
                </div>
                <Link to='/followed'>Followed</Link>-|-
                <Link to='/login'>Log In</Link>-|-
                <Link to='/signup'>Sign Up</Link>
            </div>
        }
    </div>
)

export default NavBar;
