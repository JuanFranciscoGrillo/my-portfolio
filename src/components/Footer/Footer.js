import React from 'react';
import './Footer.css'; // Importing the CSS file here

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a
                    href="https://github.com/JuanFranciscoGrillo"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Juan's GitHub Profile"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/juanfranciscogrillo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Juan's LinkedIn Profile"
                >
                    LinkedIn
                </a>
                <a
                    href="https://www.heroku.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Juan's Heroku Profile"
                >
                    Heroku
                </a>
            </div>
        </footer>
    );
};

export default Footer;