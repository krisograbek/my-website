import React from "react";
// import { Link } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Links.css";

const linkToText = {
    "blog": "Blog",
    // "journal",
    // "smallwins",
    "favbooks": "Fav Books",
    'quotes': 'Fav Quotes',
    "models": "Models",
    "about": "About"
}

function MyLink(props) {

    return (
        <Link
            className="Link"
            to={{
                pathname: `/${props.text}`
            }}>
            {linkToText[props.text]}
        </Link>
    )
}

export default MyLink;

