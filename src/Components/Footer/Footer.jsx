import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <p>© 2024 Web Project. All rights reserved.</p>
                <ul className="footer-links">
                    <li>
                        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Terms of Service</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
