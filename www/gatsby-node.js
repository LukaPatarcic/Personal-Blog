const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    // Define a template for blog post
    const Article = path.resolve("src/templates/Arcticle/Article.tsx");

    const result = await graphql(
        `
      {
        allStrapiTest {
          nodes {
            name,
            slug
          }
        }
      }
    `
    )

    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your Strapi articles`,
            result.errors
        )

        return
    }

    const articles = result.data.allStrapiTest.nodes

    if (articles.length > 0) {
        articles.forEach((article) => {
            createPage({
                path: `/article/${article.slug}`,
                component: Article,
                context: {
                    slug: article.slug,
                },
            })
        })
    }
}
