import React from 'react';
import './App.css';
import Compare from './components/panos/Compare'

import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";


import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import Payment from './Pages/Payment'; 


import HomeScreen from "./Pages/HomeScreen";
import ProductScreen from "./Pages/ProductScreen";
 
 
function App () {
  return(
    
  <Router>
 

 
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
          <li><Link to="/Payment">Payment</Link></li>
          <li><Link to="/LoginPage">Log in/Register</Link></li>

        </ul>
      </nav>
    
        </div>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Switch>
    <Route path="/Compare" component = {Compare}/>
    <Route path="/LoginPage" component = {LoginPage}/>
    <Route path="/RegisterPage" component = {RegisterPage}/>
    <Route path="/Payment" component = {Payment}/>
    </Switch>
        </main>
        
    
      </div>
 
      
  </Router>
  
)
}

 

export default App;
