import React, { Component } from 'react';
import './App.css';
import Compare from './components/panos/Compare'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Online Shop</h1>
        </header>
        <h1>The Compare component</h1>
        <p>Details and notes can be found within source code src/components/panos/compare</p>
        <Compare/>
      </div>
    );
  }
}

export default App;
