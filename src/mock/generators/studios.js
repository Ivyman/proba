const faker = require("faker");

const studios = [
    {
        id: "1",
        name: "Yrtych media",
        address: {
            latitude: 52.233343,
            longitude: 21.000965,
            city: {
                key: "waw",
                name: "Warszawa",
            },
            cityArea: {
                key: "bem",
                name: "Bemowo",
            },
            zipcode: "00-123",
            street: "ul. Mariańska",
            buildingNumber: "1",
            room: "",
        },
        logo:
            "https://www.zyrtychmedia.pl/static/logo/2017/01/76b3e32db329cd103c657de9890c2282.jpg.png",
        description:
            "Jesteśmy czołową placówką rozwoju muzyki w warszawie. współpracujemy z największymi światowymi wytwórniami i agencjami artystycznymi.",
        contact: {
            phones: ["603-725-488"],
            email: "zyrtychmedia@gmail.com",
            site: "http://www.zyrtychmedia.pl",
        },
        services: [
            { id: "1", name: "Sała prób na godziny" },
            { id: "2", name: "Sała prób na wyłączność" },
            { id: "3", name: "Nagrania" },
        ],
    },
    {
        id: "2",
        name: "Mistic Studio",
        address: {
            latitude: 52.210513,
            longitude: 21.005193,
            city: {
                key: "waw",
                name: "Warszawa",
            },
            cityArea: {
                key: "tar",
                name: "Targówek",
            },
            zipcode: "02-591",
            street: "Ul.Stefana Batorego",
            buildingNumber: "14",
            room: "",
        },
        logo: "http://www.misticstudio.waw.pl/images/pic07.jpg",
        description:
            "Sale prób i studio nagrań. Do dyspozycji trzy w pełni profesjonalne sale prób w centrum Warszawy. Sale o powierzchni 45m2, 35m2 oraz 30m2, cechują się dobrą akustyką (selektywność) i przestronnością.",
        contact: {
            phones: ["504-421-035", "504-155-533"],
            email: "misticstudio@gmail.com",
            site: "http://www.misticstudio.waw.pl",
        },
        services: [
            { id: "1", name: "Sała prób na godziny" },
            { id: "4", name: "Wynajem sprzętu" },
        ],
    },
    {
        id: "3",
        name: "Hear Studio",
        address: {
            latitude: 52.241297,
            longitude: 20.959305,
            city: {
                key: "waw",
                name: "Warszawa",
            },
            cityArea: {
                key: "tar",
                name: "Targówek",
            },
            zipcode: "01-424",
            street: "Aleja Prymasa Tysiąclecia",
            buildingNumber: "62",
            room: "",
        },
        logo:
            "https://hearstudio.pl/wp-content/uploads/2019/02/logoartisticgroup.png",
        description:
            "Hear studio – 10 sal prób, jedyne takie miejsce w Warszawie.",
        contact: {
            phones: ["534-013-170"],
            email: "",
            site: "https://sala-prob.net",
        },
        services: [
            { id: "2", name: "Sała prób na wyłączność" },
            { id: "1", name: "Sała prób na godziny" },
        ],
    },
    {
        id: "4",
        name: "Redrum Studio",
        address: {
            latitude: 52.248147,
            longitude: 21.060489,
            city: {
                key: "waw",
                name: "Warszawa",
            },
            cityArea: {
                key: "wol",
                name: "Wola",
            },
            zipcode: "00-001",
            street: "Grochowska",
            buildingNumber: "316/320",
            room: "",
        },
        logo:
            "http://www.redrumstudio.pl/wp-content/uploads/2016/07/REDRUM-LOGO.jpg",
        description:
            "Nasze studio to trzy, akustycznie zaadaptowane sale prób i studio nagrań mieszczące się na terenie dawnej fabryki PZO.",
        contact: {
            phones: ["515-847-203"],
            email: "redrum@redrumstudio.pl",
            site: "http://www.redrumstudio.pl",
        },
        services: [{ id: "1", name: "Sała prób na godziny" }],
    },
    {
        id: "5",
        name: "Redrum Studio",
        address: {
            latitude: 52.248147,
            longitude: 21.060489,
            city: {
                key: "bial",
                name: "Białystok",
            },
            cityArea: {
                key: "boj",
                name: "Bojary",
            },
            zipcode: "00-001",
            street: "Grochowska",
            buildingNumber: "316/320",
            room: "",
        },
        logo:
            "http://www.redrumstudio.pl/wp-content/uploads/2016/07/REDRUM-LOGO.jpg",
        description:
            "Nasze studio to trzy, akustycznie zaadaptowane sale prób i studio nagrań mieszczące się na terenie dawnej fabryki PZO.",
        contact: {
            phones: ["515-847-203"],
            email: "redrum@redrumstudio.pl",
            site: "http://www.redrumstudio.pl",
        },
        services: [
            { id: "1", name: "Sała prób na godziny" },
            { id: "4", name: "Wynajem sprzętu" },
        ],
    },
];

module.exports = studios;
