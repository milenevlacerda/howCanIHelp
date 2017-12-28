const express = require('express');
const NgoController = require('../controllers/NgoController');
const NgoSchema = require('../routes/schemas/NgoSchema');

const router = express.Router({ mergeParams: true });

/* POST /ngo */
router.post('/', NgoSchema.post, NgoController.post);

module.exports = router;