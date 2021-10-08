import { saveToLocalStorage, getFromLocalStorage, updateIndexes } from './storage.js';

function addTask(taskName) {
  let allTasks = getFromLocalStorage('tasks') || [];
  const newTask = { index: 0, description: taskName, completed: false };
  if (!allTasks.find((t) => t.description === taskName)) {
    allTasks.push(newTask);
    allTasks = updateIndexes(allTasks);
    saveToLocalStorage('tasks', allTasks);
  } else {
    throw new Error('NO_DUPLICATE_TASK: You are trying to add a task that is already added;');
  }
}

function deleteTask(index) {
  let allTasks = getFromLocalStorage('tasks') || [];
  const isValidIndex = (typeof index === 'number') && index >= 1 && index <= allTasks.length;
  if (isValidIndex) {
    allTasks = allTasks.filter((t) => Number(t.index) !== Number(index));
    allTasks = updateIndexes(allTasks);
    saveToLocalStorage('tasks', allTasks);
  } else {
    throw new Error('INVALID_INDEX: You are trying to delete an invalid index.');
  }
}

function updateTaskName(taskInd, newName) {
  let allTasks = getFromLocalStorage('tasks') || [];
  if (typeof taskInd !== 'number') {
    throw new Error('INVALID_PARAMETER: You should use a task index (number) as first parameter');
  } else if (taskInd > allTasks.length) {
    throw new Error('UNEXISTING_TASK: You are passing an index that does not exist.');
  } else {
    const thisTask = allTasks.find((t) => t.index === taskInd);
    thisTask.description = newName;
    allTasks = allTasks.filter((t) => t.index !== taskInd);
    allTasks.push(thisTask);
    saveToLocalStorage('tasks', allTasks.sort((a, b) => a.index - b.index));
  }
}

function clearCompletedTasks() {
  let allTasks = getFromLocalStorage('tasks') || [];
  if (allTasks.length > 0) {
    allTasks = allTasks.filter((t) => !t.completed);
    allTasks = updateIndexes(allTasks);
    saveToLocalStorage('tasks', allTasks);
  }
}

function isObject(object) {
  return object != null && typeof object === 'object';
}
function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2))
        || (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
}

export {
  addTask, deleteTask, updateTaskName, clearCompletedTasks, deepEqual,
};