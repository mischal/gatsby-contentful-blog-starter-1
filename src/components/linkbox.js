import React from "react"
import PropTypes from "prop-types"
import Test from "./test"
import Link from "./link"
import {useStaticQuery, graphql} from "gatsby"

/*
const sample = [{
    url: 'https://ebanking.ch',
    text: 'E-Bankgin'
}, {
    url: 'www.google.ch',
    text: 'google'
}
];*/

const Linkbox = (props) => {
    const {site} = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    )
    return (
        <>
            <Test/>
            <ul className="linkList">
                {props.links.map((value, index) => {
                        return <li className="linkList"><Link url={value.linkUrl} text={value.linkText}/></li>
                })}
            </ul>
        </>
    )


}
Linkbox.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Linkbox
