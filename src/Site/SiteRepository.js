const Site = require("./Site");

class SiteRepository {
    getAll() {
        return [
            new Site(45378, "Hotel Interwebs", "https://www.hotel-internet-marketing.com/"),
            new Site(40987, "BBC News", "https://www.bbc.co.uk/"),
            new Site(37645, "Google Search", "https://www.google.co.uk/")
        ];
    }
}

module.exports = SiteRepository;