import React, { Component } from "react";
import { 
    // BrowserRouter as Router,
    // Switch, 
    Route } from "react-router-dom";
import About from "./components/About";
import PortfolioList from "./components/PortfolioList";
import Home from "./components/Home";
import LuxorRealEstate from "./components/portfolio/LuxorRealEstate";
import WebMall from "./components/portfolio/WebMall";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                {/* <Switch> */}
                    <Route path="/" component={Home} />
                    <Route exact path="/" component={PortfolioList} />
                    <Route exact path="/" component={About} />
                    <Route exact path="/webmall" component={WebMall} />
                    <Route exact path="/luxor-real-estate" component={LuxorRealEstate} />
                {/* </Switch> */}
            </div>
        )
    }
}

export default App;