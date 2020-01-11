const ProfileService = require(process.cwd()+"/src/Domain/Profile/ProfileService");
const SiteRepository = require(process.cwd()+"/src/Domain/Site/SiteRepository");

class ProfileController {

    #siteRepo;

    #profiler;

    constructor() {
        this.#siteRepo = new SiteRepository();
        this.#profiler = new ProfileService();
    }
    
    profileAll = (req, res) => {

        this.#siteRepo.getAll().then((sites) => {
            this.runProfile(sites, res);
        }).catch((error) => {
            res.status(500);

            res.send(
                {
                    meta: {
                        code: 500,
                    },
                    data: {
                        error: error
                    }
                }
            );
        });
    }

    runProfile(sites, res) {
        this.#profiler.profileAll(sites)
            .then((response) => {
                res.send(
                    {
                        meta: {
                            code: 200,
                            results: response.length
                        },
                        data: response
                    }
                );
            }).catch((error) => {
                res.status(500);

                res.send(
                    {
                        meta: {
                            code: 500,
                        },
                        data: {
                            error: error
                        }
                    }
                );
            });
    }
}

module.exports = ProfileController;
