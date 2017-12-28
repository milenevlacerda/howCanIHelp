const express = require('express');
const NgoController = require('../controllers/NgoController');
const NgoSchema = require('../routes/schemas/NgoSchema');
const Auth = require('../middlewares/Auth');

const router = express.Router({ mergeParams: true });

/* GET /ngo/:ngoId */
router.get('/:ngoId', Auth.validate, NgoSchema.get, NgoController.get);

/* POST /ngo */
router.post('/', NgoSchema.post, NgoController.post);

module.exports = router;
