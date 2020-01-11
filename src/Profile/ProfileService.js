const ProfileResult = require("./ProfileResult");

class ProfileService {
    profileAll(sites) {
        let results = [];

        sites.forEach((site) => {
            results.push(this.profileSite(site));
        });

        return results;
    }

    profileSite(site) {
        return new ProfileResult(site.url, "Site Name", 200, 80);
    }
}

module.exports = ProfileService;