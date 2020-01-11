const Site = require("./Site");

class SiteRepository {
    getAll() {
        return [
            new Site(45378, "https://www.hotel-internet-marketing.com/"),
            new Site(40987, "https://www.bbc.co.uk/"),
            new Site(37645, "https://www.google.co.uk/")
        ];
    }
}

module.exports = SiteRepository;