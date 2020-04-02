import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/images/Group 19.png';

export default function Header() {
    return (
        <div className="header">
                <div className="container header-content">
                    <div className="logo">C<img src={logo} alt="logo" />ronaVirus</div>
                 

                <ul className="nav">
                    <li><NavLink to='/' exact>Tracker</NavLink></li>
                    <li><NavLink to='/awareness'>Awareness</NavLink></li>
                </ul>
                </div>
       </div>
    )
}
