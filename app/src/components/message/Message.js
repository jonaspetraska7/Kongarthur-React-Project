import React, {useState, useEffect} from 'react';
import './Message.css';
import arrow from '../../images/arrow-notseen.svg';
import arrowSeen from '../../images/arrow-seen.svg';
import cross from '../../images/X.svg';

function Message({id, date, text, viewed, deleted}) {

    const [state, setState] = useState(true);

    const removeMessage = () => {
        fetch('https://609db69733eed80017956fd6.mockapi.io/messages/'+ id, {method: 'DELETE'})
        setState(false)
    }

    if(deleted) removeMessage()

    if (state) return (
        <div className="message">
            <div className="text">
                <div className="date">
                    {date}
                </div>
                <div className="messageText">
                    {text}
                </div>
            </div>
            <div className="buttons">
                { viewed == "false"  ? <img src={arrow} className="arrow"></img> : <img src={arrowSeen} className="arrow"></img> }
                <img src={cross} onClick={removeMessage} className="delete"></img>
            </div>
        </div>
    )
    return <div></div>;
}

export default Message;