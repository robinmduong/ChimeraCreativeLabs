import React, { Component } from "react";
import { 
    // BrowserRouter as Router,
    // Switch, 
    Route } from "react-router-dom";
// import About from "./components/About";
// import PortfolioList from "./components/PortfolioList";
import Home from "./components/Home";
import WebDevPageTemplate from "./components/portfolio/web-dev/WebDevPageTemplate";
import "./App.css";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";

class App extends Component {
    render() {
        return (
            <div>
                {/* <Switch> */}
                <ScrollToTop>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/webmall" component={WebDevPageTemplate} />
                    <Route exact path="/luxor-real-estate" component={WebDevPageTemplate} />
                    <Route exact path="/shopify" component={WebDevPageTemplate} />
                    <Route exact path="/shopify-pos" component={WebDevPageTemplate} />
                    <Route exact path="/trainual" component={WebDevPageTemplate} />
                    <Route exact path="/zippykind" component={WebDevPageTemplate} />
                    <Route exact path="/procurify" component={WebDevPageTemplate} />
                    <Route exact path="/zoho-bundle" component={WebDevPageTemplate} />
                    <Route exact path="/zoho-one" component={WebDevPageTemplate} />
                    <Route exact path="/about" component={About} />
                </ScrollToTop>
                {/* </Switch> */}
            </div>
        )
    }
}

export default App;