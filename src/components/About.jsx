import React, { Component } from "react";
import "../App.css";

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            frontEnd: [
                "images/skills/react-logo-text.png", 
                "images/skills/javascript-logo.png", 
                "images/skills/html5-logo.png",
                "images/skills/css3-logo.png",
                "images/skills/es6-logo.png",
                "images/skills/bootstrap-logo.png",
                "images/skills/ajax-logo.png",
                "images/skills/jquery-logo.png"
            ],
            serverSide: [
                "images/skills/dotnet-core-logo.png",
                "images/skills/c-sharp-logo.png"
            ],
            backEnd: [
                "images/skills/sql-logo.png",
                "images/skills/sql-server-logo.png",
                "images/skills/postman-logo.png",
            ],
            // other: ["Version Control", "OOP", "Agile Development", "Scrum", "Git"],
            tools: [
                "images/skills/visual-studio-logo.png",
                "images/skills/visual-studio-code-logo.png",
                "images/skills/git-logo.png",
                "images/skills/github-logo.png",
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
            <div className="page-contents" id="about">
                <h1>Skills</h1>
                    <div className="skills-list">
                        <h2 classname="skill-header">Front-End</h2>
                            <div className="skill-icon-list">
                                {this.state.frontEnd.map(skill => <div className="skill-container" key={skill}><img className="skill-icon" src={skill}></img></div>)}
                            </div>
                        <h2 classname="skill-header">Server-Side</h2>
                            <div className="skill-icon-list">
                                {this.state.serverSide.map(skill => <div className="skill-container" key={skill}><img className="skill-icon" src={skill}></img></div>)}                            
                            </div>
                        <h2 classname="skill-header">Back-End</h2>
                            <div className="skill-icon-list">
                                {this.state.backEnd.map(skill => <div className="skill-container" key={skill}><img className="skill-icon" src={skill}></img></div>)}                            
                            </div>
                        {/* <h2>Other</h2>
                            <div className="skill-icon-list">
                                {this.state.other.map(skill => <div className="skill-container" key={skill}><img className="skill-icon" src={skill}></img></div>)}                            
                            </div> */}
                        <h2 classname="skill-header">Tools</h2>
                            <div className="skill-icon-list">
                                {this.state.tools.map(skill => <div className="skill-container" key={skill}><img className="skill-icon" src={skill}></img></div>)}                            
                            </div>
                    </div>
            </div>
            </React.Fragment>
        )
    }
}

export default About;