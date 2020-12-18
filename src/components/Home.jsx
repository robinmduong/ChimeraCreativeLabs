import React, { Component } from "react";
import PortfolioList from "./PortfolioList";
import Skillset from "./Skillset";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mappedCards: [],
        };
    }

    render() {
        return (
            <React.Fragment>
                <PortfolioList />
                <Skillset />
                <div className="page-contents">
                    <a className="home button inline-button 
                    portfolio-button internal-link-button" 
                    href="/webdevportfolio">Web Dev Portfolio</a>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;