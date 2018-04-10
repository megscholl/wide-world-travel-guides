import React from 'react';
import './Footer.css';
import './sites';

function Footer(props) {
    
    return (

        <footer className="footer-back">
                <div>
                    <ul className="list">
                        <li>New England Sites to visit in the Fall:</li>
                        <li><a href={props.newEnglandSites.mass}  className="grey" target="_blank" alt="Massachusetts" title="Massachusetts">Massachusetts</a></li>
                        <li><a href={props.newEnglandSites.conn}  className="grey" target="_blank" alt="New Hampshire" title="New Hampshire">New Hampshire</a></li>
                        <li><a href={props.newEnglandSites.newhamp} className="grey" target="_blank" alt="Connecticut" title="Connecticut">Connecticut</a></li>
                        <li><a href={props.newEnglandSites.newyork} className="grey" target="_blank" alt="New York" title="New York">New York</a></li>       
                    </ul>
                </div>

                <span>&copy; Meg Scholl, NSS Cohort 24</span>

        </footer>

    );
}

export default Footer;