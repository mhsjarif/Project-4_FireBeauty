import React from 'react';
import {Link} from 'react-router-dom';
import './NavItem.css';

const NavItem = (props) => (
    <Link to={props.path}>{props.itemName}</Link>
)


export default NavItem;