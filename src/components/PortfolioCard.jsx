import React from "react";
import { useHistory, withRouter } from "react-router-dom";

const PortfolioCard = (props) => {

    const history = useHistory();

    const routeChange = () => {
        let path = props.item.portfolioUrl;
        history.push(path, props);
    }

    return (
        <div onClick={routeChange} className="portfolio-card">
                <img src={props.item.mainImage} className="portfolio-image" alt="Portfolio Item" />
            <div className="portfolio-card-text">
                {props.item.name}
            </div>
        </div>
    )

}

export default withRouter(PortfolioCard;