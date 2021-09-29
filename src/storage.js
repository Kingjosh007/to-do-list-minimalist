export const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export const updateTask = (index, array) => {
  const task = array.find((el) => el.index === Number(index));
  task.completed = !task.completed;
  const newArr = array.filter((el) => el.index !== Number(index));
  newArr.push(task);
  return newArr;
};