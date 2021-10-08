export const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export const updateTaskCompletion = (index, array) => {
  const task = array.find((el) => el.index === Number(index));
  task.completed = !task.completed;
  const filteredArr = array.sort((a, b) => a.index - b.index)
    .filter((t) => t.index !== index);
  const part1 = filteredArr.filter((el) => el.index < index);
  const part2 = filteredArr.filter((el) => el.index > index);
  return [...part1, task, ...part2];
};

export const updateIndexes = (array) => array.map((el, i) => {
  const newEl = el;
  newEl.index = i + 1;
  return newEl;
});