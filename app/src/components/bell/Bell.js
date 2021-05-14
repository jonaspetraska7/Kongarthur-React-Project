import React, {useState, useEffect, useRef} from 'react';
import Dropdown from '../dropdown/Dropdown';
import './Bell.css';

function Bell() {

    const [state, setState] = useState({
        data: [],
        notifications: 0,
        dropdownVisible: false,
        loaded: false,
        rerender: false
    });
    const[seen, setSeen] = useState(false);

    const bell = useRef(null);
    const dropdown = useRef(null);
    

    useEffect(() => {
        document.addEventListener('click', toggleDropdown);
    });

    useEffect(() => {
        const getData = () => {
            fetch('https://609db69733eed80017956fd6.mockapi.io/messages')
                .then(response => response.json())
                .then(mockedData => setState({...state, data: mockedData, notifications: mockedData.length, loaded: true}))
        }
        getData();
    }, [state.rerender])

    useEffect(() => {
        const getData = () => {
            fetch('https://609db69733eed80017956fd6.mockapi.io/options/1')
                .then(response => response.json())
                .then(mockedData => setSeen(mockedData.allViewed))
        }
        getData();
    }, [state.rerender])
    

    const toggleDropdown = (e) => {
        document.removeEventListener('click', toggleDropdown);
        if(state.dropdownVisible && !dropdown.current.contains(e.target) && e.target.className !== 'delete'){
            setState({...state, loaded: false, dropdownVisible: false, rerender: !state.rerender})
        }
        else if(state.loaded && bell.current.contains(e.target)){
            setState({...state, dropdownVisible: true }); 
        }
    }

    return (
        <div className="bell" onClick={toggleDropdown} ref={bell}>
            <div className="icon">
                🔔
            </div>
            <div className="number">
                { state.loaded &&  state.notifications }
            </div>
            <div className="arrow">
                ▾
            </div>
            <div className="dropdown" ref={dropdown}>
                { state.loaded && state.dropdownVisible && <Dropdown data={state.data} allViewed={seen}></Dropdown> }
            </div>
        </div>
    );
}

export default Bell;