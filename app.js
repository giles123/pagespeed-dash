const express = require("express");
const ProfileService = require("./src/Profile/ProfileService");
const SiteRepository = require("./src/Site/SiteRepository");

const PORT = 80;
const HOST = '0.0.0.0';

const app = express();

app.get("/profile", (req, res) => {
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

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
