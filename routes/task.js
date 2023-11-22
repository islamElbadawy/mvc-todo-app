const router = require('express').Router();
const TaskController = require('../controllers/task');

//Find All Tasks
router.get('/', TaskController.index);

// Create Task
router.post('/create', TaskController.create);

// Edit Task
router.get('/update/:id', TaskController.edit);

// Update Task
router.put('/update/:id', TaskController.update);

// Delete Task
router.delete(
	'/delete/:id',
	TaskController.delete
);

module.exports = router;
