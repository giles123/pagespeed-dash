const Site = require("./Site");

class SiteRepository {
    findByURL(url) {
        return new Site(url);
    }
}

module.exports = SiteRepository;