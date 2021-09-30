import { saveToLocalStorage, getFromLocalStorage, updateIndexes } from './storage.js';

export default function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    }

    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

const addDragEventListener = (callback = () => 1) => {
  const draggables = document.querySelectorAll('.draggable');
  const toDoBody = document.querySelector('.toDoBody');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  });

  toDoBody.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(toDoBody, e.clientY);
    const draggable = document.querySelector('.dragging');
    let allTasks = getFromLocalStorage('tasks') || [];
    if (afterElement == null) {
      toDoBody.appendChild(draggable);
      const newEl = allTasks.find((el) => el.index === Number(draggable.getAttribute('data-index')));
      allTasks = allTasks.filter((el) => el.index !== newEl.index);
      newEl.index = allTasks.length + 1;
      allTasks.push(newEl);
    } else {
      toDoBody.insertBefore(draggable, afterElement);
      const drsInd = [...document.querySelector('.toDoBody').querySelectorAll('.draggable')]
        .map((dr) => Number(dr.getAttribute('data-index')));
      allTasks = drsInd.map((ind) => allTasks.find((t) => t.index === ind));
    }
    allTasks = updateIndexes(allTasks);
    saveToLocalStorage('tasks', allTasks);
    callback();
  });
};

export { addDragEventListener as dragListener };
