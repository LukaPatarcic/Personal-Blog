import type { GatsbyConfig } from "gatsby"

require('dotenv').config({
  path: `.env`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['test'],
  singleTypes: [],
};


const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://blog.spolnici.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: strapiConfig,
    }
  ],
}

export default config
