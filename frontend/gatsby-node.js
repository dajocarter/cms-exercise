const path = require('path')

/**
 * Create nested paths
 * e.g., /grandparent/parent/node-slug
 * and add to node
 */
exports.sourceNodes = ({ getNodes, actions }) => {
  const { createNodeField } = actions

  // Filter for only page nodes
  const pageNodes = getNodes().filter(
    node => node.internal.type === 'wordpress__PAGE'
  )

  // Build each node's path
  pageNodes.forEach(node => {
    // Save the original node for use down below
    const original = node
    // Start with the node's slug
    let path = `/${node.slug}/`
    // Recursively check for a parent and prepend parent's slug to path
    while (node.wordpress_parent) {
      node = pageNodes.find(
        parentNode => node.wordpress_parent === parentNode.wordpress_id
      )
      path = `/${node.slug}${path}`
    }
    // Add full path to node -- available at node.fields.path
    createNodeField({
      node: original,
      name: `path`,
      value: path,
    })
  })
}

/**
 * Create pages from queries
 */
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // Gather templates
    const pageTemplate = path.resolve('./src/templates/page.js')
    const postTemplate = path.resolve('./src/templates/post.js')
    // Query for all wordpress pages and posts then create pages for them
    resolve(
      graphql(`
        {
          pages: allWordpressPage(filter: { status: { eq: "publish" } }) {
            edges {
              node {
                id
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
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.pages.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.path,
            component: pageTemplate,
            context: {
              id: node.id,
            },
          })
        })

        result.data.posts.edges.forEach(({ node }) => {
          createPage({
            path: `/${node.slug}/`,
            component: postTemplate,
            context: {
              id: node.id,
            },
          })
        })
      })
    )
  })
}
