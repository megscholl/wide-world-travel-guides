import React, { Component } from 'react';
import './App.css';
import Head from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head title="Wide World Travel, Inc" />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
