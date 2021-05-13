import React, {useState, useEffect, useRef} from 'react';
import Dropdown from '../dropdown/Dropdown';
import './Bell.css';

function Bell() {

    const [state, setState] = useState({
        notifications: 0,
        dropdownVisible: false
    });

    const bell = useRef(null);
    const dropdown = useRef(null);

    useEffect(() => {
        document.addEventListener('click', toggleDropdown);
    });

    const toggleDropdown = (e) => {
        if(state.dropdownVisible && !dropdown.current.contains(e.target)){
            setState({...state, dropdownVisible: false})
        }
        else if(bell.current.contains(e.target)){
            setState({...state, dropdownVisible: true})
        }
    }

    return (
        <div className="bell" onClick={toggleDropdown} ref={bell}>
            <div className="icon">
                🔔
            </div>
            <div className="number">
                {state.notifications}
            </div>
            <div className="arrow">
                ▾
            </div>
            <div className="dropdown" ref={dropdown}>
                { state.dropdownVisible && <Dropdown></Dropdown> }
            </div>
        </div>
    );
}

export default Bell;