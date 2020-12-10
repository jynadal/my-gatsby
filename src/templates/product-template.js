import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout'
import Image from "gatsby-image"

const ComponentName = ({ data:{product:{title, price, image:{fixed}, info:{info},},} }) => {
    return (<Layout>
        <div style={{textAlign:"center"}}>
            <Link to="/products">back to products</Link>
            <h1>single product</h1>
        </div>
        <section className="single-product">
          <article>
              <Image fixed={fixed} alt={title} />
          </article>
          <article>
              <h1>{title}</h1>
              <h3>{price}€</h3>
              <p>{info}</p>
              <button>Add to cart</button>
          </article>
        </section>
    </Layout>
    )
}

export const query = graphql`
query GetSingleProduct($slug: String) {
    product: contentfulProducts(slug: {eq: $slug}
      ) {
      title
      slug
      price
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName
