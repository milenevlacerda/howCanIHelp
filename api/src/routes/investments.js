const express = require('express');
const InvestmentsController = require('../controllers/InvestmentsController');
const InvestmentsSchema = require('../routes/schemas/InvestmentsSchema');

const router = express.Router({ mergeParams: true });

/* GET /investments */
router.get('/', InvestmentsSchema.list, InvestmentsController.list);

/* GET /investments/:alunoId */
router.get('/:investmentsId', InvestmentsSchema.get, InvestmentsController.get);

/* POST /investments */
router.post('/', InvestmentsSchema.post, InvestmentsController.post);

/* PUT /investments/:investmentsId */
router.put('/:investmentsId', InvestmentsSchema.put, InvestmentsController.put);

/* DELETE /investments/:investmentsId */
router.delete('/:investmentsId', InvestmentsSchema.delete, InvestmentsController.delete);

module.exports = router;
