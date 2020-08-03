const faker = require("faker");

const filters = {
    cities: [
        { name: "Warszawa", key: "waw" },
        { name: "Gdańsk", key: "gda" },
    ],
    cityAreas: {
        waw: [
            { key: "all", name: "Wszystkie" },
            { key: "bem", name: "Bemowo" },
            { key: "bial", name: "Białołęka" },
            { key: "bel", name: "Bielany" },
            { key: "moc", name: "Mokotów" },
            { key: "och", name: "Ochota" },
            { key: "prpne", name: "Praga Południe" },
            { key: "prpc", name: "Praga Północ" },
            { key: "rem", name: "Rembertów" },
            { key: "sr", name: "Śródmieście" },
            { key: "tar", name: "Targówek" },
            { key: "urs", name: "Ursus" },
            { key: "ursy", name: "Ursynów" },
            { key: "waw", name: "Wawer" },
            { key: "wes", name: "Wesoła" },
            { key: "wil", name: "Wilanów" },
            { key: "wlo", name: "Włochy" },
            { key: "wol", name: "Wola" },
            { key: "zol", name: "Żoliborz" },
        ],
        gda: [
            { key: "all", name: "Wszystkie" },
            { key: "ani", name: "Aniołki" },
            { key: "bre", name: "Brętowo" },
            { key: "brz", name: "Brzeźno" },
            { key: "che", name: "Chełm" },
            { key: "bem", name: "Jasień" },
            { key: "kok", name: "Kokoszki" },
        ],
    },
    services: [
        { id: "0", name: "Wszystkie" },
        { id: "1", name: "Sała prób na godziny" },
        { id: "2", name: "Sała prób na wyłączność" },
        { id: "3", name: "Nagrania" },
        { id: "4", name: "Wynajem sprzętu" },
    ],
};

module.exports = filters;
