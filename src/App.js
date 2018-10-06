import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Rotating Image</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React App : Mohd Anwar Jamal Faiz
          </p>
          <a
            className="App-link"
            href="http://w3lc.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here for my blog :)
          </a>
        </header>
      </div>
    );
  }
}

export default App;
