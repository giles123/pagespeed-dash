const ProfileResult = require("./ProfileResult");
const baseUrl = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=";
const axios = require("axios");

class ProfileService {
    profileAll(sites) {
        let results = Promise.all(
            sites.map(this.profileSite)
        );

        return results;
    }

    async profileSite(site) {
        try {
            let response = await axios.get(baseUrl + site.url);

            return new ProfileResult(
                site,
                response.status,
                response.data.lighthouseResult.categories.performance.score * 100
            );
        } catch (error) {
            return new ProfileResult(
                site,
                error.response.status,
                "N/A",
                error
            );
        }
    }
}

module.exports = ProfileService;