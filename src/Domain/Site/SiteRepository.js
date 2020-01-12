const Site = require("./Site");
const SiteNotFoundError = require("./SiteNotFoundError");

class SiteRepository {
    async getAll() {
        return await Site.find();
    }

    async getByID(id) {
        try {
            return await Site.findById(id);
        } catch (error) {
            throw new SiteNotFoundError(id);
        }
    }
}

module.exports = SiteRepository;