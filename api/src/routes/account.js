const express = require('express');
const Auth = require('../middlewares/Auth');
const AccountController = require('../controllers/AccountController');
const AccountSchema = require('../routes/schemas/AccountSchema');

const router = express.Router({ mergeParams: true });

/* GET /account */
router.get('/', Auth.validate, AccountSchema.get, AccountController.get);

/* GET /account/donations */
router.get('/donations', Auth.validate, AccountSchema.getDonations, AccountController.getDonations);

/* GET /account/projects */
router.get('/projects', Auth.validate, AccountSchema.getProjects, AccountController.getProjects);

module.exports = router;
