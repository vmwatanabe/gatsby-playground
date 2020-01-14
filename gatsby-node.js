/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  console.log('pqp');
  console.log(page);
  if (page.path === `/user/`) {
    page.matchPath = `/*`;
    createPage(page);
  }
};
