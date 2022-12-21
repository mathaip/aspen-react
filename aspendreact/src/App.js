import { Route, Switch } from "react-router-dom";

import React from "react";

import LandingPage from "./Pages/landing";

import "./App.css";


function App() {


  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
       
        {/* <Route path="/Roadmap" component={() => { 
          window.location.href = 'https://app.gitbook.com/@aspen-labs/s/aspen-labs/roadmap'; 
          return null;
        }}/> */}
       
       
      </Switch>
    </div>
  );
}

export default App;
