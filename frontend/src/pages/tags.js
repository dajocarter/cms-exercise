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

const TagsPage = () => (
  <StaticQuery
    query={graphql`
      {
        tags: allWordpressTag(filter: { count: { gt: 0 } }) {
          edges {
            node {
              wordpress_id
              name
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        {data.tags && <PostList title="All Tags" posts={data.tags.edges} />}
      </Layout>
    )}
  />
)

export default TagsPage
