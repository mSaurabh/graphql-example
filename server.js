const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");
const path = require("path");

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
  });

  const server = new ApolloServer({ schema });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(3000, () => {
    console.log("Running GraphQL server...");
  });
}

startApolloServer();

//NOTE No longer needed after introducing resolvers.
// const root = {
//   products: require("./products/products.model"),
//   orders: require("./orders/orders.model")
// };

// NOTE Moved to startApolloServer method
// const app = express();

//NOTE Removed and replaced with ApolloServer instance
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     // rootValue: root,
//     graphiql: true
//   })
// );
