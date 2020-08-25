import React from "react";

const PortfolioPageTemplate = (props) => {

    let item = props.item;

    return (
        <React.Fragment>
            <div className="page-contents">
                <h1 className="portfolio-page-header">{item.name}</h1>
                    <p className="short-description">{item.shortDescription}</p>
                <img src={`../${item.mainImage}`} className="portfolio-details-image" alt="portfolio"/>
                <h2 className="portfolio-page-header">About This Project</h2>
                    <p className="description">{item.description}</p>
                <h2 className="portfolio-page-header">Features</h2>
                    <span className="features">
                        <ul className="features-list">
                            {item.features.map(feature => <li key={feature}>{feature}</li>)}
                        </ul>
                    </span> 
                <h2 className="portfolio-page-header">Technologies</h2>
                    <span className="technologies-used">
                        <ul className="skills-list">
                            {item.skills.map(skill => <li key={skill} className="skill-icon">{skill}</li>)}
                        </ul>
                    </span>
                    <a id="portfolio-home-button" 
                        href="/#portfolio">
                            Return to Portfolio
                    </a>
            </div>
        </React.Fragment>
    )
}

export default PortfolioPageTemplate;