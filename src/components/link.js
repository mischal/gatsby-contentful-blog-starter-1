import React from "react";

function Link(props) {
    return <><a target={props.target} href={props.url}>{props.text}</a></>;
}

export default Link