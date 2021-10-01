import { getFromLocalStorage, saveToLocalStorage } from './storage.js';
import './style.css';
import { displayTasks } from './tasks.js';

const toDoTitle = document.querySelector('.toDoTitle');
toDoTitle.textContent = getFromLocalStorage('toDoTitle');
toDoTitle.addEventListener('focus', () => {
  toDoTitle.style.outline = 'none';
  toDoTitle.addEventListener('keydown', (e) => {
    const { key } = e;
    if (key === 'Enter' || key === 'Escape') {
      const newTitle = toDoTitle.textContent;
      saveToLocalStorage('toDoTitle', newTitle);
    }
  });
});
toDoTitle.addEventListener('blur', () => {
  const newTitle = toDoTitle.textContent;
  saveToLocalStorage('toDoTitle', newTitle);
});

const localTasks = getFromLocalStorage('tasks') || [];
displayTasks(localTasks);