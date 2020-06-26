import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import responseStudiosData from "../src/mock/studios";
import responseFiltersData from "../src/mock/filters";

const APP = express();
const PORT = 8086;

APP.use(cors());
APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({ extended: false }));

APP.get("/studios", (req, res) => {
    const studios = responseStudiosData.filter(
        item => item.address.city.key === req.query.city || !req.query.city,
    );

    return res.status(200).send(studios);
});

APP.get("/filters", (req, res) => {
    return res.status(200).send(responseFiltersData);
});

APP.post("/message", (req, res) => {
    return res.status(200).end();
});

APP.listen(PORT, () =>
    console.log("\x1b[36m", `Mock api listening on port ${PORT}`, "\x1b[0m"),
);
