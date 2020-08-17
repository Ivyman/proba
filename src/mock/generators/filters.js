const faker = require("faker");
const cities = require("../data/cities.data");
const services = require("../data/services.data");

const cityNames = Object.values(cities).map(({ id, name }) => ({ id, name }));
const defaultItem = { id: 0, name: "Wszystkie" };
const getAreas = (cityId) =>
    cities
        .find(({ id }) => id === cityId)
        .areas.map((area, i) => ({ id: ++i, name: area }));

const filters = {
    cities: [...cityNames],
    cityAreas: {
        1: [defaultItem, ...getAreas(1)],
        2: [defaultItem, ...getAreas(2)],
        3: [defaultItem, ...getAreas(3)],
    },
    services: [{ id: "0", name: "Wszystkie" }, ...services],
};

module.exports = filters;
