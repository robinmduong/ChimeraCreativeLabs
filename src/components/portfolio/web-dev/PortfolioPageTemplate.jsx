import React from "react";

const PortfolioPageTemplate = (props) => {
    let item = props.item;

    return (
        <React.Fragment>
            <div className="page-contents">
                <h1 className="portfolio-page-header">{item.name}</h1>
                    <p className="short-description">{item.shortDescription}</p>
                {item.liveSite !== null ? (
                    <a href={item.liveSite} target="_blank"><img src={`../${item.mainImage}`} className="portfolio-details-image" alt="portfolio"/></a>
                ) : (
                    <img src={`../${item.mainImage}`} className="portfolio-details-image" alt="portfolio"/>
                )}
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
                            {item.skills.map(skill => <li key={skill} className="skill-container"><img className="skill-icon" src={skill} alt="skill-icon"></img></li>)}
                        </ul>
                    </span>
                {item.liveSite != null &&
                    <a id="internal-link-button" className="button inline-button" href={item.liveSite} target="_blank">
                        See Live Site
                    </a>
                }
                {item.sourceCode != null &&
                    <a id="source-code-button" className="button inline-button" href={item.sourceCode}>
                        View Source Code
                    </a>
                }
                <a id="internal-link-button portfolio-button" className="button inline-button" href="/#portfolio">
                    Return to Portfolio
                </a>
                {item.sourceCode != null &&
                    <a id="source-code-button" className="button inline-button" href={item.sourceCode}>
                        View Source Code
                    </a>
                }
        </div>
        </React.Fragment>
    )
}

export default PortfolioPageTemplate;