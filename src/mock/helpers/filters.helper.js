const { values } = require("lodash/fp");

const defaultItem = { id: "0", name: "Wszystkie" };

const getCityNames = (cities) =>
    values(cities).map(({ id, name }) => ({
        id,
        name,
    }));

const getAreas = (areas) => {
    const normAreas = areas.map((area, i) => ({
        id: (++i).toString(),
        name: area,
    }));
    normAreas.unshift(defaultItem);

    return normAreas;
};

const normalizeCityAreas = (cities) =>
    cities.reduce(
        (acc, curr) => ({
            ...acc,
            [curr.id]: getAreas(curr.areas),
        }),
        {},
    );

module.exports = { defaultItem, getCityNames, getAreas, normalizeCityAreas };
