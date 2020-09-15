import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";

const App = () => {

  return (
    
            <Router>
              <Home path="/"  />
            </Router>
  );
};
render(<App />, document.querySelector("#root"));
