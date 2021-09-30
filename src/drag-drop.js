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

const addDragEventListener = (callback) => {
  const draggables = document.querySelectorAll('.draggable');
  const toDoBody = document.querySelector('.toDoBody');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
      const allTasks = getFromLocalStorage('tasks') || [];
      {
        const dragIndexes = [...document.querySelector('.toDoBody').querySelectorAll('.draggable')]
          .map((dr) => Number(dr.getAttribute('data-index')));
        let newTasks = dragIndexes.map((ind) => allTasks.find((el) => el.index === ind));
        newTasks = updateIndexes(newTasks);
        saveToLocalStorage('tasks', newTasks);
        callback();
      }
    });

    toDoBody.addEventListener('dragover', (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(toDoBody, e.clientY);
      const draggable = document.querySelector('.dragging');
      if (afterElement == null) {
        toDoBody.appendChild(draggable);
      } else {
        toDoBody.insertBefore(draggable, afterElement);
      }
    });
  });
};
export { addDragEventListener as dragListener };
