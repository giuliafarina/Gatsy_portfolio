module.exports = {
  siteMetadata: {
    title: "My Portfolio",
  },
  plugins: ["gatsby-plugin-gatsby-cloud", `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-213980477-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
  ],

};
