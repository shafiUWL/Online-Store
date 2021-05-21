import React, { Component, useState } from 'react';
import './App.css';
import Compare from './components/panos/Compare'

import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import tempPage from './Payment Components/tempPage';
import Home from './Pages/Home'
import Products from './components/panos/Products'
/** 
import StripeContainer from './Payment Components/StripeContainer';
import orange from './TempImages/orange.jpg'
*/


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
        </ul>
      </nav>
    <Switch>
    <Route path="/" exact component = {Home}/>
    <Route path="/tempPage" component = {tempPage}/>
    <Route path="/Compare" component = {Compare}/>
    <Route path="/Products" component = {Products}/>
    </Switch>
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
