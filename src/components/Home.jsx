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
                <div className="introduction">
                    <h1>Chimera Creative Labs</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;