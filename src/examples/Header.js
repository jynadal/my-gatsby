import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import staticQuery from 'gatsby'

const getData= graphql`
{
    site {
      siteMetadata {
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

const Header = () => {
    const {site:{siteMetadata:{title, person:{name}}}} = useStaticQuery(getData)
    return (
        <div>
            {/* <h1>title :{data.site.siteMetadata.title}</h1> */}
            <h1>title : {title}</h1>
            <h2>name : {name}</h2>

        </div>
    )
}

export default Header

