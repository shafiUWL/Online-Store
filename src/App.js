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


import HomeScreen from "./Pages/HomeScreen";
import ProductScreen from "./Pages/ProductScreen";




function App () {
  return(
    
  <Router>

<Switch>
    <Route path="/" exact component = {Home}/>
    <Route path="/tempPage" component = {tempPage}/>
    <Route path="/Compare" component = {Compare}/>
    <Route path="/Products" component = {Products}/>
    <Route path="/LoginPage" component = {LoginPage}/>
    <Route path="/RegisterPage" component = {RegisterPage}/>
    <Route path="/Payment" component = {Payment}/>
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
          <li><Link to="/Products">Products</Link></li>
          <li><Link to="/LoginPage">Log in</Link></li>
          <li><Link to="/RegisterPage">Register</Link></li>
          <li><Link to="/Payment">Test of payment method</Link></li>
          
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

export default App;
