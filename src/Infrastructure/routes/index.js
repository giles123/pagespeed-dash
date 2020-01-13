'use strict';

const routes = require('express').Router();
const SiteController = require('../controllers/SiteController');
const ProfileController = require('../controllers/ProfileController');
const APIAuthMiddleware = require('../middleware/APIAuthMiddleware');
const SiteRepository = require(process.cwd() + '/src/Domain/Site/SiteRepository');
const ProfileService = require(process.cwd() + '/src/Domain/Profile/ProfileService');

const siteRepo = new SiteRepository();
const siteController = new SiteController(siteRepo);
const profileController = new ProfileController(siteRepo, new ProfileService());
const apiAuthMiddleware = new APIAuthMiddleware();

routes.all('*', apiAuthMiddleware.validateKey);

routes.get('/sites', siteController.all);

routes.get('/profile', profileController.profileAll);
routes.get('/profile/:siteId', profileController.profileSite);

module.exports = routes;
