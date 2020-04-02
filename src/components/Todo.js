import React from 'react';
import virusIcon from '../assets/images/Union 17@2x.png';
import todoFirstImg from '../assets/images/Group 379@2x.png';
import todoSecondImg from '../assets/images/Group 380@2x.png';
import todoThirdImg from '../assets/images/Group 381@2x.png';

export default function Todo() {
    return (
        <div className="container todo">
        <div className="steps-title">What we can do?</div>
        <div className="todo-section">
            <div className="todo-image">
                <img src={todoFirstImg} alt="todo_first" />
            </div>
            <div className="todo-content">
                <div className="todo-title">
                    Often clean your hands
                </div>
                <div className="virus-desc-group">
                    <img src={virusIcon} alt="virus_icon"  className="virus-icon" />
                    <div className="virus-desc-text">
                        Use soap and water and wash for at least
                        20 seconds. If you can't wash your hands,
                        you can also use a hand sanitizer or alcohol
                        at least 60-70 percent solution.
                    </div>
                </div>
                <div className="virus-desc-group">
                    <img src={virusIcon} alt="virus_icon" className="virus-icon" />
                    <div className="virus-desc-text">
                        Avoid touching your face, eyes, nose and
                        mouth with unwashed hands.
                    </div>
                </div>
            </div>
        </div>

        <div className="todo-section todo-even">
            <div className="todo-content">
                <div className="todo-title">
                    Wear a facemask
                </div>
                <div className="virus-desc-group">
                    <img src={virusIcon} alt="virus_icon" className="virus-icon" />
                    <div className="virus-desc-text">
                        You should wear facemask when you are
                        sick to prevent the virus from spreading.
                    </div>
                </div>
                <div className="virus-desc-group">
                    <img src={virusIcon} alt="virus_icon" className="virus-icon" />
                    <div className="virus-desc-text">
                        If you don't have any sick at all, you should
                        also wear a mask when you're going
                        outside to prevent yourself from sick
                        people.
                    </div>
                </div>
            </div>
            <div className="todo-image even">
                <img src={todoSecondImg} alt="todo_second" />
            </div>
        </div>

        <div className="todo-section">
            <div className="todo-image">
                <img src={todoThirdImg} alt="todo_third" />
            </div>
            <div className="todo-content">
                <div className="todo-title">
                    Cover coughs or sneezes
                </div>
                <div className="virus-desc-group">
                    <img src={virusIcon} alt="virus_icon" className="virus-icon" />
                    <div className="virus-desc-text">
                        Cover your mouth and nose with a tissue
                        when you cough or sneeze. If you don't
                        have a tissue, you can also use your elbow.
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
