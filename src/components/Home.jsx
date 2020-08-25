import React, { Component } from "react";

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
                <div id="home">
                    <div id="top-banner">
                        <div id="banner-text">
                        <h1>Chimera Creative Labs</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;