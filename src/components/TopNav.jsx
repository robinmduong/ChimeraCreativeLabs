
import React, { Component } from "react";
import { 
    BrowserRouter as Router,
    Link
 } from 'react-router-dom';
import "../App.css";
import Pdf from "../documents/Robin_Duong_Tech_Resume.pdf";
import ScrollToTop from "./ScrollToTop";

class TopNav extends Component {

    toggleNavCollapse(e) {
        e.preventDefault(); //prevents React from refreshing
        let topNavbar = document.getElementById("myTopNav");
        if (topNavbar.className === "topnav") {
            topNavbar.className += " responsive";
        } else {
            topNavbar.className = "topnav";
        }
    }
    
    render() {
        return (
            <React.Fragment>
            <Router>
            <ScrollToTop>
            <div className="topnav" id="myTopNav">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                {/* <Link className="topnav-item" to="/home">Home</Link>
                <Link className="topnav-item" to="/about">About</Link>
                <Link className="topnav-item" to="/webdevportfolio">Web Dev</Link>
                <Link className="topnav-item" to={Pdf} target="_blank" rel="noopener noreferrer">Résumé</Link>
                <Link className="topnav-item" to="/contact">Contact</Link> */}
                <a className="home" href="/">Home</a>
                {/* <a className="about" href="/about">About</a>               */}
                <a className="skillslist" href="/#skillslist">Skills</a>
                <a className="home" href="/#webdevportfolio">Web Dev</a>
                <a className="home" href={Pdf} target="_blank" rel="noopener noreferrer">Résumé</a>
                <a className="contact" href="/#contact">Contact</a>
                <button className="collapse-navbar icon"
                    onClick={this.toggleNavCollapse}>                        <i className="fa fa-bars"></i>
                    </button>
            </div>
            </ScrollToTop>
            </Router>
            </React.Fragment>
        )
    }
}

export default TopNav;

// import React, { Component } from "react";
// import { 
//     HashRouter as Router,
//     Link
//  } from 'react-router-dom';
// import "../App.css";
// import Pdf from "../documents/Robin_Duong_Tech_Resume.pdf";

// class TopNav extends Component {

//     toggleNavCollapse(e) {
//         e.preventDefault(); //prevents React from refreshing
//         let topNavbar = document.getElementById("myTopNav");
//         if (topNavbar.className === "topnav") {
//             topNavbar.className += " responsive";
//         } else {
//             topNavbar.className = "topnav";
//         }
//     }
    
//     render() {
//         return (
//             <React.Fragment>
//             <Router forceRefresh={1}>
//             <div className="topnav" id="myTopNav">
//                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
//                 {/* <a className="home" href="/#home">Home</a>
//                 <a className="about" href="/about">About</a>                    <a className="skillslist" href="/#skillslist">Skills</a> */}
//                 {/* <a className="home" href="/#webdevportfolio">Web Dev</a> */}
//                 {/* <a className="home" href={Pdf} target="_blank" rel="noopener noreferrer">Résumé</a> */}
//                 {/* <a className="contact" href="/#contact">Contact</a> */}
//                 <button className="collapse-navbar icon"
//                     onClick={this.toggleNavCollapse}>
//                         <i className="fa fa-bars"></i>
//                 </button>
//             </div>
//             </Router>
//             </React.Fragment>
//         )
//     }
// }

// export default TopNav;