import React from "react";
import PortfolioPageTemplate from "./PortfolioPageTemplate";

const ShopifyMicrosite = (props) => {
    let item = props.location.state.item;
    return (
        <PortfolioPageTemplate
            key={item.id}
            item={item}
        />
    )
}

export default ShopifyMicrosite;