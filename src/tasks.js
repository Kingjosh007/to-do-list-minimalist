import { saveToLocalStorage, getFromLocalStorage, updateTaskCompletion } from './storage.js';
import { dragListener } from './drag-drop.js';

export const tasks = [
  {
    index: 1,
    description: 'Wash dishes',
    completed: true,
  },
  {
    index: 2,
    description: 'Complete To-Do List project',
    completed: false,
  },
  {
    index: 3,
    description: 'Play game',
    completed: false,
  },
];

const codeForTask = (task, i, tasks) => {
  const additionalClass = (i !== (tasks.length - 1)) ? 'bordered-btm' : '';
  const checkd = task.completed ? 'checked' : '';
  const striken = task.completed ? 'striken' : '';

  return `<li class="toDoTask ${additionalClass} draggable" data-index="${task.index}" draggable="true">
                  <div class="leftSide" data-index="${task.index}">
                  <input type="checkbox" class="markTaskCheckbox" data-index="${task.index}" ${checkd} />
                  <div class="taskName ${striken}" data-index="${task.index}">${task.description}</div>
                  </div>
                  <div class="threeDots" data-index="${task.index}"><i class="fas fa-ellipsis-v" data-index="${task.index}"></i></div>
              </li>`;
};

export function addCheckListener() {
  const checkBoxes = document.querySelectorAll('.markTaskCheckbox');
  for (let i = 0; i < checkBoxes.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    checkBoxes[i].addEventListener('change', (e) => {
      const index = e.target.getAttribute('data-index');
      const updatedTasks = updateTaskCompletion(index, getFromLocalStorage('tasks'));
      saveToLocalStorage('tasks', updatedTasks);
      // eslint-disable-next-line no-use-before-define
      displayTasks(getFromLocalStorage('tasks'));
    });
  }
}

export function displayTasks(tasksArr = getFromLocalStorage('tasks') || []) {
  const allTasksCode = tasksArr.sort((a, b) => a.index - b.index)
    .map((el, i, w) => codeForTask(el, i, w));
  document.querySelector('.toDoBody').innerHTML = allTasksCode.join('');
  addCheckListener();
  dragListener();
}