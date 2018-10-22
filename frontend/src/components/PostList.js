import React from 'react'
import { Link } from 'gatsby'

const PostList = ({ title, posts }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {posts && (
        <ul>
          {posts.map(({ node }) => (
            <li key={node.wordpress_id}>
              <Link to={node.fields ? node.fields.path : node.slug}>
                {node.title ? node.title : node.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PostList
