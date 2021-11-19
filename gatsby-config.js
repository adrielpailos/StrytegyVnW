module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "list-card",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/ckw2eo0rd5lur01z732m85thm/master",
      },
    }
  ],
};