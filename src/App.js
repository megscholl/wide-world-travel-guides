import React, { Component } from 'react';
import './App.css';
import Head from './Header';
import Body from './Body';
import Footer from './Footer';
import logo from './images/galaxy1.png';
import newEnglandSites from './sites'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head title="Wide World Travel, Inc" logo={logo} />
        <Body />
        <Footer newEnglandSites={newEnglandSites}/>
      </div>
    );
  }
}

export default App;
