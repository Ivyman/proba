export const API = {
    BASE_URL: process.env.REACT_APP_USE_REAL_DB
        ? process.env.REACT_APP_BASE_URL_REAL_DB
        : process.env.REACT_APP_BASE_URL,
    URLS: {
        UNITS: "/units",
        USERS: "/users",
        FILTERS: "/filters",
        MESSAGE: "/message",
        CONTACT: "/contact",
        ABOUT: "/about",
        TERMS: "/terms",
        POLICY: "/policy",
        SIGNIN: "/signin",
        SIGNUP: "/signup",
    },
};

export const GL_MAP = {
    ACCESS_TOKEN:
        "pk.eyJ1Ijoibm8tbmFtZSIsImEiOiJjazA3M2N1YWYwM2J2M25vMXhlZDVhcWExIn0.Rm7b72RFKxrx6HjVLFqSRQ",
};

export const FILTERS_DEBOUNCED_INTERVAL = 500;

export const BRAND = {
    NAME: "Proba",
    NAME_WITH_DOMAIN: "proba.pl",
    EMAIL: "probamail@gmail.com",
};
