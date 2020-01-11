const routes = require('express').Router();
const ProfileService = require(process.cwd()+"/src/Domain/Profile/ProfileService");
const SiteRepository = require(process.cwd()+"/src/Domain/Site/SiteRepository");

routes.get("/profile", (req, res) => {
    let siteRepo = new SiteRepository();
    let profiler = new ProfileService();

    profiler.profileAll(siteRepo.getAll())
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
});

module.exports = routes;