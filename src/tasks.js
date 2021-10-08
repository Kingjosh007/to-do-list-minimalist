import {
  saveToLocalStorage, getFromLocalStorage, updateTaskCompletion,
} from './storage.js';
import {
  codeForTask, addTask, deleteTask, updateTaskName, clearCompletedTasks,
} from './utils.js';
import { dragListener } from './drag-drop.js';

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

function handleClickOutsideEl(el, callback) {
  document.addEventListener('click', (event) => {
    const isClickInsideElement = el.contains(event.target);
    if (!isClickInsideElement) {
      callback();
    }
  });
}
function addDotsListener() {
  const allThreeDots = document.querySelectorAll('.threeDots');
  allThreeDots.forEach((td) => {
    const taskInd = Number(td.getAttribute('data-index'));
    td.addEventListener('click', () => {
      td.parentElement.parentElement.style.backgroundColor = '#fffdd0';
      td.parentElement.querySelector('.deleteIcon').classList.replace('hide', 'show');

      handleClickOutsideEl(td.parentElement, () => {
        td.parentElement.parentElement.style.backgroundColor = '#fff';
        td.parentElement.querySelector('.threeDots').classList.replace('hide', 'show');
        td.parentElement.querySelector('.deleteIcon').classList.replace('show', 'hide');
        document.removeEventListener('click', handleClickOutsideEl);
      });

      td.parentElement.querySelector('.deleteIcon').addEventListener('click', () => {
        deleteTask(taskInd);
        // eslint-disable-next-line no-use-before-define
        displayTasks();
      });
      td.classList.replace('show', 'hide');
    });
  });
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
  addDotsListener();
  dragListener(displayTasks);
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