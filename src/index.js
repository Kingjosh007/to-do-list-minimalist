import { saveToLocalStorage, getFromLocalStorage, updateTask } from './storage.js';
import './style.css';

const tasks = [
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

saveToLocalStorage('tasks', tasks);
const localTasks = getFromLocalStorage('tasks') || tasks;

const codeForTask = (task, i, tasks) => {
  const additionalClass = (i !== (tasks.length - 1)) ? 'bordered-btm' : '';
  const checkd = task.completed ? 'checked' : '';
  const striken = task.completed ? 'striken' : '';

  return `<li class="toDoTask ${additionalClass}" data-id="${task.index}">
                <div class="leftSide" data-id="${task.index}">
                <input type="checkbox" class="markTaskCheckbox" data-id="${task.index}" ${checkd} />
                <div class="taskName ${striken}" data-id="${task.index}">${task.description}</div>
                </div>
                <div class="threeDots" data-id="${task.index}"><i class="fas fa-ellipsis-v" data-id="${task.index}"></i></div>
            </li>`;
};

function displayTasks() {
  const allTasksCode = localTasks.sort((a, b) => a.index - b.index)
    .map((el, i, w) => codeForTask(el, i, w));
  document.querySelector('.toDoBody').innerHTML = allTasksCode.join('');
}