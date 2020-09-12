import React from "react";
import PortfolioPageTemplate from "./PortfolioPageTemplate";

const LuxorRealEstate = (props) => {
    let item = props.location.state.item;
    return (
        <PortfolioPageTemplate
            key={item.id}
            item={item}
        />
    )
}

export default LuxorRealEstate;