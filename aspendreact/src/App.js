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
import NftsPage from "./Pages/nfts";
import DetailPage from "./Pages/detail";
import MarketDetails from "./Pages/MarketDetails";
import Product from "./Pages/Product";

import Admin from "./Pages/Admin";

import "./App.css";

function App() {

  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {/* <Header /> */}
          <Home />
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
       

       
        <Route path="/MarketPlace">
          <MarketPlace />
        </Route>
        <Route path="/MarketDetails">
          <MarketDetails />
        </Route>
        <Route path="/explore">
          <ExplorePage />
        </Route>
        <Route path="/explore">
          <ExplorePage />
        </Route>
        <Route path="/detail/:productId" component={DetailPage}>
        </Route>
        <Route path="/collectables/tokens/:tokenId" component={Product}/>
      </Switch>
    </div>
  );
}

export default App;
