import {
  addTask, deleteTask, updateTaskName, clearCompletedTasks, deepEqual,
} from './utils.js';
import { getFromLocalStorage, saveToLocalStorage, updateTaskCompletion } from './storage.js';

function storageMock() {
  const storage = {};

  return {
    setItem(key, value) {
      storage[key] = value || '';
    },
    getItem(key) {
      return key in storage ? storage[key] : null;
    },
    removeItem(key) {
      delete storage[key];
    },
    getLength() {
      return Object.keys(storage).length;
    },
    key(i) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    },
  };
}

let localStorage = storageMock();

beforeEach(() => {
  localStorage = storageMock();
  global.localStorage = localStorage;
});

describe('Add task to localStorage', () => {
  test('localStorage is empty when nothing added', () => {
    expect(getFromLocalStorage('tasks')).toBeNull();
  });

  test('localStorage includes all added tasks', () => {
    const tasks = ['task1', 'task2', 'random task', 'go to the beach', 'do errands'];
    tasks.forEach((task) => addTask(task));
    const allSavedTasks = getFromLocalStorage('tasks');
    const allTasksNames = allSavedTasks.map((t) => t.description);

    expect(allSavedTasks.length).toBe(tasks.length);
    expect(tasks.every((task) => (allTasksNames).includes(task))).toBeTruthy();
  });

  test('no duplicate index', () => {
    const tasks = ['task1', 'task2', 'task whatever', 'read book', 'eat something', 'play a game'];
    tasks.forEach((task) => addTask(task));
    const allSavedTasks = getFromLocalStorage('tasks');
    const allTasksIndexes = allSavedTasks.map((t) => t.index);

    expect([...new Set(allTasksIndexes)].length).toBe(allTasksIndexes.length);
  });

  test('no duplicate task name', () => {
    const tasks = ['task1', 'task2', 'task whatever', 'read book', 'eat something', 'play a game'];
    tasks.forEach((task) => addTask(task));
    const allSavedTasks = getFromLocalStorage('tasks');
    const allTasksNames = allSavedTasks.map((t) => t.description);
    expect([...new Set(allTasksNames)].length).toBe(allTasksNames.length);
  });

  test('throws an error when trying to add duplicate task', () => {
    const tasks = ['task1', 'task2', 'task whatever'];
    tasks.forEach((task) => addTask(task));
    expect(() => addTask('task2')).toThrow(Error);
    expect(() => addTask('task2')).toThrow(/NO_DUPLICATE_TASK/);
  });
});

describe('Delete task from localStorage', () => {
  test('deletes properly when index is valid', () => {
    const tasks = ['task1', 'task2', 'task whatever', 'read book', 'eat something', 'play a game'];
    tasks.forEach((task) => addTask(task));
    deleteTask(1);
    const tasksAfterDeletion = getFromLocalStorage('tasks');
    const tasksNamesAfterDeletion = tasksAfterDeletion.map((t) => t.description);
    expect(tasksNamesAfterDeletion).not.toContain('task1');
  });
  test('deletes exactly one task when index is valid', () => {
    const tasks = ['task1', 'task2', 'task whatever', 'read book', 'eat something', 'play a game'];
    tasks.forEach((task) => addTask(task));
    deleteTask(1);
    const tasksAfterDeletion = getFromLocalStorage('tasks');
    expect(tasksAfterDeletion.length).toBe(tasks.length - 1);
  });
  test('updates indexes after deletion', () => {
    const tasks = ['task1', 'task2', 'task whatever', 'read book', 'eat something', 'play a game'];
    tasks.forEach((task) => addTask(task));
    const tbd = getFromLocalStorage('tasks');
    const indexToDelete = 4;
    deleteTask(indexToDelete);
    const tasksAfterDeletion = getFromLocalStorage('tasks');
    const tbdi = tbd.filter((t) => t.index < indexToDelete);
    const tadi = tbdi.filter((t) => t.index > indexToDelete);
    expect(() => tbdi.every((t, i) => deepEqual(tasksAfterDeletion[i], t))).toBeTruthy();
    const ua = tadi.every((t) => {
      const b = t.index === (tbd.find((tt) => tt.description === t.description).index - 1);
      return b;
    });
    expect(ua).toBeTruthy();
  });
  test('throws an error when trying to delete unvalid index', () => {
    const tasks = ['task1', 'task2', 'task whatever', 'read book', 'eat something', 'play a game'];
    tasks.forEach((task) => addTask(task));
    expect(() => deleteTask(tasks.length + 1)).toThrow(Error);
    expect(() => deleteTask(tasks.length + 1)).toThrow(/INVALID_INDEX/);
    expect(() => deleteTask('2')).toThrow(Error);
    expect(() => deleteTask('2')).toThrow(/INVALID_INDEX/);
  });
});

