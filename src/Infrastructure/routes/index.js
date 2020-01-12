const routes = require("express").Router();
const SiteController = require("../controllers/SiteController");
const ProfileController = require("../controllers/ProfileController");

siteController = new SiteController();
profileController = new ProfileController();

routes.get("/sites", siteController.all);

routes.get("/profile", profileController.profileAll);
routes.get("/profile/:siteId", profileController.profileSite);

module.exports = routes;