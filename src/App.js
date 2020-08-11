import React, { Component } from "react";
import { 
    BrowserRouter as Router,
    Switch, 
    Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </div>
        )
    }
}

export default App;