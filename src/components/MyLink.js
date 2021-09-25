import React from "react";
// import { Link } from "@material-ui/core";
import { Link } from "react-router-dom";

function MyLink(props) {

    // const preventDefault = (event) => event.preventDefault();

    return (
        <Link
            style={{
                color: "white"
            }}
            to={{
                pathname: `/${props.text}`
            }}>
            {props.text}
        </Link>
    )
}

export default MyLink;

