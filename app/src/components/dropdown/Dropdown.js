import React, {useEffect, useState} from 'react';
import Message from '../message/Message';
import './Dropdown.css';

function Dropdown ({data, allViewed}) {

    const [state, setState] = useState({
        data : [],
        dropdownVisible: false,
        allClear: false
    });

    const clearAll = () => {
        setState({...state, allClear: true})
        state.data.map(function(x){
          fetch('https://609db69733eed80017956fd6.mockapi.io/messages/'+ x.id, {method: 'DELETE'})
        })
    }

    useEffect(() => {
        setState({...state, data: data})
    }, [])

    useEffect(() => {
         fetch('https://609db69733eed80017956fd6.mockapi.io/options/1', 
         {
            method : 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ allViewed: 'true' })
        })
    }, [allViewed])
    
    return (
        <div className="dropdown">
            <div className="title">
                Hendelser
            </div>
            <div className="list">
                {!state.allClear && state.data.map(function(x,i){
                    return <Message key={i} id={x.id} date={x.date} text={x.text} viewed={allViewed} deleted={state.allClear}></Message>
                })}
            </div>
            <div className="clear">
                <button className="clearButton" onClick={clearAll}>Tom listen </button>
            </div>
        </div>
    );
}

export default Dropdown;