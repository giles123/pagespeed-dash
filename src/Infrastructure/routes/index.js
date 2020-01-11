const routes = require("express").Router();
const ProfileController = require("../controllers/ProfileController");

profileController = new ProfileController();

routes.get("/profile", profileController.profileAll);

module.exports = routes;