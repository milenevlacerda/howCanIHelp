const express = require('express');
const ProjectController = require('../controllers/ProjectController');
const ProjectSchema = require('../routes/schemas/ProjectSchema');
const Auth = require('../middlewares/Auth');

const router = express.Router({ mergeParams: true });

/* GET /project */
router.get('/', Auth.validate, ProjectSchema.list, ProjectController.list);

/* GET /project/:projectId */
router.get('/:projectId', Auth.validate, ProjectSchema.get, ProjectController.get);

/* POST /project */
router.post('/', Auth.validate, ProjectSchema.post, ProjectController.post);

/* POST /project/:projectId/donation */
router.post('/:projectId/donation', Auth.validate, ProjectSchema.postDonation, ProjectController.postDonation);

/* GET /project/:projectId/donation */
router.get('/:projectId/donation', Auth.validate, ProjectSchema.getDonation, ProjectController.getDonation);

/* PUT /project/:projectId */
// router.put('/:projectId', ProjectSchema.put, ProjectController.put);

/* DELETE /project/:projectId */
// router.delete('/:projectId', ProjectSchema.delete, ProjectController.delete);

module.exports = router;
