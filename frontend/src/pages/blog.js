import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import PostList from '../components/PostList'

const BlogPage = () => (
  <StaticQuery
    query={graphql`
      {
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
        {data.posts && <PostList title="All Posts" posts={data.posts.edges} />}
      </Layout>
    )}
  />
)

export default BlogPage
