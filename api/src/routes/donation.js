const express = require('express');
const DonationController = require('../controllers/DonationController');
const DonationSchema = require('../routes/schemas/DonationSchema');

const router = express.Router({ mergeParams: true });

/* GET /donation */
router.get('/', DonationSchema.list, DonationController.list);

/* GET /donation/:alunoId */
router.get('/:userId', DonationSchema.get, DonationController.get);

/* POST /donation */
router.post('/', DonationSchema.post, DonationController.post);

module.exports = router;
