import React, { Component } from "react";
import "../App.css";

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            frontEnd: ["React", "JavaScript", "ES6", "HTML5", "CSS3", "Ajax", "Axios", "jQuery", "Bootstrap4"],
            serverSide: ["ASP.NET", "C#", ".NET Core 3.1", "ADO.NET"],
            backEnd: ["SQL", "TSQL"],
            other: ["Version Control", "OOP", "Agile Development", "Scrum", "Git"],
            tools: ["Visual Studio", "VS Code", "Microsoft SQL Server Studio", "Postman"]
        }
    }

    render() {
        return (
            <React.Fragment>
            <div className="page-contents" id="about">
                <h1>Skills</h1>
                    <div className="skills-list">
                        <h2>Front-End</h2>
                            <div className="skill-item">
                                {this.state.frontEnd.map(skill => <div className="skill-icon" key={skill}>{skill}</div>)}
                            </div>
                        <h2>Server-Side</h2>
                            <div className="skill-item">
                                {this.state.serverSide.map(skill => <div className="skill-icon" key={skill}>{skill}</div>)}
                            </div>
                        <h2>Back-End</h2>
                            <div className="skill-item">
                                {this.state.backEnd.map(skill => <div className="skill-icon" key={skill}>{skill}</div>)}
                            </div>
                        <h2>Other</h2>
                            <div className="skill-item">
                                {this.state.other.map(skill => <div className="skill-icon" key={skill}>{skill}</div>)}
                            </div>
                        <h2>Tools</h2>
                            <div className="skill-item">
                                {this.state.tools.map(skill => <div className="skill-icon" key={skill}>{skill}</div>)}
                            </div>
                    </div>
            </div>
            </React.Fragment>
        )
    }
}

export default About;