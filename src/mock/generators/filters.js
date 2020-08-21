const {
    getCityNames,
    normalizeCityAreas,
    defaultItem,
} = require("../helpers/filters.helper");

const cities = require("../data/cities.data");
const services = require("../data/services.data");

const filters = {
    cities: getCityNames(cities),
    cityAreas: normalizeCityAreas(cities),
    services: [defaultItem, ...services],
};

module.exports = filters;
