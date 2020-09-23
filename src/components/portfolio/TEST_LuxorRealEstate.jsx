import React, { Component } from "react";
import PortfolioPageTemplate from "./PortfolioPageTemplate";


class LuxorRealEstate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mappedItem: 
                {mainImage: "images/portfolio-img/luxor-real-estate.png", 
                portfolioUrl: "/luxor-real-estate",
                externalUrl: "https://www.github.com/robinmduong",
                name: "Luxor Real Estate", 
                shortDescription: "Responsive front-end design for a luxury real estate website",
                description: "Responsive front-end design for a luxury real estate website, made with Bootstrap 4.",
                features: ["Responsive design on desktop, tablet, and mobile devices"],
                skills: [
                    "images/skills/javascript-logo.png", 
                    "images/skills/html5-logo.png",
                    "images/skills/css3-logo.png",
                    "images/skills/es6-logo.png",
                    "images/skills/bootstrap-logo.png"
                ],
                sourceCode: "https://github.com/robinmduong?tab=repositories"
                }
        }
    } 

    render() {
        let item = this.state.mappedItem;
        console.log(item);
        return (
            <PortfolioPageTemplate
                key={item.id}
                item={item}
            />
        )
    }
}

export default LuxorRealEstate;