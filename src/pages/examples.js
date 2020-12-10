import React from 'react'
import Header from '../examples/Header'
import HeaderStatic from '../examples/HeaderStatic'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'

const examples = ({data}) => {
    const {
        site: {
        info: { author },
    },
} = data

    return (
        <Layout>
            <h2>Hello from Example Pages</h2>
            <Header />
            <HeaderStatic />
    <h5>author: {author}</h5>
        </Layout>
    )
}

export const data = graphql`
query MyQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`
export default examples
