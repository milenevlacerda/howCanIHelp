const express = require('express');
const Auth = require('../middlewares/Auth');
const AccountController = require('../controllers/AccountController');
const AccountSchema = require('../routes/schemas/AccountSchema');

const router = express.Router({ mergeParams: true });

/* POST /ngo */
router.get('/', Auth.validate, AccountSchema.get, AccountController.get);

module.exports = router;
