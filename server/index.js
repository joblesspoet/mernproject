const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");
require("dotenv").config();
const port = process.env.PORT || 5000;
const schema = require("./schema/schema");
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

(async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`server started at: ${port}`);
  });
})();
