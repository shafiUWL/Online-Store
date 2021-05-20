import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from './components/panos/LoginPage'
import RegisterPage from './components/panos/RegisterPage'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
