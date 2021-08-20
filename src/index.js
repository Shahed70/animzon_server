const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const mongoose = require("mongoose");
require('dotenv').config()
 
  mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
  })
  
  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`
      🚀  Server is ready at ${url}
      📭  Query at https://studio.apollographql.com/dev
    `);
  });