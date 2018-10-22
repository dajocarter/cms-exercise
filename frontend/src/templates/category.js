import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

const CategoryTemplate = ({ data }) => (
  <Layout>
    <h1>{data.category.name}</h1>
    <p>There are {data.category.count} posts with this category.</p>
    <p>{data.category.description}</p>
    {data.posts &&
      data.posts.edges && (
        <ul>
          {data.posts.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={`/${node.slug}/`}>{node.title}</Link>
            </li>
          ))}
        </ul>
      )}
  </Layout>
)

export const query = graphql`
  query CategoryQuery($id: String!) {
    category: wordpressCategory(id: { eq: $id }) {
      name
      count
      description
    }
    posts: allWordpressPost(
      filter: { categories: { elemMatch: { id: { eq: $id } } } }
    ) {
      edges {
        node {
          id
          title
          slug
          excerpt
        }
      }
    }
  }
`

export default CategoryTemplate
