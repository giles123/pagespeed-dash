const Site = require("./Site");

class SiteRepository {
    async getAll() {
        return await Site.find();
    }
}

module.exports = SiteRepository;