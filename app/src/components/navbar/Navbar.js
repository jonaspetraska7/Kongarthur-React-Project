import React from 'react';
import Bell from '../bell/Bell';
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="navbar">
                <div className="bell">
                    <Bell></Bell>
                </div>
            </div>
        );
    }
}

export default Navbar;