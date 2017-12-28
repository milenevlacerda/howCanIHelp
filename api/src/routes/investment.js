const express = require('express');
const InvestmentController = require('../controllers/InvestmentController');
const InvestmentSchema = require('./schemas/InvestmentSchema');
const Auth = require('../middlewares/Auth');

const router = express.Router({ mergeParams: true });

/* GET /investments */
// router.get('/', InvestmentsSchema.list, InvestmentsController.list);

/* GET /investments/:alunoId */
// router.get('/:investmentsId', InvestmentsSchema.get, InvestmentsController.get);

/* POST /investments */
router.post('/', Auth.validate, InvestmentSchema.post, InvestmentController.post);

/* PUT /investments/:investmentsId */
// router.put('/:investmentsId', InvestmentsSchema.put, InvestmentsController.put);

/* DELETE /investments/:investmentsId */
// router.delete('/:investmentsId', InvestmentsSchema.delete, InvestmentsController.delete);

module.exports = router;
