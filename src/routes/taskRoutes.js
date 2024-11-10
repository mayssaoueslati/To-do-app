const express = require('express');
const router = express.Router();
const { getUser } = require('../middleware/authMiddleware');
const taskController = require('../controllers/taskController');

router.post('/tasks', getUser, taskController.create);
router.get('/tasks', getUser, taskController.list);
router.put('/tasks/:id', getUser, taskController.update);
router.delete('/tasks/:id', getUser, taskController.remove);

module.exports = router;
