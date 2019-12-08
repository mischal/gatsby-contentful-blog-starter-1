/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import Linkbox from "../components/linkbox"
import Header from "./header"
import "./layout.css"
import MainNavigation from "./navigation/main";
import ServiceNavigation from "./navigation/service";

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


    const sample = [{
        linkUrl: 'https://ebanking.ch',
        linkText: 'E-Bankgin'
    }, {
        linkUrl: 'www.google.ch',
        linkText: 'google'
    }
    ];


    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                }}
            >

                <ServiceNavigation/>
                <MainNavigation/>

                <main>{children}</main>
                <footer>
                    <div>
                        <div>
                            <h3>Social Media</h3>
                            <Linkbox links={sample}/>
                        </div>
                        <div>
                            <h3>Unsere Services</h3>
                            <Linkbox links={sample}/>
                        </div>
                        <div>
                            <h3>Basellandschaftliche Kantonalbank</h3>
                            <Linkbox links={sample}/>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
