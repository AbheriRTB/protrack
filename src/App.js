import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import MyButton from './MyButton';
import ColoredBlock from './ColoredBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p background="#564355">
            <u>Edit <code>src/App.js</code> and save to reload.</u>
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        <Clock/>
        <MyButton/>
        <ColoredBlock/>
        </header>
      </div>
    );
  }
}

export default App;