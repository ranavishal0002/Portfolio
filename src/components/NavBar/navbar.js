import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='desktopMenuLogo' />
            <div className='desktopMenu'>
                <Link to="home" smooth={true} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link to="skills" smooth={true} duration={500} className='desktopMenuListItem'>Skills</Link>
                <Link to="education" smooth={true} duration={500} className='desktopMenuListItem'>Education</Link>
                <Link to="contact" smooth={true} duration={500} className='desktopMenuListItem'>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
