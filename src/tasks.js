import {
  saveToLocalStorage, getFromLocalStorage, updateTaskCompletion, updateIndexes,
} from './storage.js';
import { dragListener } from './drag-drop.js';

const codeForTask = (task, i, tasks) => {
  const additionalClass = (i !== (tasks.length - 1)) ? 'bordered-btm' : '';
  const checkd = task.completed ? 'checked' : '';
  const striken = task.completed ? 'striken' : '';

  return `<li class="toDoTask ${additionalClass} draggable" data-index="${task.index}" draggable="true">
                  <div class="leftSide" data-index="${task.index}">
                  <input type="checkbox" class="markTaskCheckbox" data-index="${task.index}" ${checkd} />
                  <div class="taskName ${striken}" data-index="${task.index}" contenteditable>${task.description}</div>
                  </div>
                  <div class="otherIcons" data-index="${task.index}">
                  <div class="deleteIcon hide" data-index="${task.index}"><i class="far fa-trash-alt" data-index="${task.index}"></i></div>
                  <div class="threeDots show" data-index="${task.index}"><i class="fas fa-ellipsis-v" data-index="${task.index}"></i></div>
                  </div>
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

function updateTaskName(taskInd, newName) {
  let allTasks = getFromLocalStorage('tasks');
  const thisTask = allTasks.find((t) => t.index === taskInd);
  thisTask.description = newName;
  allTasks = allTasks.filter((t) => t.index !== taskInd);
  allTasks.push(thisTask);
  saveToLocalStorage('tasks', allTasks.sort((a, b) => a.index - b.index));
}

export function addContentChangeFeature() {
  const allDOMTaskNames = document.querySelectorAll('.taskName');
  allDOMTaskNames.forEach((tn) => {
    const taskInd = Number(tn.getAttribute('data-index'));
    tn.addEventListener('focus', () => {
      tn.style.outline = 'none';
      tn.parentElement.parentElement.style.backgroundColor = '#fffdd0';
      tn.addEventListener('keydown', (e) => {
        const { key } = e;
        if (key === 'Enter' || key === 'Escape') {
          const newName = tn.textContent;
          tn.parentElement.parentElement.style.backgroundColor = '#fff';
          updateTaskName(taskInd, newName);
          // eslint-disable-next-line no-use-before-define
          displayTasks();
        }
      });
    });

    tn.addEventListener('blur', () => {
      const newName = tn.textContent;
      tn.parentElement.parentElement.style.backgroundColor = '#fff';
      updateTaskName(taskInd, newName);
      // eslint-disable-next-line no-use-before-define
      displayTasks();
    });
  });
}

export function displayTasks(tasksArr = getFromLocalStorage('tasks') || []) {
  const allTasksCode = tasksArr.sort((a, b) => a.index - b.index)
    .map((el, i, w) => codeForTask(el, i, w));
  document.querySelector('.toDoBody').innerHTML = allTasksCode.join('');
  addCheckListener();
  addContentChangeFeature();
  dragListener(displayTasks);
}

function addTask(taskName) {
  let allTasks = getFromLocalStorage('tasks') || [];
  const newTask = { index: 0, description: taskName, completed: false };
  allTasks.push(newTask);
  allTasks = updateIndexes(allTasks);
  saveToLocalStorage('tasks', allTasks);
}

function clearCompletedTasks() {
  let allTasks = getFromLocalStorage('tasks') || [];
  if (allTasks.length > 0) {
    allTasks = allTasks.filter((t) => !t.completed);
    allTasks = updateIndexes(allTasks);
    saveToLocalStorage('tasks', allTasks);
  }
}

const { addTaskForm } = document.forms;
const addIcon = document.querySelector('.enterIcon');
const refreshIcon = document.querySelector('.refreshIcon');
const clearBtn = document.querySelector('.clearBtn');

function handleAddTaskOnForm(e) {
  e.preventDefault();
  const taskName = addTaskForm.name.value.trim();
  if (taskName.length > 0) {
    addTask(taskName);
    addTaskForm.name.value = '';
    displayTasks();
  }
}

refreshIcon.addEventListener('click', displayTasks);
addTaskForm.addEventListener('submit', handleAddTaskOnForm);
addIcon.addEventListener('click', handleAddTaskOnForm);
clearBtn.addEventListener('click', () => {
  clearCompletedTasks();
  displayTasks();
});
