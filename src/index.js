import React from "react";
import ReactDOM from "react-dom";
import ReactRouter from "react-router";
// Note: I moved the React Components that represents content to its own js file
// pages.js
import { HomePage, AboutUsPage, ContactUsPage } from "./pages.js";

import Header from "./common/header";
import Footer from "./common/footer";
import { BroserRouter, HashRouter, Route } from "react-router-dom";
import { Pg1, P2, P3, P4, P5 } from "./pages/blog";
class App extends React.Component {
  // This component contains the entirety of your application
  render() {
    return (
      <HashRouter>
        <div className="main-container">
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutUsPage} />
          <Route path="/contact" exact component={ContactUsPage} />
          <Route path="/post1" exact component={Pg1} />
          <Route path="/post2" exact component={P2} />
          <Route path="/post3" exact component={P3} />
          <Route path="/post4" exact component={P4} />
          <Route path="/post5" exact component={P5} />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

// Render the App component, which contains instances of your Add and Subtract Components
ReactDOM.render(<App />, document.getElementById("root"));
