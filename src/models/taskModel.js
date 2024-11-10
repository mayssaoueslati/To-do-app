let taskId = 1;

const tasks = [];

const createTask = (task) => {
  task.id = taskId++;
  tasks.push(task);
  return task;
};

const getTasks = () => tasks;

const findTaskById = (id) => tasks.find(task => task.id === parseInt(id));

const updateTask = (id, updatedTask) => {
  const task = findTaskById(id);
  if (task) {
    Object.assign(task, updatedTask);
    return task;
  }
  return null;
};

const deleteTask = (id) => {
  const index = tasks.findIndex(task => task.id === parseInt(id));
  if (index !== -1) {
    tasks.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = {
  createTask,
  getTasks,
  findTaskById,
  updateTask,
  deleteTask
};
