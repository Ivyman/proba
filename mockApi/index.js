import express from "express";

const app = express();
const port = 8086;

app.get("/", (req, res) => res.status(200).send("Work"));

app.listen(port, () =>
  console.log("\x1b[36m", `Mock api listening on port ${port}`, "\x1b[0m"),
);
