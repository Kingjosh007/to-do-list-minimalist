import { saveToLocalStorage, getFromLocalStorage } from './storage.js';
import './style.css';
import { dragListener } from './drag-drop.js';
import { tasks, addCheckListener, displayTasks } from './tasks.js';

if (!getFromLocalStorage('tasks')) {
  saveToLocalStorage('tasks', tasks);
}
const localTasks = getFromLocalStorage('tasks');

displayTasks(localTasks, () => {
  addCheckListener(displayTasks);
  dragListener();
});