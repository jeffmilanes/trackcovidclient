import React from 'react';
import hCImg from '../assets/images/Group 376@2x.png';
import CorSImg from '../assets/images/Group 377@2x.png';
import CoSImg from '../assets/images/Group 378@2x.png';

export default function Steps() {
    return (
        <div className="container steps">
        <div className="steps-title">How Can it Spreads</div>
        <div className="steps-direction">
            <div className="steps-card">
                <img src={hCImg} alt="hc_img" />
                <div className="steps-card-title">
                    Human Contact
                </div>
                <div className="steps-card-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora laborum sapiente omnis ut
                    consequuntur, nulla necessitatibus! Sed maxime iste quis!
                </div>
            </div>
            <div className="steps-card">
                <img src={CorSImg} alt="cors_img" />
                <div className="steps-card-title">
                    Cough or Sneezing
                </div>
                <div className="steps-card-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora laborum sapiente omnis ut
                    consequuntur, nulla necessitatibus! Sed maxime iste quis!
                </div>
            </div>
            <div className="steps-card">
                <img src={CoSImg} alt="cos_img" />
                <div className="steps-card-title">
                    Contaminated Objects
                </div>
                <div className="steps-card-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora laborum sapiente omnis ut
                    consequuntur, nulla necessitatibus! Sed maxime iste quis!
                </div>
            </div>
        </div>
    </div>
    )
}
