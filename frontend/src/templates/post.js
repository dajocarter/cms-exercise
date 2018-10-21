import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const PostTemplate = ({ data }) => (
  <Layout>
    <h1>{data.post.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
  </Layout>
)

export const query = graphql`
  query PostQuery($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }
`

export default PostTemplate
