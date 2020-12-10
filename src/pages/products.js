import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import styles from '../components/products.module.css'
import Image from 'gatsby-image'
import {Link} from "gatsby"

// const getDataContentful = graphql`  allContentfulProducts {
//     nodes {
//       price
//       image {
//         fluid {
//           ...GatsbyContentfulFluid
//         }
//       }
//       title
//       slug
//     }
//   }`


const ComponentName = ({data}) => {
    const {
        allContentfulProducts: { nodes: products}, 
    } = data

    return <Layout>
                <section className={styles.page}>
                    {products.map((product) => {
                       return <article key={product.id}>
                           <Image fluid={product.image.fluid} alt={product.title} />
                           <h3>{product.title} <span>{product.price}€</span></h3>
                           <Link to={`/products/${product.slug}`}>more details</Link>

                       </article>

                    })}

                </section>
            </Layout>
}

export const query = graphql`
  {
    allContentfulProducts {
      nodes {
        id
        title
        slug
        price
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
       
      }
    }
  }
`

export default  ComponentName