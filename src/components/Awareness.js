import React from 'react';
import imgAwareness from '../assets/images/Group 374@2x.png';

export default function Awareness() {
    return (
        <div className="container awareness-main">
        <div className="text-main">
            <div className="main-text">Keep yourself <br />Home Quarantined <br />
            </div>
            <div className="main-desc">Stay at home and save the world.</div>
        </div>
        <div className="main-image">
            <img src={imgAwareness} alt="awarenessImg" className="main-awareness-img" />
        </div>
    </div>
    )
}
