export const numberFormat = (num) => {
  return String(num).replace(/(.)(?=(\d{3})+$)/g, '$1,');
};

export const numberDeFormat = (str) => {
  const result = str.split(',');
  return Number(result.join(''));
};
