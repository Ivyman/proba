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
    const randomCity = () => cities[random(0, cities.length - 1)];

    return itemsRange.map((item) => {
        const randomCityData = randomCity();

        return {
            id: item.toString(),
            cityId: randomCityData.id,
            name: faker.lorem.words(2),
            address: {
                ...getRandomCoordinates(randomCityData),
                city: {
                    id: randomCityData.id,
                    name: randomCityData.name,
                },
                cityArea: getRandomArea(randomCityData),
                zipcode: faker.address.zipCode(),
                street: faker.address.streetName(),
                buildingNumber: faker.random.number(),
                room: faker.random.number(),
            },
            logo: `${faker.image.business()}?random=${item}`,
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
        };
    });
};

const studios = generateStudios(50);

module.exports = studios;
