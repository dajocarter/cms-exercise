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
            {node.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        pages: allWordpressPage(filter: { status: { eq: "publish" } }) {
          edges {
            node {
              wordpress_id
              title
              fields {
                path
              }
            }
          }
        }
        posts: allWordpressPost(
          filter: { status: { eq: "publish" }, format: { eq: "standard" } }
        ) {
          edges {
            node {
              wordpress_id
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        {data.pages && <PostList title="All Pages" posts={data.pages.edges} />}
        {data.posts && <PostList title="All Posts" posts={data.posts.edges} />}
      </Layout>
    )}
  />
)

export default IndexPage
