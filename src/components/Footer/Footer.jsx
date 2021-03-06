import React from 'react';
import './Footer.css';

const Footer = (props) => (
    <footer>
        <div>made with love by: Tara Sjarif</div>
        <div className="dev-links">
            <a href="https://github.com/mhsjarif" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/PPqak8L.png" alt="github"/></a>
            <a href="https://www.linkedin.com/in/mutiarasjarif/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/VQw4WWk.png" alt="linkedin"/></a>
        </div>
        <div className="wdi">WDI-DT-57</div>
    </footer>
)

export default Footer;