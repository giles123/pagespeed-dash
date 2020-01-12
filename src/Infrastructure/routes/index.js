const routes = require("express").Router();
const SiteController = require("../controllers/SiteController");
const ProfileController = require("../controllers/ProfileController");
const APIAuthMiddleware = require("../middleware/APIAuthMiddleware");

siteController = new SiteController();
profileController = new ProfileController();
apiAuthMiddleware = new APIAuthMiddleware();

routes.all("*", apiAuthMiddleware.validateKey);

routes.get("/sites", siteController.all);

routes.get("/profile", profileController.profileAll);
routes.get("/profile/:siteId", profileController.profileSite);

module.exports = routes;