
const expressSitemapXml = require("express-sitemap-xml");

const staticURLs = [
    "", // don't forget the base route!
];

async function getURLs() {
    return staticURLs;
}

module.exports = expressSitemapXml(getURLs, "https://www.hadikhai.engineer");
