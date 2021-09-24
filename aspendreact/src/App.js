import { Route, Switch, useHistory, Link } from "react-router-dom";
// import Header from "./Components/Header";
import HeaderLite from "./Components/HeaderLite";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import {useEffect, useState} from 'react'
import AllMomentsList from './Pages/AllMoments'

import MarketPlace from "./Pages/MarketPlace";
import ExplorePage from "./Pages/explore";
import DetailPage from "./Pages/detail";
import LandingPage from "./Pages/landing";
import AmericanRevolutionPack from "./Pages/American_Revolution";
import FrenchRevolutionPack from "./Pages/French_Revolution";
import PhilosphersPack from './Pages/Philosophers';
import CubanRevolutionPack from './Pages/Cuban_Revolution'
import TaipingRebellionPack from './Pages/Taiping_Rebellion'
import RussianRevolutionPack from './Pages/Russian_Revolution'
import useGaTracker from './utils/usegatracker'
import Admin from "./Pages/Admin";
import "./App.css";

function App() {


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {/* <Header /> */}
          {/* <Home /> */}
          <LandingPage />
          {/* <Footer /> */}
        </Route>

        <Route path="/Admin">
          <HeaderLite />

          <Admin />
          <Footer />
        </Route>
       
        <Route path="/about">
          <HeaderLite />
          <About />
          <Footer />
        </Route>
        
        <Route path="/allmoments">
          {/* <HeaderLite /> */}
          <AllMomentsList />
          <Footer />
        </Route>
        <Route path="/Roadmap"component={() => { 
          window.location.href = 'https://app.gitbook.com/@aspen-labs/s/aspen-labs/roadmap'; 
          return null;
        }}/>
       


        <Route path="/Collections">
          <MarketPlace />
        </Route>
        <Route path="/AmericanRevolution">
          <AmericanRevolutionPack />
        </Route>
        <Route path="/FrenchRevolution">
          <FrenchRevolutionPack />
        </Route>
        <Route path="/TaipingRebellion">
          <TaipingRebellionPack />
        </Route>
        <Route path="/RussianRevolution">
          <RussianRevolutionPack />
        </Route>
        <Route path="/CubanRevolution">
          <CubanRevolutionPack />
        </Route>
        <Route path="/Philosphers">
          <PhilosphersPack />
        </Route>
        <Route path="/explore">
          <ExplorePage />
        </Route>
        <Route path="/collectables/tokens/:tokenId" component={DetailPage}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
