const faker = require("faker");
const { range, random } = require("lodash/fp");
const {
    getRandomCoordinates,
    getRandomServices,
    getRandomArea,
} = require("../helpers/studios.helper");

const cities = require("../data/cities.data");
const services = require("../data/services.data");

const generateStudios = (amount = 50) => {
    const itemsRange = range(1, amount);
    const randomCity = cities[random(0, cities.length - 1)];

    return itemsRange.map((item) => ({
        id: item.toString(),
        name: faker.lorem.words(2),
        address: {
            ...getRandomCoordinates(randomCity),
            city: {
                id: randomCity.id,
                name: randomCity.name,
            },
            cityArea: getRandomArea(randomCity),
            zipcode: faker.address.zipCode(),
            street: faker.address.streetName(),
            buildingNumber: faker.random.number(),
            room: faker.random.number(),
        },
        logo: faker.image.business(),
        description: faker.lorem.paragraph(),
        contact: {
            phones: [
                faker.phone.phoneNumber(),
                faker.phone.phoneNumber(),
                faker.phone.phoneNumber(),
            ],
            email: faker.internet.email(),
            site: faker.internet.url(),
        },
        services: getRandomServices(services),
    }));
};

const studios = generateStudios(50);

module.exports = studios;
