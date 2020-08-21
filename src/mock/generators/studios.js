const faker = require("faker");
const { random, range } = require("lodash/fp");
const cities = require("../data/cities.data");
const services = require("../data/services.data");

const generateStudios = (amount = 50) => {
    const itemsRange = range(1, amount);
    const randomCity = "";

    return itemsRange.map((item) => ({
        id: item.toString(),
        name: faker.lorem.words(2),
        address: {
            latitude: 52.233343,
            longitude: 21.000965,
            city: {},
            cityArea: {},
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
        services: [],
    }));
};

const studios = generateStudios(50);

module.exports = studios;
