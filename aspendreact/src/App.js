import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
