import React from 'react';
import logo from '../../img/main_logo.png';

function Header() {
    return (
        <div className='App'>
            <div className='App-header'>
                <img src={logo}></img>
            </div>
            <nav>
                <a href=''>Main</a>
                <a href=''>sadsad</a>
            </nav>
        </div>
    );
}
export default Header