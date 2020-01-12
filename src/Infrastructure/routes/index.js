const routes = require("express").Router();
const ProfileController = require("../controllers/ProfileController");
const SiteController = require("../controllers/SiteController");

profileController = new ProfileController();
siteController = new SiteController();

routes.get("/profile", profileController.profileAll);

routes.get("/sites", siteController.all);

module.exports = routes;