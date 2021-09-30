import { getFromLocalStorage } from './storage.js';
import './style.css';
import { displayTasks } from './tasks.js';

const localTasks = getFromLocalStorage('tasks') || [];

displayTasks(localTasks);