exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        {
            allWpPage {
                nodes {
                    aboutPage {
                        description1
                        fieldGroupName
                        title1
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.error("There was an error fetching posts", result.errors);
    }

    console.error(result.data);

    // Define the template to use
    // const template = require.resolve(`./src/pages/about.js`);

    // if (result.data.allWpPost.nodes.length) {
    //     result.data.allWpPost.nodes.map((post) => {
    //         actions.createPage({
    //             path: "/about",
    //             component: template,
    //             context: post,
    //         });
    //     });
    // }
};
