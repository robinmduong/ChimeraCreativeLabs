import React, { Component } from "react";

class About extends Component {

    render() {
        return (
            <div className="about page-contents">
                <div id="about-text">
                    <h1>About Robin</h1>
                    <img src="../images/about-photos/UC-Berkeley-grad.jpg" className="about-image" alt="Robin-Duong-UC-Berkeley-graduation" target="_blank"></img>
                    <p>
                    I graduated with a Bachelor of Science from UC Berkeley. I am a full-stack web developer with a background in marketing analytics and SEO, but I think of myself as a storyteller first. I live to tell stories, whether it's with code, numbers, words, or images. Actively seeking remote and in-office opportunities in San Jose, Los Angeles, Irvine, Orange County, and Santa Monica.
                    </p>
                    <p>
                    I have used my storytelling skills to win over six scholarships, not all of which are for myself. I believe that education makes the world a better place, whether it's through higher education, books, or online learning.
                    </p>
                    <p>
                    When I'm not working, I can be found scuba diving with manta rays in Hawaii, or riding pachyrhinosauri at the Royal Tyrrell Museum in Canada. When camping, my husky doubles as a semi-portable tent heater and a mosquito catcher.
                    </p>
                </div>
            </div>
        )
    }

}

export default About;