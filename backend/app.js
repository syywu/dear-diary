import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(helmet());

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
