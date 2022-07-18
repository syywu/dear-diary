import express from "express";
import cors from "cors";
import helmet from "helmet";
import pkg from "express-graphql";
const { graphglHTTP } = pkg;

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(helmet());

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
