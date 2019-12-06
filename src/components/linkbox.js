
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Linkbox = ({data}) => {
    const { site } = useStaticQuery(
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
           <div>ich bin eine Linkbox
               {site.siteMetadata.title}
           </div>
        </>
    )


 }
 Linkbox.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Linkbox
