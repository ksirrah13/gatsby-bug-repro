const fs = require('fs');
const { buildSchema } = require('graphql');

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [ 
    {
    resolve: 'gatsby-source-graphql',
    options: {
      // This type will contain remote schema Query type
      typeName: 'TEST_API',
      // This is the field under which it's accessible
      fieldName: 'TEST_API',
      // URL to query from (URL with introspection disabled)
      url: 'https://rickandmortyapi.com/graphql_broken',

      // working url
      // url: 'https://rickandmortyapi.com/graphql',

      createSchema: async () => {
        const sdl = fs.readFileSync(`${__dirname}/schema.graphql`).toString();
        return buildSchema(sdl);;
      },
    },
  },
],
}
