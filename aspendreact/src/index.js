import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/index.css';
import './index.css';
import {BrowserRouter} from 'react-router-dom'

import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';


ReactGA.initialize('UA-201454809-1'); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);


ReactDOM.render(
<React.StrictMode>
    <BrowserRouter >
    <App />
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 