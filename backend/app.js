import express from "express";
import cors from "cors";
import helmet from "helmet";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(helmet());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
