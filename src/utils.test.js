import { addTask, deleteTask } from './utils.js';
import { getFromLocalStorage } from './storage.js';

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
global.localStorage = localStorage;

beforeEach(() => {
  localStorage = storageMock();
});

describe('can add task to localStorage', () => {
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
});