import express from "express";
import cors from "cors";
import helmet from "helmet";
import { graphglHTTP } from "express-graphql";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(helmet());

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
