import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MCGApp from "./MCGApp";
import ReactDOM from "react-dom";
import Auguri from "./auguri"

function App() {
  return (
    <Router>
      <Route exact path="/" render={() => <MCGApp />} />
      <Route path="/auguri" component={Auguri} />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
