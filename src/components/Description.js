import React from 'react';
import virusIcon from '../assets/images/Union 17@2x.png';
import virus from '../assets/images/Group 375@2x.png';

export default function Description() {
    return (
        <div className="container virus-description">
        <div className="text-main-virus">
            <h3>What is <br /><span>Coronavirus?</span></h3>
            <div className="virus-desc-group">
                <img src={virusIcon} alt="virus_icon" className="virus-icon" />
                <div className="virus-desc-text">
                    A coronavirus is a virus that is found in animals and, rarely,
                    can be transmitted from animals to humans and then
                    spread person to person
                </div>
            </div>
        </div>
        <div className="main-image">
            <img src={virus} alt="virus" className="virus-main-image" />
        </div>
    </div>
    )
}
