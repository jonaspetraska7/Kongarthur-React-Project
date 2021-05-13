import React from 'react';
import Message from '../message/Message';
import './Dropdown.css';

class Dropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {notifications: 0}
    }

    clearAll = () => {
        alert("Clearing all")
    }
    
    render(){
        return (
            <div className="dropdown">
                <div className="title">
                    Hendelser
                </div>
                <div className="list">
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                </div>
                <div className="clear">
                    <button className="clearButton" onClick={() => this.clearAll()}>Tom listen</button>
                </div>
            </div>
        );
    }
}

export default Dropdown;