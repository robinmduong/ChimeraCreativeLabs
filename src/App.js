import React, { Component } from "react";
import { 
    // BrowserRouter as Router,
    // Switch, 
    Route } from "react-router-dom";
// import About from "./components/About";
// import PortfolioList from "./components/PortfolioList";
import Home from "./components/Home";
import LuxorRealEstate from "./components/portfolio/LuxorRealEstate";
import ShopifyMicrosite from "./components/portfolio/ShopifyMicrosite";
import ShopifyPosMicrosite from "./components/portfolio/ShopifyPosMicrosite";
import TrainualMicrosite from "./components/portfolio/TrainualMicrosite"
import ZippykindMicrosite from "./components/portfolio/ZippykindMicrosite"
import WebMall from "./components/portfolio/WebMall";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

class App extends Component {
    render() {
        return (
            <div>
                {/* <Switch> */}
                <ScrollToTop>
                    {/* <Route exact path="/" component={PortfolioList} />
                    <Route exact path="/" component={About} /> */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/webmall" component={WebMall} />
                    <Route exact path="/luxor-real-estate" component={LuxorRealEstate} />
                    <Route exact path="/shopify" component={ShopifyMicrosite} />
                    <Route exact path="/shopify-pos" component={ShopifyPosMicrosite} />
                    <Route exact path="/trainual" component={TrainualMicrosite} />
                    <Route exact path="/zippykind" component={ZippykindMicrosite} />
                </ScrollToTop>
                {/* </Switch> */}
            </div>
        )
    }
}

export default App;