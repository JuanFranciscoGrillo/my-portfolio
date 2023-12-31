import React from 'react';
import './Header.css'; // Importing the CSS file here

const Header = () => {
    return (
        <header className="header">
            <h1>Juan Grillo</h1>
            <nav>
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#portfolio">Portfolio</a></li> 
                    <li><a href="#contact">Contact</a></li> 
                    <li><a href="#resume">Resume</a></li> 
                </ul>
            </nav>
        </header>
    );
};

export default Header;
