import React, { Component } from 'react';
import './App.css';
import Head from './Header';
import Body from './Body';
import Footer from './Footer';
import logo from './images/travel.png';
import newEnglandSites from './sites';
import ShowGuides from './Guide';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head title="Wide World Travel, Inc" logo={logo} />
        <Body />
        <ShowGuides />
        <Footer newEnglandSites={newEnglandSites}/>
      </div>
    );
  }
}

export default App;
