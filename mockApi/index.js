import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import responseStudiosData from "../src/mock/studios";
import responseFiltersData from "../src/mock/filters";

const app = express();
const port = 8086;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/studios", (req, res) => {
    const studios = responseStudiosData.studios.filter(item => {
        const itemName = item.name.toLocaleLowerCase();
        let searchQuery = "";

        if (req.query.searchQuery) {
            searchQuery = req.query.searchQuery.toLocaleLowerCase();
        }

        return itemName.includes(searchQuery);
    });

    const result = {
        nextPageToken: responseStudiosData.nextPageToken,
        studios: studios,
    };

    return res.status(200).send(result);
});

app.get("/filters", (req, res) => {
    return res.status(200).send(responseFiltersData);
});

app.post("/message", (req, res) => {
    return res.status(200).end();
});

app.listen(port, () =>
    console.log("\x1b[36m", `Mock api listening on port ${port}`, "\x1b[0m"),
);