describe('Edit task name', () => {
  test('update name based on index and newName', () => {
    const tasks = ['task1', 'task2', 'task whatever', 'read book', 'eat something', 'play a game'];
    tasks.forEach((task) => addTask(task));
    const index = 5;
    const name = tasks[index - 1];
    const newName = 'eat dinner';
    updateTaskName(index, newName);
    const allTasks = getFromLocalStorage('tasks');

    expect(allTasks.find((t) => t.index === index).description).not.toBe(name);
    expect(allTasks.find((t) => t.index === index).description).toBe(newName);
  });

  test('does not alter indexes nor rearrange array of tasks', () => {
    const tasks = ['task1', 'task2', 'task whatever', 'read book', 'eat something', 'play a game'];
    tasks.forEach((task) => addTask(task));
    const index = 2;
    const newName = 'eat dinner';
    const allTasksBefore = getFromLocalStorage('tasks');
    updateTaskName(index, newName);
    const allTasksAfter = getFromLocalStorage('tasks');

    expect(allTasksBefore.map((t) => t.index).join(' ')).toBe(allTasksAfter.map((t) => t.index).join(' '));
  });

  test('throws an error when index is not a number', () => {
    const tasks = ['task1', 'task2', 'task whatever'];
    tasks.forEach((task) => addTask(task));
    const obj = { index: 2 };
    expect(() => updateTaskName('2', 'whatever')).toThrow(Error);
    expect(() => updateTaskName('2', 'whatever')).toThrow(/INVALID_PARAMETER/);
    expect(() => updateTaskName(obj, 'whatever')).toThrow(Error);
    expect(() => updateTaskName(obj, 'whatever')).toThrow(/INVALID_PARAMETER/);
  });

  test('throws an error when updating unexisting task (index)', () => {
    const tasks = ['task1', 'task2', 'task whatever'];
    tasks.forEach((task) => addTask(task));
    expect(() => updateTaskName(tasks.length + 1, 'whatever')).toThrow(Error);
    expect(() => updateTaskName(tasks.length + 1, 'whatever')).toThrow(/UNEXISTING_TASK/);
  });
});

describe('Update completed status', () => {
  test('completed property is always a boolean', () => {
    const tasks = ['task1', 'task2', 'task whatever', 'read book', 'eat something', 'play a game'];
    tasks.forEach((task) => addTask(task));
    const oldTasks = getFromLocalStorage('tasks');
    let newTasks = oldTasks;
    oldTasks.forEach((t) => {
      newTasks = updateTaskCompletion(t.index, newTasks);
    });

    // eslint-disable-next-line no-prototype-builtins
    expect(oldTasks.every((t) => t.hasOwnProperty('completed') && typeof t.completed === 'boolean')).toBeTruthy();
    // eslint-disable-next-line no-prototype-builtins
    expect(newTasks.every((t) => t.hasOwnProperty('completed') && typeof t.completed === 'boolean')).toBeTruthy();
  });
  test('completed property becomes true if it was false and vice-versa', () => {
    const tasks = ['task1', 'task2', 'task whatever', 'read book', 'eat something', 'play a game'];
    tasks.forEach((task) => addTask(task));
    const index = Math.ceil(Math.random() * tasks.length);
    const oldTasks = getFromLocalStorage('tasks');
    const tBefore = oldTasks.find((t) => t.index === index);
    const cpBefore = tBefore.completed;
    const newTasks = updateTaskCompletion(index, oldTasks);
    const tAfter = newTasks.find((t) => t.index === index);
    expect(cpBefore).not.toBe(tAfter.completed);
  });
});

describe('Clear all completed', () => {
  test('clears nothing when no task in completed', () => {
    const tasks = ['task1', 'task2', 'task whatever', 'read book', 'eat something', 'play a game'];
    tasks.forEach((task) => addTask(task));
    let oldTasks = getFromLocalStorage('tasks');
    let newTasks = oldTasks;
    oldTasks.forEach((t) => {
      if (t.completed) {
        newTasks = updateTaskCompletion(t.index, newTasks);
      }
    });
    saveToLocalStorage('tasks', newTasks);
    oldTasks = getFromLocalStorage('tasks');
    clearCompletedTasks();
    newTasks = getFromLocalStorage('tasks');
    expect(newTasks.every((t, i) => deepEqual(t, oldTasks[i]))).toBeTruthy();
  });
  test('clears all completed tasks', () => {
    const tasks = ['task1', 'task2', 'task whatever', 'read book', 'eat something', 'play a game', 'do something else'];
    tasks.forEach((task) => addTask(task));
    let allTasks = getFromLocalStorage('tasks');
    const nbToMark = Math.ceil(Math.random() * tasks.length);
    for (let i = 1; i <= nbToMark; i += 1) {
      const randomIndex = Math.ceil(Math.random() * tasks.length);
      allTasks = updateTaskCompletion(randomIndex, allTasks);
    }
    saveToLocalStorage('tasks', allTasks);
    const oldTasks = getFromLocalStorage('tasks');
    const oldCptedTasks = oldTasks.filter((t) => t.completed);
    const oldCptedTasksNames = oldCptedTasks.map((t) => t.description);
    clearCompletedTasks();
    const newTasks = getFromLocalStorage('tasks');
    const newTasksNames = newTasks.map((t) => t.description);
    expect(newTasks.every((t) => !t.completed)).toBeTruthy();
    expect(oldCptedTasksNames.every((tn) => !newTasksNames.includes(tn))).toBeTruthy();
  });
});
