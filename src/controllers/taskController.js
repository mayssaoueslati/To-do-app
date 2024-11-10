const { createTask, getTasks, findTaskById, updateTask, deleteTask } = require('../models/taskModel');

const create = (req, res) => {
  const { title, description, status } = req.body;
  const { user } = req;

  const task = createTask({
    title,
    description,
    status: status || 'pending',
    ownerId: user.id,
    companyId: user.companyId
  });

  res.status(201).json(task);
};

const list = (req, res) => {
  const { user } = req;

  let filteredTasks;
  if (user.role === 'SuperUser') {
    filteredTasks = getTasks();
  } else if (user.role === 'CompanyAdmin') {
    filteredTasks = getTasks().filter(task => task.companyId === user.companyId);
  } else {
    filteredTasks = getTasks().filter(task => task.ownerId === user.id);
  }

  res.json(filteredTasks);
};

const update = (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  const { user } = req;

  const task = findTaskById(id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  if (user.role !== 'SuperUser' && user.role !== 'CompanyAdmin' && task.ownerId !== user.id) {
    return res.status(403).json({ message: 'Access denied' });
  }

  const updatedTask = updateTask(id, { title, description, status });
  res.json(updatedTask);
};

const remove = (req, res) => {
  const { id } = req.params;
  const { user } = req;

  const task = findTaskById(id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  if (user.role !== 'SuperUser' && user.role !== 'CompanyAdmin' && task.ownerId !== user.id) {
    return res.status(403).json({ message: 'Access denied' });
  }

  deleteTask(id);
  res.status(204).end();
};

module.exports = {
  create,
  list,
  update,
  remove
};
