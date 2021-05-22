import React, { Component, useState } from 'react';
import './App.css';
import Compare from './components/panos/Compare'

import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import tempPage from './Payment Components/tempPage';

import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'

/** 
import Payment from './Payment Components/Payment'; 
<Route path="/Payment" component = {Payment}/>
 */
 
import HomeScreen from "./Pages/HomeScreen";
import ProductScreen from "./Pages/ProductScreen";
 
 
 
 
function App () {
  return(
    
  <Router>
 
<Switch>
    <Route path="/" exact component = {HomeScreen}/>
    <Route path="/tempPage" component = {tempPage}/>
    <Route path="/Compare" component = {Compare}/>
 
    <Route path="/LoginPage" component = {LoginPage}/>
    <Route path="/RegisterPage" component = {RegisterPage}/>
    
    </Switch>
 
<div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              The Grocery Store
            </a>
          </div>
         
        
          
        </header>
        <main>
        <div className="container">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tempPage">Temp Page</Link></li>
          <li><Link to="/Compare">Compare</Link></li>
          
        </ul>
      </nav>
    
    </div>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center"> All Rights Reserved</footer>
      </div>
 
    
  </Router>
)
}
 
 
/** Note this is being developed right now, and I will delete all my useless code
 
 
function App(){
  const[showItem, setShowItem] = useState(false)
  return (
    <div>
      <h1>The Compare component</h1>
        <p>Details and notes can be found within source code src/components/panos/compare</p>
        <Compare/>
      <h1>Payment Function</h1>
 
      {showItem ? <StripeContainer/> : <> <h3>£10.00</h3> <img src={orange} alt="Orange" /><button onClick={() => setShowItem(true)}>Purchase Item</button></>}
      
 
    </div>
 
  )
}
*/
export default App;
