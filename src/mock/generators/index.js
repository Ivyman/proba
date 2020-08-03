const fs = require("fs");
const path = require("path");

const filtersGenerator = require("./filters");
const studiosGenerator = require("./studios");

const db = {
    filters: filtersGenerator,
    studios: studiosGenerator,
};

const serializedDb = JSON.stringify(db, null, 2);
const dbPath = path.resolve(__dirname, `../db.json`);

fs.writeFileSync(dbPath, serializedDb);
