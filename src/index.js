import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<Body />, document.getElementById('showcase'));
ReactDOM.render(<Footer />, document.getElementById('foot'));


