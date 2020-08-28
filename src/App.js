import React, { Component } from 'react';
import './App.css';
import Products from './Product.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> My React App</h1>
        </header>
        <Products></Products>
      </div>
    );
  }
}

export default App;