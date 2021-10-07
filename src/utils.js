import { saveToLocalStorage, getFromLocalStorage, updateIndexes } from './storage.js';

function addTask(taskName) {
  let allTasks = getFromLocalStorage('tasks') || [];
  const newTask = { index: 0, description: taskName, completed: false };
  if(!allTasks.find((t) => t.description === taskName))
  {
    allTasks.push(newTask);
    allTasks = updateIndexes(allTasks);
    saveToLocalStorage('tasks', allTasks);
  }
}

function deleteTask(index) {
  let allTasks = getFromLocalStorage('tasks') || [];
  allTasks = allTasks.filter((t) => Number(t.index) !== Number(index));
  allTasks = updateIndexes(allTasks);
  saveToLocalStorage('tasks', allTasks);
}

export { addTask, deleteTask };

module.exports = { addTask, deleteTask };