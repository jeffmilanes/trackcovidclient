import React from 'react';
import imghuman from '../assets/images/Group 110@2x.png';
import imgvirus from '../assets/images/Group 56@2x.png';
import imgvirusshadow from '../assets/images/Group 78@2x.png';

export default function AlertInfo() {
    return (
        <div className="container alert-info">
        <div className="alert-info-content">
            <div className="alert">
                <div className="alert-content">
                    <div className="alert-level">
                        Alert Level:
                    </div>
                    <div className="alert-code">Code RED, level 2</div>
                </div>
            </div>
            <div className="info">
                <div className="images">
                    <img src={imghuman} alt="img-human" className="img-human" />
                    <img src={imgvirus} alt="img-virus" className="img-virus" />
                </div>
            <div className="info-content">
                <div className="info-desc">
                    <div className="info-text">All you need to know about</div>
                    <div className="info-text-main">CORONAVIRUS</div>
                </div>
                <img src={imgvirusshadow} alt="img-virus-shadow" className="img-virus-shadow" />
            </div>
            </div>
        </div>
    </div>
    )
}
