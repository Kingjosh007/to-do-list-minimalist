import { saveToLocalStorage, getFromLocalStorage } from './storage.js';
import './style.css';
import { tasks, displayTasks } from './tasks.js';

if (!getFromLocalStorage('tasks')) {
  saveToLocalStorage('tasks', tasks);
}
const localTasks = getFromLocalStorage('tasks');

displayTasks(localTasks);