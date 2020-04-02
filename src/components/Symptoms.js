import React from 'react';
import virusIcon from '../assets/images/Union 17@2x.png';
import humanImg from '../assets/images/Group 371@2x.png';


export default function Symptoms() {
    return (
        <div className="container symptoms-section">
        <div className="symptoms-img-section">
            <img src={humanImg} alt="human_img" className="symptoms-image" />
        </div>
        <div className="symptoms">
            <h3>Symptoms of <br />Coronavirus</h3>
            <div className="virus-desc-group">
                <img src={virusIcon} alt="virus_icon" className="virus-icon" />
                <div className="virus-desc-text">
                    In some cases, you may not know that you
                    have symptioms of Covid-19 due to its
                    similarity to cold or flu.
                </div>
            </div>
            <div className="virus-desc-group">
                <img src={virusIcon} alt="virus_icon" className="virus-icon" />
                <div className="virus-desc-text">
                    People may be sick with the virus for 1 to 14
                    days before developing symptoms.
                </div>
            </div>
            <div className="virus-desc-group">
                <img src={virusIcon} alt="virus_icon" className="virus-icon" />
                <div className="virus-desc-text">
                    Some people report losing their sense of
                    taste and/or smell.
                </div>
            </div>

            <div className="sign">People may experience</div>
            <div className="two-parts">
                <div className="table-separator">

                    <div className="virus-desc-group">
                        <img src={virusIcon} alt="virus_icon" className="virus-icon" />
                        <div className="virus-desc-text">
                            Fever
                        </div>
                    </div>

                    <div className="virus-desc-group">
                        <img src={virusIcon} alt="virus_icon" className="virus-icon" />
                        <div className="virus-desc-text">
                            Headache
                        </div>
                    </div>

                    <div className="virus-desc-group">
                        <img src={virusIcon} alt="virus_icon" className="virus-icon" />
                        <div className="virus-desc-text">
                            Runny nose
                        </div>
                    </div>

                </div>
                <div className="table-separator">

                    <div className="virus-desc-group">
                        <img src={virusIcon} alt="virus_icon" className="virus-icon" />
                        <div className="virus-desc-text">
                            Throat pain
                        </div>
                    </div>

                    <div className="virus-desc-group">
                        <img src={virusIcon} alt="virus_icon" className="virus-icon" />
                        <div className="virus-desc-text">
                            Shaking chills
                        </div>
                    </div>

                    <div className="virus-desc-group">
                        <img src={virusIcon} alt="virus_icon" className="virus-icon" />
                        <div className="virus-desc-text">
                            Dyspnea
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
