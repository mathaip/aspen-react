import { Route, Switch, useHistory } from "react-router-dom";
// import Header from "./Components/Header";
import HeaderLite from "./Components/HeaderLite";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CryptoPunkAttributes from "./Pages/CryptoPunkAttributes";
import CryptoPunkBids from "./Pages/CryptoPunkBids";
import CryptoPunkDetails from "./Pages/CryptoPunkDetails";
import CryptoPunkForsale from "./Pages/CryptoPunkForsale";
import CryptoPunkLeaderboard from "./Pages/CryptoPunkLeaderboard";
import CryptoPunkSales from "./Pages/CryptoPunkSales";
import CryptoPunkTopsales from "./Pages/CryptoPunkTopsales";
import CryptoPunkWrapper from "./Pages/CryptoPunkWrapper";
import MarketPlace from "./Pages/MarketPlace";
import MarketDetails from "./Pages/MarketDetails";

import Login from "./Pages/Login";
import ProjectList from "./Pages/ProjectList";
import ResetPassword from "./Pages/ResetPassword";
import SignUp from "./Pages/SignUp";

import "./App.css";
import CryptoPunk from "./Pages/CryptoPunk";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {/* <Header /> */}
          <Home />
          {/* <Footer /> */}
        </Route>

        <Route path="/login">
          <HeaderLite />

          <Login />
          <Footer />
        </Route>
        <Route path="/project_list">
          <HeaderLite />
          <ProjectList />
          <Footer />
        </Route>
        <Route path="/reset_password">
          <HeaderLite />
          <ResetPassword />
          <Footer />
        </Route>
        <Route path="/signup">
          <HeaderLite />
          <SignUp />
          <Footer />
        </Route>

        <Route path="/about">
          <HeaderLite />
          <About />
          <Footer />
        </Route>
        <Route path="/attributes">
          <HeaderLite />
          <CryptoPunkAttributes />
          <Footer />
        </Route>
        <Route path="/bids">
          <HeaderLite />
          <CryptoPunkBids />
          <Footer />
        </Route>
        <Route path="/details">
          <HeaderLite />
          <CryptoPunkDetails />
          <Footer />
        </Route>
        <Route path="/forsale">
          <HeaderLite />
          <CryptoPunkForsale />
          <Footer />
        </Route>
        <Route path="/leaderboard">
          <HeaderLite />
          <CryptoPunkLeaderboard />
          <Footer />
        </Route>

        <Route path="/sales">
          <HeaderLite />
          <CryptoPunkSales />
          <Footer />
        </Route>

        <Route path="/topsales">
          <HeaderLite />
          <CryptoPunkTopsales />
          <Footer />
        </Route>
        <Route path="/wrapper">
          <HeaderLite />
          <CryptoPunkWrapper />
          <Footer />
        </Route>
        <Route path="/crypto_punk">
          <CryptoPunk />
          <Footer />
        </Route>
        <Route path="/MarketPlace">
          <MarketPlace />
        </Route>
        <Route path="/MarketDetails">
          <MarketDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
