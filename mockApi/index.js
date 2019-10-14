import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import studios from "../src/mock/studios";

const app = express();
const port = 8086;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/studios", (req, res) => res.status(200).send(studios));

app.listen(port, () =>
  console.log("\x1b[36m", `Mock api listening on port ${port}`, "\x1b[0m"),
);
