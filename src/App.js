import React, { Component, useState } from 'react';
import './App.css';
import Compare from './components/panos/Compare'

import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import tempPage from './Payment Components/tempPage';
import Home from './Pages/Home'
import Products from './components/panos/Products'
import LoginPage from './components/panos/LoginPage'
import RegisterPage from './components/panos/RegisterPage'
import Payment from './Payment Components/Payment'; 





/** 
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
*/
/** Routing will be completed later
 * */

/**type this into terminal: npm install react-router-dom */
function App () {
  return(
  <Router>

    <div className="container">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tempPage">Temp Page</Link></li>
          <li><Link to="/Compare">Compare</Link></li>
          <li><Link to="/Products">Products</Link></li>
          <li><Link to="/LoginPage">Log in</Link></li>
          <li><Link to="/RegisterPage">Register</Link></li>
          <li><Link to="/Payment">Test of payment method</Link></li>
          
        </ul>
      </nav>
    <Switch>
    <Route path="/" exact component = {Home}/>
    <Route path="/tempPage" component = {tempPage}/>
    <Route path="/Compare" component = {Compare}/>
    <Route path="/Products" component = {Products}/>
    <Route path="/LoginPage" component = {LoginPage}/>
    <Route path="/RegisterPage" component = {RegisterPage}/>
    <Route path="/Payment" component = {Payment}/>
    </Switch>
    </div>
  </Router>
)
}

export default App;
