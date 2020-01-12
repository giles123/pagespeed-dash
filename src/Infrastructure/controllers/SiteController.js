const SiteRepository = require(process.cwd()+"/src/Domain/Site/SiteRepository");
const BaseController = require("./BaseController");

class SiteController extends BaseController {

    #siteRepo;

    constructor() {
        super();
        this.#siteRepo = new SiteRepository();
    }
    
    all = (req, res) => {

        this.#siteRepo.getAll().then((sites) => {
            this.successResponse(res, sites);
        }).catch((error) => {
            this.errorResponse(res, error, 500);
        });
    }
}

module.exports = SiteController;
