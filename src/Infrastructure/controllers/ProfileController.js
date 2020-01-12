const ProfileService = require(process.cwd()+"/src/Domain/Profile/ProfileService");
const SiteRepository = require(process.cwd()+"/src/Domain/Site/SiteRepository");
const BaseController = require("./BaseController");

class ProfileController extends BaseController {

    #siteRepo;

    #profiler;

    constructor() {
        super();
        this.#siteRepo = new SiteRepository();
        this.#profiler = new ProfileService();
    }
    
    profileAll = (req, res) => {

        this.#siteRepo.getAll().then((sites) => {
            this.runProfile(sites, res);
        }).catch((error) => {
            this.errorResponse(res, error, 500);
        });
    }

    profileSite = (req, res) => {
        this.#siteRepo.getByID(req.params.siteId).then((site) => {
            this.runProfile([site], res);
        }).catch((error) => {
            this.errorResponse(res, error, 500);
        });
    }

    runProfile(sites, res) {
        this.#profiler.profileAll(sites)
            .then((response) => {
                this.successResponse(res, response);
            }).catch((error) => {
                this.errorResponse(res, error, 500);
            });
    }
}

module.exports = ProfileController;
