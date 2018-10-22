import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import Layout from '../components/layout'

const PostList = ({ title, posts }) => (
  <div>
    <h2>{title}</h2>
    <ul>
      {posts.map(({ node }) => (
        <li key={node.wordpress_id}>
          <Link to={node.fields ? node.fields.path : node.slug}>
            {node.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const CategoriesPage = () => (
  <StaticQuery
    query={graphql`
      {
        categories: allWordpressCategory(filter: { count: { gt: 0 } }) {
          edges {
            node {
              wordpress_id
              name
              fields {
                path
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        {data.categories && (
          <PostList title="All Categories" posts={data.categories.edges} />
        )}
      </Layout>
    )}
  />
)

export default CategoriesPage
