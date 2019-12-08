import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Linkbox from "../components/linkbox";

const Bold = ({ children }) => <b>{children}</b>
const Italic = ({ children }) => <i>{children}</i>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
    renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
}




const sample = [{
    linkUrl: 'https://ebanking.ch',
    linkText: 'E-Bankgin'
}, {
    linkUrl: 'www.google.ch',
    linkText: 'google'
}
];


const site1 = ({data}) => {
    return (
        <Layout>
            <div>
                <h1>{data.contentfulContent.siteTitle}</h1>
                <div>
                    <h3>{data.contentfulContent.title}</h3>
                    <div>
                        {documentToReactComponents(data.contentfulContent.content.json, options)}
                    </div>
                    <div style={{float: `left`}}>
                        <Linkbox links={data.contentfulContent.linkBox.links}></Linkbox>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export const query = graphql`
  query MyQuery {
 
      contentfulContent {
        siteTitle
        title
        content {
          json
        }
         linkBox {
              links {
                linkText
                linkUrl
              }
        }
       
      }
}

`

export default site1
