import React from "react";
import PortfolioPageTemplate from "../web-dev/PortfolioPageTemplate";

const WebDevPageTemplate = (props) => {
    let item = props.location.state.item;
    return (
        <PortfolioPageTemplate
            key={item.id}
            item={item}
        />
    )
}

export default WebDevPageTemplate;