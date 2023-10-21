import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/main_logo.png';
import '../../App.css';
import '../../font/font.css'
import { Link } from 'react-router-dom';
import BodyNotice from './Body_notice';

function Header() {
    return (
        
        <div className='App'>
            <div className='App-logo'>
                <img className='logo' src={logo}></img>
            </div>
            <ul class="nav justify-content-center BMfont ">
                <li class="nav-item">
                    <Link to ="/Main" class="nav-link active" aria-current="page">Main</Link>
                </li>
                <li class="nav-item">
                    <Link to = "/intro" class="nav-link">Intro</Link>
                </li>
                <li class="nav-item">
                    <Link to = "/notice" class="nav-link">Notice</Link>
                </li>
            </ul>
        </div>
    );
}
export default Header