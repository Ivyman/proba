const faker = require("faker");

const studios = [
    {
        id: "1",
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
    },
];

module.exports = studios;
