const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    createPage({
        path: '/test',
        component: path.resolve("./src/pages/index.js"),
        defer: true,
    })
}