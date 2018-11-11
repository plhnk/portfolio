const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: 'slug',
      value: `/notes${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)

    throw Error(allMarkdown.errors)
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const slug = node.fields.slug

    createPage({
      path: slug,
      component: path.resolve(__dirname, './src/components/templates/NoteLayout/index.tsx'),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  console.log('==============', path.join(__dirname, 'src/utils'))
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        '@/': path.join(__dirname, 'src'),
        '@/components': path.join(__dirname, 'src/components'),
        '@/utils': path.join(__dirname, 'src/utils'),
        '@/style': path.join(__dirname, 'src/style'),
        '@/images': path.join(__dirname, 'src/images'),
      },
    },
  })
}
