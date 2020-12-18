import React, { Component } from "react";
import { 
    HashRouter as Router,
    // Switch, 
    Route } from "react-router-dom";
// import About from "./components/About";
import PortfolioList from "./components/PortfolioList";
import Home from "./components/Home";
import WebDevPageTemplate from "./components/portfolio/web-dev/WebDevPageTemplate";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import Skillset from "./components/Skillset";

class App extends Component {
    render() {
        return (
            <div>
                {/* <Switch> */}
                <Router>
                    <ScrollToTop>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/webdevfolio" component={PortfolioList} />
                    <Route exact path="/webdevfolio" component={Skillset} />
                    <Route exact path="/luxor-real-estate" component={WebDevPageTemplate} />
                    <Route exact path="/webmall" component={WebDevPageTemplate} />
                    <Route exact path="/shopify" component={WebDevPageTemplate} />
                    <Route exact path="/shopify-pos" component={WebDevPageTemplate} />
                    <Route exact path="/trainual" component={WebDevPageTemplate} />
                    <Route exact path="/zippykind" component={WebDevPageTemplate} />
                    <Route exact path="/procurify" component={WebDevPageTemplate} />
                    <Route exact path="/zoho-bundle" component={WebDevPageTemplate} />
                    <Route exact path="/zoho-one" component={WebDevPageTemplate} />
                    </ScrollToTop>
                </Router>
                {/* </Switch> */}
            </div>
        )
    }
}

export default App;