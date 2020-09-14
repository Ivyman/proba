const fs = require("fs");
const path = require("path");

const filtersGenerator = require("./filters");
const unitsGenerator = require("./units");

const db = {
    filters: filtersGenerator,
    units: unitsGenerator,
};

const serializedDb = JSON.stringify(db, null, 2);
const dbPath = path.resolve(__dirname, `../db.json`);

fs.writeFileSync(dbPath, serializedDb);
