const express = require('express');
const UserController = require('../controllers/UserController');
const UserSchema = require('../routes/schemas/UserSchema');

const router = express.Router({ mergeParams: true });

/* GET /user/:alunoId */
// router.get('/:userId', UserSchema.get, UserController.get);

/* GET /user */
// router.get('/', UserSchema.get, UserController.get);

/* POST /user */
router.post('/', UserSchema.post, UserController.post);

/* PUT /user/:userId */
// router.put('/:userId', UserSchema.put, UserController.put);

/* DELETE /user/:userId */
// router.delete('/:userId', UserSchema.delete, UserController.delete);

module.exports = router;
