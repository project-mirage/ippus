// exports.createPages = async ({ actions, graphql, reporter }) => {
//     const result = await graphql(`
//         {
//             allWpPage {
//                 nodes {
//                     aboutPage {
//                         contentSection {
//                             aboutTitle
//                             aboutDescription
//                         }
//                         ourTeam {
//                             memberName
//                             memberRole
//                             facebook
//                             whatsapp
//                             linkedin
//                             memberImage {
//                                 sourceUrl
//                             }
//                         }
//                     }
//                     landingPage {
//                         heroSectionSlide {
//                             title
//                             cta
//                             image {
//                                 sourceUrl
//                             }
//                         }
//                         whatWeDo {
//                             title
//                             description
//                         }
//                         ourProjects {
//                             projectName
//                             projectDescription
//                             projectImage {
//                                 sourceUrl
//                             }
//                         }
//                         howItWorks {
//                             benefitTitle
//                             benefitDescription
//                         }
//                         whoWeAre {
//                             title
//                             subTitle
//                             cta
//                         }
//                         callToActionSection {
//                             blockHeading
//                             blockText
//                             blockEmail
//                         }
//                     }
//                     competitionPage {
//                         contentSection {
//                             sectionTitle
//                             sectionDescription
//                         }
//                         registerForm {
//                             heading
//                             text
//                             address
//                             email
//                             phone
//                         }
//                     }
//                 }
//             }
//         }
//     `);

//     if (result.errors) {
//         reporter.error("There was an error fetching posts", result.errors);
//     }

//     // console.error(result.data);

//     // // Define the template to use
//     // const template = require.resolve(`./src/pages/about.js`);

//     // if (result.data.allWpPage.nodes.length) {
//     //     result.data.allWpPage.nodes.map((page) => {
//     //         actions.createPage({
//     //             path: "/about",
//     //             component: template,
//     //             context: page,
//     //         });
//     //     });
//     // }
// };
