export const perHour = () => {
  const perHour = [];
  for (let i = 1; i <= 30; i++) {
    perHour.push(i * 10);
  }
  return perHour;
};
