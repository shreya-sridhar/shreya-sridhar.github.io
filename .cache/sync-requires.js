const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/shreyamohak/shreya-sridhar.github.io/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/shreyamohak/shreya-sridhar.github.io/src/pages/contact.js"))),
  "component---src-pages-experience-js": hot(preferDefault(require("/home/shreyamohak/shreya-sridhar.github.io/src/pages/experience.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/shreyamohak/shreya-sridhar.github.io/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/home/shreyamohak/shreya-sridhar.github.io/src/pages/projects.js"))),
  "component---src-pages-recommendation-js": hot(preferDefault(require("/home/shreyamohak/shreya-sridhar.github.io/src/pages/recommendation.js")))
}

