import React, { Component } from "react";
import PortfolioCard from "./PortfolioCard";

class PortfolioList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolioHomeUrl: "/#portfolio",
            mappedPortfolio: [
                    {
                        id: 1,
                        mainImage: "images/portfolio-img/webmall-inventory.png",
                        portfolioUrl: "/webmall",
                        name: "WebMall",
                        shortDescription: "Ecommerce meets livestreaming.",
                        description: "WebMall is an ecommerce platform that allows brands to livestream sales events, and engage with customers on one easy-to-use portal. Chimera Creative Labs worked alongside a team of 20 independent developers to build a fully functional ecommerce website. Our primary contributions to the project were building the front and back end for the user dashboard, and the Zoom conference scheduling page.",
                        features: [ "Dynamic user dashboard, featuring abandoned shopping cart, recommended products, and upcoming Zoom events", "Conference scheduling page where vendors can add their schedule availability for live Zoom calls", "Stripe integration for secure and quick payment", "Zoom integration on home page", "Responsive design on desktop, tablet, and mobile devices", "Unique user roles for administrators, vendors, and users", "Over 35 pages of interactive content"],
                        skills: [
                            "images/skills/react-logo-text.png", 
                            "images/skills/javascript-logo.png", 
                            "images/skills/html5-logo.png",
                            "images/skills/css3-logo.png",
                            "images/skills/es6-logo.png",
                            "images/skills/bootstrap-logo.png",
                            "images/skills/ajax-logo.png",
                            "images/skills/jquery-logo.png",
                            "images/skills/c-sharp-logo.png",
                            "images/skills/dotnet-core-logo.png",
                            "images/skills/sql-logo.png",
                            "images/skills/sql-server-logo.png"
                        ],
                        sourceCode: "https://github.com/robinmduong/WebMall",
                        liveSite: "https://webmall.azurewebsites.net/",
                    },
                    {
                        id: 2,
                        mainImage: "images/portfolio-img/luxor-real-estate.png", 
                        portfolioUrl: "/luxor-real-estate",
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
                        sourceCode: null,
                        liveSite: null,
                    },
                    {
                        id: 3,
                        mainImage: "images/portfolio-img/acute-data-shopify-pos-1.png", 
                        portfolioUrl: "/shopify-pos",
                        name: "Shopify Point-of-Sale Microsite", 
                        shortDescription: "Shopify point-of-sale (POS) microsite for a business that specializes in business solutions, ERP, and CRM software.",
                        description: "Responsive front-end design for a Shopify point-of-sale (POS) microsite for a business solutions software reseller. Built with WordPress.com and Elementor Pro plugin.",
                        features: ["Responsive design on desktop, tablet, and mobile devices", "Looping product demo videos", "Vibrant green color theme with stark black-and-white contrast to match the Shopify brand"],
                        skills: [
                            "images/skills/wordpress-logo.png",
                            "images/skills/html5-logo.png",
                            "images/skills/css3-logo.png",
                            "images/skills/javascript-logo.png", 
                            "images/skills/elementor-logo.png"
                        ],
                        sourceCode: null,
                        liveSite: "https://www.acutedata.com/shopify-pos/",
                    },
                    {
                        id: 4,
                        mainImage: "images/portfolio-img/acute-data-shopify-1.png", 
                        portfolioUrl: "/shopify",
                        name: "Shopify Microsite", 
                        shortDescription: "Shopify microsite for a business that specializes in business solutions, ERP, and CRM software.",
                        description: "Responsive front-end design for a Shopify microsite for a business solutions software reseller. Built with WordPress.com and Elementor Pro plugin.",
                        features: ["Responsive design on desktop, tablet, and mobile devices", "Looping product demo videos", "Vibrant green color theme to match the Shopify brand"],
                        skills: [
                            "images/skills/wordpress-logo.png",
                            "images/skills/html5-logo.png",
                            "images/skills/css3-logo.png",
                            "images/skills/javascript-logo.png", 
                            "images/skills/elementor-logo.png"
                        ],
                        sourceCode: null,
                        liveSite: "https://www.acutedata.com/shopify/",
                    },
                    {
                        id: 5,
                        mainImage: "images/portfolio-img/acute-data-zippykind-1.png", 
                        portfolioUrl: "/zippykind",
                        name: "Zippykind Microsite", 
                        shortDescription: "Zippykind microsite for a business that specializes in business solutions, ERP, and CRM software.",
                        description: "Responsive front-end design for a Zippykind microsite for a business solutions software reseller. Built with WordPress.com and Elementor Pro plugin.",
                        features: ["Responsive design on desktop, tablet, and mobile devices", "Looping product demo videos", "Bright green color theme to match Zippykind's modern, fun brand"],
                        skills: [
                            "images/skills/wordpress-logo.png",
                            "images/skills/html5-logo.png",
                            "images/skills/css3-logo.png",
                            "images/skills/javascript-logo.png", 
                            "images/skills/elementor-logo.png"
                        ],
                        sourceCode: null,
                        liveSite: "https://www.acutedata.com/zippykind/",
                    },
                    {
                        id: 6,
                        mainImage: "images/portfolio-img/acute-data-trainual-2.png", 
                        portfolioUrl: "/trainual",
                        name: "Trainual Microsite", 
                        shortDescription: "Trainual microsite for a business that specializes in business solutions, ERP, and CRM software.",
                        description: "Responsive front-end design for a Trainual microsite for a business solutions software reseller. Built with WordPress.com and Elementor Pro plugin.",
                        features: ["Responsive design on desktop, tablet, and mobile devices", "Looping product demo videos", "Vibrant purple color theme to match the Trainual brand"],
                        skills: [
                            "images/skills/wordpress-logo.png",
                            "images/skills/html5-logo.png",
                            "images/skills/css3-logo.png",
                            "images/skills/javascript-logo.png", 
                            "images/skills/elementor-logo.png"
                        ],
                        sourceCode: null,
                        liveSite: "https://www.acutedata.com/trainual/",
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