const express = require('express');
const ProjectController = require('../controllers/ProjectController');
const ProjectSchema = require('../routes/schemas/ProjectSchema');

const router = express.Router({ mergeParams: true });

/* GET /project */
router.get('/', ProjectSchema.list, ProjectController.list);

/* GET /project/:alunoId */
router.get('/:projectId', ProjectSchema.get, ProjectController.get);

/* POST /project */
router.post('/', ProjectSchema.post, ProjectController.post);

/* PUT /project/:projectId */
router.put('/:projectId', ProjectSchema.put, ProjectController.put);

/* DELETE /project/:projectId */
router.delete('/:projectId', ProjectSchema.delete, ProjectController.delete);

module.exports = router;
