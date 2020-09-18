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
                        <ul className="skill-icon-list">
                            {item.skills.map(skill => <li key={skill} className="skill-container"><img className="skill-icon" src={skill}></img></li>)}
                        </ul>
                    </span>
                <h2 className="portfolio-page-header">Source Code</h2>
                    <p className="description"><a href={item.sourceCode}>View Project on GitHub</a></p>

                    <a id="portfolio-home-button" className="button"
                        href="/#portfolio">
                            Return to Portfolio
                    </a>
            </div>
        </React.Fragment>
    )
}

export default PortfolioPageTemplate;