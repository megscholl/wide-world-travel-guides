import React from 'react';
import './App.css';
import './index.css';

function Head(props) {
    
    return (

    <div className="App-header">
        {console.log("hey yooo")}
        {console.log("New England Autumn")}
        <h1>{props.title}</h1>
    </div>
    );
}

export default Head;