const { random, range } = require("lodash/fp");

const getRandomIndex = (array) => random(0, array.length - 1);

const getRandomCoordinates = (cityData) => ({
    latitude: 52.233343,
    longitude: 21.000965,
});

const getRandomArea = (cityData) => {
    const areas = cityData.areas;
    const randomIndex = getRandomIndex(areas);

    return { id: (randomIndex + 1).toString(), name: areas[randomIndex] };
};

const getRandomServices = (services) => {
    const randomAmount = range(1, random(2, services.length + 1));
    const servicesArr = [...services];

    randomServices = randomAmount.reduce((acc, curr) => {
        const randomIndex = getRandomIndex(servicesArr);
        const randomServiceArr = servicesArr.splice(randomIndex, 1);

        return [...acc, ...randomServiceArr];
    }, []);

    return randomServices;
};

module.exports = { getRandomCoordinates, getRandomArea, getRandomServices };
