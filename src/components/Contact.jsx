import React, { Component } from "react";

class Contact extends Component {

    render() {
        return (
            <div id="contact">
                <div className="contact-info">
                    <h1 className="contact-question">Want to work together?</h1>
                    <h2>Let's connect!</h2>
                    <ul className="contact-me-list">
                        <li><a href="https://www.github.com/robinmduong"><i className="fa fa-github" alt="GitHub"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/robinmduong"><i className="fa fa-linkedin" alt="LinkedIn"></i></a></li>
                        {/* <li><a href="https://www.facebook.com/ChimeraCreativeLabs"><i className="fa fa-facebook" alt="Facebook"></i></a></li> */}
                        {/* <li><a href="https://twitter.com/thechimeralab?lang=en"><i className="fa fa-twitter" alt="Twitter"></i></a></li> */}
                        <li>
                            <a href="mailto:robinmduong@gmail.com?subject=Email from ChimeraCreativeLabs.com">
                                <i className="fa fa-envelope" alt="Email Address"></i>                            
                            </a>
                        </li>
                        <li><i className="fa fa-phone" alt="Phone Number"></i><span id="phone-number-text">(650) 636-7009</span></li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Contact;