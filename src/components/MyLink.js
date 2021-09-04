import React from "react";
import { Link } from "@material-ui/core";

function MyLink(props){

    const preventDefault = (event) => event.preventDefault();

    return(
        <Link href='#' onClick={preventDefault}>
            {props.text}
        </Link>
    )
}

export default MyLink;

