import React, { Component } from "react";

class HeroBanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mappedCards: [],
        };
    }

    render() {
        return (
            <React.Fragment>
                <div id="HeroBanner" className="desaturate">
                    <div id="hero-banner">
                        <div id="banner-text">
                            <a className="home" href="/#home"><h1>Chimera Creative Labs</h1></a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default HeroBanner;