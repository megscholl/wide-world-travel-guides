import React from 'react';
import './Footer.css';

function Footer() {
    
    return (

        <footer className="footer-back">
                <div>
                    <ul className="list">
                        <li>New England Sites to visit in the Fall:</li>
                        <li><a href="http://www.mass.gov"  className="grey" target="_blank" rel="noopener noreferrer" alt="Massachusetts" title="Massachusetts">Massachusetts</a></li>
                        <li><a href="http://www.nh.gov"  className="grey" target="_blank" rel="noopener noreferrer" alt="New Hampshire" title="New Hampshire">New Hampshire</a></li>
                        <li><a href="http://www.ct.gov" className="grey" target="_blank" rel="noopener noreferrer" alt="Connecticut" title="Connecticut">Connecticut</a></li>
                        <li><a href="http://www.ny.gov" className="grey" target="_blank" rel="noopener noreferrer" alt="New York" title="New York">New York</a></li>       
                    </ul>
                </div>

                <span>&copy; Meg Scholl, NSS Cohort 24</span>

        </footer>

    );
}

export default Footer;