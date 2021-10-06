import { Route, Switch } from "react-router-dom";
import HeaderLite from "./Components/HeaderLite";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import AllMomentsList from './Pages/AllMoments'

import MarketPlace from "./Pages/MarketPlace";
import ExplorePage from "./Pages/explore";
import MarketPlaceNewPage from "./Pages/MarketPlace_New";
import DetailPage from "./Pages/detail";
import LandingPage from "./Pages/landing";
import AmericanRevolutionPack from "./Pages/American_Revolution";
import FrenchRevolutionPack from "./Pages/French_Revolution";
import PhilosphersPack from './Pages/Philosophers';
import CubanRevolutionPack from './Pages/Cuban_Revolution'
import TaipingRebellionPack from './Pages/Taiping_Rebellion'
import RussianRevolutionPack from './Pages/Russian_Revolution'
import Admin from "./Pages/Admin";
import "./App.css";
import Introduction from "./Pages/Introduction";
import Help from "./Pages/Help";
import RoadMap from "./Pages/RoadMap";
import Disclosure from "./Pages/Disclosure";
import Faqs from "./Pages/Faqs";
import Tokenomics from "./Pages/Tokenomics";
import DCollect from "./Pages/DCollect";
import BusinessInquires from "./Pages/BusinessInquires";
import CustomerSupport from "./Pages/CustomerSupport";
import UpcomingProject from "./Pages/UpcomingProject";

function App() {


  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
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
          <AllMomentsList />
          <Footer />
        </Route>
        {/* <Route path="/Roadmap" component={() => { 
          window.location.href = 'https://app.gitbook.com/@aspen-labs/s/aspen-labs/roadmap'; 
          return null;
        }}/> */}
        <Route path="/Collections" component={MarketPlace} />
        <Route path="/AmericanRevolution" component={AmericanRevolutionPack} />
        <Route path="/FrenchRevolution" component={FrenchRevolutionPack} />
        <Route path="/TaipingRebellion" component={TaipingRebellionPack} />
        <Route path="/RussianRevolution" component={RussianRevolutionPack} />
        <Route path="/CubanRevolution" component={CubanRevolutionPack} />
        <Route path="/Philosphers" component={PhilosphersPack} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/marketplace" component={MarketPlaceNewPage} />
        <Route path="/collectables/tokens/:tokenId" component={DetailPage} />
        <Route path="/introduction" component={Introduction} />
        <Route path="/help" component={Help} />
        <Route path="/roadmap" component={RoadMap} />
        <Route path="/disclosure" component={Disclosure} />
        <Route path="/faqs" component={Faqs} />
        <Route path="/tokenomics" component={Tokenomics} />
        <Route path="/dcollect" component={DCollect} />
        <Route path="/business-inquire" component={BusinessInquires} />
        <Route path="/customer-support" component={CustomerSupport} />
        <Route path="/upcoming-project" component={UpcomingProject} />
      </Switch>
    </div>
  );
}

export default App;
