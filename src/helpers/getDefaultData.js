export const getDefaultData = (...values) => {
  const result = {};
  for (const value of values) {
    result[value] = JSON.parse(window.localStorage.getItem(value))
      ? JSON.parse(window.localStorage.getItem(value))
      : null;
  }
  return result;
};
