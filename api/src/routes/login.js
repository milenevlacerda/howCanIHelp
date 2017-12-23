const express = require('express');
const LoginController = require('../controllers/LoginController');
const LoginSchema = require('./schemas/LoginSchema');

const router = express.Router({ mergeParams: true });

/* POST /login */
router.post('/', LoginSchema.post, LoginController.post);

/* DELETE /login/:loginId */
// router.delete('/:loginId', LoginSchema.delete, LoginController.delete);

module.exports = router;
