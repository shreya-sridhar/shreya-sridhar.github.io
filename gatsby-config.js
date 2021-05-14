module.exports = {
  siteMetadata: {
    title: 'Shreya Sridhar',
    siteUrl: 'http://shreya-sridhar.github.io',
    description: "Hello there, welcome to my portfolio. I'm a Full Stack developer experienced in Ruby on Rails, React, React Native & Javascript. I transitioned into software engineering from a data science (analytics) background.",
    image: "/src/assets/images/websiteme.png" ,
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Signika`,
          `source sans pro\:300,400,600` // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130172537-1",
        head: false,
      }
    },
  ],
}



