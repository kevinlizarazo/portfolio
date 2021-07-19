/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      projects: allMdx(filter: {fileAbsolutePath: {regex: "/projects/"}}) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  data.projects.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/components/project.js`),
      context: { slug: slug },
    })
  })
}
