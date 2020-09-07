import React, { Component } from "react";

class Contact extends Component {

    render() {
        return (
            <div className="page-contents" id="contact">
                <div className="contact-info">
                    <p>Want to talk about about a project or code?</p>
                    <h3 >Let's connect!</h3>
                    <ul className="contact-me-list">
                        <li><a href="https://www.github.com/robinmduong"><i className="fa fa-github" alt="GitHub"></i>GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/robinmduong"><i className="fa fa-linkedin"></i>LinkedIn</a></li>
                        <li><i className="fa fa-phone" alt="phone-number"></i>(650) 636-7009</li>
                        <li>
                            <a href="mailto:robinmduong@gmail.com?subject=Email from ChimeraCreativeLabs.com">
                                <i className="fa fa-envelope" alt="email"></i>
                                robinmduong@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Contact;