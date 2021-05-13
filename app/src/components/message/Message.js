import React, {useState} from 'react';
import './Message.css';
import arrow from '../../images/arrow-notseen.svg';
import arrowSeen from '../../images/arrow-seen.svg';
import cross from '../../images/X.svg';

function Message() {

    const [state, setState] = useState({
        notifications: 0,
        dropdownVisible: false
    });

    return (
        <div className="message">
            <div className="text">
                <div className="date">
                    12.08.21 - 15:49
                </div>
                <div className="messageText">
                    test3
                </div>
            </div>
            <div className="buttons">
                <img src={arrow} className="arrow"></img>
                <img src={cross} className="delete"></img>
            </div>
        </div>
    );
}

export default Message;