const Site = require("./Site");

class SiteRepository {
    async getAll() {
        return await Site.find();
    }

    async getByID(id) {
        return await Site.findById(id);
    }
}

module.exports = SiteRepository;