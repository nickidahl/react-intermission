import React, { Fragment } from "react";
import { render } from "react-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
};
render(<App />, document.querySelector("#root"));
