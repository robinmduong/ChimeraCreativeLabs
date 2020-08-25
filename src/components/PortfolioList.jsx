import React, { Component } from "react";
import PortfolioCard from "./PortfolioCard";

class PortfolioList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolioHomeUrl: "/#portfolio",
            mappedPortfolio: [
                    {id: 1,
                    mainImage: "images/webmall-inventory.png",
                    portfolioUrl: "/webmall",
                    // externalUrl: "https://webmall.azurewebsites.net/",
                    name: "WebMall",
                    shortDescription: "Ecommerce meets livestreaming.",
                    description: "WebMall is an ecommerce platform that allows brands to livestream sales events, and engage with customers on one easy-to-use portal. Chimera Creative Labs worked alongside a team of 20 independent developers to build a fully functional ecommerce website. Our primary contributions to the project were building the front and back end for the user dashboard, and the Zoom conference scheduling page.",
                    features: [ "Dynamic user dashboard, featuring abandoned shopping cart, recommended products, and upcoming Zoom events", "Conference scheduling page where vendors can add their schedule availability for live Zoom calls", "Stripe integration for secure and quick payment", "Zoom integration on home page", "Responsive design on desktop, tablet, and mobile devices", "Unique user roles for administrators, vendors, and users", "Over 35 pages of interactive content"],
                    skills: ["React", "SQL", "C#", "ASP.NET CORE 3.1", "ADO.NET", "JS", "CSS3", "Bootstrap 4", "HTML5"]
                    },
                    {id: 2,
                    mainImage: "images/portfolio-img/luxor-real-estate.png", 
                    portfolioUrl: "/luxor-real-estate",
                    // externalUrl: "",
                    name: "Luxor Real Estate", 
                    shortDescription: "Responsive front-end design for a luxury real estate website",
                    description: "Responsive front-end design for a luxury real estate website, made with Bootstrap 4.",
                    features: ["Responsive design on desktop, tablet, and mobile devices"],
                    skills: ["Bootstrap 4", "JS", "CSS3", "HTML5"]
                    },
            ]
            }
        }

    mapItems = (item) => (
        <PortfolioCard
            key={item.id}
            item={item}
        />
    )

    render() {
        return (
            <React.Fragment>
                <div className="page-contents" id="portfolio">
                    <h1>Portfolio</h1>
                    <div className="portfolio-card-deck">
                        {this.state.mappedPortfolio.map(item => this.mapItems(item))}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PortfolioList;